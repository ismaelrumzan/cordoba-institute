import { BasePayload, Payload, PayloadRequest } from "payload";
import { lesson96less } from "@/lib/data/quizzes/lesson9quiz-6less";
import { lesson97higher } from "@/lib/data/quizzes/lesson9quiz-7higher";
import type { QuizItem } from "@/lib/types";

//In the next iteration, we will save the quiz data in json. Then in the seed front-end we pass the slug for the lesson to seed, load the json and update

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload;
  req: PayloadRequest;
}): Promise<void> => {
  payload.logger.info("Seeding quizzes 18 standard..");

  const level = "6less"; // "6less" "7higher"
  const lessonSlug = "the-lion-of-god-ali-son-of-abu-talib";

  const [tag1, tag2] = await Promise.all([
    getTag(payload, level),
    getTag(payload, "the-middle-period"),
  ]);

  const tagids = [tag1, tag2];

  const createQuizzes = lesson96less.map(async (item) => {
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

  payload.logger.info(`Updated ${result.docs[0].title} with quizzes`);

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
