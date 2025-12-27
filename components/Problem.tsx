import React from 'react';
import { Section } from './ui/Section';
import { Clock, TrendingUp, Users, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section id="problem" className="bg-background relative">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">
          Great product. <br/>
          <span className="text-gray-600">Invisible founder.</span>
        </h2>
        <p className="text-secondary text-lg">
          You've raised the round and shipped the features. But nobody knows the story behind it.
          Silence is expensive when you're trying to scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
            { icon: Clock, title: "Zero Time", text: "You have investor updates to write and fires to fight. LinkedIn is last on the list." },
            { icon: TrendingUp, title: "Talent War", text: "Top engineers pick founders, not just job descriptions. If they can't find you, they won't join you." },
            { icon: Users, title: "Trust Gap", text: "Enterprise buyers and VCs back people they know. Your logo isn't enough." },
            { icon: AlertCircle, title: "No Narrative", text: "The market defines you if you don't define yourself. Don't let competitors control the story." }
         ].map((item, i) => (
            <div key={i} className="bg-surfaceHighlight/50 border border-white/5 p-6 rounded-2xl hover:border-primary/20 transition-all group">
               <item.icon className="text-gray-500 group-hover:text-primary mb-4 transition-colors" size={24} />
               <h3 className="text-white font-medium mb-2">{item.title}</h3>
               <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
            </div>
         ))}
      </div>
    </Section>
  );
};