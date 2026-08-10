import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { booking, capacity, pricing } from '../config/site';
import { useInView } from '../hooks/useInView';

export const Pricing: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  const calProps = {
    'data-cal-namespace': booking.namespace,
    'data-cal-link': booking.calLink,
    'data-cal-config': JSON.stringify(booking.config),
  };

  return (
    <Section id="pricing" className="bg-white">
      <div className="text-center max-w-lg mx-auto mb-14">
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight">
          One service. One price.
        </h2>
      </div>

      <div
        ref={ref}
        className={`max-w-md mx-auto border-2 border-ink rounded-3xl p-8 md:p-10 reveal ${
          inView ? 'reveal-visible' : ''
        }`}
      >
        <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">Ongoing</p>
        <h3 className="font-display text-2xl font-bold text-ink mb-4">FounderVoice</h3>
        <div className="mb-8">
          <span className="font-display text-4xl font-black text-ink">From {pricing.startingPrice}</span>
          <span className="text-ink-faint">{pricing.cadence}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {pricing.features.map((f) => (
            <li key={f} className="flex gap-3 text-ink-soft text-sm leading-relaxed">
              <Check size={16} className="text-blue shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        <p className="text-sm text-ink-soft leading-relaxed mb-8">
          Less than a single week of testing paid ads. Except this keeps working after you stop
          paying for it. One converted customer can cover the month, and you keep the audience,
          the posts and the story either way.
        </p>

        <div className="border-t border-line pt-6 mb-8 space-y-1 text-sm text-ink-soft">
          <p className="text-ink font-medium">You work directly with me. No account managers.</p>
          <p>{pricing.model}</p>
        </div>

        <Button showArrow variant="primary" fullWidth className="h-14 text-base mb-4" {...calProps}>
          Try working together
        </Button>
        <p className="text-center text-sm text-ink-faint">{capacity.clientsLabel}</p>
      </div>
    </Section>
  );
};
