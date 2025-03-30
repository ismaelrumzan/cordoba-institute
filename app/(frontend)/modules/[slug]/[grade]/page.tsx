import configPromise from "@payload-config";
import { getPayload } from "payload";
import { draftMode } from "next/headers";
import { RefreshRouteOnSave } from "@/components/refresh-route";
import React, { cache } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Loader,
  Video,
  LinkIcon,
  CircleX,
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
import Link from "next/link";
import RichText from "@/components/RichText";
import { Lesson as LessonType, Media, Module } from "@/payload-types";

type Args = {
  params: Promise<{
    slug?: string;
    grade?: string;
  }>;
};

export default async function Lesson({ params: paramsPromise }: Args) {
  const { slug = "", grade = "" } = await paramsPromise;
  const queryContent = await queryPostByLesson({ slug, grade });
  const lessonContent = queryContent.learningcontent;
  const audioContent = queryContent?.audio as Media;
  const module = queryContent.module as Module;
  const lessons = module.lessons as LessonType[];
  const moduleLessons = lessons.filter((item) => item.level === grade);
  const currentLessonIndex = moduleLessons.findIndex(
    (item) => item.slug === slug
  );
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
  return (
    <>
      <RefreshRouteOnSave />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">{queryContent.title}</h1>
        </div>

        <GradeLevelWrapper />

        {moduleLessons[currentLessonIndex].audio && (
          <ModuleAudioPlayer
            title={queryContent.title}
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
                          {queryContent.resources?.map((resource) => {
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
                <Link href={`/modules/${prevLesson.slug}/${grade}`}>
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
                <Link href={`/modules/${nextLesson.slug}/${grade}`}>
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
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {module.title} Progress
                </h3>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Completion</span>
                    <span>{`${progress * 100} %`}</span>
                  </div>
                  <Progress value={progress * 100} className="h-2" />
                </div>

                <h4 className="font-medium text-sm mb-2">Lessons</h4>
                <ul className="space-y-2">
                  {moduleLessons.map((section, i) => {
                    let icon = <CircleX className="h-4 w-4 text-green-500" />;
                    if (i < currentLessonIndex) {
                      icon = <CheckCircle className="h-4 w-4 text-green-500" />;
                    }
                    if (i === currentLessonIndex) {
                      icon = <Loader className="h-4 w-4 text-green-500" />;
                    }
                    return (
                      <li className="flex items-center gap-2 text-sm">
                        {icon}
                        <span>{section?.title}</span>
                      </li>
                    );
                  })}
                </ul>
                {moduleLessons[currentLessonIndex].quizzes &&
                  moduleLessons[currentLessonIndex].quizzes.length > 0 && (
                    <div className="mt-6">
                      <Link href={`/assessments/${slug}/${grade}`}>
                        <Button className="w-full">Take Module Quiz</Button>
                      </Link>
                    </div>
                  )}
              </CardContent>
            </Card>

            {moduleLessons[currentLessonIndex].keyconcepts && (
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
                  <RichText
                    className="text-sm [&_ul]:list-outside [&_ul]:ml-3"
                    data={
                      moduleLessons[currentLessonIndex]
                        .keyconcepts as SerializedEditorState<SerializedLexicalNode>
                    }
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const queryPostByLesson = cache(
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

    return result.docs?.[0] || null;
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
