"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target } from "lucide-react";
import Link from "next/link";

interface AiQuizFeedbackProps {
  score: number;
  totalQuestions: number;
  moduleLink?: string;
}

export function AiQuizFeedback({
  score,
  totalQuestions,
  moduleLink = "",
}: AiQuizFeedbackProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState<any>(null);

  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    // Simulate API call to get AI feedback
    const fetchFeedback = async () => {
      setIsLoading(true);
      // In a real app, this would be an API call to your AI service
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate feedback based on score
      if (percentage >= 80) {
        setFeedback({
          performance: "Excellent",
          strengths: [
            "Strong understanding of pre-Islamic world history",
            "Good knowledge of ancient empires",
          ],
          areasToImprove: ["Deepen understanding of religious contexts"],
          recommendations: [
            "Explore the cultural exchanges between empires",
            "Study the religious landscape in more detail",
          ],
        });
      } else if (percentage >= 60) {
        setFeedback({
          performance: "Good",
          strengths: ["Basic understanding of major empires"],
          areasToImprove: [
            "Knowledge of religious contexts",
            "Understanding of nomadic peoples",
          ],
          recommendations: [
            "Review the section on the Eastern Roman and Persian Empires",
            "Study the religious beliefs of pre-Islamic Arabia",
          ],
        });
      } else {
        setFeedback({
          performance: "Needs Improvement",
          strengths: ["Attempting to learn about this important period"],
          areasToImprove: [
            "Core knowledge of pre-Islamic world",
            "Understanding of major empires",
          ],
          recommendations: [
            "Revisit the entire module with focus on the major empires",
            "Take notes on key concepts and review them regularly",
            "Use the additional resources provided in the module",
          ],
        });
      }

      setIsLoading(false);
    };

    fetchFeedback();
  }, [percentage]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Analyzing your answers...</CardTitle>
          <CardDescription>
            Our AI is generating personalized feedback based on your quiz
            performance
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
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            AI Performance Analysis
          </CardTitle>
          <CardDescription>
            Based on your score of {percentage}%
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-2">
            <Badge
              className={`
                ${
                  feedback.performance === "Excellent"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : feedback.performance === "Good"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                }
              `}>
              {feedback.performance}
            </Badge>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Strengths</h3>
            <ul className="space-y-1">
              {feedback.strengths.map((strength: string, index: number) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-green-500">•</span> {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Areas to Improve</h3>
            <ul className="space-y-1">
              {feedback.areasToImprove.map((area: string, index: number) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="text-amber-500">•</span> {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">Recommendations</h3>
            <ul className="space-y-1">
              {feedback.recommendations.map(
                (recommendation: string, index: number) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-blue-500">•</span> {recommendation}
                  </li>
                )
              )}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-md border hover:bg-slate-100">
              <Link href={moduleLink}>
                <h4 className="font-medium text-sm">Review Lesson Content</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Focus on the sections where you had difficulty in the quiz
                </p>
              </Link>
            </div>

            <div className="p-3 bg-slate-50 rounded-md border hover:bg-slate-100">
              <Link href={moduleLink}>
                <h4 className="font-medium text-sm">
                  Explore Additional Resources
                </h4>

                <p className="text-xs text-muted-foreground mt-1">
                  Check the supplementary materials in the lesson
                </p>
              </Link>
            </div>

            <div className="p-3 bg-slate-50 rounded-md border">
              <h4 className="font-medium text-sm">Continue to Next Lesson</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Move on to "The Prophet Muhammad ﷺ" module
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
