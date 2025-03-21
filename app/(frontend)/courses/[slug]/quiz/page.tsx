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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle2, History, XCircle } from "lucide-react";
import { AiQuizFeedback } from "@/components/ai-quiz-feedback";
import { IslamicBadge } from "@/components/islamic-badge";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "During which century did the Islamic Golden Age begin?",
      options: [
        { id: "a", text: "6th Century" },
        { id: "b", text: "8th Century" },
        { id: "c", text: "10th Century" },
        { id: "d", text: "12th Century" },
      ],
      correctAnswer: "b",
    },
    {
      question: "Which Islamic scholar is known as the 'Father of Algebra'?",
      options: [
        { id: "a", text: "Ibn Sina (Avicenna)" },
        { id: "b", text: "Al-Khwarizmi" },
        { id: "c", text: "Ibn Al-Haytham" },
        { id: "d", text: "Al-Biruni" },
      ],
      correctAnswer: "b",
    },
    {
      question:
        "The House of Wisdom (Bayt al-Hikma) was established in which city?",
      options: [
        { id: "a", text: "Damascus" },
        { id: "b", text: "Cairo" },
        { id: "c", text: "Baghdad" },
        { id: "d", text: "Cordoba" },
      ],
      correctAnswer: "c",
    },
    {
      question: "Which of these works was written by Ibn Sina (Avicenna)?",
      options: [
        { id: "a", text: "The Book of Healing" },
        { id: "b", text: "The Book of Optics" },
        { id: "c", text: "The Compendious Book on Calculation" },
        { id: "d", text: "The History of Prophets and Kings" },
      ],
      correctAnswer: "a",
    },
    {
      question: "Which Islamic civilization ruled Spain for nearly 800 years?",
      options: [
        { id: "a", text: "Abbasid Caliphate" },
        { id: "b", text: "Ottoman Empire" },
        { id: "c", text: "Umayyad Caliphate" },
        { id: "d", text: "Fatimid Caliphate" },
      ],
      correctAnswer: "c",
    },
  ];

  const currentQ = questions[currentQuestion];
  const isCorrect = submitted && selectedAnswer === currentQ.correctAnswer;

  const handleSubmit = () => {
    if (!submitted) {
      setSubmitted(true);
      if (selectedAnswer === currentQ.correctAnswer) {
        setScore(score + 1);
      }
    } else {
      // Move to next question or finish quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
        setSubmitted(false);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <History className="h-6 w-6" />
            <span className="text-xl font-bold">Islamic History Explorer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            <Link
              href="/library"
              className="text-sm font-medium transition-colors hover:text-primary">
              Library
            </Link>
            <Link
              href="/community"
              className="text-sm font-medium transition-colors hover:text-primary">
              Community
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              href="/courses/golden-age"
              className="inline-flex items-center text-sm font-medium text-primary">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Module
            </Link>
            <h1 className="mt-2 text-3xl font-bold">
              The Golden Age of Islam: Knowledge Quiz
            </h1>
            <p className="text-muted-foreground">
              Test your knowledge about the Islamic Golden Age
            </p>
          </div>

          {!quizCompleted ? (
            <>
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Score: {score}/{currentQuestion + (submitted ? 1 : 0)}
                  </span>
                </div>
                <Progress
                  value={(currentQuestion / questions.length) * 100}
                  className="h-2"
                />
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{currentQ.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedAnswer}
                    onValueChange={submitted ? undefined : setSelectedAnswer}
                    className="space-y-3">
                    {currentQ.options.map((option) => {
                      const isOptionCorrect =
                        option.id === currentQ.correctAnswer;
                      let className =
                        "flex items-center space-x-2 rounded-lg border p-4 cursor-pointer";

                      if (submitted) {
                        if (option.id === selectedAnswer) {
                          className += isOptionCorrect
                            ? " border-green-500 bg-green-50 dark:bg-green-950/20"
                            : " border-red-500 bg-red-50 dark:bg-red-950/20";
                        } else if (isOptionCorrect) {
                          className +=
                            " border-green-500 bg-green-50 dark:bg-green-950/20";
                        }
                      } else {
                        className += " hover:bg-muted";
                      }

                      return (
                        <div key={option.id} className={className}>
                          <RadioGroupItem
                            value={option.id}
                            id={option.id}
                            disabled={submitted}
                            className="sr-only"
                          />
                          <Label
                            htmlFor={option.id}
                            className="flex flex-1 items-center justify-between cursor-pointer">
                            <span>{option.text}</span>
                            {submitted && isOptionCorrect && (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            )}
                            {submitted &&
                              option.id === selectedAnswer &&
                              !isOptionCorrect && (
                                <XCircle className="h-5 w-5 text-red-500" />
                              )}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (currentQuestion > 0 && !submitted) {
                        setCurrentQuestion(currentQuestion - 1);
                        setSelectedAnswer("");
                      }
                    }}
                    disabled={currentQuestion === 0 || submitted}>
                    Previous
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!selectedAnswer && !submitted}>
                    {submitted
                      ? currentQuestion < questions.length - 1
                        ? "Next Question"
                        : "Finish Quiz"
                      : "Submit Answer"}
                  </Button>
                </CardFooter>
              </Card>

              {submitted && (
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {isCorrect ? "Correct!" : "Incorrect"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      {isCorrect
                        ? "Great job! You selected the right answer."
                        : `The correct answer is: ${currentQ.options.find((o) => o.id === currentQ.correctAnswer)?.text}`}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium">Explanation:</h4>
                      <p className="text-muted-foreground">
                        {currentQuestion === 0 &&
                          "The Islamic Golden Age began in the 8th century during the Abbasid Caliphate, particularly after the founding of Baghdad in 762 CE."}
                        {currentQuestion === 1 &&
                          "Muhammad ibn Musa al-Khwarizmi was a Persian mathematician whose works on algebra (including his book 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala') led to him being called the 'Father of Algebra'."}
                        {currentQuestion === 2 &&
                          "The House of Wisdom was established in Baghdad during the early 9th century by Caliph Harun al-Rashid and expanded by his son Al-Ma'mun."}
                        {currentQuestion === 3 &&
                          "Ibn Sina (Avicenna) wrote 'The Book of Healing' (Kitab al-Shifa), a vast philosophical and scientific encyclopedia, and 'The Canon of Medicine' (Al-Qanun fi al-Tibb)."}
                        {currentQuestion === 4 &&
                          "The Umayyad Caliphate and its successors ruled parts of the Iberian Peninsula (Al-Andalus) from 711 to 1492."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Quiz Completed!</CardTitle>
                  <CardDescription>
                    You scored {score} out of {questions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress
                      value={(score / questions.length) * 100}
                      className="h-4"
                    />

                    <div className="rounded-lg bg-muted p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">
                        {score === questions.length
                          ? "Perfect Score!"
                          : score >= questions.length * 0.8
                            ? "Excellent Work!"
                            : score >= questions.length * 0.6
                              ? "Good Job!"
                              : "Keep Learning!"}
                      </h3>
                      <p className="text-muted-foreground">
                        {score === questions.length
                          ? "You've mastered this topic! Ready for the next challenge?"
                          : score >= questions.length * 0.8
                            ? "You have a strong understanding of this topic."
                            : score >= questions.length * 0.6
                              ? "You're making good progress in understanding this topic."
                              : "Review the material and try again to improve your score."}
                      </p>

                      {score === questions.length && (
                        <div className="mt-4 flex justify-center">
                          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                            <IslamicBadge type="star" size="sm" />
                            <span>
                              Achievement Unlocked: Golden Age Scholar
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI-Powered Quiz Analysis */}
              <div className="mb-6">
                <AiQuizFeedback
                  quizId="golden-age-quiz"
                  score={score}
                  totalQuestions={questions.length}
                  userAnswers={questions.map((q, index) => ({
                    questionId: q.options[0].id, // Using first option's ID as question ID for demo
                    isCorrect: index < score, // Simplification for demo
                    timeSpent: Math.floor(Math.random() * 30) + 10, // Random time between 10-40 seconds for demo
                  }))}
                  questions={questions.map((q, index) => ({
                    id: q.options[0].id, // Using first option's ID as question ID for demo
                    topic:
                      index === 0
                        ? "Islamic Golden Age Timeline"
                        : index === 1
                          ? "Islamic Scholars"
                          : index === 2
                            ? "Centers of Learning"
                            : index === 3
                              ? "Scientific Contributions"
                              : "Islamic Civilization",
                    difficulty:
                      index < 2 ? "easy" : index < 4 ? "medium" : "hard",
                  }))}
                />
              </div>
            </>
          )}
        </div>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Islamic History Explorer. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
