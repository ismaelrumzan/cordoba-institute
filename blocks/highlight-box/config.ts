import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

export const HighlightBox: Block = {
  slug: "highlightbox",
  interfaceName: "HighlighBox",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "type",
      type: "select",
      options: [
        {
          label: "Good to Know",
          value: "good-to-know",
        },
        {
          label: "Research",
          value: "research",
        },
        {
          label: "Reflection",
          value: "reflection",
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({})
    },
  ],
  labels: {
    plural: "Highlight Boxes",
    singular: "Highlight Box",
  },
};
