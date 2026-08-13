import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { booking, calBookingUrl, capacity } from '../config/site';
import { useInView } from '../hooks/useInView';

export const FinalCTA: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const calProps = {
    'data-cal-namespace': booking.namespace,
    'data-cal-link': booking.calLink,
    'data-cal-config': JSON.stringify(booking.config),
  };

  return (
    <Section className="bg-blue text-center">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div ref={ref} className={`reveal ${inView ? 'reveal-visible' : ''} relative z-10`}>
        <h2 className="font-display text-4xl md:text-6xl font-black text-white leading-[1.05] mb-10 max-w-3xl mx-auto text-balance">
          Your customers are deciding who to trust.
          <br />
          Make sure it's you.
        </h2>

        <Button
          showArrow
          variant="inverse"
          className="h-14 px-8 text-base mb-5"
          href={calBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          {...calProps}
        >
          Book a free call
        </Button>

        <p className="text-sm text-white/85">
          30 minutes · No pitch deck · No commitment · {capacity.clientsLabel}
        </p>
      </div>
    </Section>
  );
};
