import { useEffect, useRef, useState } from 'react';

/**
 * For a "pinned" scroll section: an outer element taller than the viewport,
 * with an inner `position: sticky` child that stays fixed while its parent
 * scrolls past. Attach this ref to the OUTER (tall) element, not the sticky
 * inner one, since a sticky element's own rect.top clamps to 0 while pinned
 * and can't tell you how far through the pin you are.
 *
 * 0 = pin hasn't started yet. 1 = pin is about to release.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const pinRange = rect.height - window.innerHeight;
      let p: number;
      if (pinRange <= 0) {
        p = rect.top <= 0 ? 1 : 0;
      } else if (rect.top >= 0) {
        p = 0;
      } else if (-rect.top >= pinRange) {
        p = 1;
      } else {
        p = -rect.top / pinRange;
      }
      setProgress(p);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, progress };
}
