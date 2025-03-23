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
import { ModuleImage } from "@/components/module-image";
import { HighlightBox } from "@/components/highlight-box";
import { ModuleAudioPlayer } from "@/components/module-audio-player";
import { GradeLevelSelector } from "@/components/grade-level-selector";
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
import { formatSlug } from "@/fields/slug/formatSlug";
import RichText from "@/components/RichText";
import { Media } from "@/payload-types";

type Args = {
  params: Promise<{
    slug?: string;
    grade?: string;
  }>;
};

const sections = [
  { title: "Umayyads & Abbasids", status: "complete" },
  { title: "Harun the Good & The Abbasids", status: "complete" },
  ,
  { title: "Baghdad & City Life in the High Caliphate", status: "complete" },
  ,
  { title: "Intellectual Trends in the High Caliphate", status: "complete" },
  ,
  { title: "Europe During The High Caliphate Period", status: "progress" },
  ,
  { title: "Economies of the Muslim & Christian Worlds", status: "incomplete" },
];

const concepts = [
  "Christianity split into Western (Catholic) and Eastern (Orthodox) regions, with the Pope asserting supremacy in the West.",
  "Europe's dark ages was marked by limited learning and widespread illiteracy, with knowledge preserved mainly within the Church",
  "Barbarian tribes formed small kingdoms; Charlemagne was declared Holy Roman Emperor, symbolizing the West's aspiration for civilization and fostering relations with the Abbasid Caliphate.",
  "Vikings raided and settled across Europe, later integrating by adopting local customs, religions, and governance.",
  "Offa of Mercia minted coins with the Islamic shahada, reflecting trade ties with the Muslim world.",
];

export default async function Lesson({ params: paramsPromise }: Args) {
  const { slug = "", grade = "" } = await paramsPromise;
  const queryContent = await queryPostByLesson({ slug });
  const lessonContent = queryContent.content?.filter(
    (item) => item.level === grade
  )[0];
  const audioContent = lessonContent?.audio as Media;
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

        <ModuleAudioPlayer
          title="Europe During The High Caliphate Period"
          audioSrc={audioContent?.url as string}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="content">
              <TabsList className="mb-4">
                <TabsTrigger value="content">Lesson Content</TabsTrigger>
                <TabsTrigger value="resources">
                  Additional Resources
                </TabsTrigger>
                <TabsTrigger value="notes">My Notes</TabsTrigger>
              </TabsList>

              <TabsContent
                value="content"
                className="prose prose-emerald max-w-none">
                <div className="bg-white rounded-lg shadow-sm p-6 border">
                  <RichText
                    data={
                      lessonContent?.learningcontent as SerializedEditorState<SerializedLexicalNode>
                    }
                  />
                </div>
              </TabsContent>

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
                              <h4 className="font-medium">{resource.title}</h4>
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
              <Link href="/modules/introduction-overview">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Previous Module
                </Button>
              </Link>
              <Link href="/modules/prophet-muhammad">
                <Button className="gap-2">
                  Next Module <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Module Progress</h3>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Completion</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <h4 className="font-medium text-sm mb-2">Module Sections</h4>
                <ul className="space-y-2">
                  {sections.map((section) => {
                    let icon = <CircleX className="h-4 w-4 text-green-500" />;
                    if (section?.status === "complete") {
                      icon = <CheckCircle className="h-4 w-4 text-green-500" />;
                    }
                    if (section?.status === "progress") {
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

                <div className="mt-6">
                  <Link href="/assessments/14-europe-during-the-high-caliphate-period">
                    <Button className="w-full">Take Module Quiz</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
                <ul className="space-y-2 list-disc pl-3">
                  {concepts.map((concept) => (
                    <li className="text-sm">{concept}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

const queryPostByLesson = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "lessons",
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
