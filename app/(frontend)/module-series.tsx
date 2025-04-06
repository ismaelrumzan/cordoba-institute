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
import RichText from "@/components/RichText";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import { Lesson, Module } from "@/payload-types";

interface ModuleSeriesProps {
  title: string;
  description: string;
  source: {
    sourceLink: string;
    sourceText: string;
  };
  timelabel: string;
  modules: Module[];
  index: number;
  backgroundImage?: string;
  borderStyle?: "none" | "thin" | "normal";
  viewAll?: boolean;
}

export function ModuleSeries({
  title,
  description,
  source,
  timelabel,
  modules,
  index,
  backgroundImage,
  viewAll = false,
  borderStyle = "none",
}: ModuleSeriesProps) {
  // Determine border class based on borderStyle prop
  const getBorderClass = () => {
    switch (borderStyle) {
      case "thin":
        return "border border-emerald-100";
      case "normal":
        return "border-2 border-emerald-100";
      case "none":
      default:
        return "";
    }
  };

  const borderClass = getBorderClass();

  // Determine header border based on borderStyle
  const headerBorderClass =
    borderStyle === "none"
      ? "border-b border-emerald-100/50"
      : "border-b border-emerald-100";
  const selectedLevel = "7higher";
  return (
    <div className={`mb-16 rounded-xl overflow-hidden bg-white ${borderClass}`}>
      {/* Series Header with Background Image and Gradient */}
      <div className="relative">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {backgroundImage && (
            <>
              <img
                src={backgroundImage}
                alt={`${title} background`}
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-700/20 via-emerald-50/70 to-white/90"></div>
            </>
          )}
        </div>

        {/* Header content */}
        <div className={`relative p-6 ${headerBorderClass}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-emerald-700">
                  {index}
                </div>
                <h2 className="text-2xl font-bold text-emerald-800">{title}</h2>
              </div>
              <p className="text-muted-foreground mt-1 mb-2 max-w-3xl">
                {description}
              </p>
              {/* Timeframe badge */}
              <Badge
                variant="outline"
                className="border-emerald-200 text-emerald-700 bg-white/80">
                {timelabel}
              </Badge>
              <div className="text-sm text-muted-foreground italic mt-2">
                <span className="font-bold">
                  Source, credits and copyright:
                </span>{" "}
                <Link
                  href={source.sourceLink}
                  target="_blank"
                  className="underline hover:no-underline">
                  {source.sourceText}
                </Link>
              </div>
            </div>
            {viewAll && (
              <Link
                href={`/series/${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-4 md:mt-0">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-emerald-200 text-emerald-700 bg-white/80 hover:bg-white">
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Module Cards */}
      <div className="p-6 bg-emerald-50/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module) => {
            const all_lessons = module.lessons as Lesson[];
            const level_lessons = all_lessons?.filter(
              (item) => item.level === selectedLevel
            );
            return (
              <Card
                key={module.id}
                className="overflow-hidden border-slate-100 hover:border-emerald-200 transition-colors duration-200">
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
                  {module.timelabel && (
                    <div className="mb-2">
                      <Badge variant="secondary">{module.timelabel} CE</Badge>
                    </div>
                  )}
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
                      <ul className="text-sm list-disc list-outside ml-4 mt-2 text-foreground">
                        {level_lessons.map((item) => (
                          <li
                            className="underline hover:no-underline"
                            key={item.id}>
                            <Link
                              href={`/lessons/${item.slug}/${selectedLevel}`}>
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
      </div>
    </div>
  );
}
