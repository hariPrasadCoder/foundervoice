import React from 'react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';

export const Philosophy: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section className="bg-ink">
      <div ref={ref} className={`reveal ${inView ? 'reveal-visible' : ''} max-w-2xl`}>
        <p className="font-display text-2xl md:text-4xl font-bold text-white/50 mb-4">
          &ldquo;LinkedIn is cringe.&rdquo;
        </p>
        <p className="font-display text-2xl md:text-4xl font-bold text-white leading-snug">
          Sometimes, when it's growth-hacker bait and manufactured stories chasing engagement.
          Your product is already interesting. I just make sure it doesn't stay invisible.
        </p>
      </div>
    </Section>
  );
};
