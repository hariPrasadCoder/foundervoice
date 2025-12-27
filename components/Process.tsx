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
                  { title: "02. The Content Sprint", desc: "I interview you once a week. Then I write everything. You review and approve." },
                  { title: "03. Growth & Iteration", desc: "We publish, engage, and report. You watch the opportunities roll in." }
               ].map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                     <div className="mt-1 font-mono text-primary opacity-50 group-hover:opacity-100 transition-opacity">{step.title.split('.')[0]}</div>
                     <div>
                        <h3 className="text-white font-medium group-hover:text-primary transition-colors">{step.title.split('. ')[1]}</h3>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="relative flex justify-center items-center py-10">
             {/* Complex Gyroscope Animation */}
             <div className="relative w-64 h-64 flex items-center justify-center">
                
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-spin-reverse-slow"></div>
                
                {/* Middle Ring */}
                <div className="absolute inset-12 rounded-full border border-white/10 animate-[spin_8s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(255,51,0,0.8)]"></div>
                </div>

                {/* Inner Ring */}
                <div className="absolute inset-20 rounded-full border border-primary/20 animate-[spin_4s_linear_infinite_reverse]"></div>

                {/* Core */}
                <div className="absolute w-16 h-16 rounded-full bg-primary/10 backdrop-blur-md flex items-center justify-center animate-pulse">
                   <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(255,77,0,0.8)]"></div>
                </div>

                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10"></div>
             </div>
         </div>
       </div>
    </Section>
  );
};