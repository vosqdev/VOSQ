import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { cn } from '@/lib/utils';

interface HlsVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function HlsVideo({ src, className, autoPlay = true, loop = true, muted = true, playsInline = true, ...props }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const isHls = src.includes('.m3u8');

    if (!isHls) {
      // Direct native video file (MP4, WebM, etc.)
      video.src = src;
      if (autoPlay) {
        video.play().catch(() => {
          // Browser autoplay restriction handling
        });
      }
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        maxBufferLength: 30,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch(() => {});
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        if (autoPlay) {
          video.play().catch(() => {});
        }
      });
    }
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={cn('object-cover', className)}
      playsInline={playsInline}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      {...props}
    />
  );
}
