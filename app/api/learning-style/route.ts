import { type NextRequest, NextResponse } from "next/server"
import { detectLearningStyle } from "@/lib/ai-learning-service"

export async function POST(request: NextRequest) {
  try {
    // Get user behavior data from request
    const userBehavior = await request.json()

    // Validate the input
    if (!userBehavior) {
      return NextResponse.json({ error: "Missing user behavior data" }, { status: 400 })
    }

    // Detect learning style
    const learningStyleAnalysis = await detectLearningStyle(userBehavior)

    // Return the analysis
    return NextResponse.json(learningStyleAnalysis)
  } catch (error) {
    console.error("Error detecting learning style:", error)
    return NextResponse.json({ error: "Failed to detect learning style" }, { status: 500 })
  }
}

