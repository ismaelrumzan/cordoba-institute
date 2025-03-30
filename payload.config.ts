// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import {
  BlocksFeature,
  LinkFeature,
  FixedToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Lessons } from "./collections/Lessons";
import { Modules } from "./collections/Modules";
import { Quizzes } from "./collections/Quizzes";
import { Tags } from "./collections/Tags";
import { CaptionBlock } from "./blocks/caption/config";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Modules, Lessons, Quizzes, Tags],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [CaptionBlock],
      }),
      FixedToolbarFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
