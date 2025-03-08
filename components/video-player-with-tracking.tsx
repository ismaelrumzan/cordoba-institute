"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react"
import UserBehaviorTracker from "@/lib/user-behavior-tracker"

interface VideoPlayerWithTrackingProps {
  userId: string
  videoId: string
  videoUrl: string
  thumbnailUrl: string
}

export default function VideoPlayerWithTracking({
  userId,
  videoId,
  videoUrl,
  thumbnailUrl,
}: VideoPlayerWithTrackingProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const videoRef = useRef<HTMLVideoElement>(null)
  const behaviorTrackerRef = useRef<UserBehaviorTracker | null>(null)

  // Sections that have been watched (for tracking rewatches)
  const [watchedSections, setWatchedSections] = useState<Set<number>>(new Set())

  // Track pauses
  const [pauseCount, setPauseCount] = useState(0)

  // Track skips (seeking forward)
  const [skipCount, setSkipCount] = useState(0)

  useEffect(() => {
    // Initialize behavior tracker
    behaviorTrackerRef.current = new UserBehaviorTracker(userId)

    // Clean up on unmount
    return () => {
      // If video was watched to at least 90%, count it as completed
      if (progress >= 90) {
        behaviorTrackerRef.current?.trackVideoCompleted()
      }
    }
  }, [userId])

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setPauseCount((prev) => prev + 1)
        behaviorTrackerRef.current?.trackVideoPaused()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle seeking
  const handleSeek = (value: number[]) => {
    if (videoRef.current && duration) {
      const newTime = (value[0] / 100) * duration

      // If seeking forward more than 10 seconds, count as a skip
      if (newTime > currentTime + 10) {
        setSkipCount((prev) => prev + 1)
        behaviorTrackerRef.current?.trackVideoSkipped()
      }

      // If seeking backward more than 10 seconds, count as a rewatch
      if (newTime < currentTime - 10) {
        // Get the 10-second section that's being rewatched
        const section = Math.floor(newTime / 10)

        // If this section has already been watched, count as rewatch
        if (watchedSections.has(section)) {
          behaviorTrackerRef.current?.trackVideoRewatched()
        }
      }

      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
      setProgress(value[0])
    }
  }

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0] / 100
      videoRef.current.volume = newVolume
      setVolume(value[0])
      if (value[0] > 0) setIsMuted(false)
    }
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Update progress as video plays
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const newProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(newProgress)
      setCurrentTime(videoRef.current.currentTime)

      // Track which 10-second sections have been watched
      const section = Math.floor(videoRef.current.currentTime / 10)
      setWatchedSections((prev) => new Set(prev).add(section))
    }
  }

  // Set duration when metadata is loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // Handle video end
  const handleEnded = () => {
    setIsPlaying(false)
    behaviorTrackerRef.current?.trackVideoCompleted()
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg aspect-video bg-black">
      {/* For a real implementation, this would be a real video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        poster={thumbnailUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        style={{ display: "none" }} // Hidden for the prototype
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Placeholder image for the prototype */}
      <img
        src={thumbnailUrl || "/placeholder.svg"}
        alt="Video thumbnail"
        className="w-full h-full object-cover opacity-80"
      />

      {/* Video controls overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          size="icon"
          variant="ghost"
          className="h-16 w-16 rounded-full bg-background/20 text-white hover:bg-background/40 hover:text-white"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
        </Button>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-white text-sm">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <Slider
            value={[progress]}
            max={100}
            step={1}
            onValueChange={handleSeek}
            className="w-full [&>span:first-child]:h-1.5 [&>span:first-child]:bg-white/30 [&_[role=slider]]:bg-white [&_[role=slider]]:w-4 [&_[role=slider]]:h-4 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
                  onClick={toggleMute}
                >
                  {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
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
  )
}

