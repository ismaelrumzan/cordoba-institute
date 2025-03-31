"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import RichText from "@/components/RichText";
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import { CheckCircle, XCircle } from "lucide-react";
import { Quiz } from "@/payload-types";

export interface QuizQuestion {
  title: string;
  options: string[];
  correctAnswer: string | string[]; // Can be a single string or array of strings
  type: "single" | "multiple" | "t/f"; // Type of question
  explanation?: string;
  slug?: string;
}

interface QuizQuestionProps {
  question: Quiz;
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

  // Helper to check if an option was selected
  const isOptionSelected = (option: string) => {
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(option);
    }
    return option === selectedAnswer;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4">{question.title}</h3>
      {question.type === "single" || question.type === "t/f" ? (
        // Single answer (radio buttons)
        <RadioGroup
          value={selectedAnswer as string}
          onValueChange={isSubmitted ? undefined : onAnswerSelect}
          className="space-y-3">
          {question.answers?.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 border p-3 rounded-md ${
                isSubmitted
                  ? option.correct
                    ? "bg-green-50 border-green-200"
                    : isOptionSelected(option.title as string)
                      ? "bg-red-50 border-red-200"
                      : "bg-gray-50"
                  : "hover:bg-gray-50"
              }`}>
              <RadioGroupItem
                value={option.title as string}
                id={`option-${index}`}
                disabled={isSubmitted}
              />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer flex justify-between items-center">
                <span>{option.title}</span>
                {isSubmitted && option.correct && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                {isSubmitted &&
                  isOptionSelected(option.title as string) &&
                  !option.correct && (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : (
        // Multiple answers (checkboxes)
        <div className="space-y-3">
          <span>multiple</span>
          {question.answers?.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 border p-3 rounded-md ${
                isSubmitted
                  ? option.correct
                    ? "bg-green-50 border-green-200"
                    : isOptionSelected(option.title as string)
                      ? "bg-red-50 border-red-200"
                      : "bg-gray-50"
                  : "hover:bg-gray-50"
              }`}>
              <Checkbox
                id={`option-${index}`}
                checked={isOptionSelected(option.title as string)}
                onCheckedChange={
                  isSubmitted
                    ? undefined
                    : (checked) =>
                        handleCheckboxChange(
                          option.title as string,
                          checked as boolean
                        )
                }
                disabled={isSubmitted}
              />
              <Label
                htmlFor={`option-${index}`}
                className="flex-1 cursor-pointer flex justify-between items-center">
                <span>{option.title}</span>
                {isSubmitted && option.correct && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                {isSubmitted &&
                  isOptionSelected(option.title as string) &&
                  !option.correct && (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
              </Label>
            </div>
          ))}
        </div>
      )}

      {isSubmitted && question.feedback && (
        <div className="mt-4 p-4 bg-slate-50 rounded-md border">
          <h4 className="font-medium mb-1">Explanation:</h4>
          <p className="text-muted-foreground">
            <RichText
              data={
                question.feedback as SerializedEditorState<SerializedLexicalNode>
              }
            />
          </p>
        </div>
      )}
    </div>
  );
}
