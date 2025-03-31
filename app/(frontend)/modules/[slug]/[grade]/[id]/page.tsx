import configPromise from "@payload-config";
import { getPayload } from "payload";
import { draftMode } from "next/headers";
import { RefreshRouteOnSave } from "@/components/refresh-route";
import React, { cache, Suspense } from "react";
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
import { Badge } from "@/components/ui/badge";
import { BackLink } from "./back-link";
import { Module } from "@/payload-types";

type Args = {
  params: Promise<{
    slug?: string;
    grade?: string;
    id?: string;
  }>;
};

export default async function Assignment({ params: paramsPromise }: Args) {
  const { slug = "", grade = "", id = "" } = await paramsPromise;
  const queryContent = await queryAssignment({ slug });
  const filteredAssignment = queryContent.assignments?.filter(
    (item) => item.id === id
  )[0];
  return (
    <>
      <RefreshRouteOnSave />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Suspense>
            <BackLink grade={grade} />
          </Suspense>
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
  const params: {
    slug: string | null | undefined;
    level: string;
    id: string | null | undefined;
  }[] = [];

  docs.forEach((doc) => {
    const module = doc as Module;
    module.assignments?.forEach((item) => {
      params.push({
        slug: module.slug,
        level: item.level || "7higher",
        id: item.id,
      });
    });
  });

  return params;
}
