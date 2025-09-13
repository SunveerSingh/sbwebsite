import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  beforeSrc?: string;
  afterSrc: string;
  title: string;
  artist?: string;
  className?: string;
}

export default function AudioPlayer({ beforeSrc, afterSrc, title, artist, className = '' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isAfter, setIsAfter] = useState(!beforeSrc);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSrc = isAfter ? afterSrc : (beforeSrc || afterSrc);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = e.currentTarget;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`bg-transparent border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group ${className}`}>
      <audio ref={audioRef} src={currentSrc} />
      
      <div className="flex items-start justify-between mb-6">
        <div>
          <h4 className="text-white font-light text-lg mb-1 tracking-wide">{title}</h4>
          {artist && <p className="text-white/60 text-sm font-light tracking-wide">{artist}</p>}
        </div>
        
        {beforeSrc && (
          <div className="flex border border-white/30">
            <button
              onClick={() => setIsAfter(false)}
              className={`px-4 py-2 text-xs font-light tracking-wider transition-colors ${
                !isAfter 
                  ? 'bg-white text-black' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              BEFORE
            </button>
            <button
              onClick={() => setIsAfter(true)}
              className={`px-4 py-2 text-xs font-light tracking-wider transition-colors ${
                isAfter 
                  ? 'bg-white text-black' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              AFTER
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        </button>

        <div 
          className="flex-1 h-px bg-white/20 cursor-pointer group/progress"
          onClick={handleProgressClick}
        >
          <div 
            className="h-px bg-white transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-white/60 text-sm font-light min-w-[40px] text-right tracking-wider">
          {formatTime(currentTime)}
        </span>
      </div>
    </div>
  );
}