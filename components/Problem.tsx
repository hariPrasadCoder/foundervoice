import React from 'react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';

export const Problem: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="problem" className="bg-white">
      <div ref={ref} className={`reveal ${inView ? 'reveal-visible' : ''}`}>
        <div className="mb-6">
          <p className="font-mono text-[10px] tracking-widest text-ink-faint uppercase mb-2">Engagement</p>
          <svg width="160" height="36" viewBox="0 0 200 40" fill="none" aria-hidden="true">
            <path
              d="M2,32 L18,15 L30,30 L48,10 L62,32 L80,22 L98,32 L200,32"
              stroke="#6b7178"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={`path-draw ${inView ? 'path-draw-visible' : ''}`}
              style={{ ['--dash-length' as string]: 240, animationDelay: '150ms' }}
            />
          </svg>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-[1.05] mb-6 max-w-2xl">
          You've posted on LinkedIn before. And felt nothing happen.
        </h2>
        <p className="text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
          A few posts when you had time. Maybe a burst before a launch. Then it went quiet: no
          compounding, no inbound, nothing you could trace back to a customer.{' '}
          <span className="text-ink font-semibold">
            That's not a discipline problem. It's a systems problem.
          </span>
        </p>
      </div>
    </Section>
  );
};
