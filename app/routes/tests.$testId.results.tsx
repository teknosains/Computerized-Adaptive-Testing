import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Brain, Award, Clock, ArrowRight } from "lucide-react";
import { getTestSession } from "~/models/test-session.server";
import { getTest } from "~/models/test.server";
import { requireUser } from "~/utils/session.server";
import { calculateAbility, getAbilityDescriptor } from "~/utils/irt.server";

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUser(request);
  const { testId } = params;
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");
  
  if (!sessionId || !testId) {
    throw new Response("Missing required parameters", { status: 400 });
  }
  
  const session = await getTestSession(sessionId);
  if (!session) {
    throw new Response("Test session not found", { status: 404 });
  }
  
  const test = await getTest(testId);
  if (!test) {
    throw new Response("Test not found", { status: 404 });
  }
  
  // Calculate final ability score and other metrics
  const abilityScore = session.currentAbility;
  const abilityPercentile = Math.round((1 - Math.exp(-Math.max(0, abilityScore))) * 100);
  const abilityDescriptor = getAbilityDescriptor(abilityScore);
  
  // Generate chart data
  const questionDifficulties = session.answeredQuestions.map(q => q.difficulty);
  const avgDifficulty = questionDifficulties.reduce((sum, diff) => sum + diff, 0) / questionDifficulties.length;
  
  // Generate performance data for the chart
  const performanceData = session.answeredQuestions.map((q, index) => ({
    questionNumber: index + 1,
    difficulty: parseFloat(q.difficulty.toFixed(2)),
    correct: q.isCorrect ? 1 : 0,
    ability: parseFloat(q.abilityAfter.toFixed(2))
  }));
  
  // Calculate response time statistics
  const totalTime = session.answeredQuestions.reduce((sum, q) => sum + q.timeSpent, 0);
  const avgTimePerQuestion = Math.round(totalTime / session.answeredQuestions.length);
  
  // Calculate accuracy
  const correctAnswers = session.answeredQuestions.filter(q => q.isCorrect).length;
  const accuracy = Math.round((correctAnswers / session.answeredQuestions.length) * 100);
  
  return json({
    test,
    session,
    results: {
      abilityScore,
      abilityPercentile,
      abilityDescriptor,
      avgDifficulty,
      performanceData,
      totalTime,
      avgTimePerQuestion,
      accuracy
    }
  });
}

export default function TestResultsPage() {
  const { test, session, results } = useLoaderData<typeof loader>();
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{test.title}</h1>
              <p className="text-primary-100 mt-1">Test Results</p>
            </div>
            
            <Link to="/dashboard" className="btn bg-white text-primary-600 hover:bg-gray-100 mt-4 md:mt-0">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card p-6"
          >
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-primary-100 p-3 mr-4">
                <Brain className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Ability Score</h2>
                <p className="text-gray-500 text-sm">Based on IRT analysis</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500">
                {results.abilityScore.toFixed(2)}
              </div>
              <p className="text-gray-500 mt-1">
                {results.abilityDescriptor}
              </p>
              <div className="mt-3 text-sm text-gray-500">
                Better than {results.abilityPercentile}% of test takers
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-secondary-100 p-3 mr-4">
                <Award className="h-6 w-6 text-secondary-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Performance</h2>
                <p className="text-gray-500 text-sm">Accuracy and difficulty</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-500">
                {results.accuracy}%
              </div>
              <p className="text-gray-500 mt-1">
                Correct Answers
              </p>
              <div className="mt-3 text-sm text-gray-500">
                Avg. Question Difficulty: {results.avgDifficulty.toFixed(2)}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-accent-100 p-3 mr-4">
                <Clock className="h-6 w-6 text-accent-500" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Time</h2>
                <p className="text-gray-500 text-sm">Test duration</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-500">
                {formatTime(results.totalTime)}
              </div>
              <p className="text-gray-500 mt-1">
                Total Time
              </p>
              <div className="mt-3 text-sm text-gray-500">
                Avg. Time per Question: {formatTime(results.avgTimePerQuestion)}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Performance Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={results.performanceData}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
              >
                <XAxis dataKey="questionNumber" />
                <YAxis yAxisId="left" orientation="left" stroke="#6D28D9" domain={[-3, 3]} />
                <YAxis yAxisId="right" orientation="right" stroke="#0077FF" domain={[-3, 3]} />
                <Tooltip 
                  formatter={(value, name) => {
                    if (name === "correct") return [value === 1 ? "Correct" : "Incorrect", "Result"];
                    return [value, name.charAt(0).toUpperCase() + name.slice(1)];
                  }}
                />
                <Bar dataKey="difficulty" name="Difficulty" yAxisId="left" fill="#6D28D9">
                  {results.performanceData.map((entry, index) => (
                    <Cell key={`difficulty-${index}`} fillOpacity={0.7} />
                  ))}
                </Bar>
                <Bar dataKey="ability" name="Ability" yAxisId="right" fill="#0077FF">
                  {results.performanceData.map((entry, index) => (
                    <Cell key={`ability-${index}`} fillOpacity={0.7} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            <p>This chart shows how your ability estimate (blue) changed with each question, compared to the difficulty level (purple) of each question.</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Summary and Recommendations</h2>
          
          <p className="mb-4">
            Based on your performance, you've demonstrated {results.abilityDescriptor.toLowerCase()} proficiency in {test.title}. 
            Your ability score of {results.abilityScore.toFixed(2)} indicates 
            {results.abilityScore > 1 
              ? " strong mastery of the concepts covered." 
              : results.abilityScore > 0 
                ? " good understanding with room for improvement." 
                : " a need for additional study in this area."}
          </p>
          
          <h3 className="text-lg font-medium mt-6 mb-3">Suggested Next Steps</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex">
              <ArrowRight className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                {results.abilityScore > 1 
                  ? "Explore advanced topics in this subject area."
                  : results.abilityScore > 0 
                    ? "Focus on strengthening your understanding of moderately difficult concepts."
                    : "Review fundamental concepts in this subject area."}
              </span>
            </li>
            <li className="flex">
              <ArrowRight className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Consider taking our related test: "{test.relatedTests?.[0]?.title || 'Advanced Concepts'}"</span>
            </li>
            <li className="flex">
              <ArrowRight className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Review your performance pattern to identify specific areas for improvement.</span>
            </li>
          </ul>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={`/tests/${test.id}`} className="btn btn-primary">
              Retake Test
            </Link>
            <Link to="/tests" className="btn btn-outline">
              Try Another Test
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}