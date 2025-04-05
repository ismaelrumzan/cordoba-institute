import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";

import { revalidatePath } from "next/cache";

import { Module } from "@/payload-types";

export const revalidateModule: CollectionAfterChangeHook<Module> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === "published") {
      const path = "/";

      payload.logger.info(`Revalidating page at path: ${path}`);

      revalidatePath(path);
    }
  }
  return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Module> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = "/";
    revalidatePath(path);
  }

  return doc;
};
