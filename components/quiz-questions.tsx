"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string | string[]; // Can be a single string or array of strings
  type: "single" | "multiple"; // Type of question
  explanation?: string;
  slug?: string;
}

interface QuizQuestionProps {
  question: QuizQuestion;
  selectedAnswer: string | string[];
  onAnswerSelect: (answer: string | string[]) => void;
  isSubmitted: boolean;
}

export function QuizQuestionComponent({
  question,
  selectedAnswer,
  onAnswerSelect,
  isSubmitted,
}: QuizQuestionProps) {
  // For multiple choice questions
  const handleCheckboxChange = (option: string, checked: boolean) => {
    if (!Array.isArray(selectedAnswer)) {
      // Initialize as array if it's not already
      onAnswerSelect(checked ? [option] : []);
      return;
    }

    const newSelectedAnswers = [...selectedAnswer];
    if (checked) {
      newSelectedAnswers.push(option);
    } else {
      const index = newSelectedAnswers.indexOf(option);
      if (index !== -1) {
        newSelectedAnswers.splice(index, 1);
      }
    }
    onAnswerSelect(newSelectedAnswers);
  };

  // Helper to check if an option is correct
  const isOptionCorrect = (option: string) => {
    if (Array.isArray(question.correctAnswer)) {
      return question.correctAnswer.includes(option);
    }
    return option === question.correctAnswer;
  };

  // Helper to check if an option was selected
  const isOptionSelected = (option: string) => {
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(option);
    }
    return option === selectedAnswer;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4">{question.question}</h3>

      {question.type === "single" ? (
        // Single answer (radio buttons)
        <RadioGroup
          value={selectedAnswer as string}
          onValueChange={isSubmitted ? undefined : onAnswerSelect}
          className="space-y-3">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 border p-3 rounded-md ${
                isSubmitted
                  ? isOptionCorrect(option)
                    ? "bg-green-50 border-green-200"
                    : isOptionSelected(option)
                      ? "bg-red-50 border-red-200"
                      : "bg-gray-50"
                  : "hover:bg-gray-50"
              }`}>
              <RadioGroupItem
                value={option}
                id={`option-${index}`}
                disabled={isSubmitted}
              />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer flex justify-between items-center">
                <span>{option}</span>
                {isSubmitted && isOptionCorrect(option) && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                {isSubmitted &&
                  isOptionSelected(option) &&
                  !isOptionCorrect(option) && (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        // Multiple answers (checkboxes)
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 border p-3 rounded-md ${
                isSubmitted
                  ? isOptionCorrect(option)
                    ? "bg-green-50 border-green-200"
                    : isOptionSelected(option)
                      ? "bg-red-50 border-red-200"
                      : "bg-gray-50"
                  : "hover:bg-gray-50"
              }`}>
              <Checkbox
                id={`option-${index}`}
                checked={isOptionSelected(option)}
                onCheckedChange={
                  isSubmitted
                    ? undefined
                    : (checked) =>
                        handleCheckboxChange(option, checked as boolean)
                }
                disabled={isSubmitted}
              />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer flex justify-between items-center">
                <span>{option}</span>
                {isSubmitted && isOptionCorrect(option) && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                {isSubmitted &&
                  isOptionSelected(option) &&
                  !isOptionCorrect(option) && (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
              </Label>
            </div>
          ))}
        </div>
      )}

      {isSubmitted && question.explanation && (
        <div className="mt-4 p-4 bg-slate-50 rounded-md border">
          <h4 className="font-medium mb-1">Explanation:</h4>
          <p className="text-muted-foreground">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
