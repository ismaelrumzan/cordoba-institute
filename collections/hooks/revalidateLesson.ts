import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";

import { revalidatePath, revalidateTag } from "next/cache";

import { Lesson } from "@/payload-types";

export const revalidateLesson: CollectionAfterChangeHook<Lesson> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === "published") {
      const path =
        doc.slug === "home" ? "/" : `/lessons/${doc.slug}/${doc.level}`;

      payload.logger.info(`Revalidating page at path: ${path}`);

      revalidatePath(path);
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === "published" && doc._status !== "published") {
      const oldPath =
        previousDoc.slug === "home"
          ? "/"
          : `/lessons/${previousDoc.slug}/${previousDoc.level}`;

      payload.logger.info(`Revalidating old page at path: ${oldPath}`);

      revalidatePath(oldPath);
    }
  }
  return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Lesson> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path =
      doc?.slug === "home" ? "/" : `/lessons/${doc.slug}/${doc.level}`;
    revalidatePath(path);
    revalidateTag("pages-sitemap");
  }

  return doc;
};
