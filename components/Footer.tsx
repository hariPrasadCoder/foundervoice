import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative">
      
      {/* Pricing / Offer Section */}
      <Section id="pricing" className="!py-0 mb-32">
         <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Simple, transparent models.</h2>
            <p className="text-secondary text-lg">No hidden fees. Pause or cancel anytime.</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
               <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
                  Monthly
               </span>
               <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background ${
                     isAnnual ? 'bg-white' : 'bg-gray-700'
                  }`}
                  role="switch"
                  aria-checked={isAnnual}
               >
                  <span
                     className={`inline-block h-5 w-5 transform rounded-full bg-black transition-transform ${
                        isAnnual ? 'translate-x-8' : 'translate-x-1'
                     }`}
                  />
               </button>
               <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
                  Annual
               </span>
            </div>
         </div>

         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1 (Highlighted - Full Ghostwriting) */}
            <div className="bg-white text-black rounded-3xl p-8 md:p-10 relative flex flex-col order-1 md:order-none hover:scale-[1.01] transition-transform duration-300">
               <div className="absolute top-8 right-8 px-3 py-1 bg-black/5 text-black text-[10px] font-bold tracking-widest uppercase rounded-full">
                  Popular
               </div>
               
               <div className="mb-8">
                  <div className="text-sm font-bold text-black/60 tracking-wider uppercase mb-2">Full Ghostwriting</div>
                  <div className="text-5xl font-bold mb-2">
                     {isAnnual ? '$3k' : '$4k'}
                     <span className="text-lg text-black/40 font-medium">/mo</span>
                  </div>
                  <p className="text-black/60 font-medium">
                     {isAnnual ? 'For 12 months' : 'For 3 months'}
                  </p>
               </div>
               
               <div className="space-y-4 mb-10 flex-1">
                  {['3-4 Strategic Posts / Week', 'Comment & Engagement Mgmt', 'Monthly Performance Report', 'Quarterly Strategy Refresh'].map(i => (
                     <div key={i} className="flex gap-3 text-sm font-medium">
                        <Check size={18} className="text-black shrink-0"/>
                        {i}
                     </div>
                  ))}
               </div>
               <Button 
                 className="w-full !bg-black !text-white hover:!bg-black/80 shadow-none border-none h-14 rounded-xl"
                 data-cal-namespace="foundervoice"
                 data-cal-link="hari-prasad/foundervoice"
                 data-cal-config='{"layout":"month_view"}'
               >
                 Book Strategy Call
               </Button>
            </div>

            {/* Card 2 (Multi-Executive/Custom) */}
            <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col order-2 md:order-none">
               <div className="mb-8">
                  <div className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-2">Multi-Executive</div>
                  <div className="text-5xl font-bold text-white mb-2">Custom</div>
                  <p className="text-gray-500">For larger founding teams.</p>
               </div>

               <div className="space-y-4 mb-10 flex-1">
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> For Founder + CTO/COO</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Company Page Sync</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> PR Integration</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Dedicated Account Manager</div>
               </div>
               <Button 
                 variant="outline" 
                 className="w-full h-14 rounded-xl"
                 data-cal-namespace="foundervoice"
                 data-cal-link="hari-prasad/foundervoice"
                 data-cal-config='{"layout":"month_view"}'
               >
                 Contact Sales
               </Button>
            </div>
         </div>

         {/* ROI Guarantee */}
         <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl p-6 md:p-8 flex items-start gap-4">
               <ShieldCheck size={24} className="text-white shrink-0 mt-1" />
               <div>
                  <h3 className="text-white font-semibold text-lg mb-2">ROI Guarantee</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                     If you don't get ROI within 3 months, we work for you for free for the next 3 months.
                  </p>
               </div>
            </div>
         </div>
      </Section>

      {/* Big Font Section */}
      <Section className="!py-0 mb-20 pb-20">
         <div className="text-center pb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-12">
               Ready to build<br/>
               <span className="text-gray-600">your voice?</span>
            </h2>
            <Button 
               className="!text-xl !px-12 !py-6 !h-auto !rounded-full !bg-gradient-to-r !from-white !to-gray-200 !text-black hover:!from-gray-100 hover:!to-gray-300 !shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:!shadow-[0_0_60px_rgba(255,255,255,0.4)] !scale-110 hover:!scale-115 transition-all duration-300"
               data-cal-namespace="foundervoice"
               data-cal-link="hari-prasad/foundervoice"
               data-cal-config='{"layout":"month_view"}'
            >
               Get Started Today
            </Button>
         </div>
      </Section>

      {/* Final Footer Links */}
      <div className="container mx-auto px-6 max-w-7xl pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2">
            <span className="text-white font-medium">FounderVoice</span>
         </div>
         
         <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Mission</a>
            <a href="#" className="hover:text-white transition-colors">Team</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
         </div>

         <div className="text-xs text-gray-600">
             © 2024 FounderVoice Inc.
         </div>
      </div>
    </footer>
  );
};