import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export type UserPerformance = {
  quizScores: { moduleId: string; score: number; totalQuestions: number }[]
  completedModules: string[]
  timeSpent: { moduleId: string; seconds: number }[]
  learningStyle?: string
  difficultyPreference?: "easy" | "medium" | "hard"
  interests?: string[]
  strugglingTopics?: string[]
}

export type LearningRecommendation = {
  nextModules: {
    moduleId: string
    title: string
    reason: string
    estimatedDifficulty: "easy" | "medium" | "hard"
  }[]
  suggestedPace: "slower" | "standard" | "accelerated"
  focusAreas: string[]
  learningStyleInsights: string
  recommendedResources: {
    type: "video" | "article" | "quiz" | "interactive"
    title: string
    reason: string
  }[]
}

export async function generateLearningRecommendations(userProfile: UserPerformance): Promise<LearningRecommendation> {
  // Default recommendations in case AI fails
  const defaultRecommendations: LearningRecommendation = {
    nextModules: [
      {
        moduleId: "golden-age",
        title: "The Golden Age of Islam",
        reason: "Foundational knowledge for Islamic history",
        estimatedDifficulty: "medium",
      },
    ],
    suggestedPace: "standard",
    focusAreas: ["Basic concepts of Islamic Golden Age"],
    learningStyleInsights: "Based on your activity, you might prefer visual learning",
    recommendedResources: [
      {
        type: "video",
        title: "Introduction to Islamic Golden Age",
        reason: "Provides a comprehensive overview",
      },
    ],
  }

  try {
    // Calculate some basic metrics to inform the AI
    const averageQuizScore = userProfile.quizScores.length
      ? userProfile.quizScores.reduce((sum, quiz) => sum + quiz.score / quiz.totalQuestions, 0) /
        userProfile.quizScores.length
      : 0

    const totalTimeSpent = userProfile.timeSpent.reduce((sum, time) => sum + time.seconds, 0)
    const averageTimePerModule = userProfile.timeSpent.length ? totalTimeSpent / userProfile.timeSpent.length : 0

    // Prepare the prompt for the AI
    const prompt = `
      As an adaptive learning AI for Islamic history, analyze this student's performance data and provide personalized recommendations:
      
      Student Performance Data:
      - Average quiz score: ${(averageQuizScore * 100).toFixed(1)}%
      - Completed modules: ${userProfile.completedModules.join(", ") || "None yet"}
      - Total learning time: ${(totalTimeSpent / 60).toFixed(1)} minutes
      - Average time per module: ${(averageTimePerModule / 60).toFixed(1)} minutes
      - Identified learning style: ${userProfile.learningStyle || "Not yet determined"}
      - Difficulty preference: ${userProfile.difficultyPreference || "Not yet determined"}
      - Areas of interest: ${userProfile.interests?.join(", ") || "Not yet specified"}
      - Struggling topics: ${userProfile.strugglingTopics?.join(", ") || "None identified yet"}
      
      Based on this data, provide:
      1. Recommended next modules with reasons and difficulty levels
      2. Suggested learning pace (slower, standard, or accelerated)
      3. Specific focus areas for improvement
      4. Insights about their learning style
      5. Recommended additional resources tailored to their needs
      
      Format your response as a JSON object with the following structure:
      {
        "nextModules": [
          {
            "moduleId": "string",
            "title": "string",
            "reason": "string",
            "estimatedDifficulty": "easy|medium|hard"
          }
        ],
        "suggestedPace": "slower|standard|accelerated",
        "focusAreas": ["string"],
        "learningStyleInsights": "string",
        "recommendedResources": [
          {
            "type": "video|article|quiz|interactive",
            "title": "string",
            "reason": "string"
          }
        ]
      }
    `

    // Generate recommendations using AI
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 1000,
    })

    // Parse the AI response
    try {
      const aiRecommendations = JSON.parse(text) as LearningRecommendation
      return aiRecommendations
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError)
      return defaultRecommendations
    }
  } catch (error) {
    console.error("Error generating learning recommendations:", error)
    return defaultRecommendations
  }
}

export async function analyzeQuizPerformance(
  quizId: string,
  questions: { id: string; topic: string; difficulty: "easy" | "medium" | "hard" }[],
  userAnswers: { questionId: string; isCorrect: boolean; timeSpent: number }[],
) {
  try {
    // Prepare data for analysis
    const correctAnswers = userAnswers.filter((a) => a.isCorrect).length
    const totalQuestions = questions.length
    const scorePercentage = (correctAnswers / totalQuestions) * 100

    const topicPerformance = questions.reduce(
      (acc, question) => {
        const answer = userAnswers.find((a) => a.questionId === question.id)
        if (!answer) return acc

        if (!acc[question.topic]) {
          acc[question.topic] = { correct: 0, total: 0 }
        }

        acc[question.topic].total += 1
        if (answer.isCorrect) {
          acc[question.topic].correct += 1
        }

        return acc
      },
      {} as Record<string, { correct: number; total: number }>,
    )

    const difficultyPerformance = questions.reduce(
      (acc, question) => {
        const answer = userAnswers.find((a) => a.questionId === question.id)
        if (!answer) return acc

        if (!acc[question.difficulty]) {
          acc[question.difficulty] = { correct: 0, total: 0 }
        }

        acc[question.difficulty].total += 1
        if (answer.isCorrect) {
          acc[question.difficulty].correct += 1
        }

        return acc
      },
      {} as Record<string, { correct: number; total: number }>,
    )

    const averageResponseTime = userAnswers.reduce((sum, answer) => sum + answer.timeSpent, 0) / userAnswers.length

    // Prepare the prompt for the AI
    const prompt = `
      As an educational assessment AI for Islamic history, analyze this quiz performance data:
      
      Quiz ID: ${quizId}
      Score: ${scorePercentage.toFixed(1)}% (${correctAnswers}/${totalQuestions})
      Average response time: ${averageResponseTime.toFixed(1)} seconds per question
      
      Topic performance:
      ${Object.entries(topicPerformance)
        .map(
          ([topic, data]) =>
            `- ${topic}: ${data.correct}/${data.total} (${((data.correct / data.total) * 100).toFixed(1)}%)`,
        )
        .join("\n")}
      
      Difficulty performance:
      ${Object.entries(difficultyPerformance)
        .map(
          ([difficulty, data]) =>
            `- ${difficulty}: ${data.correct}/${data.total} (${((data.correct / data.total) * 100).toFixed(1)}%)`,
        )
        .join("\n")}
      
      Based on this data, provide:
      1. A brief assessment of the student's understanding
      2. Identified strengths
      3. Areas that need improvement
      4. Recommended next steps for learning
      5. Suggested difficulty adjustment for future content
      
      Format your response as a JSON object with the following structure:
      {
        "assessment": "string",
        "strengths": ["string"],
        "improvementAreas": ["string"],
        "recommendedNextSteps": ["string"],
        "suggestedDifficulty": "easier|same|harder",
        "suggestedTopics": ["string"]
      }
    `

    // Generate analysis using AI
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 800,
    })

    // Parse the AI response
    try {
      return JSON.parse(text)
    } catch (parseError) {
      console.error("Failed to parse AI quiz analysis:", parseError)
      return {
        assessment: "Analysis unavailable",
        strengths: ["Unable to determine strengths"],
        improvementAreas: ["Unable to determine improvement areas"],
        recommendedNextSteps: ["Continue with the standard curriculum"],
        suggestedDifficulty: "same",
        suggestedTopics: ["Standard topics"],
      }
    }
  } catch (error) {
    console.error("Error analyzing quiz performance:", error)
    return {
      assessment: "Analysis unavailable due to an error",
      strengths: ["Unable to determine strengths"],
      improvementAreas: ["Unable to determine improvement areas"],
      recommendedNextSteps: ["Continue with the standard curriculum"],
      suggestedDifficulty: "same",
      suggestedTopics: ["Standard topics"],
    }
  }
}

export async function detectLearningStyle(userBehavior: {
  videoWatchPatterns: { completed: number; paused: number; rewatched: number; skipped: number }
  quizTimeDistribution: { quick: number; average: number; extended: number }
  resourcePreferences: { videos: number; readings: number; interactive: number; discussions: number }
  notesTaken: number
  exerciseCompletionRate: number
}) {
  try {
    // Prepare the prompt for the AI
    const prompt = `
      As an educational psychology AI, analyze this student's learning behavior to identify their likely learning style:
      
      Video watching patterns:
      - Completed videos: ${userBehavior.videoWatchPatterns.completed}
      - Paused videos: ${userBehavior.videoWatchPatterns.paused}
      - Rewatched sections: ${userBehavior.videoWatchPatterns.rewatched}
      - Skipped sections: ${userBehavior.videoWatchPatterns.skipped}
      
      Quiz time distribution:
      - Quick responses: ${userBehavior.quizTimeDistribution.quick}
      - Average-time responses: ${userBehavior.quizTimeDistribution.average}
      - Extended-time responses: ${userBehavior.quizTimeDistribution.extended}
      
      Resource preferences (access count):
      - Videos: ${userBehavior.resourcePreferences.videos}
      - Readings: ${userBehavior.resourcePreferences.readings}
      - Interactive exercises: ${userBehavior.resourcePreferences.interactive}
      - Discussions: ${userBehavior.resourcePreferences.discussions}
      
      Other metrics:
      - Notes taken: ${userBehavior.notesTaken}
      - Exercise completion rate: ${userBehavior.exerciseCompletionRate}%
      
      Based on this data, identify:
      1. The student's primary learning style (visual, auditory, reading/writing, kinesthetic, or a combination)
      2. Secondary learning preferences
      3. Recommended content delivery methods
      4. Suggested learning strategies
      
      Format your response as a JSON object with the following structure:
      {
        "primaryLearningStyle": "string",
        "secondaryPreferences": ["string"],
        "recommendedContentTypes": ["string"],
        "suggestedStrategies": ["string"],
        "explanation": "string"
      }
    `

    // Generate analysis using AI
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 800,
    })

    // Parse the AI response
    try {
      return JSON.parse(text)
    } catch (parseError) {
      console.error("Failed to parse AI learning style analysis:", parseError)
      return {
        primaryLearningStyle: "Mixed",
        secondaryPreferences: ["Visual", "Interactive"],
        recommendedContentTypes: ["Videos with interactive elements", "Visual diagrams", "Practical exercises"],
        suggestedStrategies: ["Balance different content types", "Include visual aids"],
        explanation: "Default analysis due to processing error",
      }
    }
  } catch (error) {
    console.error("Error detecting learning style:", error)
    return {
      primaryLearningStyle: "Unable to determine",
      secondaryPreferences: ["Various methods recommended"],
      recommendedContentTypes: ["Balanced mix of content types"],
      suggestedStrategies: ["Try different learning approaches"],
      explanation: "Analysis unavailable due to an error",
    }
  }
}

