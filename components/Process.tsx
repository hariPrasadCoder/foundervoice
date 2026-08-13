import React from 'react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';

const steps = [
  { number: '01', title: 'We talk', lead: "A short conversation. That's the material." },
  { number: '02', title: 'I extract the stories', lead: "I find what's actually worth saying." },
  { number: '03', title: 'I write', lead: "Real posts, in your voice. Not something a prompt could've written." },
  { number: '04', title: 'You approve', lead: 'Change it, approve it, or skip it.' },
];

const Step: React.FC<{ step: (typeof steps)[number]; isLast: boolean }> = ({ step, isLast }) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <div ref={ref} className="flex gap-6 md:gap-8">
      <div className="flex flex-col items-center">
        <div
          className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-colors duration-500 ${
            inView ? 'bg-ink text-white' : 'bg-bg-soft text-ink-faint'
          }`}
        >
          {step.number}
        </div>
        {!isLast && (
          <div className="w-px flex-1 min-h-16 bg-line relative overflow-hidden mt-1">
            <div
              className="absolute inset-x-0 top-0 bg-ink transition-transform duration-700 ease-editorial origin-top"
              style={{ height: '100%', transform: inView ? 'scaleY(1)' : 'scaleY(0)' }}
            />
          </div>
        )}
      </div>
      <div className={`pb-14 reveal ${inView ? 'reveal-visible' : ''}`}>
        <h3 className="text-xl md:text-2xl font-display font-bold text-ink mb-1.5">{step.title}</h3>
        <p className="text-ink-soft leading-relaxed">{step.lead}</p>
      </div>
    </div>
  );
};

export const Process: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-white" narrow>
      <div className="mb-14 max-w-xl">
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">
          You talk. I handle the rest.
        </h2>
        <p className="text-ink-soft text-lg">
          You're running a company. You don't have two hours a week to sit down and write.
        </p>
      </div>

      <div>
        {steps.map((step, i) => (
          <Step key={step.number} step={step} isLast={i === steps.length - 1} />
        ))}
      </div>
    </Section>
  );
};
