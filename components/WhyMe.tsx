import React from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Activity, BarChart3, Globe2, Code2 } from 'lucide-react';

export const WhyMe: React.FC = () => {
  return (
    <Section id="why-me" className="bg-background">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="md:w-1/2">
           <div className="text-primary font-mono text-xs tracking-wider mb-6">FOUNDER TO FOUNDER</div>
           <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
             I speak <br/>
             <span className="text-gray-500">your language.</span>
           </h2>
           <p className="text-lg text-secondary mb-8">
             Most agencies assign you a junior copywriter who doesn't know what an API is.
             <br/><br/>
             I'm a founder. I understand Cap Tables, ARR, and Product-Market Fit. I write content that respects your intelligence and your audience's time.
           </p>

           <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-10 h-10 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Code2 size={18} className="text-white" />
                 </div>
                 <div>
                    <div className="text-white font-medium">Technical Depth</div>
                    <div className="text-sm text-gray-500">I can explain your complex product simply.</div>
                 </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-10 h-10 rounded-full bg-surfaceHighlight border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Globe2 size={18} className="text-white" />
                 </div>
                 <div>
                    <div className="text-white font-medium">Proven Reach</div>
                    <div className="text-sm text-gray-500">46,000+ organic followers. No ads.</div>
                 </div>
              </div>
           </div>

           <button className="mt-12 text-sm text-white border-b border-white/20 pb-1 hover:border-primary transition-colors flex items-center gap-2">
             Check my LinkedIn profile <ArrowRight size={14} />
           </button>
        </div>

        {/* Visual Side (Mock Dashboard) */}
        <div className="md:w-1/2 w-full">
           <div className="bg-[#0C0C0C] rounded-[32px] p-2 border border-white/10 shadow-2xl relative">
              {/* Phone Frame or Card */}
              <div className="bg-[#111] rounded-[24px] p-6 border border-white/5 relative overflow-hidden h-[500px] flex flex-col">
                 
                 {/* Card Header */}
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs">H</div>
                       <div>
                          <div className="text-sm text-white font-medium">Hari Prasad</div>
                          <div className="text-xs text-gray-500">Founder • 46k Followers</div>
                       </div>
                    </div>
                    <div className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-mono">
                       ACTIVE
                    </div>
                 </div>

                 {/* Main Stat */}
                 <div className="mb-8">
                    <div className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">Total Impressions</div>
                    <div className="text-4xl font-display font-bold text-white mb-2">2.4M<span className="text-gray-600 text-2xl">.00</span></div>
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-900/20 text-green-400 text-xs">
                       <Activity size={12} />
                       +12.4% this week
                    </div>
                 </div>

                 {/* Chart Visual */}
                 <div className="flex-1 relative w-full">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                       <path d="M0 100 C 50 100, 100 50, 150 70 S 250 20, 350 10" stroke="#FF4D00" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" />
                       <defs>
                          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.2"/>
                             <stop offset="100%" stopColor="#FF4D00" stopOpacity="0"/>
                          </linearGradient>
                       </defs>
                       <path d="M0 100 C 50 100, 100 50, 150 70 S 250 20, 350 10 V 200 H 0 Z" fill="url(#chartFill)" />
                    </svg>
                 </div>

                 {/* Bottom Actions */}
                 <div className="grid grid-cols-3 gap-3 mt-6">
                    {['Posts', 'Leads', 'Network'].map((item, i) => (
                       <div key={i} className="bg-surfaceHighlight rounded-xl p-3 flex flex-col items-center justify-center border border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
                          <div className={`w-2 h-2 rounded-full mb-2 ${i===0 ? 'bg-orange-500' : 'bg-gray-600'}`} />
                          <span className="text-[10px] text-gray-400">{item}</span>
                       </div>
                    ))}
                 </div>

              </div>

              {/* Floating Element 1 */}
              <div className="absolute -right-8 top-20 bg-[#151515] p-4 rounded-xl border border-white/10 shadow-xl animate-float">
                 <div className="text-xs text-gray-500 font-mono mb-1">INBOUND LEADS</div>
                 <div className="text-xl font-bold text-white">142</div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute -left-6 bottom-32 bg-[#151515] p-4 rounded-xl border border-white/10 shadow-xl animate-float-delayed">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="text-xs text-white font-medium">New Partnership</div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </Section>
  );
};