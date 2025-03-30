import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";

export const Modules: CollectionConfig = {
  slug: "modules",
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
    { name: "description", type: "richText" },
    {
      name: "lessons",
      type: "relationship",
      relationTo: "lessons",
      hasMany: true,
    },
    ...slugField(),
  ],
};
