import { useEffect, useState } from "react";
import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useNavigate, useSubmit } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, AlertCircle, Clock } from "lucide-react";
import { getTest } from "~/models/test.server";
import { requireUser } from "~/utils/session.server";
import { getNextQuestion, calculateAbility } from "~/utils/irt.server";
import { createTestSession, updateTestSession } from "~/models/test-session.server";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  const { testId } = params;
  
  if (!testId) {
    return redirect("/tests");
  }
  
  const test = await getTest(testId);
  if (!test) {
    throw new Response("Test not found", { status: 404 });
  }
  
  // Create a new test session or resume an existing one
  const session = await createTestSession(user.id, testId);
  
  // Get the next question based on IRT
  const currentQuestion = await getNextQuestion(session.id, session.currentAbility);
  
  return json({ test, session, currentQuestion });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const user = await requireUser(request);
  const formData = await request.formData();
  const sessionId = formData.get("sessionId") as string;
  const questionId = formData.get("questionId") as string;
  const answer = formData.get("answer") as string;
  const timeSpent = formData.get("timeSpent") as string;
  
  // Update the session with the answer
  const updatedSession = await updateTestSession({
    sessionId,
    questionId,
    answer,
    timeSpent: parseInt(timeSpent, 10),
  });
  
  // Check if the test is completed
  if (updatedSession.isComplete) {
    return redirect(`/tests/${params.testId}/results?sessionId=${sessionId}`);
  }
  
  // Get the next question
  const nextQuestion = await getNextQuestion(sessionId, updatedSession.currentAbility);
  
  return json({ session: updatedSession, nextQuestion });
}

export default function TestPage() {
  const { test, session, currentQuestion } = useLoaderData<typeof loader>();
  const [timeSpent, setTimeSpent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const submit = useSubmit();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    // Reset state when a new question is shown
    setSelectedAnswer(null);
    setTimeSpent(0);
  }, [currentQuestion?.id]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleSubmitAnswer = () => {
    if (!selectedAnswer || isSubmitting) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("sessionId", session.id);
    formData.append("questionId", currentQuestion.id);
    formData.append("answer", selectedAnswer);
    formData.append("timeSpent", timeSpent.toString());
    
    submit(formData, { method: "post" });
  };
  
  const questionProgress = Math.round((session.answeredQuestions.length / test.maxQuestions) * 100);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{test.title}</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-1" />
              <span>{formatTime(timeSpent)}</span>
            </div>
            
            <div className="hidden md:flex items-center">
              <Activity className="h-5 w-5 mr-1 text-primary-500" />
              <span className="text-sm font-medium">
                Question {session.answeredQuestions.length + 1} of approximately {test.maxQuestions}
              </span>
            </div>
            
            <button
              onClick={() => {
                if (confirm("Are you sure you want to exit this test? Your progress will be saved.")) {
                  navigate("/tests");
                }
              }}
              className="btn btn-outline py-1"
            >
              Exit
            </button>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="progress-bar">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${questionProgress}%` }}
          ></div>
        </div>
      </div>
      
      <main className="flex-grow flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="card w-full max-w-3xl p-6 md:p-8"
          >
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                {currentQuestion?.content}
              </h2>
              
              {currentQuestion?.imageUrl && (
                <div className="mb-4">
                  <img 
                    src={currentQuestion.imageUrl} 
                    alt="Question visual" 
                    className="w-full rounded-lg"
                  />
                </div>
              )}
              
              <div className="space-y-3">
                {currentQuestion?.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedAnswer(option.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedAnswer === option.id
                        ? "border-primary-500 bg-primary-50"
                        : "border-gray-200 hover:border-primary-300"
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`h-5 w-5 mr-3 rounded-full flex items-center justify-center border ${
                        selectedAnswer === option.id
                          ? "bg-primary-500 border-primary-500"
                          : "border-gray-300"
                      }`}>
                        {selectedAnswer === option.id && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={selectedAnswer === option.id ? "font-medium" : ""}>
                        {option.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>Select an answer to continue</span>
              </div>
              
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer || isSubmitting}
                className={`btn btn-primary px-8 ${
                  !selectedAnswer || isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Next Question"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}