import React from 'react';
import { ThumbsUp, MessageCircle, Repeat2, Send } from 'lucide-react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';
import { productExample } from '../config/site';
import hariImage from '../images/hari.jpg';

const { rawIdea, postPreview, result } = productExample;

const Connector: React.FC<{ show: boolean; delay: string }> = ({ show, delay }) => (
  <div className="flex items-center justify-center py-1 lg:py-0 shrink-0">
    <svg width="56" height="28" viewBox="0 0 56 28" fill="none" className="hidden lg:block" aria-hidden="true">
      <path
        d="M2 14C16 4 40 4 54 14"
        stroke="#0A66C2"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={`path-draw ${show ? 'path-draw-visible' : ''}`}
        style={{ ['--dash-length' as string]: 90, animationDelay: delay }}
      />
      <path
        d="M47 8L54 14L47 20"
        stroke="#0A66C2"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className={`reveal ${show ? 'reveal-visible' : ''}`}
        style={{ transitionDelay: delay }}
      />
    </svg>
    <svg width="22" height="36" viewBox="0 0 22 36" fill="none" className="lg:hidden" aria-hidden="true">
      <path
        d="M11 2C4 12 4 20 11 32"
        stroke="#0A66C2"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={`path-draw ${show ? 'path-draw-visible' : ''}`}
        style={{ ['--dash-length' as string]: 50, animationDelay: delay }}
      />
      <path
        d="M5 25L11 32L17 25"
        stroke="#0A66C2"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className={`reveal ${show ? 'reveal-visible' : ''}`}
        style={{ transitionDelay: delay }}
      />
    </svg>
  </div>
);

export const Product: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <Section id="product" className="bg-bg-soft">
      <div className="mb-14 max-w-xl">
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">
          What this actually looks like
        </h2>
        <p className="text-ink-soft text-lg">A messy thought becomes a post people actually read.</p>
      </div>

      <div ref={ref} className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Raw idea, like a sticky note, slightly tilted */}
        <div
          className={`bg-white border border-line rounded-2xl p-6 -rotate-2 shadow-sm w-full lg:w-56 shrink-0 reveal ${
            inView ? 'reveal-visible' : ''
          }`}
        >
          <p className="font-mono text-[10px] tracking-widest text-ink-faint uppercase mb-3">Raw idea</p>
          <p className="font-display text-base text-ink leading-snug">&ldquo;{rawIdea}&rdquo;</p>
        </div>

        <Connector show={inView} delay="350ms" />

        {/* The post, a real LinkedIn post, truncated the way LinkedIn itself truncates it */}
        <div className={`w-full lg:w-[380px] shrink-0 reveal delay-2 ${inView ? 'reveal-visible' : ''}`}>
          <div className="bg-white border border-line rounded-2xl shadow-[0_20px_50px_rgba(11,11,12,0.08)] overflow-hidden">
            <div className="flex items-center gap-3 px-5 pt-4">
              <img src={hariImage} alt="" className="w-11 h-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-ink leading-tight">Hari Prasad</p>
                <p className="text-xs text-ink-faint leading-tight">Founder, FounderVoice · 1st</p>
              </div>
            </div>
            <div className="px-5 py-4 space-y-2.5">
              {postPreview.map((line) => (
                <p key={line} className="text-[0.9rem] text-ink leading-relaxed">
                  {line}
                </p>
              ))}
              <p className="text-[0.9rem] text-ink-faint">...see more</p>
            </div>
            <div className="flex items-center gap-5 px-5 py-3 border-t border-line text-ink-faint">
              <ThumbsUp size={16} />
              <MessageCircle size={16} />
              <Repeat2 size={16} />
              <Send size={16} />
            </div>
          </div>
        </div>

        <Connector show={inView} delay="700ms" />

        {/* Real result, pulled from LinkedIn's own post analytics */}
        <div
          className={`bg-ink rounded-2xl p-6 w-full lg:w-52 shrink-0 reveal delay-3 ${
            inView ? 'reveal-visible' : ''
          }`}
        >
          <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-4">Result</p>
          <div className="space-y-4">
            <div>
              <div className="font-display text-2xl font-extrabold text-white">{result.impressions}</div>
              <div className="text-xs text-white/50 mt-0.5">{result.impressionsLabel}</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-white">{result.reached}</div>
              <div className="text-xs text-white/50 mt-0.5">{result.reachedLabel}</div>
            </div>
            <div>
              <div className="font-display text-2xl font-extrabold text-white">{result.followersGained}</div>
              <div className="text-xs text-white/50 mt-0.5">{result.followersGainedLabel}</div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-base md:text-lg text-ink font-semibold mt-8 max-w-xl leading-snug">
        Most founders pay thousands a month to reach this many people. This post did it for free.
      </p>
      <p className="text-sm text-ink-faint mt-3">Real post. Real numbers. Nothing invented.</p>
    </Section>
  );
};
