import React from 'react';
import { Section } from './ui/Section';

export const Reframe: React.FC = () => {
  return (
    <Section className="text-center bg-background relative overflow-visible z-20">
       
       <div className="max-w-5xl mx-auto">
         <h2 className="font-display text-4xl md:text-6xl font-medium mb-12 text-white">
           Your profile isn't social media. <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">It's a business asset.</span>
         </h2>
         
         <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            <div className="bg-[#080808] p-8 hover:bg-[#111] transition-colors group">
               <h3 className="text-lg font-medium text-white mb-3 group-hover:text-primary transition-colors">Attract Talent</h3>
               <p className="text-sm text-gray-500 leading-relaxed">Engineers and execs want to work for visionaries. Show them how you think, and the hiring pipeline fills itself.</p>
            </div>
            <div className="bg-[#080808] p-8 hover:bg-[#111] transition-colors group">
               <h3 className="text-lg font-medium text-white mb-3 group-hover:text-primary transition-colors">Secure Funding</h3>
               <p className="text-sm text-gray-500 leading-relaxed">Investors back lines, not dots. Consistent public updates prove execution ability before you even open the deck.</p>
            </div>
            <div className="bg-[#080808] p-8 hover:bg-[#111] transition-colors group">
               <h3 className="text-lg font-medium text-white mb-3 group-hover:text-primary transition-colors">Shorten Sales Cycles</h3>
               <p className="text-sm text-gray-500 leading-relaxed">When prospects already know your philosophy, the first sales call isn't an interrogation—it's a consultation.</p>
            </div>
         </div>
       </div>
    </Section>
  );
};