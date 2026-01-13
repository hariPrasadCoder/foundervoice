import React from 'react';
import { Section } from './ui/Section';
import { Clock, TrendingUp, Users, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section id="problem" className="bg-background relative border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            You're the bottleneck. <br/>
            <span className="text-gray-600">Not your product.</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            You build. You ship. You raise. But there's no public signal. Sales rely on outbound. Hiring feels like a pitch. LinkedIn feels risky or cringe.
          </p>
        </div>
        <div className="hidden md:block h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="grid md:grid-cols-4 gap-4">
         {[
            { icon: AlertCircle, title: "No Public Signal", text: "Your work happens in private. Prospects can't find you. Investors don't see execution." },
            { icon: TrendingUp, title: "Sales Friction", text: "Every conversation starts from zero. No credibility. No leverage." },
            { icon: Users, title: "Hiring Signal", text: "Top talent picks founders they know. If you're invisible, they won't consider you." },
            { icon: Clock, title: "LinkedIn Risk", text: "The platform feels noisy. Posting feels risky. You don't want to become a creator." }
         ].map((item, i) => (
            <div key={i} className="bg-surface/50 border border-white/5 p-8 rounded-2xl hover:bg-surface hover:border-white/10 transition-all duration-300 group hover:-translate-y-1">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                 <item.icon size={20} />
               </div>
               <h3 className="text-white font-medium text-lg mb-3">{item.title}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
            </div>
         ))}
      </div>
    </Section>
  );
};