import { Payload, PayloadRequest } from "payload";
import { promises as fs } from "fs";
import path from "path";
import type { QuizItem } from "@/lib/types";

//In the next iteration, we will save the quiz data in json. Then in the seed front-end we pass the slug for the lesson to seed, load the json and update
//This needs to be run from the front admin as it requires Auth

export const seed = async ({
  payload,
  req,
  file,
}: {
  payload: Payload;
  req: PayloadRequest;
  file: string;
}): Promise<void> => {
  payload.logger.info(`Seeding ... ${file}`);

  const filePath = path.join(
    process.cwd(),
    "lib",
    "data",
    "quizzes",
    `${file}.json`
  );
  const fileContent = await fs.readFile(filePath, "utf8");
  const quizData = JSON.parse(fileContent);

  const level = quizData.level; // "6less" "7higher"
  const lessonSlug = quizData.lesson;

  const [tag1, tag2] = await Promise.all([
    getTag(payload, level),
    getTag(payload, quizData.module),
  ]);

  const tagids = [tag1, tag2];

  const createQuizzes = quizData.questions.map(async (item: QuizItem) => {
    const result = await payload.create({
      collection: "quizzes",
      data: {
        title: item.title,
        type: item.type,
        answers: item.answers,
        feedback: item.feedback,
        tags: tagids,
      },
    });
    return { quiz: result.id };
  });

  const quizids = await Promise.all(createQuizzes);

  payload.logger.info(`Created ${quizids.length} quizzes`);

  const result = await payload.update({
    collection: "lessons", // required
    data: {
      quizzes: quizids,
    },
    where: {
      // required
      slug: { equals: lessonSlug },
      level: { equals: level },
    },
  });

  payload.logger.info(`Updated with quizzes for ${lessonSlug}`);

  payload.logger.info("Seeded completed successfully!");
};

async function getTag(payload: Payload, tagName: string): Promise<string> {
  try {
    // Explicitly await the find operation
    const result = await payload.find({
      collection: "tags",
      where: {
        slug: {
          equals: tagName,
        },
      },
    });

    // Check if we got any results
    if (!result.docs || result.docs.length === 0) {
      throw new Error(`Tag "${tagName}" not found`);
    }

    // Log the found tag for debugging
    console.log(`Found tag "${tagName}":`, result.docs[0]);

    // Return the ID as a string to ensure it's not a Promise
    return String(result.docs[0].id);
  } catch (error) {
    console.error(`Error fetching tag "${tagName}":`, error);
    throw error;
  }
}
