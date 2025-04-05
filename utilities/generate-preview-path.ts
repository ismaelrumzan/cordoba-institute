import type { PayloadRequest, CollectionSlug } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  lessons: "/lessons",
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
  level: string;
  req: PayloadRequest;
  data?: {
    lesson?: {
      id?: number;
      slug?: string;
    };
  };
};

export const generatePreviewPath = ({
  collection,
  slug,
  data,
  level,
}: Props) => {
  const prefix = collectionPrefixMap[collection];
  const path = `${prefix}`;

  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path,
    level,
    previewSecret: process.env.PREVIEW_SECRET || "",
  });

  const url = `/next/preview?${encodedParams.toString()}`;

  return url;
};
