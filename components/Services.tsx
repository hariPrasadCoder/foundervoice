import React from 'react';
import { Section } from './ui/Section';
import { Target, Users, Mic2, BarChart2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <Section id="method" className="bg-background relative border-t border-white/5">
      
      {/* Background Ambient Orb */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mb-20 relative z-10">
        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Our Methodology</span>
        <h2 className="text-3xl md:text-5xl font-semibold text-white">Precision-engineered <br/> personal branding.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto relative z-10">
        
        {/* Large Card Left */}
        <div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white">
                <Mic2 size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">We capture your voice. <br/>Perfectly.</h3>
              <p className="text-gray-400 max-w-md">
                No generic AI content. No "bro-etry". We interview you, extract your insights, and turn them into compelling narratives. 
                You spend 1 hour a week talking. We handle the rest.
              </p>
            </div>
            
            {/* Audio Waveform Visual - Enhanced */}
            <div className="flex items-center gap-1.5 mt-12 h-16 opacity-70 group-hover:opacity-100 transition-opacity">
               {[...Array(24)].map((_, i) => (
                 <div 
                  key={i} 
                  className="w-1.5 bg-gradient-to-t from-white/10 to-white/60 rounded-full animate-music-bar" 
                  style={{
                    animationDelay: `-${Math.random()}s`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`
                  }}
                 ></div>
               ))}
            </div>
          </div>
        </div>

        {/* Tall Card Right */}
        <div className="md:col-span-1 md:row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col group hover:border-white/10 transition-colors">
           
           <div className="mb-8">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-8 text-white">
                <BarChart2 size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Data-Led Strategy</h3>
              <p className="text-gray-400 text-sm">
                We analyze what resonates with your specific market (DevOps, Fintech, AI) and double down.
              </p>
           </div>

           {/* Graph Visual */}
           <div className="flex-1 relative bg-surface/30 rounded-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors min-h-[200px]">
              
              {/* Grid Background */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              {/* Floating Data Tag */}
              <div className="absolute top-4 right-4 bg-primary/20 border border-primary/20 text-primary text-[10px] font-mono px-2 py-1 rounded full backdrop-blur-sm animate-pulse">
                 +245% GROWTH
              </div>

              {/* SVG Chart */}
              <div className="absolute inset-x-0 bottom-0 h-[80%]">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FF3300" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FF3300" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area */}
                  <path 
                    d="M0,100 L0,70 C20,60 30,80 50,50 C70,20 80,30 100,10 L100,100 Z" 
                    fill="url(#gradient)" 
                    className="opacity-60" 
                  />
                  
                  {/* Line */}
                  <path 
                    d="M0,70 C20,60 30,80 50,50 C70,20 80,30 100,10" 
                    fill="none" 
                    stroke="#FF3300" 
                    strokeWidth="2" 
                    vectorEffect="non-scaling-stroke"
                    className="drop-shadow-[0_0_10px_rgba(255,51,0,0.5)]"
                  />
                </svg>
                
                {/* Interactive Points */}
                <div className="absolute top-[10%] right-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#FF3300] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
                <div className="absolute top-[70%] left-[0%] w-2 h-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity delay-200"></div>
              </div>
           </div>
        </div>

        {/* Small Card 1 */}
        <div className="glass-panel rounded-3xl p-8 flex flex-col group hover:border-white/10 transition-colors relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
           <div className="flex items-start justify-between mb-auto relative z-10">
              <Target className="text-gray-500 group-hover:text-white transition-colors" />
              <span className="text-xs font-mono text-gray-600">01</span>
           </div>
           <div className="relative z-10">
             <h4 className="text-lg font-medium text-white mb-1">Deal Flow</h4>
             <p className="text-sm text-gray-500">Stay top of mind.</p>
           </div>
        </div>

        {/* Small Card 2 */}
        <div className="glass-panel rounded-3xl p-8 flex flex-col group hover:border-white/10 transition-colors relative overflow-hidden">
           <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
           <div className="flex items-start justify-between mb-auto relative z-10">
              <Users className="text-gray-500 group-hover:text-white transition-colors" />
              <span className="text-xs font-mono text-gray-600">02</span>
           </div>
           <div className="relative z-10">
             <h4 className="text-lg font-medium text-white mb-1">Network</h4>
             <p className="text-sm text-gray-500">Attract talent & partners.</p>
           </div>
        </div>

      </div>
    </Section>
  );
};