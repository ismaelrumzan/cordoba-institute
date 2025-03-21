import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, CheckCircle, Clock, BarChart } from "lucide-react";
import { AiLearningRecommendation } from "@/components/ai-learning-recommendation";
import { IslamicBadge } from "@/components/islamic-badge";

export default function DashboardPage() {
  // Sample user data
  const userData = {
    name: "Ahmed",
    totalProgress: 42,
    completedModules: 2,
    totalModules: 24,
    learningStreak: 5,
    lastActive: "Today",
    quizAverage: 78,
  };

  // Sample modules data
  const modules = [
    {
      id: "introduction-overview",
      title: "Introduction & Overview",
      description:
        "Learn about the writing of history and overview of Islamic history from 622-2000 CE.",
      progress: 100,
      completed: true,
      lastAccessed: "2 days ago",
    },
    {
      id: "world-advent-islam",
      title: "The World at The Advent of Islam",
      description:
        "Explore the state of the world just before the emergence of Islam.",
      progress: 100,
      completed: true,
      lastAccessed: "Yesterday",
    },
    {
      id: "prophet-muhammad",
      title: "The Prophet Muhammad ﷺ",
      description:
        "Learn about the life and mission of the final Messenger of God.",
      progress: 75,
      completed: false,
      lastAccessed: "Today",
    },
    {
      id: "abu-bakr-truthful",
      title: "Abu Bakr The Truthful",
      description:
        "Study the life and caliphate of the first successor to the Prophet Muhammad ﷺ.",
      progress: 30,
      completed: false,
      lastAccessed: "Today",
    },
    {
      id: "umar-just",
      title: "Umar the Just",
      description:
        "Explore the life and achievements of the second caliph of Islam.",
      progress: 0,
      completed: false,
      lastAccessed: "Not started",
    },
  ];

  // Sample quiz data
  const quizzes = [
    {
      id: "introduction-overview",
      title: "Introduction & Overview",
      score: 90,
      totalQuestions: 10,
      completedDate: "3 days ago",
    },
    {
      id: "world-advent-islam",
      title: "The World at The Advent of Islam",
      score: 85,
      totalQuestions: 15,
      completedDate: "Yesterday",
    },
    {
      id: "prophet-muhammad",
      title: "The Prophet Muhammad ﷺ",
      score: 60,
      totalQuestions: 12,
      completedDate: "Today",
    },
  ];

  // Sample activity data
  const activities = [
    {
      id: 1,
      action: "Completed module",
      target: "Introduction & Overview",
      date: "3 days ago",
    },
    {
      id: 2,
      action: "Completed quiz",
      target: "Introduction & Overview",
      date: "3 days ago",
    },
    {
      id: 3,
      action: "Started module",
      target: "The World at The Advent of Islam",
      date: "2 days ago",
    },
    {
      id: 4,
      action: "Completed module",
      target: "The World at The Advent of Islam",
      date: "Yesterday",
    },
    {
      id: 5,
      action: "Completed quiz",
      target: "The World at The Advent of Islam",
      date: "Yesterday",
    },
    {
      id: 6,
      action: "Started module",
      target: "The Prophet Muhammad ﷺ",
      date: "Today",
    },
    {
      id: 7,
      action: "Completed quiz",
      target: "The Prophet Muhammad ﷺ",
      date: "Today",
    },
    {
      id: 8,
      action: "Started module",
      target: "Abu Bakr The Truthful",
      date: "Today",
    },
  ];

  const recommendations = {
    learningStyle: "Visual Learner",
    strengths: ["Historical Context", "Critical Analysis"],
    areasToImprove: ["Memorization", "Source Evaluation"],
    nextModule: {
      id: "umar-just",
      title: "Umar the Just",
      reason:
        "Based on your progress, this is the next logical module to continue your learning journey.",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your progress and continue your learning journey
          </p>
        </div>
        <Link href="/">
          <Button>Browse All Modules</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.totalProgress}%</div>
            <Progress value={userData.totalProgress} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {userData.completedModules} of {userData.totalModules} modules
              completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Learning Streak
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <Calendar className="h-8 w-8 mr-3 text-primary" />
            <div>
              <div className="text-2xl font-bold">
                {userData.learningStreak} days
              </div>
              <p className="text-xs text-muted-foreground">
                Last active: {userData.lastActive}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Quiz Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <BarChart className="h-8 w-8 mr-3 text-primary" />
            <div>
              <div className="text-2xl font-bold">{userData.quizAverage}%</div>
              <p className="text-xs text-muted-foreground">
                Average score across all quizzes
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="h-6 w-6 flex items-center justify-center bg-primary/20 rounded-full">
                <IslamicBadge type="crescent" size="sm" />
              </div>
              Recommended Next Module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-lg mb-1">
              {recommendations.nextModule.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {recommendations.nextModule.reason}
            </p>
            <Link href={`/modules/${recommendations.nextModule.id}`}>
              <Button className="w-full">Start Module</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="modules">
            <TabsList className="mb-4">
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="modules">
              <div className="space-y-4">
                {modules.map((module) => (
                  <Card key={module.id}>
                    <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{module.title}</h3>
                          {module.completed && (
                            <Badge
                              variant="default"
                              className="bg-green-100 text-green-800 hover:bg-green-100">
                              Completed
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {module.description}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Last accessed: {module.lastAccessed}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 min-w-[120px]">
                        <div className="w-full flex items-center justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress
                          value={module.progress}
                          className="h-2 w-full"
                        />
                        <Link href={`/modules/${module.id}`} className="mt-2">
                          <Button size="sm">
                            {module.progress > 0 ? "Continue" : "Start"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="quizzes">
              <div className="space-y-4">
                {quizzes.map((quiz) => (
                  <Card key={quiz.id}>
                    <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h3 className="font-semibold mb-1">
                          {quiz.title} Quiz
                        </h3>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          <span>Completed: {quiz.completedDate}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center">
                          <span className="text-lg font-bold mr-2">
                            {quiz.score}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            (
                            {Math.round(
                              (quiz.score * quiz.totalQuestions) / 100
                            )}
                            /{quiz.totalQuestions} correct)
                          </span>
                        </div>
                        <Link href={`/assessments/${quiz.id}`}>
                          <Button size="sm" variant="outline">
                            Review Quiz
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardContent className="p-4">
                  <ul className="space-y-4">
                    {activities.map((activity) => (
                      <li
                        key={activity.id}
                        className="flex items-start gap-3 pb-4 border-b last:border-0">
                        <div className="bg-primary/10 p-2 rounded-full">
                          {activity.action.includes("module") ? (
                            <BookOpen className="h-4 w-4 text-primary" />
                          ) : (
                            <CheckCircle className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">
                              {activity.action}
                            </span>
                            : {activity.target}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.date}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">
            AI Learning Recommendations
          </h2>
          <AiLearningRecommendation />

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <div className="h-6 w-6 flex items-center justify-center bg-primary/20 rounded-full">
                  <IslamicBadge type="geometric" size="sm" />
                </div>
                Learning Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-1">
                    Your Learning Style
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 flex items-center gap-1">
                    <IslamicBadge type="star" size="sm" />
                    {recommendations.learningStyle}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    You learn best through visual aids and historical narratives
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Strengths</h3>
                  <div className="flex flex-wrap gap-2">
                    {recommendations.strengths.map(
                      (strength: string, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                          <IslamicBadge type="dome" size="sm" />
                          {strength}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-1">Areas to Improve</h3>
                  <div className="flex flex-wrap gap-2">
                    {recommendations.areasToImprove.map(
                      (area: string, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
                          <IslamicBadge type="minaret" size="sm" />
                          {area}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
