import Link from "next/link";
import configPromise from "@payload-config";
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
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { IslamicBadge } from "@/components/islamic-badge";
import { cache } from "react";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import { Lesson, Module } from "@/payload-types";
import { GradeLevelWrapper } from "@/components/grade-level-wrapper";
import { extractLessons } from "@/lib/utils";

export default async function HomePage() {
  const modules = await queryModules();
  const modulesWithLessons = modules.filter(
    (item) => item.lessons && item.lessons?.length > 0
  ) as Module[];
  const selectedLevel = "7higher";
  const featuredLessons = extractLessons(modulesWithLessons)
    .filter((item) => item.level === selectedLevel)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative overflow-hidden rounded-xl">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="/home-hero.webp"
              alt="Islamic architectural background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/30"></div>
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Islamic History Learning Journey
            </h1>
            <p className="text-xl mb-6 max-w-3xl">
              Explore the rich tapestry of Islamic history through interactive
              lessons, quizzes, and personalized learning paths.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradeLevelWrapper showBadge={false} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Modules</h2>
        </div>

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
                      href={`/lessons/${level_lessons[0].slug}/7higher`}
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
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Lessons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredLessons.map((item) => (
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about the two great empires that dominated the world,
                  the Eastern Roman Empire and the Persian Empire, and how they
                  competed for territory and military superiority.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/modules/${item.slug}/${selectedLevel}`}
                  className="w-full">
                  <Button className="w-full">Start Lesson</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

const queryModules = cache(async () => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "modules",
    draft,
    depth: 2,
    page: 1,
    limit: 100,
    pagination: false,
    overrideAccess: draft,
    select: {
      title: true,
      description: true,
      slug: true,
      lessons: true,
    },
    sort: "order",
  });

  return result.docs || null;
});
