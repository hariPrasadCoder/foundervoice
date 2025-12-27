import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Effects */}
      
      {/* 1. Animated Floating Blobs (Replaces spinning gradient) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        {/* Primary Orange Blob */}
        <div className="absolute top-[10%] left-[25%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] animate-blob mix-blend-screen opacity-50"></div>
        
        {/* Secondary Subtle Blob (Right) */}
        <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[128px] animate-blob mix-blend-screen opacity-40" style={{ animationDelay: '2s' }}></div>
        
        {/* Bottom Center Glow */}
        <div className="absolute bottom-[-20%] left-[40%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-30" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* 2. Static Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      
      {/* 3. Shooting Stars (Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-[20%] w-[1px] h-[100px] bg-gradient-to-b from-transparent via-white/50 to-transparent opacity-0 animate-shooting-star" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -top-10 right-[30%] w-[1px] h-[140px] bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 animate-shooting-star" style={{ animationDelay: '5s' }}></div>
      </div>

      <Section className="pt-32 md:pt-40 pb-20 text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 hover:border-primary/30 transition-colors cursor-default backdrop-blur-sm group">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
           <span className="text-xs font-semibold tracking-wide uppercase text-gray-300 group-hover:text-white transition-colors">Accepting Q4 Clients</span>
        </div>

        {/* Heading with Interactive Hover Effects & Fixed Gap */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05] cursor-default">
          <span className="block transition-all duration-500 hover:text-white/80 hover:tracking-wide">
            You build the product.
          </span>
          <span className="block -mt-1 md:-mt-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 transition-all duration-500 hover:from-primary hover:to-orange-400 hover:scale-[1.02] hover:text-glow-hover transform origin-center py-2 pb-4">
            We build your reputation.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          Premium ghostwriting for funded AI & SaaS founders. Turn your LinkedIn into a magnet for talent and investors—without writing a single word yourself.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 group">
          <Button showArrow className="px-10 py-4 text-base shadow-2xl shadow-primary/20 hover:shadow-primary/40">
             Apply for Access
          </Button>
          <span className="text-sm text-gray-500 hidden sm:block">or</span>
          <button className="text-sm text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-gray-500 pb-0.5">
            View Pricing
          </button>
        </div>

      </Section>
    </div>
  );
};