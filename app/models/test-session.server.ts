import { v4 as uuid } from "uuid";
import { getTest } from "./test.server";
import { evaluateAnswer } from "~/utils/irt.server";

// In a real application, this would be stored in a database
const sessions = [];

interface Question {
  id: string;
  content: string;
  options: Array<{ id: string; text: string }>;
  correctOptionId: string;
  difficulty: number;
  discrimination: number;
  imageUrl?: string;
}

interface AnsweredQuestion {
  id: string;
  difficulty: number;
  isCorrect: boolean;
  timeSpent: number;
  abilityBefore: number;
  abilityAfter: number;
}

interface TestSession {
  id: string;
  userId: string;
  testId: string;
  testTitle: string;
  startedAt: string;
  updatedAt: string;
  isComplete: boolean;
  currentAbility: number;
  answeredQuestions: AnsweredQuestion[];
}

// Simulated question bank
const questionBank = [
  // Mathematics questions at various difficulty levels
  {
    id: "m1",
    content: "What is 8 + 4?",
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "12" },
      { id: "c", text: "14" },
      { id: "d", text: "16" }
    ],
    correctOptionId: "b",
    difficulty: -2.0, // Very easy
    discrimination: 1.2,
    testId: "1"
  },
  {
    id: "m2",
    content: "Solve for x: 3x - 7 = 14",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "9" }
    ],
    correctOptionId: "b",
    difficulty: -0.5, // Easy
    discrimination: 1.0,
    testId: "1"
  },
  {
    id: "m3",
    content: "If f(x) = 2x² + 3x - 5, what is f(2)?",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "9" },
      { id: "c", text: "11" },
      { id: "d", text: "13" }
    ],
    correctOptionId: "b",
    difficulty: 0.0, // Medium
    discrimination: 1.3,
    testId: "1"
  },
  {
    id: "m4",
    content: "Find the derivative of f(x) = x³ - 4x² + 7x - 2",
    options: [
      { id: "a", text: "3x² - 8x + 7" },
      { id: "b", text: "3x² - 4x + 7" },
      { id: "c", text: "3x² - 8x - 7" },
      { id: "d", text: "3x² + 4x + 7" }
    ],
    correctOptionId: "a",
    difficulty: 1.2, // Hard
    discrimination: 1.5,
    testId: "1"
  },
  {
    id: "m5",
    content: "Solve the definite integral: ∫₀² (x² + 2x) dx",
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "6" },
      { id: "c", text: "8" },
      { id: "d", text: "10" }
    ],
    correctOptionId: "c",
    difficulty: 2.0, // Very hard
    discrimination: 1.7,
    testId: "1"
  },
  
  // Advanced Math questions
  {
    id: "am1",
    content: "What is the limit of (1+1/n)^n as n approaches infinity?",
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "2" },
      { id: "c", text: "e" },
      { id: "d", text: "π" }
    ],
    correctOptionId: "c",
    difficulty: 0.8,
    discrimination: 1.4,
    testId: "2"
  },
  {
    id: "am2",
    content: "If matrix A = [[2, 1], [3, 4]] and B = [[1, 0], [2, 3]], what is A × B?",
    options: [
      { id: "a", text: "[[4, 3], [11, 12]]" },
      { id: "b", text: "[[2, 0], [6, 12]]" },
      { id: "c", text: "[[4, 1], [11, 12]]" },
      { id: "d", text: "[[2, 1], [6, 12]]" }
    ],
    correctOptionId: "a",
    difficulty: 1.5,
    discrimination: 1.6,
    testId: "2"
  },
  
  // Reading Comprehension questions
  {
    id: "rc1",
    content: "Based on the passage: The rapid development of technology has transformed how we communicate, learn, and work. Yet, some argue that these changes have led to decreased face-to-face interaction and potential impacts on mental health. What is the main idea?",
    options: [
      { id: "a", text: "Technology is harmful to mental health" },
      { id: "b", text: "Technology has changed modern life significantly" },
      { id: "c", text: "Face-to-face interaction is decreasing" },
      { id: "d", text: "We need to limit technology use" }
    ],
    correctOptionId: "b",
    difficulty: -0.3,
    discrimination: 1.1,
    testId: "3"
  },
  {
    id: "rc2",
    content: "From the passage: 'The symbiotic relationship between flowering plants and their pollinators has evolved over millions of years, resulting in complex interdependencies.' What does 'symbiotic' most likely mean in this context?",
    options: [
      { id: "a", text: "Competitive" },
      { id: "b", text: "Destructive" },
      { id: "c", text: "Mutually beneficial" },
      { id: "d", text: "One-sided" }
    ],
    correctOptionId: "c",
    difficulty: 0.2,
    discrimination: 1.2,
    testId: "3"
  },
  
  // Verbal Reasoning questions
  {
    id: "vr1",
    content: "Choose the word that is most nearly opposite in meaning to 'FRUGAL'",
    options: [
      { id: "a", text: "Extravagant" },
      { id: "b", text: "Careful" },
      { id: "c", text: "Economic" },
      { id: "d", text: "Thrifty" }
    ],
    correctOptionId: "a",
    difficulty: 0.5,
    discrimination: 1.3,
    testId: "4"
  },
  {
    id: "vr2",
    content: "Choose the pair of words that best expresses a relationship similar to: CANVAS : PAINT",
    options: [
      { id: "a", text: "HAMMER : NAIL" },
      { id: "b", text: "PAPER : PEN" },
      { id: "c", text: "BOOK : READ" },
      { id: "d", text: "HOUSE : BRICK" }
    ],
    correctOptionId: "b",
    difficulty: 1.0,
    discrimination: 1.4,
    testId: "4"
  }
];

export async function createTestSession(userId: string, testId: string) {
  // Check if there's already an incomplete session for this user and test
  const existingSession = sessions.find(
    s => s.userId === userId && s.testId === testId && !s.isComplete
  );
  
  if (existingSession) {
    return existingSession;
  }
  
  const test = await getTest(testId);
  
  const newSession: TestSession = {
    id: uuid(),
    userId,
    testId,
    testTitle: test.title,
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isComplete: false,
    currentAbility: 0, // Start with neutral ability estimate
    answeredQuestions: []
  };
  
  sessions.push(newSession);
  return newSession;
}

export async function getTestSession(sessionId: string) {
  return sessions.find(session => session.id === sessionId);
}

export async function getUserTestSessions(userId: string) {
  return sessions.filter(session => session.userId === userId);
}

export async function updateTestSession({
  sessionId,
  questionId,
  answer,
  timeSpent
}: {
  sessionId: string;
  questionId: string;
  answer: string;
  timeSpent: number;
}) {
  const sessionIndex = sessions.findIndex(s => s.id === sessionId);
  if (sessionIndex === -1) {
    throw new Error("Session not found");
  }
  
  const session = sessions[sessionIndex];
  const question = questionBank.find(q => q.id === questionId);
  
  if (!question) {
    throw new Error("Question not found");
  }
  
  const isCorrect = answer === question.correctOptionId;
  
  // Store the current ability before updating
  const abilityBefore = session.currentAbility;
  
  // Update the ability estimate based on the answer
  const newAbility = evaluateAnswer({
    currentAbility: session.currentAbility,
    questionDifficulty: question.difficulty,
    discrimination: question.discrimination,
    isCorrect
  });
  
  // Add the question to answered questions
  const answeredQuestion: AnsweredQuestion = {
    id: questionId,
    difficulty: question.difficulty,
    isCorrect,
    timeSpent,
    abilityBefore,
    abilityAfter: newAbility
  };
  
  session.answeredQuestions.push(answeredQuestion);
  session.currentAbility = newAbility;
  session.updatedAt = new Date().toISOString();
  
  // Check if the session should be marked as complete
  const test = await getTest(session.testId);
  if (session.answeredQuestions.length >= test.maxQuestions) {
    session.isComplete = true;
  }
  
  // Update the session in the array
  sessions[sessionIndex] = session;
  
  return session;
}

export async function getNextQuestion(sessionId: string, currentAbility: number): Promise<Question> {
  const session = await getTestSession(sessionId);
  if (!session) {
    throw new Error("Session not found");
  }
  
  // Get all questions for this test
  const testQuestions = questionBank.filter(q => q.testId === session.testId);
  
  // Filter out questions that have already been answered
  const answeredQuestionIds = session.answeredQuestions.map(q => q.id);
  const availableQuestions = testQuestions.filter(q => !answeredQuestionIds.includes(q.id));
  
  if (availableQuestions.length === 0) {
    throw new Error("No more questions available");
  }
  
  // Find the question with difficulty closest to the current ability estimate
  // This is a simple implementation of adaptive testing
  let nextQuestion = availableQuestions[0];
  let minDiffDifference = Math.abs(nextQuestion.difficulty - currentAbility);
  
  for (const question of availableQuestions) {
    const diffDifference = Math.abs(question.difficulty - currentAbility);
    if (diffDifference < minDiffDifference) {
      minDiffDifference = diffDifference;
      nextQuestion = question;
    }
  }
  
  return nextQuestion;
}