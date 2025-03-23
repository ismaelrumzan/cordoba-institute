"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { AiQuizFeedback } from "@/components/ai-quiz-feedback";
import {
  QuizQuestionComponent,
  type QuizQuestion,
} from "@/components/quiz-questions";

export default function WorldAdventIslamAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | string[])[]>(
    []
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions: QuizQuestion[] = [
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question: "What was one reason the Muslim world had a strong economy?",
      type: "single",
      options: [
        "Large cities",
        "Advanced farming",
        "Extensive trade networks",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question: "Which cities were major trade centers in the Muslim world?",
      type: "single",
      options: [
        "London, Paris, Rome",
        "Baghdad, Cairo, Cordoba",
        "Venice, Genoa, Madrid",
        "Beijing, Kyoto, Delhi",
      ],
      correctAnswer: "Baghdad, Cairo, Cordoba",
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question:
        "True or False: Muslim merchants used a banking system that allowed them to write checks instead of carrying gold.",
      type: "single",
      options: ["True", "False"],
      correctAnswer: "True",
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question: "Which new crops did Muslim farmers introduce?",
      type: "multiple",
      options: ["Sugarcane", "Oranges", "Cotton", "Rice"],
      correctAnswer: ["Sugarcane", "Oranges", "Cotton", "Rice"],
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question:
        "What was the main economic system in Christian Europe during this period?",
      type: "single",
      options: ["Capitalism", "Feudalism", "Socialism", "Mercantilism"],
      correctAnswer: "Feudalism",
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question: "How did the Crusades impact European trade?",
      type: "single",
      options: [
        "Increased trade with the Muslim world",
        "Decreased trade with the Muslim world",
        "Had no effect on trade",
        "Stopped trade completely",
      ],
      correctAnswer: "Increased trade with the Muslim world",
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question:
        "Which Italian cities became rich by trading with the Muslim world?",
      type: "single",
      options: [
        "Paris and London",
        "Venice and Genoa",
        "Madrid and Lisbon",
        "Berlin and Vienna",
      ],
      correctAnswer: "Venice and Genoa",
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question:
        "Why did the Christian Church in medieval Europe make banking difficult?",
      type: "single",
      options: [
        "It encouraged trade too much",
        "It banned lending money",
        "It believed charging interest (usury) was sinful",
        "It promoted Islamic banking methods",
      ],
      correctAnswer: "It believed charging interest (usury) was sinful",
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question:
        "Which industries were important in the Muslim world? (Select all that apply)",
      type: "multiple",
      options: [
        "Textile production",
        "Metalwork",
        "Glassmaking",
        "Shipbuilding",
      ],
      correctAnswer: ["Textile production", "Metalwork", "Glassmaking"],
    },
    {
      slug: "economies-of-the-muslim--christian-worlds",
      question: "How did Muslim traders help Europe develop?",
      type: "single",
      options: [
        "By sharing new goods and knowledge",
        "By conquering European cities",
        "By stopping trade with Europe",
        "By giving Europe free resources",
      ],
      correctAnswer: "By sharing new goods and knowledge",
    },
  ];

  // Initialize selected answers if not already done
  if (selectedAnswers.length === 0) {
    setSelectedAnswers(questions.map((q) => (q.type === "multiple" ? [] : "")));
  }

  const handleAnswerSelect = (answer: string | string[]) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isAnswerSelected = () => {
    const current = selectedAnswers[currentQuestion];
    return Array.isArray(current) ? current.length > 0 : Boolean(current);
  };

  const handleSubmit = () => {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      const selected = selectedAnswers[index];

      if (question.type === "single") {
        if (selected === question.correctAnswer) {
          correctAnswers++;
        }
      } else if (question.type === "multiple") {
        // For multiple-choice, check if selected answers match exactly
        if (Array.isArray(selected) && Array.isArray(question.correctAnswer)) {
          const selectedSet = new Set(selected);
          const correctSet = new Set(question.correctAnswer);

          // Check if sets are equal (same size and all elements match)
          if (
            selectedSet.size === correctSet.size &&
            [...selectedSet].every((value) => correctSet.has(value))
          ) {
            correctAnswers++;
          }
        }
      }
    });

    setScore(correctAnswers);
    setIsSubmitted(true);
  };

  const calculateProgress = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/modules/economies-of-the-muslim--christian-worlds/6less">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Module
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">
            Economies of the Muslim & Christian Worlds - Assessment
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-emerald-800 to-teal-600 text-white">
                <CardTitle>Quiz Results</CardTitle>
                <CardDescription className="text-emerald-100">
                  You scored {score} out of {questions.length} questions
                  correctly
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Score</span>
                    <span>{Math.round((score / questions.length) * 100)}%</span>
                  </div>
                  <Progress
                    value={(score / questions.length) * 100}
                    className="h-2"
                  />
                </div>

                <div className="space-y-6">
                  {questions.map((q, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-4">
                        <QuizQuestionComponent
                          question={q}
                          selectedAnswer={selectedAnswers[index]}
                          onAnswerSelect={() => {}} // No-op since results are read-only
                          isSubmitted={true}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/modules/economies-of-the-muslim--christian-worlds/6less">
                  <Button variant="outline">Back to Module</Button>
                </Link>
                <Link href="/modules/prophet-muhammad">
                  <Button>Next Module</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div>
            <AiQuizFeedback score={score} totalQuestions={questions.length} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/modules/economies-of-the-muslim--christian-worlds/6less">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to Module
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">
          Economies of the Muslim & Christian Worlds - Assessment
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <CardDescription className="text-red-600 font-semibold">
                {questions[currentQuestion].type === "multiple"
                  ? "Select all possible correct answers"
                  : "Select the correct answer"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{Math.round(calculateProgress())}%</span>
                </div>
                <Progress value={calculateProgress()} className="h-2" />
              </div>

              <div className="mb-6">
                <QuizQuestionComponent
                  question={questions[currentQuestion]}
                  selectedAnswer={selectedAnswers[currentQuestion]}
                  onAnswerSelect={handleAnswerSelect}
                  isSubmitted={false}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}>
                Previous
              </Button>

              {currentQuestion < questions.length - 1 ? (
                <Button onClick={handleNext} disabled={!isAnswerSelected()}>
                  Next
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!isAnswerSelected()}>
                  Submit
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Question Navigator</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, index) => (
                  <Button
                    key={index}
                    variant={
                      currentQuestion === index
                        ? "default"
                        : isAnswerSelected()
                          ? "outline"
                          : "secondary"
                    }
                    className="h-10 w-10 p-0"
                    onClick={() => setCurrentQuestion(index)}>
                    {index + 1}
                  </Button>
                ))}
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 mb-1">
                  <span className="bg-primary h-3 w-3 rounded-full"></span>
                  Current question
                </p>
                <p className="flex items-center gap-2 mb-1">
                  <span className="border h-3 w-3 rounded-full"></span>
                  Answered
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-secondary h-3 w-3 rounded-full"></span>
                  Unanswered
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Quiz Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  • Read each question carefully before selecting an answer
                </li>
                <li>• Some questions may have multiple correct answers</li>
                <li>
                  • You can navigate between questions using the number buttons
                </li>
                <li>• You must answer all questions before submitting</li>
                <li>• You'll receive detailed feedback after submission</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
