import React from 'react';
import { Section } from './ui/Section';

export const Process: React.FC = () => {
  return (
    <Section className="bg-background">
       <div className="grid md:grid-cols-2 gap-12 items-center">
         <div>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">How we work</h2>
            <p className="text-secondary mb-8">
               A simple, high-touch process designed for busy founders. 
               We do the heavy lifting. You stay in control.
            </p>
            <div className="space-y-6">
               {[
                  { title: "01. Strategy Deep Dive", desc: "One 60-min call to map your narrative, audience, and key themes." },
                  { title: "02. The Content Sprint", desc: "I interview you once a month. Then I write everything. You review and approve." },
                  { title: "03. Growth & Iteration", desc: "We publish, engage, and report. You watch the opportunities roll in." }
               ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                     <div className="mt-1 font-mono text-primary opacity-50">{step.title.split('.')[0]}</div>
                     <div>
                        <h3 className="text-white font-medium">{step.title.split('. ')[1]}</h3>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="relative">
             {/* Abstract Visual for Process */}
             <div className="aspect-square rounded-full bg-gradient-to-tr from-surfaceHighlight to-black border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="w-2/3 h-2/3 rounded-full border border-white/10 flex items-center justify-center relative">
                   <div className="absolute inset-0 border-t border-primary/50 rounded-full animate-spin duration-[10s]"></div>
                   <div className="w-1/2 h-1/2 rounded-full bg-primary/10 backdrop-blur-md flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(255,77,0,0.5)]"></div>
                   </div>
                </div>
             </div>
         </div>
       </div>
    </Section>
  );
};