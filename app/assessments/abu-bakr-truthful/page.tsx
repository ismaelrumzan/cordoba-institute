"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import { AiQuizFeedback } from "@/components/ai-quiz-feedback"

export default function AbuBakrTruthfulAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(5).fill(""))
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      question: "What title was given to Abu Bakr that means 'The Truthful' or 'The Sincere'?",
      options: ["Al-Farooq", "As-Siddiq", "Al-Amin", "Al-Ghani"],
      correctAnswer: "As-Siddiq",
    },
    {
      question: "Who was Abu Bakr's companion during the Hijrah (migration) to Madinah?",
      options: ["Ali ibn Abi Talib", "Umar ibn al-Khattab", "Prophet Muhammad ﷺ", "Uthman ibn Affan"],
      correctAnswer: "Prophet Muhammad ﷺ",
    },
    {
      question: "What major challenge did Abu Bakr face at the beginning of his caliphate?",
      options: [
        "Invasion by the Byzantine Empire",
        "Economic crisis in Madinah",
        "The Apostasy Wars (Riddah)",
        "Conflict with the Persian Empire",
      ],
      correctAnswer: "The Apostasy Wars (Riddah)",
    },
    {
      question: "Who led the compilation of the Quran during Abu Bakr's caliphate?",
      options: ["Umar ibn al-Khattab", "Zayd ibn Thabit", "Khalid ibn al-Walid", "Abu Bakr himself"],
      correctAnswer: "Zayd ibn Thabit",
    },
    {
      question: "Who did Abu Bakr appoint as his successor before his death?",
      options: ["Ali ibn Abi Talib", "Uthman ibn Affan", "Umar ibn al-Khattab", "He did not appoint anyone"],
      correctAnswer: "Umar ibn al-Khattab",
    },
  ]

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    let correctAnswers = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })

    setScore(correctAnswers)
    setIsSubmitted(true)
  }

  const calculateProgress = () => {
    return ((currentQuestion + 1) / questions.length) * 100
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/modules/abu-bakr-truthful">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Module
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Abu Bakr The Truthful - Assessment</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader className="bg-gradient-to-r from-emerald-800 to-teal-600 text-white">
                <CardTitle>Quiz Results</CardTitle>
                <CardDescription className="text-emerald-100">
                  You scored {score} out of {questions.length} questions correctly
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Score</span>
                    <span>{Math.round((score / questions.length) * 100)}%</span>
                  </div>
                  <Progress value={(score / questions.length) * 100} className="h-2" />
                </div>

                <div className="space-y-6">
                  {questions.map((q, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        {selectedAnswers[index] === q.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        )}
                        <div>
                          <h3 className="font-medium">Question {index + 1}</h3>
                          <p className="mb-2">{q.question}</p>

                          <div className="space-y-2">
                            {q.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className={`p-2 rounded-md ${
                                  option === q.correctAnswer
                                    ? "bg-green-50 border border-green-200"
                                    : option === selectedAnswers[index] && option !== q.correctAnswer
                                      ? "bg-red-50 border border-red-200"
                                      : "bg-gray-50 border border-gray-200"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {option === q.correctAnswer && <CheckCircle className="h-4 w-4 text-green-500" />}
                                  {option === selectedAnswers[index] && option !== q.correctAnswer && (
                                    <XCircle className="h-4 w-4 text-red-500" />
                                  )}
                                  <span>{option}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {selectedAnswers[index] !== q.correctAnswer && (
                            <div className="mt-2 text-sm text-green-700 bg-green-50 p-2 rounded border border-green-200">
                              <strong>Correct Answer:</strong> {q.correctAnswer}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/modules/abu-bakr-truthful">
                  <Button variant="outline">Back to Module</Button>
                </Link>
                <Link href="/modules/umar-just">
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
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/modules/abu-bakr-truthful">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to Module
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Abu Bakr The Truthful - Assessment</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Question {currentQuestion + 1} of {questions.length}
              </CardTitle>
              <CardDescription>Test your knowledge about Abu Bakr as-Siddiq and his caliphate</CardDescription>
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
                <h3 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h3>

                <RadioGroup
                  value={selectedAnswers[currentQuestion]}
                  onValueChange={handleAnswerSelect}
                  className="space-y-3"
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                Previous
              </Button>

              {currentQuestion < questions.length - 1 ? (
                <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestion]}>
                  Next
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!selectedAnswers[currentQuestion]}>
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
                    variant={currentQuestion === index ? "default" : selectedAnswers[index] ? "outline" : "secondary"}
                    className="h-10 w-10 p-0"
                    onClick={() => setCurrentQuestion(index)}
                  >
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
                <li>• Read each question carefully before selecting an answer</li>
                <li>• You can navigate between questions using the number buttons</li>
                <li>• You must answer all questions before submitting</li>
                <li>• You'll receive detailed feedback after submission</li>
                <li>• Take your time - there's no time limit</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

