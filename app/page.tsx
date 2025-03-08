import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { IslamicBadge } from "@/components/islamic-badge";

export default function HomePage() {
  // Sample featured modules
  const featuredModules = [
    {
      id: "world-advent-islam",
      title: "The World at The Advent of Islam",
      description:
        "Learn about the two great empires that dominated the world, the Eastern Roman Empire and the Persian Empire",
      progress: 75,
      lessons: 3,
      duration: "45 min",
      level: "Beginner",
    },
    {
      id: "prophet-muhammad",
      title: "The Prophet Muhammad",
      description:
        "Discover the early life of Muhammad ﷺ, his reception of revelation, the Makkan and Medinan periods.",
      progress: 40,
      lessons: 6,
      duration: "1.5 hours",
      level: "Beginner",
    },
    {
      id: "high-caliphate",
      title: "The High Caliphate Period",
      description:
        "Study the Umayyads, Abbasids, and intellectual trends during the High Caliphate.",
      progress: 10,
      lessons: 6,
      duration: "2 hours",
      level: "Intermediate",
    },
    {
      id: "middle-period",
      title: "The Middle Period",
      description:
        "Learn about the Age of Sultanates, Emirates & Khanates from 1066-1500 CE.",
      progress: 0,
      lessons: 7,
      duration: "2.5 hours",
      level: "Intermediate",
    },
  ];

  // Sample achievements
  const achievements = [
    {
      id: 1,
      title: "First Module Completed",
      icon: (
        <div className="h-10 w-10 flex items-center justify-center bg-green-100 rounded-full text-green-600">
          <IslamicBadge type="dome" size="md" />
        </div>
      ),
      unlocked: true,
    },
    {
      id: 2,
      title: "5-Day Learning Streak",
      icon: (
        <div className="h-10 w-10 flex items-center justify-center bg-amber-100 rounded-full text-amber-500">
          <IslamicBadge type="crescent" size="md" />
        </div>
      ),
      unlocked: true,
    },
    {
      id: 3,
      title: "Quiz Master",
      icon: (
        <div className="h-10 w-10 flex items-center justify-center bg-purple-100 rounded-full text-purple-600">
          <IslamicBadge type="star" size="md" />
        </div>
      ),
      unlocked: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative overflow-hidden rounded-xl">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src="/home-hero.webp"
              alt="Islamic architectural background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/30"></div>
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Islamic History Learning Journey
            </h1>
            <p className="text-xl mb-6 max-w-3xl">
              Explore the rich tapestry of Islamic history through interactive
              lessons, quizzes, and personalized learning paths.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/modules/world-advent-islam">
                <Button
                  size="lg"
                  className="bg-white text-emerald-800 hover:bg-gray-100">
                  Continue Learning
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="border-white text-white hover:bg-emerald-700/40">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Learning Progress</h2>
          <Link href="/dashboard">
            <Button variant="ghost" className="flex items-center gap-2">
              View Dashboard <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredModules.map((module) => (
            <Card key={module.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <Badge
                    variant={
                      module.level === "Beginner" ? "default" : "secondary"
                    }>
                    {module.level}
                  </Badge>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{module.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{module.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Link href={`/modules/${module.id}`} className="w-full">
                  <Button className="w-full">
                    {module.progress > 0 ? "Continue" : "Start Learning"}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Your Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={`${!achievement.unlocked ? "opacity-50" : ""}`}>
              <CardContent className="pt-6 flex items-center gap-4">
                {achievement.icon}
                <div>
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.unlocked ? "Unlocked" : "Locked"}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>The World at The Advent of Islam</CardTitle>
              <CardDescription>
                Explore the state of the world just before the emergence of
                Islam.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about the two great empires that dominated the world, the
                Eastern Roman Empire and the Persian Empire, and how they
                competed for territory and military superiority.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/modules/world-advent-islam" className="w-full">
                <Button className="w-full">Start Module</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Prophet Muhammad ﷺ</CardTitle>
              <CardDescription>
                Learn about the life and mission of the final Messenger of God.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover the early life of Muhammad ﷺ, his reception of
                revelation, the Makkan and Medinan periods, and the
                establishment of the first Islamic Realm.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/modules/prophet-muhammad" className="w-full">
                <Button className="w-full">Start Module</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
