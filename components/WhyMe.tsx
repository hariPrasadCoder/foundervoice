import React from 'react';
import { Section } from './ui/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const WhyMe: React.FC = () => {
  return (
    <Section id="why-us" className="bg-background border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* Text Side */}
        <div className="md:w-1/2">
           <div className="text-primary font-mono text-xs tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              FOUNDER TO FOUNDER
           </div>
           <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-8 leading-tight">
             I speak <br/>
             <span className="text-gray-600">your language.</span>
           </h2>
           <p className="text-lg text-secondary mb-8 leading-relaxed">
             Most agencies assign you a junior copywriter who doesn't know what an API is.
             <br/><br/>
             I'm a founder. I understand Cap Tables, ARR, and Product-Market Fit. I write content that respects your intelligence and your audience's time.
           </p>

           <div className="space-y-4">
              {[
                "Technical Depth: I can explain complex products simply.",
                "Proven Reach: 46,000+ organic followers. No ads.",
                "Zero Fluff: No engagement pods or fake virality."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-white" />
                  <span>{item}</span>
                </div>
              ))}
           </div>

           <a href="https://www.linkedin.com/in/hariprasad20/" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors group">
             Check my LinkedIn profile 
             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

        {/* Visual Side (Modern Profile Card) */}
        <div className="md:w-1/2 w-full">
           <div className="relative group">
              {/* Abstract glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="bg-[#050505] rounded-[24px] p-8 border border-white/10 relative overflow-hidden">
                 
                 {/* Scanning Line Animation */}
                 <div className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-scan pointer-events-none z-0"></div>

                 {/* Header */}
                 <div className="flex items-center justify-between mb-12 relative z-10">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-white/10">H</div>
                       <div>
                          <div className="text-white font-medium text-lg">Hari Prasad</div>
                          <div className="text-sm text-gray-500">Founder • 46k Followers</div>
                       </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>
                 </div>

                 {/* Stats Grid */}
                 <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
                    <div className="bg-surface p-4 rounded-xl border border-white/5 group/stat hover:border-white/10 transition-colors">
                       <div className="text-xs text-gray-500 font-mono mb-1">IMPRESSIONS</div>
                       <div className="text-2xl font-display font-bold text-white group-hover/stat:text-primary transition-colors">10.3M</div>
                    </div>
                    <div className="bg-surface p-4 rounded-xl border border-white/5 group/stat hover:border-white/10 transition-colors">
                       <div className="text-xs text-gray-500 font-mono mb-1">ENGAGEMENT</div>
                       <div className="text-2xl font-display font-bold text-white group-hover/stat:text-primary transition-colors">4.8%</div>
                    </div>
                 </div>

                 {/* Post Preview - Skeleton Loader Style */}
                 <div className="space-y-3 relative z-10">
                    <div className="h-2 w-3/4 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite_0.5s]"></div>
                    </div>
                    <div className="h-2 w-5/6 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite_1s]"></div>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </Section>
  );
};