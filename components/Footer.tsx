import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative">
      
      {/* Pricing / Offer Section */}
      <Section id="pricing" className="!py-0 mb-32">
         <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded bg-[#1A1A1A] border border-primary/20 text-primary text-xs font-mono mb-4 tracking-wider">
               INVESTMENT
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-white">Simple, transparent models <br/> for busy founders</h2>
         </div>

         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 (Highlighted - Full Ghostwriting) */}
            <div className="bg-[#0C0C0C] rounded-3xl p-8 border border-primary/30 relative flex flex-col shadow-2xl shadow-primary/5 order-1 md:order-none">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-[#1A1A1A] border border-primary/30 text-primary text-[10px] font-bold tracking-widest uppercase rounded">
                  Most Popular
               </div>
               <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-black mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
               </div>
               <div className="text-xs font-bold text-primary tracking-wider uppercase mb-2">Full Ghostwriting</div>
               <div className="text-3xl font-medium text-white mb-1">$4,000 <span className="text-sm text-gray-500 font-normal">/mo</span></div>
               <p className="text-sm text-gray-500 mb-6">We run your entire presence.</p>
               
               <div className="space-y-4 mb-8 flex-1">
                  {['3-4 Strategic Posts / Week', 'Comment & Engagement Mgmt', 'Monthly Performance Report', 'Quarterly Strategy Refresh'].map(i => (
                     <div key={i} className="flex gap-3 text-sm text-gray-300">
                        <div className="mt-0.5 min-w-4 min-h-4 rounded-full bg-primary/20 flex items-center justify-center">
                           <Check size={10} className="text-primary"/>
                        </div>
                        {i}
                     </div>
                  ))}
               </div>
               <Button variant="primary" fullWidth className="shadow-lg shadow-primary/20">Apply Now</Button>
            </div>

            {/* Card 2 (Multi-Executive/Custom) */}
            <div className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/5 flex flex-col hover:border-white/10 transition-colors order-2 md:order-none">
               <div className="w-10 h-10 rounded-lg bg-surfaceHighlight flex items-center justify-center text-gray-400 mb-6">E</div>
               <div className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-2">Multi-Executive</div>
               <div className="text-3xl font-medium text-white mb-6">Custom</div>
               <p className="text-sm text-gray-500 mb-6">For larger founding teams.</p>
               <div className="space-y-3 mb-8 flex-1">
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={16} className="text-primary"/> For Founder + CTO/COO</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={16} className="text-primary"/> Company Page Sync</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={16} className="text-primary"/> PR Integration</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={16} className="text-primary"/> Dedicated Account Manager</div>
               </div>
               <Button variant="outline" fullWidth>Contact Sales</Button>
            </div>
         </div>
      </Section>

      {/* Final Footer Links */}
      <div className="container mx-auto px-6 max-w-7xl pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-orange-700 rounded-lg flex items-center justify-center text-[10px] text-black font-bold">F</div>
            <span className="text-white font-medium">FounderVoice</span>
         </div>
         
         <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Mission</a>
            <a href="#" className="hover:text-primary transition-colors">Team</a>
            <a href="#" className="hover:text-primary transition-colors">Newsletter</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
         </div>

         <div className="flex gap-4">
             <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </div>
             <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </div>
         </div>
      </div>
    </footer>
  );
};