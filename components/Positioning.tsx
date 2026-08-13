import React from 'react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';

export const Positioning: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section className="bg-ink">
      <div ref={ref} className={`reveal ${inView ? 'reveal-visible' : ''} max-w-3xl`}>
        <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-[1.15] mb-8">
          I'm not trying to make you internet-famous.
          <br />
          I'm making sure the right people already trust you.
        </h2>
        <p className="text-lg text-white/70 max-w-xl leading-relaxed">
          It just takes enough presence that your next customer, investor or hire has already made
          up their mind about you before you've said a word, so every conversation starts halfway
          there, not from zero.
        </p>
      </div>
    </Section>
  );
};
