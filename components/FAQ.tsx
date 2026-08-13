import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Section } from './ui/Section';
import { faqs } from '../config/site';
import { useInView } from '../hooks/useInView';

const FAQItem: React.FC<{ q: string; a: string; open: boolean; onToggle: () => void }> = ({
  q,
  a,
  open,
  onToggle,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div
      ref={ref}
      className={`border-t border-line first:border-t-0 reveal ${inView ? 'reveal-visible' : ''}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg md:text-xl font-bold text-ink">{q}</span>
        <Plus
          size={20}
          className={`shrink-0 text-ink-faint transition-transform duration-300 ease-editorial ${
            open ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-editorial ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-ink-soft leading-relaxed max-w-xl pb-6">{a}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-bg-soft" narrow>
      <div className="mb-4">
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">FAQ</h2>
        <p className="text-ink-soft text-lg">The questions people actually have, answered directly.</p>
      </div>

      <div>
        {faqs.map((f, i) => (
          <FAQItem
            key={f.q}
            q={f.q}
            a={f.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex((current) => (current === i ? null : i))}
          />
        ))}
      </div>
    </Section>
  );
};
