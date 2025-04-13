import { Quiz } from "@/payload-types";

// Define the structure of a quiz item
export interface QuizItem {
  title: string;
  type: "t/f" | "single" | "multiple";
  answers: {
    title: string;
    correct: boolean;
  }[];
  feedback: Quiz["feedback"];
  tags: string[];
}
