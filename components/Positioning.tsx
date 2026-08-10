import React from 'react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';

export const Positioning: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section className="bg-ink">
      <div ref={ref} className={`reveal ${inView ? 'reveal-visible' : ''} max-w-3xl`}>
        <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-[1.15] mb-8">
          I'm not trying to make you an influencer.
          <br />
          I'm making sure your customers trust you before they buy.
        </h2>
        <p className="text-lg text-white/70 max-w-xl leading-relaxed">
          Not follower counts. Not viral posts. Just enough presence that customers, investors and
          future hires already trust you before you've said a word to them directly, so the sale,
          the raise or the hire starts further along than it used to.
        </p>
      </div>
    </Section>
  );
};
