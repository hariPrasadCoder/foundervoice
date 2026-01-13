import React from 'react';
import { Section } from './ui/Section';

export const Process: React.FC = () => {
  return (
    <Section id="methodology" className="bg-background">
       <div className="grid md:grid-cols-2 gap-12 items-center">
         <div>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">How It Works</h2>
            <p className="text-secondary mb-8">
               Three simple steps. No complexity.
            </p>
            <div className="space-y-6">
               {[
                  { title: "01. Capture Real Signals", desc: "We extract insights from your actual work. Product decisions. Customer conversations. Technical challenges." },
                  { title: "02. Turn Into Credible Narratives", desc: "We transform your work into public signals. No fluff. No hype. Just credible positioning." },
                  { title: "03. Distribute Consistently", desc: "We publish without your effort. You approve or ignore. Distribution happens automatically." }
               ].map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                     <div className="mt-1 font-mono text-primary opacity-50 group-hover:opacity-100 transition-opacity">{step.title.split('.')[0]}</div>
                     <div>
                        <h3 className="text-white font-medium group-hover:text-primary transition-colors">{step.title.split('. ')[1]}</h3>
                        <p className="text-sm text-gray-500">{step.desc}</p>
                        {i === 0 && (
                           <div className="mt-4 text-sm text-gray-500">
                              <p className="font-medium text-gray-400 mb-2">Minimal input, by design</p>
                              <p className="mb-1">Most founders spend a few minutes per week.</p>
                              <p className="mb-1">We ask 1–2 specific questions when something happens (a launch, a decision, a hire, a win or loss).</p>
                              <p className="mb-1">You reply in a sentence, a voice note, or not at all.</p>
                              <p>We handle the rest.</p>
                           </div>
                        )}
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