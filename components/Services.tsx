import React from 'react';
import { Section } from './ui/Section';
import { Target, Users, Activity, Globe, Mic2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <Section id="method" className="bg-background relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Large Card Left */}
        <div className="md:col-span-2 bento-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-8 text-primary">
              <Mic2 size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">We capture your voice. Perfectly.</h3>
            <p className="text-gray-400 max-w-md mb-8">
              No generic AI content. No "bro-etry". We interview you, extract your insights, and turn them into compelling narratives. 
              You spend 1 hour a month talking. We handle the rest.
            </p>
            
            {/* Visual element representing 'Distribution' */}
            <div className="grid grid-cols-3 gap-4 mt-12 opacity-50 group-hover:opacity-100 transition-opacity">
               {[1,2,3].map(i => (
                 <div key={i} className="h-24 rounded-lg bg-surfaceHighlight border border-white/5 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/50" style={{width: `${30 * i}%`}}></div>
                    <div className="p-3">
                       <div className="w-8 h-1 bg-white/20 rounded mb-2"></div>
                       <div className="w-full h-1 bg-white/10 rounded"></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Tall Card Right */}
        <div className="md:col-span-1 md:row-span-2 bento-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           
           <div>
              <div className="w-12 h-12 rounded-xl bg-surfaceHighlight border border-white/10 flex items-center justify-center mb-8 text-primary">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data-Led Strategy</h3>
              <p className="text-gray-400 text-sm mb-8">
                We don't guess. We analyze what resonates with your specific market (DevOps, Fintech, AI) and double down.
              </p>
           </div>

           {/* Animated Chart Visual */}
           <div className="relative h-48 w-full bg-surfaceHighlight/50 rounded-xl border border-white/5 overflow-hidden p-4">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                 <path d="M0 40 Q 25 40 35 25 T 70 20 T 100 5" fill="none" stroke="#FF4D00" strokeWidth="2" />
                 <path d="M0 40 Q 25 40 35 25 T 70 20 T 100 5 V 50 H 0 Z" fill="url(#gradient)" opacity="0.2" />
                 <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                       <stop offset="0%" stopColor="#FF4D00" />
                       <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                 </defs>
                 {/* Dot on line */}
                 <circle cx="70" cy="20" r="3" fill="#FF4D00" className="animate-pulse" />
              </svg>
              <div className="absolute top-4 left-4 text-xs font-mono text-primary">IMPRESSIONS +124%</div>
           </div>
        </div>

        {/* Small Card 1 */}
        <div className="bento-card rounded-3xl p-8 flex flex-col group">
           <div className="flex items-start justify-between mb-4">
              <Target className="text-gray-400 group-hover:text-primary transition-colors" />
              <span className="text-xs font-mono text-gray-500">01</span>
           </div>
           <h4 className="text-lg font-medium text-white mb-2">Deal Flow</h4>
           <p className="text-sm text-gray-400">Stay top of mind so deals come to you.</p>
        </div>

        {/* Small Card 2 */}
        <div className="bento-card rounded-3xl p-8 flex flex-col group">
           <div className="flex items-start justify-between mb-4">
              <Users className="text-gray-400 group-hover:text-primary transition-colors" />
              <span className="text-xs font-mono text-gray-500">02</span>
           </div>
           <h4 className="text-lg font-medium text-white mb-2">Network</h4>
           <p className="text-sm text-gray-400">Connect with partners, not just users.</p>
        </div>

      </div>
    </Section>
  );
};