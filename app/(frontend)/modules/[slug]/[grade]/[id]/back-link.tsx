"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function BackLink({ grade }: { grade: string }) {
  const searchParams = useSearchParams();
  const lessonParam = searchParams.get("lesson");
  return (
    <Link href={`/lessons/${lessonParam}/${grade}`}>
      <Button variant="ghost" size="sm" className="gap-1">
        <ArrowLeft className="h-4 w-4" /> Back to lesson
      </Button>
    </Link>
  );
}
