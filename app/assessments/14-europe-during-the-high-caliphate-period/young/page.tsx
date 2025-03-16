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
      question:
        "What were the two main parts of the Christian world during the High Caliphate period?",
      options: [
        "Western (Latin) and Eastern (Greek)",
        "North and South",
        "East and West Rome",
      ],
      correctAnswer: "Western (Latin) and Eastern (Greek)",
      type: "single",
      explanation:
        "The Christian world was divided into Western (Latin) and Eastern (Greek) during the High Caliphate.",
    },
    {
      question: "Who was the leader of the western church?",
      options: ["The King", "The Pope", "The Emperor"],
      correctAnswer: "The Pope",
      type: "single",
      explanation:
        "The Pope was the leader of the western church during this period.",
    },
    {
      question: "The Eastern Roman Empire's capital was Baghdad.",
      options: ["True", "False"],
      correctAnswer: "False",
      type: "single",
      explanation:
        "The capital of the Eastern Roman Empire was Constantinople, not Baghdad.",
    },
    {
      question: "What was the 'Dark Ages' known for?",
      options: [
        "Lots of learning and progress",
        "Few people could read or write",
        "Big celebrations",
      ],
      correctAnswer: "Few people could read or write",
      type: "single",
      explanation:
        "During the Dark Ages, learning declined, and most people could not read or write.",
    },
    {
      question: "Who did the Franks promise to protect?",
      options: ["The Vikings", "The Pope", "The Normans"],
      correctAnswer: "The Pope",
      type: "single",
      explanation:
        "The Franks promised to protect the Pope, who in return gave their king the title of Holy Roman Emperor.",
    },
    {
      question: "Vikings came from Scandinavia.",
      options: ["True", "False"],
      correctAnswer: "True",
      type: "single",
      explanation: "The Vikings originated from Scandinavia.",
    },
    {
      question: "How did Vikings become part of the places they settled in?",
      options: [
        "Marrying local people",
        "Ignoring local customs",
        "Learning local languages",
        "Taking on local religions",
      ],
      correctAnswer: [
        "Marrying local people",
        "Learning local languages",
        "Taking on local religions",
      ],
      type: "multiple",
      explanation:
        "Vikings assimilated by marrying locals, learning their languages, and adopting their religions.",
    },
    {
      question: "What did Charlemagne send to Harun Rashid?",
      options: ["Soldiers", "Gifts", "Books"],
      correctAnswer: "Gifts",
      type: "single",
      explanation: "Charlemagne sent gifts to Harun Rashid to strengthen ties.",
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
          <Link href="/modules/14-europe-during-the-high-caliphate-period/young">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Module
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">
            Europe During The High Caliphate Period - Assessment
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
                <Link href="/modules/14-europe-during-the-high-caliphate-period/young">
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
        <Link href="/modules/14-europe-during-the-high-caliphate-period/young">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to Module
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">
          Europe During The High Caliphate Period - Assessment
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <CardDescription>
                {questions[currentQuestion].type === "multiple"
                  ? "Select all correct answers"
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
