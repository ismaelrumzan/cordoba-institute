import type { PayloadRequest, CollectionSlug } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  lessons: "/modules",
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
  req: PayloadRequest;
  data?: {
    lesson?: {
      id?: number;
      slug?: string;
    };
  };
};

export const generatePreviewPath = ({ collection, slug, data }: Props) => {
  const prefix = collectionPrefixMap[collection];
  const path = `${prefix}`;

  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || "",
  });

  const url = `/next/preview?${encodedParams.toString()}`;

  return url;
};
