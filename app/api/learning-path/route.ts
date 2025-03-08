import { type NextRequest, NextResponse } from "next/server"
import { generateLearningRecommendations, type UserPerformance } from "@/lib/ai-learning-service"

export async function POST(request: NextRequest) {
  try {
    // Get user performance data from request
    const userPerformance = (await request.json()) as UserPerformance

    // Validate the input
    if (!userPerformance) {
      return NextResponse.json({ error: "Missing user performance data" }, { status: 400 })
    }

    // Generate personalized learning recommendations
    const recommendations = await generateLearningRecommendations(userPerformance)

    // Return the recommendations
    return NextResponse.json(recommendations)
  } catch (error) {
    console.error("Error generating learning path:", error)
    return NextResponse.json({ error: "Failed to generate learning recommendations" }, { status: 500 })
  }
}

