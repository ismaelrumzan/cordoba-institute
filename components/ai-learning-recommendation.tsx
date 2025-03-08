"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Target } from "lucide-react"
import Link from "next/link"

export function AiLearningRecommendation() {
  const [isLoading, setIsLoading] = useState(true)
  const [recommendations, setRecommendations] = useState<any>(null)

  useEffect(() => {
    // Simulate API call to get AI recommendations
    const fetchRecommendations = async () => {
      setIsLoading(true)
      // In a real app, this would be an API call to your AI service
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setRecommendations({
        nextModule: {
          id: "umar-just",
          title: "Umar the Just",
          reason: "Based on your completion of Abu Bakr's module and your interest in the Rashidun period",
        },
        learningStyle: "Visual-Historical",
        strengths: ["Early Islamic History", "Biographical Knowledge"],
        areasToImprove: ["Contextual Understanding", "Chronological Sequencing"],
        pace: "Accelerated",
        suggestedResources: [
          {
            title: "The Rightly Guided Caliphs",
            type: "Supplementary Reading",
          },
          {
            title: "Timeline of Early Islamic Conquests",
            type: "Interactive Exercise",
          },
        ],
      })

      setIsLoading(false)
    }

    fetchRecommendations()
  }, [])

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Analyzing your learning patterns...</CardTitle>
          <CardDescription>
            Our AI is personalizing recommendations based on your progress and performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-6">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Recommended Next Module
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold text-lg mb-1">{recommendations.nextModule.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{recommendations.nextModule.reason}</p>
          <Link href={`/modules/${recommendations.nextModule.id}`}>
            <Button className="w-full">Start Module</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Learning Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-1">Your Learning Style</h3>
              <Badge variant="outline" className="bg-primary/10">
                {recommendations.learningStyle}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">
                You learn best through visual aids and historical narratives
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {recommendations.strengths.map((strength: string, index: number) => (
                  <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Areas to Improve</h3>
              <div className="flex flex-wrap gap-2">
                {recommendations.areasToImprove.map((area: string, index: number) => (
                  <Badge key={index} variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Recommended Pace</h3>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {recommendations.pace}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">Based on your quick mastery of previous modules</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Suggested Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recommendations.suggestedResources.map((resource: any, index: number) => (
              <li key={index} className="flex justify-between items-center">
                <span className="font-medium text-sm">{resource.title}</span>
                <Badge variant="secondary">{resource.type}</Badge>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full mt-4">
            View All Resources
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

