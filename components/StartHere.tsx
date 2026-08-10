import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { booking } from '../config/site';
import { useInView } from '../hooks/useInView';

export const StartHere: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  const calProps = {
    'data-cal-namespace': booking.namespace,
    'data-cal-link': booking.calLink,
    'data-cal-config': JSON.stringify(booking.config),
  };

  return (
    <Section className="bg-bg-soft">
      <div ref={ref} className={`reveal ${inView ? 'reveal-visible' : ''}`}>
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-14 max-w-lg">
          Start with a conversation.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className={`bg-white border border-line rounded-2xl p-8 reveal ${inView ? 'reveal-visible' : ''} delay-1`}>
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">01 · Free</p>
          <h3 className="text-xl font-display font-bold text-ink mb-2">Strategy call</h3>
          <p className="text-ink-soft leading-relaxed">
            30 minutes on what your LinkedIn is costing you right now: in trust, in customers, in
            deals going to whoever's louder than you. Even if we never work together.
          </p>
        </div>

        <div className={`bg-white border border-line rounded-2xl p-8 reveal ${inView ? 'reveal-visible' : ''} delay-2`}>
          <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">02 · If it's a fit</p>
          <h3 className="text-xl font-display font-bold text-ink mb-2">7-day trial</h3>
          <p className="text-ink-soft leading-relaxed">
            Try the real process for a week. No payment, no card, no contract. Then decide.
          </p>
        </div>
      </div>

      <div className={`reveal ${inView ? 'reveal-visible' : ''} delay-3`}>
        <Button showArrow variant="primary" className="h-14 px-8 text-base mb-4" {...calProps}>
          Book a free call
        </Button>
        <p className="text-sm text-ink-faint">30 minutes · No pitch deck · No commitment</p>
      </div>
    </Section>
  );
};
