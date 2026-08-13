import React from 'react';
import { Section } from './ui/Section';
import { useInView } from '../hooks/useInView';
import { metrics } from '../config/site';

const compareRows = [
  { ads: 'Stops the second you stop paying', owned: 'Keeps compounding after you stop' },
  { ads: 'Costs the same for customer #1 and #1,000', owned: 'Gets cheaper with every post' },
  { ads: 'Forgotten in a scroll', owned: 'Remembered as a person' },
  { ads: 'Rented audience', owned: 'Owned audience' },
];

export const WhyLinkedIn: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <Section id="why-linkedin" className="bg-white">
      <div className="mb-14 max-w-xl">
        <p className="font-mono text-xs tracking-widest text-blue uppercase mb-3">The long game</p>
        <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-4">
          You can rent attention, or you can own it.
        </h2>
        <p className="text-ink-soft text-lg">
          Paid ads stop the second you stop paying. What you build here doesn't.
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Illustrative shape only — no axis numbers, so this never reads as a data claim. */}
        <div>
          <svg viewBox="0 0 460 190" fill="none" className="w-full h-auto" aria-hidden="true">
            <line x1="10" y1="170" x2="450" y2="170" stroke="#e3e6ea" strokeWidth="1" />
            <path
              d="M10,150 L60,55 L65,150 L140,60 L145,150 L220,65 L225,150 L300,70 L305,150 L450,148"
              stroke="#6b7178"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={`path-draw ${inView ? 'path-draw-visible' : ''}`}
              style={{ ['--dash-length' as string]: 950 }}
            />
            <path
              d="M10,150 C100,138 180,108 260,78 C320,52 380,28 450,12"
              stroke="#0a66c2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className={`path-draw ${inView ? 'path-draw-visible' : ''}`}
              style={{ ['--dash-length' as string]: 480, animationDelay: '250ms' }}
            />
          </svg>
          <div className="flex gap-6 mt-4">
            <span className="flex items-center gap-2 text-sm text-ink-soft">
              <span className="w-3.5 h-0.5 rounded-full bg-ink-faint" /> Paid ads
            </span>
            <span className="flex items-center gap-2 text-sm text-ink-soft">
              <span className="w-3.5 h-0.5 rounded-full bg-blue" /> What you build here
            </span>
          </div>
          <p className="text-xs text-ink-faint mt-2 italic">Illustrative: shape, not a data projection.</p>
        </div>

        <div className={`reveal ${inView ? 'reveal-visible' : ''}`}>
          <div className="border border-line rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="text-left font-mono text-[10px] tracking-widest text-ink-faint uppercase px-4 py-3">
                    Paid ads
                  </th>
                  <th className="text-left font-mono text-[10px] tracking-widest text-blue uppercase px-4 py-3">
                    This
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.ads} className="border-b border-line last:border-b-0">
                    <td className="px-4 py-3 text-ink-faint align-top">{row.ads}</td>
                    <td className="px-4 py-3 text-ink font-medium align-top">{row.owned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-tint border border-blue-tint-line rounded-xl px-5 py-4">
            <p className="text-sm text-blue-ink leading-relaxed">
              My own numbers: {metrics.impressions.display}+ impressions, {metrics.followers.display}+ followers,
              £0 spent on ads. Built one post at a time, starting from zero.
            </p>
          </div>
        </div>
      </div>

      <p className="text-base md:text-lg text-ink font-semibold mt-10 max-w-xl leading-snug">
        That's what you're actually paying for.
      </p>
    </Section>
  );
};
