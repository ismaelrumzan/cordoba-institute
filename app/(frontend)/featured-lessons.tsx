"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lesson, Module } from "@/payload-types";
import { extractLessons } from "@/lib/utils";

export function FeaturedLessons({ data }: { data: Module[] }) {
  const searchParams = useSearchParams();
  const levelParam = searchParams.get("level") || "7higher";
  const lessons = extractLessons(data)
    .filter((item) => item.level === levelParam)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Featured Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons.map((item) => (
          <Card>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/lessons/${item.slug}/${levelParam}`}
                className="w-full">
                <Button className="w-full">Start Lesson</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
