import configPromise from "@payload-config";
import { cache, Suspense } from "react";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import { Module } from "@/payload-types";
import { GradeLevelWrapper } from "@/components/grade-level-wrapper";
import { FeaturedLessons } from "./featured-lessons";
import { FeaturedModules } from "./featured-modules";

export default async function HomePage() {
  const modules = await queryModules();
  const modulesWithLessons = modules.filter(
    (item) => item.lessons && item.lessons?.length > 0
  ) as Module[];

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
              <Suspense>
                <GradeLevelWrapper showBadge={false} paramMode />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Modules</h2>
        </div>
        <Suspense>
          <FeaturedModules modules={modules as Module[]} />
        </Suspense>
      </section>
      <Suspense>
        <FeaturedLessons data={modulesWithLessons} />
      </Suspense>
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
