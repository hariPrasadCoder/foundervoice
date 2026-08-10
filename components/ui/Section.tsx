import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Narrower measure for text-heavy sections. */
  narrow?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, narrow = false }) => {
  return (
    <section id={id} className={`py-20 md:py-28 relative ${className}`}>
      <div className={`mx-auto px-6 md:px-8 ${narrow ? 'max-w-3xl' : 'max-w-6xl'}`}>{children}</div>
    </section>
  );
};
