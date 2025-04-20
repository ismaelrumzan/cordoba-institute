import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const queryModules = unstable_cache(async () => {
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

export const querySeed = async () => {
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
      slug: true,
      lessons: true,
    },
    sort: "order",
  });

  return { modules: result.docs };
};
