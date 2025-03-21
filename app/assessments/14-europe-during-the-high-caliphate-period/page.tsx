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
        "The Bishop of Rome claimed to be the supreme head of Christianity and called himself the ‘Pope’.",
      options: ["True", "False"],
      correctAnswer: "True",
      type: "single",
      explanation:
        "The Bishop of Rome claimed supremacy over Christianity and took the title 'Pope'.",
    },
    {
      question:
        "During the High Caliphate period, the Eastern Christian lands were dominated by the Eastern Roman Empire with its capital in Constantinople.",
      options: ["True", "False"],
      correctAnswer: "True",
      type: "single",
      explanation:
        "The Eastern Roman Empire, with Constantinople as its capital, dominated the Eastern Christian lands.",
    },
    {
      question:
        "The 'Dark Ages' in Europe were marked by widespread intellectual progress and scientific discoveries.",
      options: ["True", "False"],
      correctAnswer: "False",
      type: "single",
      explanation:
        "The 'Dark Ages' were characterized by limited intellectual progress and widespread illiteracy.",
    },
    {
      question:
        "Vikings were known for marrying into local nobility and adopting the local religion and language.",
      options: ["True", "False"],
      correctAnswer: "True",
      type: "single",
      explanation:
        "Vikings often consolidated power by marrying into local nobility and adopting local customs.",
    },
    {
      question: "What was the capital of the Eastern Roman Empire?",
      options: ["Rome", "Baghdad", "Constantinople", "Paris"],
      correctAnswer: "Constantinople",
      type: "single",
      explanation:
        "Constantinople was the capital of the Eastern Roman Empire.",
    },
    {
      question: "Who was declared the Holy Roman Emperor by the Pope?",
      options: ["Harun Rashid", "Charlemagne", "King Offa", "Alfred the Great"],
      correctAnswer: "Charlemagne",
      type: "single",
      explanation:
        "Charlemagne was declared Holy Roman Emperor by the Pope, symbolizing the rise of the Holy Roman Empire.",
    },
    {
      question:
        "What significant event marked the beginning of the Viking Age in 793?",
      options: [
        "The raid on Lindisfarne",
        "The founding of Novgorod",
        "The fall of Constantinople",
        "The crowning of Charlemagne",
      ],
      correctAnswer: "The raid on Lindisfarne",
      type: "single",
      explanation:
        "The Viking Age began with the raid on Lindisfarne monastery in 793.",
    },
    {
      question:
        "Which term did Muslims use to refer to Western Europeans during the High Caliphate period?",
      options: ["Normans", "Varangians", "Ifranji", "Saxons"],
      correctAnswer: "Ifranji",
      type: "single",
      explanation:
        "Muslims referred to Western Europeans as 'Ifranji' during the High Caliphate period.",
    },
    {
      question:
        "Which Anglo-Saxon king minted coins featuring the Islamic shahada?",
      options: ["Alfred the Great", "King Offa", "Charlemagne", "King Harold"],
      correctAnswer: "King Offa",
      type: "single",
      explanation:
        "King Offa of Mercia minted coins featuring the Islamic declaration of faith.",
    },
    {
      question:
        "Which regions were significantly impacted by Viking invasions and settlements?",
      options: ["England", "Ireland", "Northern France", "Constantinople"],
      correctAnswer: ["England", "Ireland", "Northern France"],
      type: "multiple",
      explanation:
        "The Vikings significantly impacted England, Ireland, and Northern France through their invasions and settlements.",
    },
    {
      question:
        "What actions did Vikings take to consolidate their power in new territories?",
      options: [
        "Marrying into local nobility",
        "Adopting local religions and languages",
        "Forcing locals to adopt Norse religion",
        "Taking noble titles like ‘duke’",
      ],
      correctAnswer: [
        "Marrying into local nobility",
        "Adopting local religions and languages",
        "Taking noble titles like ‘duke’",
      ],
      type: "multiple",
      explanation:
        "Vikings consolidated power by marrying locals, adopting local customs, and taking noble titles.",
    },
    {
      question:
        "Which of the following are true about the Dark Ages in Europe?",
      options: [
        "Learning remained mainly within the Church",
        "The masses were largely illiterate",
        "There was a rapid expansion of universities",
        "Literacy was common among the population",
      ],
      correctAnswer: [
        "Learning remained mainly within the Church",
        "The masses were largely illiterate",
      ],
      type: "multiple",
      explanation:
        "During the Dark Ages, learning was confined to the Church, and most people were illiterate.",
    },
    {
      question:
        "Which events or developments involved the Franks during this period?",
      options: [
        "They offered protection to the Pope",
        "Their king was declared Holy Roman Emperor",
        "They exchanged gifts with Harun Rashid",
        "They conquered Constantinople",
      ],
      correctAnswer: [
        "They offered protection to the Pope",
        "Their king was declared Holy Roman Emperor",
        "They exchanged gifts with Harun Rashid",
      ],
      type: "multiple",
      explanation:
        "The Franks protected the Pope, had their king crowned Emperor, and exchanged gifts with Harun Rashid.",
    },
    {
      question:
        "Why might King Offa have included the Islamic shahada on his coins?",
      options: [
        "To facilitate trade with the Muslim world",
        "To indicate his conversion to Islam",
        "As a diplomatic gesture",
        "To convert his kingdom to Islam",
      ],
      correctAnswer: [
        "To facilitate trade with the Muslim world",
        "As a diplomatic gesture",
      ],
      type: "multiple",
      explanation:
        "The inclusion of the shahada likely facilitated trade and acted as a diplomatic gesture.",
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
          <Link href="/modules/14-europe-during-the-high-caliphate-period">
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
                <Link href="/modules/14-europe-during-the-high-caliphate-period">
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
        <Link href="/modules/14-europe-during-the-high-caliphate-period">
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
