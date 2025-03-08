import { type NextRequest, NextResponse } from "next/server"
import { analyzeQuizPerformance } from "@/lib/ai-learning-service"

export async function POST(request: NextRequest) {
  try {
    // Get quiz data from request
    const quizData = await request.json()

    // Validate the input
    if (!quizData || !quizData.quizId || !quizData.questions || !quizData.userAnswers) {
      return NextResponse.json({ error: "Missing required quiz data" }, { status: 400 })
    }

    // Analyze quiz performance
    const analysis = await analyzeQuizPerformance(quizData.quizId, quizData.questions, quizData.userAnswers)

    // Return the analysis
    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Error analyzing quiz:", error)
    return NextResponse.json({ error: "Failed to analyze quiz performance" }, { status: 500 })
  }
}

