import { authenticated } from "@/access/authenticated";
import { anyone } from "@/access/anyone";
import { slugField } from "@/fields/slug";
import { generatePreviewPath } from "@/utilities/generate-preview-path";
import type { CollectionConfig } from "payload";

export const Lessons: CollectionConfig = {
  slug: "lessons",
  admin: {
    useAsTitle: "title",
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "lessons",
        req,
      }),
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "lessons",
          req,
        });
        return path;
      },
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "array",
      fields: [
        {
          name: "learningcontent",
          type: "richText",
        },
        {
          name: "level",
          type: "radio",
          options: [
            { label: "Grade 6 and lower", value: "6less" },
            { label: "Grade 7 and higher", value: "7higher" },
          ],
        },
        {
          name: "audio",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "resources",
      type: "array",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "richText",
        },
        {
          name: "type",
          type: "select",
          options: ["book", "video", "link"],
        },
        {
          name: "src",
          type: "text",
        },
      ],
    },
    {
      name: "modules",
      type: "array",
      admin: {
        position: "sidebar",
      },
      fields: [{ name: "module", type: "relationship", relationTo: "modules" }],
    },
    {
      name: "quizzes",
      type: "array",
      admin: {
        position: "sidebar",
      },
      fields: [{ name: "quiz", type: "relationship", relationTo: "quizzes" }],
    },
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
