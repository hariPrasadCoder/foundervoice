import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/Button';
import { booking, capacity, linkedinEmbeds, postUrl } from '../config/site';
import { useScrollProgress } from '../hooks/useScrollProgress';

const audience = [
  'DTC FOUNDERS',
  'CONSUMER APP FOUNDERS',
  'MARKETPLACE FOUNDERS',
  'SUBSCRIPTION FOUNDERS',
  'BOOTSTRAPPED FOUNDERS',
  'FUNDED FOUNDERS',
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * Math.min(Math.max(t, 0), 1);
/** Maps progress to a 0-1 value scoped to [start, end], for staging distinct beats. */
const stage = (p: number, start: number, end: number) => Math.min(Math.max((p - start) / (end - start), 0), 1);
/** "273,789" -> "273K". Floors, never rounds up, so a trailing "+" is always honest. */
const shortNum = (n: string) => {
  const v = Number(n.replace(/,/g, ''));
  return v >= 1000 ? `${Math.floor(v / 1000)}K` : n;
};
/** Real, computed from the 4 posts' real impression counts. Never a made-up number. */
const combinedImpressions = shortNum(
  String(linkedinEmbeds.reduce((sum, p) => sum + Number(p.impressions.replace(/,/g, '')), 0))
);

// Text sits centered; cards flank it left/right so the hero reads balanced on
// wide screens instead of everything piling up on one side. Bigger + higher
// z-index reads as closer. On scroll, left cards part further left, right
// cards part further right, opening outward as the section exits.
const cardLayout = [
  { side: 'left', top: '10%', pos: '5%', width: 220, restRotate: -6, z: 40, entranceDelay: 150, exitY: -300, exitX: -90, exitRotate: -20, exitScale: 1.1, badge: 'impressions' as const },
  { side: 'right', top: '13%', pos: '5%', width: 188, restRotate: 8, z: 30, entranceDelay: 300, exitY: -260, exitX: 100, exitRotate: 18, exitScale: 1.05, badge: 'impressions' as const },
  { side: 'left', top: '55%', pos: '3%', width: 158, restRotate: -11, z: 20, entranceDelay: 450, exitY: -190, exitX: -80, exitRotate: -18, exitScale: 0.9, badge: 'reached' as const },
  { side: 'right', top: '58%', pos: '7%', width: 150, restRotate: 7, z: 10, entranceDelay: 600, exitY: -170, exitX: 85, exitRotate: 16, exitScale: 0.92, badge: 'reached' as const },
] as const;

const badgeText = (badge: 'impressions' | 'reached', post: (typeof linkedinEmbeds)[number]) =>
  badge === 'reached'
    ? `Reached ${shortNum(post.membersReached ?? post.impressions)}+ people`
    : `${shortNum(post.impressions)}+ impressions`;

export const Hero: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { ref: scrollRef, progress: rawProgress } = useScrollProgress<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  const [settled, setSettled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  // The pinned scroll-through-the-hero illusion only makes sense where the
  // floating cards exist (lg+). Below that, mobile/tablet gets a normal,
  // content-sized hero with a static photo grid instead, so nothing's lost.
  const [desktop, setDesktop] = useState(true);
  const pinned = desktop && !reducedMotion;
  const progress = pinned ? rawProgress : 0;

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(reduce);

    const mq = window.matchMedia('(min-width: 1024px)');
    const updateDesktop = () => setDesktop(mq.matches);
    updateDesktop();
    mq.addEventListener('change', updateDesktop);

    if (reduce) {
      setMounted(true);
      setSettled(true);
      return () => mq.removeEventListener('change', updateDesktop);
    }
    const raf = requestAnimationFrame(() => setMounted(true));
    const settleTimer = setTimeout(() => setSettled(true), 1150);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(settleTimer);
      mq.removeEventListener('change', updateDesktop);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      cursorRef.current.style.setProperty('--mx', x.toFixed(3));
      cursorRef.current.style.setProperty('--my', y.toFixed(3));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  const calProps = {
    'data-cal-namespace': booking.namespace,
    'data-cal-link': booking.calLink,
    'data-cal-config': JSON.stringify(booking.config),
  };

  const transitionClass = `transition-all ${settled ? 'duration-150' : 'duration-[750ms]'} ease-editorial`;

  // Text: slides up + fades in on mount, then exits on scroll (staged, not a flat fade).
  const textStyle = (entranceDelay: number, exitStart: number, exitEnd: number, exitDistance: number) => ({
    transform: `translateY(${mounted ? lerp(0, -exitDistance, stage(progress, exitStart, exitEnd)) : 26}px)`,
    opacity: mounted ? 1 - stage(progress, exitStart, exitEnd) : 0,
    transitionDelay: `${entranceDelay}ms`,
  });

  return (
    // Extra scroll distance drives the pinned exit animation, desktop only.
    <div ref={scrollRef} className={`relative ${pinned ? 'h-[240vh]' : ''}`}>
      <div className={pinned ? 'sticky top-0 h-screen overflow-hidden' : 'relative overflow-hidden'}>
        <div ref={cursorRef} className={`relative w-full ${pinned ? 'h-full' : ''} bg-blue overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* 4 real posts flanking the centered text: bigger/higher z-index reads as closer. */}
          {cardLayout.map((c, i) => {
            const post = linkedinEmbeds[i];
            if (!post) return null;
            const exitP = stage(progress, 0, 0.85);
            const rotate = lerp(c.restRotate, c.restRotate + c.exitRotate, exitP);
            const scale = lerp(mounted ? 1 : 0.8, c.exitScale, i === 0 || i === 1 ? stage(progress, 0, 0.6) : 0);
            const entranceY = mounted ? 0 : 70;
            const entranceRotate = mounted ? 0 : 18 * (i % 2 === 0 ? 1 : -1);
            const translateY = lerp(0, c.exitY, exitP) + entranceY;
            const translateX = lerp(0, c.exitX, exitP);
            const fadeStart = 0.42 + i * 0.04;
            const opacity = mounted ? 1 - stage(progress, fadeStart, fadeStart + 0.35) : 0;

            return (
              <a
                key={post.urn}
                href={postUrl(post.urn)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View this real LinkedIn post from Hari Prasad"
                className={`group hidden lg:block absolute ${transitionClass}`}
                style={{
                  top: c.top,
                  [c.side]: c.pos,
                  zIndex: c.z,
                  transitionDelay: mounted ? '0ms' : `${c.entranceDelay}ms`,
                  transform: `translate(calc(${translateX}px + var(--mx, 0) * ${8 + i * 3}px), calc(${translateY}px + var(--my, 0) * ${8 + i * 3}px)) rotate(${rotate + entranceRotate}deg) scale(${scale})`,
                  opacity,
                }}
              >
                <img
                  src={post.image}
                  alt="A real LinkedIn post from Hari Prasad"
                  width={c.width}
                  height={Math.round(c.width * 1.19)}
                  style={{ width: c.width }}
                  className="rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-[1.04] group-hover:shadow-[0_35px_80px_rgba(0,0,0,0.45)]"
                />
                <div className="mt-2 bg-white rounded-lg px-3 py-2 shadow-lg inline-block transition-transform duration-200 group-hover:scale-[1.04]">
                  <p className="font-display text-sm font-extrabold text-blue">{badgeText(c.badge, post)}</p>
                </div>
              </a>
            );
          })}

          <div
            className={`max-w-3xl mx-auto px-6 md:px-8 flex flex-col items-center text-center relative z-20 ${
              pinned ? 'h-full justify-center' : 'pt-40 md:pt-48 pb-14'
            }`}
          >
            <p
              className={`font-mono text-xs md:text-sm tracking-[0.18em] text-white/70 uppercase mb-6 ${transitionClass}`}
              style={textStyle(0, 0.05, 0.3, 50)}
            >
              FounderVoice · by Hari Prasad
            </p>

            <h1
              className={`font-display text-[2.75rem] leading-[1.05] sm:text-6xl sm:leading-[1.02] md:text-7xl md:leading-[0.98] font-black text-white mb-8 ${transitionClass}`}
              style={textStyle(80, 0.18, 0.48, 130)}
            >
              An audience is the cheapest channel you'll ever own.
            </h1>

            <p
              className={`text-lg md:text-2xl text-white/85 max-w-xl leading-snug mb-10 font-medium ${transitionClass}`}
              style={textStyle(160, 0.28, 0.56, 95)}
            >
              You talk. I turn it into LinkedIn content that builds it. You approve.
            </p>

            <div className={`flex flex-col items-center gap-5 ${transitionClass}`} style={textStyle(240, 0.35, 0.6, 70)}>
              <Button showArrow variant="primary" className="h-14 px-8 text-base" {...calProps}>
                Book a free call
              </Button>
              <p className="text-sm text-white/70">
                Free strategy call first · No commitment · {capacity.clientsLabel}
              </p>
            </div>

            {/* Mobile/tablet: no floating cards, so the same 4 real posts show as a static grid instead. */}
            <div className="lg:hidden grid grid-cols-2 gap-3 mt-12 w-full max-w-sm">
              {linkedinEmbeds.map((post, i) => (
                <a
                  key={post.urn}
                  href={postUrl(post.urn)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View this real LinkedIn post from Hari Prasad"
                  className={`block rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)] reveal ${
                    mounted ? 'reveal-visible' : ''
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <img src={post.image} alt="A real LinkedIn post from Hari Prasad" className="w-full h-auto" loading="lazy" />
                </a>
              ))}
            </div>
            <p
              className={`lg:hidden text-xs text-white/60 mt-4 reveal ${mounted ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: '750ms' }}
            >
              4 real posts · {combinedImpressions}+ combined impressions
            </p>
          </div>

          {/* Ticker band: stays fully visible and running the whole time it's pinned, never fades. */}
          <div
            className={`${pinned ? 'absolute bottom-0 inset-x-0' : 'relative mt-14'} z-20 border-t border-white/15 bg-blue-dark overflow-hidden ${transitionClass}`}
            style={{
              transform: `translateY(${mounted ? 0 : 24}px)`,
              opacity: mounted ? 1 : 0,
              transitionDelay: '380ms',
            }}
          >
            <div className="flex whitespace-nowrap py-4 marquee-track" style={{ contain: 'layout paint' }}>
              {[0, 1, 2, 3].map((copy) => (
                <div key={copy} className="flex items-center shrink-0" aria-hidden={copy !== 0}>
                  {audience.map((item) => (
                    <span key={item} className="flex items-center">
                      <span className="font-mono text-sm md:text-base font-bold text-white/90 tracking-wide px-4">
                        {item}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
