import { Lesson, Module } from "@/payload-types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Parse the data structure to extract lessons
export const extractLessons = (data: Module[]): Lesson[] => {
  // Create an array to hold all lessons
  const allLessons: Lesson[] = [];

  // Iterate through each module
  data.forEach((module) => {
    // Extract module information
    const moduleInfo = {
      title: module.title,
      slug: module.slug,
    };

    // Process each lesson in the module
    if (Array.isArray(module.lessons)) {
      module.lessons.forEach((lesson) => {
        // Skip if lesson is not a proper object
        if (typeof lesson !== "object" || lesson === null) {
          return;
        }

        // Extract basic lesson information
        const lessonInfo = {
          id: lesson.id,
          title: lesson.title,
          slug: lesson.slug,
          level: lesson.level,
          description: lesson.description,
          moduleTitle: moduleInfo.title,
          moduleSlug: moduleInfo.slug,
          createdAt: lesson.createdAt,
          updatedAt: lesson.updatedAt,
        };

        // Add to our collection
        allLessons.push(lessonInfo);
      });
    }
  });

  return allLessons;
};
