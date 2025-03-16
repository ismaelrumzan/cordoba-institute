"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Headphones,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";

interface ModuleAudioPlayerProps {
  title: string;
  audioSrc: string;
  onToggleExpanded?: (expanded: boolean) => void;
}

export function ModuleAudioPlayer({
  title,
  audioSrc,
  onToggleExpanded,
}: ModuleAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState("1");

  const audioRef = useRef<HTMLAudioElement>(null);

  // Format time in MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle seeking
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      const newVolume = value[0] / 100;
      audioRef.current.volume = newVolume;
      setVolume(value[0]);
      if (value[0] > 0) setIsMuted(false);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle playback rate change
  const handlePlaybackRateChange = (value: string) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = Number.parseFloat(value);
      setPlaybackRate(value);
    }
  };

  // Skip forward/backward
  const skip = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.min(
        Math.max(audioRef.current.currentTime + seconds, 0),
        duration
      );
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Update time as audio plays
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Set duration when metadata is loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handle audio end
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Toggle expanded view
  const toggleExpanded = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    if (onToggleExpanded) {
      onToggleExpanded(newExpandedState);
    }
  };

  // Calculate progress percentage
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Effect to update volume when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  return (
    <Card className="mb-6 overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-emerald-800 to-teal-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5" />
              <h3 className="font-medium">Audio Version: {title}</h3>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${"max-h-96"} overflow-hidden`}>
          <div className="p-4">
            <audio
              ref={audioRef}
              src={audioSrc}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              className="hidden"
            />

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <Slider
                value={[progressPercentage]}
                max={100}
                step={0.1}
                onValueChange={handleSeek}
                className="w-full"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => skip(-10)}
                        className="h-8 w-8">
                        <SkipBack className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Back 10 seconds</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button
                  variant="default"
                  size="icon"
                  onClick={togglePlayPause}
                  className="h-10 w-10 rounded-full">
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => skip(10)}
                        className="h-8 w-8">
                        <SkipForward className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Forward 10 seconds</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMute}
                    className="h-8 w-8">
                    {isMuted || volume === 0 ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4" />
                    )}
                  </Button>
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    max={100}
                    step={1}
                    onValueChange={handleVolumeChange}
                    className="w-20"
                  />
                </div>

                <Select
                  value={playbackRate}
                  onValueChange={handlePlaybackRateChange}>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Speed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.5">0.5x</SelectItem>
                    <SelectItem value="0.75">0.75x</SelectItem>
                    <SelectItem value="1">1x</SelectItem>
                    <SelectItem value="1.25">1.25x</SelectItem>
                    <SelectItem value="1.5">1.5x</SelectItem>
                    <SelectItem value="2">2x</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
