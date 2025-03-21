"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, ArrowRight, History, Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react"

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  // Mock data for demonstration
  const videoData = {
    title: "The House of Wisdom in Baghdad",
    description:
      "Explore the intellectual center of the Islamic Golden Age and its contributions to science and philosophy.",
    duration: "15:30",
    currentTime: "03:45",
    transcriptSections: [
      {
        time: "00:00",
        text: "Welcome to our exploration of the House of Wisdom, one of the most significant intellectual centers of the Islamic Golden Age.",
      },
      {
        time: "01:30",
        text: "Founded in the early 9th century during the Abbasid Caliphate, the House of Wisdom or Bayt al-Hikma was established in Baghdad.",
      },
      {
        time: "03:15",
        text: "Under the patronage of Caliph Harun al-Rashid and later expanded by his son Al-Ma'mun, it became a major center for translation, research, and scholarly activities.",
      },
      {
        time: "05:45",
        text: "Scholars from different backgrounds and religions worked together to translate Greek, Persian, and Indian texts into Arabic.",
      },
      {
        time: "08:20",
        text: "The House of Wisdom played a crucial role in preserving ancient knowledge and advancing fields like mathematics, astronomy, medicine, chemistry, and philosophy.",
      },
      {
        time: "11:00",
        text: "Notable scholars associated with the House of Wisdom include Al-Khwarizmi, Al-Kindi, and Hunayn ibn Ishaq.",
      },
      {
        time: "13:30",
        text: "The institution's legacy continues to influence our understanding of the Islamic contribution to global knowledge and scientific advancement.",
      },
    ],
    relatedResources: [
      { title: "The Translation Movement in the Islamic World", type: "Article" },
      { title: "Al-Khwarizmi: The Father of Algebra", type: "Video" },
      { title: "Baghdad: Center of the Islamic Golden Age", type: "Interactive Map" },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <History className="h-6 w-6" />
            <span className="text-xl font-bold">Islamic History Explorer</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            <Link href="/library" className="text-sm font-medium transition-colors hover:text-primary">
              Library
            </Link>
            <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
              Community
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/courses/golden-age" className="inline-flex items-center text-sm font-medium text-primary">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Module
            </Link>
            <h1 className="mt-2 text-3xl font-bold">{videoData.title}</h1>
            <p className="text-muted-foreground">{videoData.description}</p>
          </div>

          <div className="relative w-full overflow-hidden rounded-lg aspect-video bg-black mb-6">
            <img
              src="/placeholder.svg?height=720&width=1280"
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Video controls overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-full bg-background/20 text-white hover:bg-background/40 hover:text-white"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
              </Button>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-white text-sm">
                  <span>{videoData.currentTime}</span>
                  <span>{videoData.duration}</span>
                </div>
                <Slider
                  value={[progress]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setProgress(value[0])}
                  className="w-full [&>span:first-child]:h-1.5 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
                        onClick={() => setIsMuted(!isMuted)}
                      >
                        {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </Button>
                      <Slider
                        value={[isMuted ? 0 : volume]}
                        max={100}
                        step={1}
                        onValueChange={(value) => {
                          setVolume(value[0])
                          if (value[0] > 0) setIsMuted(false)
                        }}
                        className="w-20 [&>span:first-child]:h-1.5 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary"
                      />
                    </div>
                  </div>

                  <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20 hover:text-white">
                    <Maximize2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="transcript" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="resources">Related Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="transcript" className="border rounded-lg mt-6 p-4">
              <div className="space-y-4">
                {videoData.transcriptSections.map((section, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 p-2 rounded-lg ${progress > 25 && index === 2 ? "bg-muted" : ""}`}
                  >
                    <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">{section.time}</span>
                    <p className="text-sm">{section.text}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="notes" className="border rounded-lg mt-6 p-4">
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Take notes while watching the video. Your notes will be saved automatically.
                </p>
                <textarea
                  className="w-full min-h-[200px] p-3 rounded-md border resize-y bg-background"
                  placeholder="Type your notes here..."
                ></textarea>
                <div className="flex justify-end">
                  <Button>Save Notes</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="resources" className="border rounded-lg mt-6 p-4">
              <div className="space-y-4">
                <h3 className="font-medium">Additional Learning Resources</h3>
                <div className="grid gap-3">
                  {videoData.relatedResources.map((resource, index) => (
                    <Card key={index}>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base">{resource.title}</CardTitle>
                        <CardDescription>{resource.type}</CardDescription>
                      </CardHeader>
                      <CardFooter className="p-4 pt-2">
                        <Button variant="outline" size="sm">
                          View Resource
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/courses/golden-age/previous-lesson">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Lesson
              </Link>
            </Button>
            <Button asChild>
              <Link href="/courses/golden-age/quiz">
                Take Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Islamic History Explorer. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

