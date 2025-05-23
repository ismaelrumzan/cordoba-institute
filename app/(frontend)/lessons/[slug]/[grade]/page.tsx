import configPromise from "@payload-config";
import { getPayload } from "payload";
import { draftMode } from "next/headers";
import { RefreshRouteOnSave } from "@/components/refresh-route";
import { unstable_cache } from "next/cache";
import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ClipboardList,
  CheckCircle,
  Loader,
  Video,
  LinkIcon,
  CircleX,
  FileText,
  XCircle,
} from "lucide-react";
import { ModuleAudioPlayer } from "@/components/module-audio-player";
import { GradeLevelWrapper } from "@/components/grade-level-wrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical";
import Image from "next/image";
import Link from "next/link";
import RichText from "@/components/RichText";
import { Lesson as LessonType, Media, Series } from "@/payload-types";

type Args = {
  params: Promise<{
    slug?: string;
    grade?: string;
  }>;
};

export default async function Lesson({ params: paramsPromise }: Args) {
  const { slug = "", grade = "" } = await paramsPromise;
  const queryContent = await queryPostByLesson({ slug, grade });
  const lessonContent = queryContent.lesson.learningcontent;
  const audioContent = queryContent?.lesson.audio as Media;
  const module = queryContent.module;
  const lessons = module.lessons as LessonType[];
  const moduleLessons = lessons?.filter((item) => item.level === grade);
  const currentLessonIndex = moduleLessons.findIndex(
    (item) => item.slug === slug
  );
  const moduleSeries = module.series as Series;
  const seriesImage = moduleSeries.image as Media;
  const progress =
    currentLessonIndex === 0
      ? currentLessonIndex + 1 / moduleLessons.length
      : currentLessonIndex / (moduleLessons.length - 1);
  let nextLesson: number | LessonType = -1;
  nextLesson =
    moduleLessons[moduleLessons.findIndex((item) => item.slug === slug) + 1] ||
    -1;
  let prevLesson: number | LessonType = -1;
  prevLesson =
    moduleLessons[moduleLessons.findIndex((item) => item.slug === slug) - 1] ||
    -1;
  const assignments = module.assignments?.filter(
    (item) => item.level === grade
  );
  return (
    <>
      <RefreshRouteOnSave />
      <header className="overflow-hidden w-full h-[100px] fixed">
        <div>
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src={seriesImage.url as string}
                alt={moduleSeries.title as string}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/30"></div>
            </div>
          </div>
          <div className="relative container mx-auto text-white py-3">
            <div className="flex gap-2 mb-3">
              <div className="grow">
                <Link href={`/`}>
                  <h1 className="text-4xl font-bold mb-2 hover:underline">
                    {moduleSeries.title as string}
                  </h1>
                </Link>
                <h2 className="text-2xl font-bold grow">
                  {queryContent.lesson.title}
                </h2>
              </div>
              <Link href={`/?level=${grade}`}>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 pb-3 pt-[120px]">
        <Suspense>
          <GradeLevelWrapper />
        </Suspense>
        {moduleLessons[currentLessonIndex].audio && (
          <ModuleAudioPlayer
            title={queryContent.lesson.title}
            audioSrc={audioContent?.url as string}
          />
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="content">
              <TabsList className="mb-4">
                <TabsTrigger value="content">Lesson Content</TabsTrigger>
                {moduleLessons[currentLessonIndex].resources &&
                  moduleLessons[currentLessonIndex].resources.length > 0 && (
                    <TabsTrigger value="resources">
                      Additional Resources
                    </TabsTrigger>
                  )}
                <TabsTrigger value="notes">My Notes</TabsTrigger>
              </TabsList>

              <TabsContent
                value="content"
                className="prose prose-emerald max-w-none">
                <div className="bg-white rounded-lg shadow-sm p-6 border">
                  <RichText
                    className="[&_ul]:list-outside [&_ul]:ml-4 [&_ol]:list-outside [&_ol]:ml-5 [&_ol]:list-decimal"
                    data={
                      lessonContent as SerializedEditorState<SerializedLexicalNode>
                    }
                  />
                </div>
              </TabsContent>

              {moduleLessons[currentLessonIndex].resources &&
                moduleLessons[currentLessonIndex].resources.length > 0 && (
                  <TabsContent value="resources">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">
                          Additional Resources
                        </h3>
                        <ul className="space-y-4">
                          {queryContent.lesson.resources?.map((resource) => {
                            let icon;
                            if (resource.type === "book") {
                              icon = (
                                <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                              );
                            }
                            if (resource.type === "video") {
                              icon = (
                                <Video className="h-5 w-5 text-primary mt-0.5" />
                              );
                            }
                            if (resource.type === "link") {
                              icon = (
                                <LinkIcon className="h-5 w-5 text-primary mt-0.5" />
                              );
                            }
                            return (
                              <li className="flex items-start gap-3">
                                {icon}
                                <div>
                                  <h4 className="font-medium">
                                    {resource.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    <RichText
                                      data={
                                        resource.description as SerializedEditorState<SerializedLexicalNode>
                                      }
                                    />
                                  </p>
                                  <Link
                                    href={resource?.src as string}
                                    target="_blank">
                                    <Button
                                      variant="link"
                                      className="p-0 h-auto text-primary">
                                      View Resource
                                    </Button>
                                  </Link>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}

              <TabsContent value="notes">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">My Notes</h3>
                    <textarea
                      className="w-full h-64 p-3 border rounded-md"
                      placeholder="Add your notes about this module here..."></textarea>
                    <div className="flex justify-end mt-4">
                      <Button>Save Notes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between mt-6">
              {prevLesson?.id ? (
                <Link href={`/lessons/${prevLesson.slug}/${grade}`}>
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="h-4 w-4" /> Previous Lesson
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" className="gap-2" disabled>
                  <ArrowLeft className="h-4 w-4" /> Previous Lesson
                </Button>
              )}
              {nextLesson?.id ? (
                <Link href={`/lessons/${nextLesson.slug}/${grade}`}>
                  <Button className="gap-2">
                    Next Lesson <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button className="gap-2" disabled>
                  Next Lesson <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <div>
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center gap-2">
                <ClipboardList className="h-6 w-6 text-amber-600 mt-0.5" />
                <h2 className="text-xl font-medium">Review</h2>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg pb-3">Module: {module.title}</h3>
                {moduleLessons?.length > 0 && (
                  <ul className="list-none">
                    {moduleLessons?.map((item, i) => (
                      <li className="flex gap-2 items-center">
                        {i === currentLessonIndex ? (
                          <Loader className="w-5 h-5 text-primary" />
                        ) : i < currentLessonIndex ? (
                          <CheckCircle className="w-5 h-5 text-primary" />
                        ) : (
                          <XCircle className="w-5 h-5 text-primary" />
                        )}
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}

                {moduleLessons[currentLessonIndex].keyconcepts && (
                  <>
                    <h3 className="text-xl pt-4 pb-2">Key Concepts</h3>
                    <RichText
                      className="text-sm [&_ul]:list-outside [&_ul]:ml-3"
                      data={
                        moduleLessons[currentLessonIndex]
                          .keyconcepts as SerializedEditorState<SerializedLexicalNode>
                      }
                    />
                  </>
                )}
              </CardContent>
              <CardFooter>
                {moduleLessons[currentLessonIndex].quizzes &&
                  moduleLessons[currentLessonIndex].quizzes.length > 0 && (
                    <div>
                      <Link href={`/quizzes/${slug}/${grade}`}>
                        <Button className="w-full">Take Lesson Quiz</Button>
                      </Link>
                    </div>
                  )}
              </CardFooter>
            </Card>

            {assignments && assignments.length > 0 && (
              <Card className="bg-amber-50">
                <CardHeader className="flex flex-row items-center gap-2">
                  <FileText className="h-6 w-6 text-amber-600 mt-0.5" />
                  <h2 className="text-xl font-medium">
                    End of Module Assignment
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-700 mb-3">
                    Once you have completed all the lessons in the{" "}
                    {module.title} modulde, complete an assignment from the
                    selection below to deepen your understanding.
                  </p>
                  <ul className="list-disc ml-3 text-sm">
                    {assignments.map((item) => (
                      <li key={item.id} className="hover:underline">
                        <Link
                          href={`/modules/${module.slug}/${grade}/${item.id}?lesson=${slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const queryPostByLesson = unstable_cache(
  async ({ slug, grade }: { slug: string; grade: string }) => {
    const { isEnabled: draft } = await draftMode();
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
      collection: "lessons",
      draft,
      limit: 1,
      depth: 2,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
        level: {
          equals: grade,
        },
      },
    });

    const modules = await payload.find({
      collection: "modules",
      draft,
      limit: 1,
      depth: 2,
      overrideAccess: draft,
      pagination: false,
      where: {
        "lessons.slug": {
          equals: slug,
        },
      },
    });

    return { lesson: result.docs?.[0], module: modules?.docs?.[0] || [] };
  }
);

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "lessons",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
      level: true,
    },
  });

  const { docs } = pages;

  return docs
    .map((doc) => {
      // Skip items without a slug
      if (!doc.slug) return null;

      // Return the params object with optional grade
      return {
        slug: doc.slug,
        // Only include grade if level exists
        ...(doc.level && { grade: doc.level }),
      };
    })
    .filter(Boolean);
}
