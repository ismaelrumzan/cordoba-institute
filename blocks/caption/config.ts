import type { Block } from "payload";

export const CaptionBlock: Block = {
  slug: "captionblock",
  interfaceName: "CaptionBlock",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "alignment",
      type: "select",
      options: [
        { label: "Left", value: "justify-start" },
        { label: "Center", value: "justify-center" },
        { label: "Right", value: "justify-end" },
      ],
    },
  ],
  labels: {
    plural: "Caption Blocks",
    singular: "Caption Block",
  },
};
