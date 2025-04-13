import configPromise from "@payload-config";
import { cache, Suspense } from "react";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import { Media, Module, Series } from "@/payload-types";
import { GradeLevelWrapper } from "@/components/grade-level-wrapper";
import { ModuleSeries } from "./module-series";
import Image from "next/image";

export default async function HomePage() {
  const { modules, series } = await queryModules();
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative overflow-hidden rounded-xl">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/home-hero.webp"
                alt="Islamic architectural background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/30"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 text-white">
            <h1 className="text-4xl font-bold mb-4">
              World History Learning Journey
            </h1>
            <p className="text-xl mb-6 max-w-3xl">
              Explore the rich tapestry of world history with an Islamic
              perspective through rich media content, interactive lessons,
              quizzes and engaging project-based learning assignments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Suspense>
                <GradeLevelWrapper showBadge={false} paramMode />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {series.map((item) => {
        const serieModules = modules.filter((moduleItem) => {
          const seriesItem = moduleItem.series as Series;
          return seriesItem?.id === item.id;
        });
        const imageItem = item.image as Media;
        return (
          <ModuleSeries
            title={item.title as string}
            description={item.description as string}
            source={{
              sourceLink: item.sourceLink as string,
              sourceText: item.sourceText as string,
            }}
            timelabel={item.timelabel as string}
            modules={serieModules as Module[]}
            index={item.order as number}
            backgroundImage={imageItem.url as string}
            borderStyle="thin"
          />
        );
      })}
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
      series: true,
      slug: true,
      lessons: true,
      timelabel: true,
    },
    sort: "order",
  });

  const series = await payload.find({
    collection: "series",
    draft,
    depth: 2,
    page: 1,
    limit: 100,
    pagination: false,
    overrideAccess: draft,
    sort: "order",
  });

  return { modules: result.docs, series: series.docs };
});
