import React, { useEffect, useState } from 'react';
import { embedUrl } from '../../config/site';

interface LinkedInPostProps {
  urn: string;
  /** Visual (scaled-down) footprint width in px. Native LinkedIn embed is 504x668. */
  width: number;
  /** Delay before mounting the iframe, so it never competes with the hero's initial paint. */
  deferMs?: number;
  className?: string;
}

const NATIVE_W = 504;
const NATIVE_H = 668;

export const LinkedInPost: React.FC<LinkedInPostProps> = ({ urn, width, deferMs = 0, className = '' }) => {
  const [mounted, setMounted] = useState(false);
  const scale = width / NATIVE_W;
  const height = NATIVE_H * scale;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), deferMs);
    return () => clearTimeout(t);
  }, [deferMs]);

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-bg-soft ${className}`}
      style={{ width, height }}
    >
      {!mounted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-line border-t-blue animate-spin" />
        </div>
      )}
      {mounted && (
        <div
          className="fade-up-in absolute top-0 left-0"
          style={{ width: NATIVE_W, height: NATIVE_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
          <iframe
            src={embedUrl(urn)}
            width={NATIVE_W}
            height={NATIVE_H}
            title="A real LinkedIn post from Hari Prasad"
            loading="lazy"
            style={{ border: 'none' }}
          />
        </div>
      )}
    </div>
  );
};
