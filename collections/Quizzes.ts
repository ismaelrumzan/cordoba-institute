import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";
import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";

export const Quizzes: CollectionConfig = {
  slug: "quizzes",
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
    { name: "type", type: "select", options: ["t/f", "single", "multiple"] },
    {
      name: "answers",
      type: "array",
      fields: [
        { name: "title", type: "text" },
        { name: "correct", type: "checkbox" },
      ],
    },
    {
      name: "feedback",
      type: "richText",
    },
    { name: "tags", type: "relationship", relationTo: "tags", hasMany: true },
    ...slugField(),
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
};
