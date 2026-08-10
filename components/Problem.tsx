import React from 'react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';

export const Problem: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="problem" className="bg-white">
      <div ref={ref} className={`reveal ${inView ? 'reveal-visible' : ''}`}>
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-[1.05] mb-6 max-w-2xl">
          You've probably posted on LinkedIn before. And felt nothing happen.
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
