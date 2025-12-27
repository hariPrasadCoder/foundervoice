import React from 'react';
import { Section } from './ui/Section';
import { Clock, TrendingUp, Users, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section id="problem" className="bg-background relative border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Great product. <br/>
            <span className="text-gray-600">Invisible founder.</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            You've raised the round and shipped the features. But nobody knows the story behind it.
            Silence is expensive when you're trying to scale.
          </p>
        </div>
        <div className="hidden md:block h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="grid md:grid-cols-4 gap-4">
         {[
            { icon: Clock, title: "Zero Time", text: "You have investor updates to write and fires to fight. LinkedIn is last on the list." },
            { icon: TrendingUp, title: "Talent War", text: "Top engineers pick founders, not just job descriptions. If they can't find you, they won't join you." },
            { icon: Users, title: "Trust Gap", text: "Enterprise buyers and VCs back people they know. Your logo isn't enough." },
            { icon: AlertCircle, title: "No Narrative", text: "The market defines you if you don't define yourself. Don't let competitors control the story." }
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