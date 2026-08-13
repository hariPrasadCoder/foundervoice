import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { metrics, credibilityMentions, links } from '../config/site';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import hariImage from '../images/hari.jpg';

const Stat: React.FC<{ m: (typeof metrics)['impressions']; start: boolean }> = ({ m, start }) => {
  const value = useCountUp(m.value, start);
  const done = value >= m.value;
  return (
    <div>
      <div className="font-display text-2xl font-extrabold text-ink tabular-nums">
        {value.toFixed(m.decimals)}
        {m.suffix}
        {done && '+'}
      </div>
      <div className="text-xs text-ink-faint mt-1">{m.label}</div>
    </div>
  );
};

export const About: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-[1fr_300px] gap-16 items-start">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl md:text-5xl font-black text-ink leading-tight mb-8 max-w-lg">
            You're working with me.
            <br />
            Not an account manager.
          </h2>

          <div className="space-y-4 text-lg text-ink-soft leading-relaxed max-w-xl">
            <p className="text-ink font-semibold">I'm Hari Prasad.</p>
            <p>
              Ivy League grad. Senior AI engineer. I think distribution is the moat, not the
              product. I've been exactly where you are: trying to get strangers to trust something
              new, with no budget to make that happen faster.
            </p>
            <p>
              So I built my own audience instead. It's reached millions of people and opened doors
              across countries, without spending a pound on ads: a TEDx talk, features in BBC and
              Financial Express, collaborations with UNITAR, AWS and Google. None of it was
              pitched. It found me because I kept posting.
            </p>
            <p>Most interesting people don't want to become content creators. They shouldn't have to.</p>
            <p className="text-ink font-medium">
              FounderVoice stays capped at 3 clients on purpose: I take three people seriously, or
              I take none. If you want a roster of junior writers, this isn't that.
            </p>
          </div>

          <div className="mt-8">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-ink font-semibold border-b-2 border-ink pb-1 transition-colors duration-300 hover:text-blue hover:border-blue"
            >
              See Hari on LinkedIn
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="rounded-2xl overflow-hidden border border-line aspect-[4/5]">
            <img
              src={hariImage}
              alt="Hari Prasad, founder of FounderVoice"
              className="w-full h-full object-cover"
              width={600}
              height={750}
              loading="lazy"
            />
          </div>

          <div ref={ref} className="mt-8 grid grid-cols-2 gap-4">
            <Stat m={metrics.impressions} start={inView} />
            <Stat m={metrics.followers} start={inView} />
          </div>

          {credibilityMentions.length > 0 && (
            <div className="mt-8 pt-6 border-t border-line text-xs text-ink-faint tracking-wide">
              {credibilityMentions.map((c) => c.label).join(' · ')}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
