import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { booking } from '../config/site';

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About Hari', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const calProps = {
    'data-cal-namespace': booking.namespace,
    'data-cal-link': booking.calLink,
    'data-cal-config': JSON.stringify(booking.config),
  };

  return (
    <>
      <header className="fixed top-4 md:top-5 inset-x-0 z-50 px-4">
        <nav className="mx-auto max-w-5xl h-16 flex items-center justify-between bg-white rounded-full shadow-[0_2px_24px_rgba(11,11,12,0.08)] px-5 md:px-3 md:pl-6">
          <a href="/" className="flex flex-col leading-tight shrink-0">
            <span className="font-display text-base font-extrabold text-ink tracking-tight">FounderVoice</span>
            <span className="text-[10px] text-ink-faint font-mono tracking-wide -mt-0.5">by Hari Prasad</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="primary" className="!px-5 !py-2.5 !text-sm" {...calProps}>
              Book a free call
            </Button>
          </div>

          <button
            className="md:hidden text-ink p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-display font-bold text-ink py-4 border-b border-line"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8">
              <Button fullWidth variant="primary" onClick={() => setIsMobileMenuOpen(false)} {...calProps}>
                Book a free call
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
