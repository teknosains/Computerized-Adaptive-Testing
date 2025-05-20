import { v4 as uuid } from "uuid";

// In a real application, this would be stored in a database
const tests = [
  {
    id: "1",
    title: "Mathematics Proficiency Assessment",
    description: "A test to evaluate mathematical reasoning and problem-solving abilities across various difficulty levels.",
    maxQuestions: 20,
    estimatedTime: 30,
    tags: ["Mathematics", "Algebra", "Geometry"],
    difficulty: "Adaptive",
    completions: 152,
    relatedTests: [{ id: "2", title: "Advanced Mathematical Concepts" }]
  },
  {
    id: "2",
    title: "Advanced Mathematical Concepts",
    description: "Assess your understanding of higher-level mathematical concepts including calculus and linear algebra.",
    maxQuestions: 25,
    estimatedTime: 45,
    tags: ["Mathematics", "Calculus", "Linear Algebra"],
    difficulty: "Advanced",
    completions: 87,
    relatedTests: [{ id: "1", title: "Mathematics Proficiency Assessment" }]
  },
  {
    id: "3",
    title: "Reading Comprehension",
    description: "Evaluate your ability to understand, analyze, and interpret written passages of varying complexity.",
    maxQuestions: 18,
    estimatedTime: 25,
    tags: ["Language", "Reading", "Comprehension"],
    difficulty: "Adaptive",
    completions: 203,
    relatedTests: [{ id: "4", title: "Verbal Reasoning" }]
  },
  {
    id: "4",
    title: "Verbal Reasoning",
    description: "Test your ability to analyze and evaluate written information and articulate relationships between verbal concepts.",
    maxQuestions: 22,
    estimatedTime: 35,
    tags: ["Language", "Reasoning", "Verbal"],
    difficulty: "Intermediate",
    completions: 175,
    relatedTests: [{ id: "3", title: "Reading Comprehension" }]
  }
];

export async function getAllTests() {
  return tests;
}

export async function getTest(id: string) {
  return tests.find(test => test.id === id);
}

export async function createTest(testData: Omit<typeof tests[0], "id" | "completions">) {
  const newTest = {
    ...testData,
    id: uuid(),
    completions: 0
  };
  
  tests.push(newTest);
  return newTest;
}