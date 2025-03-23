"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { School, ChevronDown } from "lucide-react";

interface GradeLevelSelectorProps {
  onChange?: (level: "elementary" | "secondary") => void;
}

export function GradeLevelSelector({ onChange }: GradeLevelSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [gradeLevel, setGradeLevel] = useState<"elementary" | "secondary">(
    "elementary"
  );

  // Update URL with the new grade level

  useEffect(() => {
    if (pathname.includes("/6less")) {
      setGradeLevel("elementary");
      if (onChange) {
        onChange("elementary");
      }
    }
    if (pathname.includes("/7higher")) {
      setGradeLevel("secondary");
      if (onChange) {
        onChange("secondary");
      }
    }
  }, [gradeLevel]);

  const handleChange = (level: "elementary" | "secondary") => {
    setGradeLevel(level);
    const rootpath = pathname.split("/").slice(0, -1).join("/");
    if (level === "elementary") {
      router.push(`${rootpath}/6less`);
    }
    if (level == "secondary") {
      router.push(`${rootpath}/7higher`);
    }
    if (onChange) {
      onChange(level);
    }
  };

  return (
    <div className="flex items-center gap-2 mb-4 bg-white rounded-lg border p-2 shadow-sm">
      <School className="h-5 w-5 text-primary" />
      <span className="text-sm font-medium">Grade Level:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            {gradeLevel === "elementary"
              ? "Grade 6 and younger"
              : "Grade 7 and up"}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => handleChange("elementary")}
            className={gradeLevel === "elementary" ? "bg-primary/10" : ""}>
            Grade 6 and younger
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleChange("secondary")}
            className={gradeLevel === "secondary" ? "bg-primary/10" : ""}>
            Grade 7 and up
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
