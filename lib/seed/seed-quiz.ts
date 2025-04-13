import { BasePayload, Payload, PayloadRequest } from "payload";
import { lesson186less } from "@/lib/data/quizzes/lesson18quiz-6less";
import { lesson187higher } from "@/lib/data/quizzes/lesson18quiz-7higher";
import type { QuizItem } from "@/lib/types";

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload;
  req: PayloadRequest;
}): Promise<void> => {
  payload.logger.info("Seeding quizzes 18 standard..");

  const [tag1, tag2] = await Promise.all([
    getTag(payload, "6less"),
    getTag(payload, "the-middle-period"),
  ]);

  const tagids = [tag1, tag2];

  const createQuizzes = lesson186less.map((item) =>
    payload.create({
      collection: "quizzes",
      data: {
        title: item.title,
        type: item.type,
        answers: item.answers,
        feedback: item.feedback,
        tags: tagids,
      },
    })
  );

  await Promise.all(createQuizzes);

  payload.logger.info("Seeded database successfully!");
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
