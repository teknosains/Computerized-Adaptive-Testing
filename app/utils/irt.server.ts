import { jStat } from 'jstat';
import { getTestSession } from '~/models/test-session.server';

/**
 * Evaluates an answer and updates the ability estimate using Item Response Theory
 * This uses a simplified version of the 2-parameter logistic model
 */
export function evaluateAnswer({
  currentAbility,
  questionDifficulty,
  discrimination,
  isCorrect
}: {
  currentAbility: number;
  questionDifficulty: number;
  discrimination: number;
  isCorrect: boolean;
}): number {
  // Default discrimination if not provided
  const a = discrimination || 1.0;
  
  // For correct answers, increase ability (more for difficult questions)
  // For incorrect answers, decrease ability (more for easy questions)
  const difficultyFactor = questionDifficulty - currentAbility;
  
  // Calculate probability of correct answer given current ability
  const probability = calculateProbability(currentAbility, questionDifficulty, a);
  
  // Calculate information function value at current ability
  const info = calculateInformationAt(currentAbility, questionDifficulty, a);
  
  // Update step size based on information (higher info = smaller steps)
  const stepSize = 1.0 / Math.sqrt(1 + info);
  
  // The update rule: move in positive direction if correct, negative if incorrect
  // and scale by how "surprising" the result was
  const update = (isCorrect ? 1 : -1) * stepSize * (isCorrect ? (1 - probability) : probability);
  
  // Apply the update to current ability estimate
  const newAbility = currentAbility + update;
  
  // Clamp to reasonable range: -3 to 3 is typical in IRT (covers ~99% of population)
  return Math.max(-3, Math.min(3, newAbility));
}

/**
 * Calculate the probability of a correct response given ability and question parameters
 * Uses the 2-parameter logistic model: P(θ) = 1 / (1 + e^(-a(θ-b)))
 * where θ is ability, b is difficulty, and a is discrimination
 */
export function calculateProbability(
  ability: number,
  difficulty: number,
  discrimination: number = 1.0
): number {
  const z = discrimination * (ability - difficulty);
  return 1 / (1 + Math.exp(-z));
}

/**
 * Calculate Fisher information at a given ability level
 * Information is highest when the probability is close to 0.5
 */
export function calculateInformationAt(
  ability: number,
  difficulty: number,
  discrimination: number = 1.0
): number {
  const p = calculateProbability(ability, difficulty, discrimination);
  return discrimination * discrimination * p * (1 - p);
}

/**
 * Returns a verbal descriptor for an ability score
 */
export function getAbilityDescriptor(ability: number): string {
  if (ability >= 2) return "Exceptional";
  if (ability >= 1.5) return "Advanced";
  if (ability >= 0.8) return "Proficient";
  if (ability >= 0.3) return "Competent";
  if (ability >= -0.3) return "Developing";
  if (ability >= -0.8) return "Basic";
  if (ability >= -1.5) return "Beginner";
  return "Novice";
}

/**
 * Calculate percentile rank of ability score
 * Assumes normal distribution with mean 0 and SD 1
 */
export function calculatePercentile(ability: number): number {
  // Use jStat to calculate percentile from normal distribution
  return Math.round(jStat.normal.cdf(ability, 0, 1) * 100);
}

/**
 * Calculate ability score from raw test results
 * Useful for importing external test results
 */
export function calculateAbility(
  correctCount: number,
  totalCount: number,
  avgDifficulty: number = 0
): number {
  const rawScore = correctCount / totalCount;
  
  // Very simple estimation based on raw score
  if (rawScore === 1) return avgDifficulty + 2; // Perfect score
  if (rawScore === 0) return avgDifficulty - 2; // Zero score
  
  // Convert proportion correct to ability estimate
  // Using logit transformation: log(p/(1-p))
  const logit = Math.log(rawScore / (1 - rawScore));
  
  // Adjust by average difficulty
  return avgDifficulty + logit;
}

/**
 * Retrieves the next most informative question for the user
 * This is a simplified version of the maximum information selection strategy
 */
export async function getNextQuestion(sessionId: string, currentAbility: number) {
  return await import('~/models/test-session.server').then(module => {
    return module.getNextQuestion(sessionId, currentAbility);
  });
}