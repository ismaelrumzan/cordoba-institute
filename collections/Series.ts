import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";

export const Series: CollectionConfig = {
  slug: "series",
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    { name: "title", type: "text" },
    { name: "description", type: "text" },
    { name: "sourceText", type: "text" },
    { name: "sourceLink", type: "text" },
    { name: "order", type: "number" },
    { name: "timelabel", type: "text" },
    { name: "image", type: "upload", relationTo: "media" },
    ...slugField(),
  ],
};
