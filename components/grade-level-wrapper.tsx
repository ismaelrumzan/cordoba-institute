"use client";
import { useState } from "react";
import { GradeLevelSelector } from "./grade-level-selector";

export function GradeLevelWrapper() {
  const [gradeLevel, setGradeLevel] = useState<"elementary" | "secondary">(
    "elementary"
  );
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <GradeLevelSelector onChange={(level) => setGradeLevel(level)} />
      <div className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-md">
        Currently viewing:{" "}
        <span className="font-medium">
          {gradeLevel === "elementary"
            ? "Grade 6 and younger"
            : "Grade 7 and up"}
        </span>{" "}
        content
      </div>
    </div>
  );
}
