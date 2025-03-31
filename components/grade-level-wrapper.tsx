"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { GradeLevelSelector } from "./grade-level-selector";

export function GradeLevelWrapper({
  showSelector = true,
  showBadge = true,
  paramMode = false,
}: {
  showSelector?: boolean;
  showBadge?: boolean;
  paramMode?: boolean;
}) {
  const [gradeLevel, setGradeLevel] = useState<"elementary" | "secondary">(
    "secondary"
  );
  const searchParams = useSearchParams();
  useEffect(() => {
    // Get the level from query params
    const levelParam = searchParams.get("level");

    // Set the grade level based on the query param or default to "7higher" (secondary)
    if (levelParam === "6less") {
      setGradeLevel("elementary");
    } else {
      // Default to "7higher" if no param or any other value
      setGradeLevel("secondary");
    }
  }, [searchParams]);
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {showSelector && (
        <GradeLevelSelector
          onChange={(level) => setGradeLevel(level)}
          paramMode={paramMode}
        />
      )}
      {showBadge && (
        <div className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-md">
          Currently viewing:{" "}
          <span className="font-medium">
            {gradeLevel === "elementary"
              ? "Grade 6 and younger"
              : "Grade 7 and up"}
          </span>{" "}
          content
        </div>
      )}
    </div>
  );
}
