import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";
import { populatePublishedAt } from "@/hooks/populatePublishedAt";
import { revalidateModule, revalidateDelete } from "./hooks/revalidateModule";

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
    { name: "order", type: "number" },
    {
      name: "series",
      type: "relationship",
      relationTo: "series",
    },
    {
      name: "lessons",
      type: "relationship",
      relationTo: "lessons",
      hasMany: true,
    },
    {
      name: "assignments",
      type: "array",
      fields: [
        {
          name: "level",
          type: "radio",
          options: [
            { label: "Grade 6 and lower", value: "6less" },
            { label: "Grade 7 and higher", value: "7higher" },
          ],
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
        {
          name: "content",
          type: "richText",
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateModule],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
};
