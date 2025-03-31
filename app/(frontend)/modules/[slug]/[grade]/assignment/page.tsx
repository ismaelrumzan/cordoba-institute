import configPromise from "@payload-config";
import { getPayload } from "payload";
import { draftMode } from "next/headers";
import { RefreshRouteOnSave } from "@/components/refresh-route";
import React, { cache } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Badge } from "@/components/ui/badge";

type Args = {
  params: Promise<{
    slug?: string;
    grade?: string;
  }>;
  searchParams: Promise<{
    assignment?: string;
    lesson?: string;
  }>;
};

export default async function Assignment({
  params: paramsPromise1,
  searchParams: paramsPromise2,
}: Args) {
  const { slug = "", grade = "" } = await paramsPromise1;
  const { assignment = "", lesson = "" } = await paramsPromise2;
  const queryContent = await queryAssignment({ slug });
  const filteredAssignment = queryContent.assignments?.filter(
    (item) => item.id === assignment
  )[0];
  return (
    <>
      <RefreshRouteOnSave />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Link href={`/lessons/${lesson}/${grade}`}>
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to lesson
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">{filteredAssignment?.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 prose prose-emerald max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2>Assignment for {queryContent.title}</h2>
              <Badge>
                Level:{" "}
                {filteredAssignment?.level === "6less"
                  ? `Grade 6 and younger`
                  : `Grade 7 and up`}
              </Badge>
              <RichText
                className="[&_ul]:list-outside [&_ul]:ml-3"
                data={
                  filteredAssignment?.content as SerializedEditorState<SerializedLexicalNode>
                }
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

const queryAssignment = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "modules",
    draft,
    limit: 1,
    depth: 2,
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

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "modules",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
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
      };
    })
    .filter(Boolean);
}
