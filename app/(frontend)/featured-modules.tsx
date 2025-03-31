"use client";
import { Lesson, Module } from "@/payload-types";
import { Button } from "@/components/ui/button";
import RichText from "@/components/RichText";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";

export function FeaturedModules({ modules }: { modules: Module[] }) {
  const searchParams = useSearchParams();
  const selectedLevel = searchParams.get("level") || "7higher";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {modules.map((module) => {
        const all_lessons = module.lessons as Lesson[];
        const level_lessons = all_lessons?.filter(
          (item) => item.level === selectedLevel
        );
        return (
          <Card key={module.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{module.title}</CardTitle>
              </div>
              <CardDescription>
                <RichText
                  data={
                    module.description as SerializedEditorState<SerializedLexicalNode>
                  }
                />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>
                    {level_lessons && level_lessons.length > 0
                      ? `${level_lessons.length} lessons`
                      : `No lessons available`}
                  </span>
                </div>
              </div>
              <div>
                {level_lessons && level_lessons.length > 0 && (
                  <ul className="list-disc list-outside ml-4 mt-2">
                    {level_lessons.map((item) => (
                      <li className="underline hover:no-underline">
                        <Link href={`/lessons/${item.slug}/${selectedLevel}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              {level_lessons && level_lessons.length > 0 ? (
                <Link
                  href={`/lessons/${level_lessons[0].slug}/${selectedLevel}`}
                  className="w-full">
                  <Button className="w-full">Start Learning</Button>
                </Link>
              ) : (
                <Button className="w-full" disabled>
                  Start Learning
                </Button>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
