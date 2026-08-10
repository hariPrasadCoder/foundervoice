import React from 'react';
import { site, links, booking } from '../config/site';

export const Footer: React.FC = () => {
  const calProps = {
    'data-cal-namespace': booking.namespace,
    'data-cal-link': booking.calLink,
    'data-cal-config': JSON.stringify(booking.config),
  };

  return (
    <footer className="bg-ink py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="font-display text-lg font-bold text-white">FounderVoice</div>
          <div className="text-sm text-white/50 mt-0.5">by Hari Prasad</div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <button className="hover:text-white transition-colors" {...calProps}>
            Book a call
          </button>
          <a href={links.email} className="hover:text-white transition-colors">
            {site.email}
          </a>
        </nav>

        <div className="text-sm text-white/50 text-left md:text-right">
          <p>{site.location}</p>
          <p className="mt-0.5">© 2026 FounderVoice</p>
        </div>
      </div>
    </footer>
  );
};
