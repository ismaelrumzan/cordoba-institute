import configPromise from "@payload-config";
import { Quiz } from "./quiz";
import React, { cache } from "react";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import { Quiz as QuizType } from "@/payload-types";

type Args = {
  params: Promise<{
    slug?: string;
    grade?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = "", grade = "" } = await paramsPromise;
  const queryContent = await queryQuiz({ slug, grade });
  return (
    <Quiz
      questions={
        queryContent.quizzes as unknown as { id: string; quiz: QuizType }[]
      }
      title={queryContent.title}
      slug={queryContent.slug as string}
      level={queryContent.level as string}
    />
  );
}

const queryQuiz = cache(
  async ({ slug, grade }: { slug: string; grade: string }) => {
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
      quizzes: true,
    },
  });

  const { docs } = pages;

  return docs
    .filter((doc) => {
      // Check if doc has a slug
      const hasSlug = !!doc.slug;

      // Check if doc has quizzes array with length > 0
      const hasQuizzes = Array.isArray(doc.quizzes) && doc.quizzes.length > 0;

      // Only include docs that have both a slug and quizzes
      return hasSlug && hasQuizzes;
    })
    .map((doc) => {
      // Return the params object with optional grade
      return {
        slug: doc.slug,
        // Only include grade if level exists
        ...(doc.level && { grade: doc.level }),
      };
    });
}
