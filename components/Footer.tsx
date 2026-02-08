import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isUK, setIsUK] = useState(false);

  useEffect(() => {
    // Detect UK location based on IP geolocation (works with VPN)
    const detectLocation = async () => {
      try {
        // Use IP-based geolocation API to detect actual country
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Check if country code is UK (GB)
        const isUKCountry = data.country_code === 'GB';
        setIsUK(isUKCountry);
      } catch (error) {
        // Fallback to timezone/locale if API fails
        console.error('Failed to detect location:', error);
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const isUKTimezone = timezone === 'Europe/London' || timezone === 'Europe/Guernsey' || timezone === 'Europe/Jersey' || timezone === 'Europe/Isle_of_Man';
        
        const locale = navigator.language || (navigator as any).userLanguage;
        const isUKLocale = locale?.toLowerCase().includes('gb') || locale?.toLowerCase().includes('uk');
        
        setIsUK(isUKTimezone || isUKLocale);
      }
    };
    
    detectLocation();
  }, []);

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative">
      
      {/* Engagement Model Section */}
      <Section id="pricing" className="!py-0 mb-32">
         <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Engagement Model</h2>
            <p className="text-secondary text-lg">3-month contract. Limited founders. High-touch, premium.</p>
         </div>

         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1 (Highlighted - 3-Month Contract) */}
            <div className="bg-white text-black rounded-3xl p-8 md:p-10 relative flex flex-col order-1 md:order-none hover:scale-[1.01] transition-transform duration-300">
               <div className="absolute top-8 right-8 px-3 py-1 bg-black/5 text-black text-[10px] font-bold tracking-widest uppercase rounded-full">
                  Start Here
               </div>
               
               <div className="mb-8">
                  <div className="text-sm font-bold text-black/60 tracking-wider uppercase mb-2">3-Month Contract</div>
                  <div className="text-5xl font-bold mb-2">
                     {isUK ? '£4,000' : '$4,000'}
                     <span className="text-lg text-black/40 font-medium">/month</span>
                  </div>
                  <p className="text-black/60 font-medium mb-3">
                     Limited capacity. Premium engagement.
                  </p>
                  <p className="text-black/80 text-sm leading-relaxed">
                     A 3-month commitment ensures focus, priority, and real execution. Time to build momentum and see results.
                  </p>
               </div>
               
               <div className="space-y-4 mb-10 flex-1">
                  {['Strategy call to align', '3-month engagement', 'High-touch execution', 'Outcome-focused approach', '24/7 support'].map(i => (
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
                 data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
               >
                 Book a Strategy Call
               </Button>
            </div>

            {/* Card 2 (Ongoing Engagement) */}
            <div className="bg-[#0A0A0A] rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col order-2 md:order-none">
               <div className="mb-8">
                  <div className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-2">Ongoing Engagement</div>
                  <div className="text-5xl font-bold text-white mb-2">Custom</div>
                  <p className="text-gray-500 mb-3">After initial contract.</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     Continuation happens only after the initial 3-month engagement. Ongoing engagement is monthly and premium.
                  </p>
               </div>

               <div className="space-y-4 mb-10 flex-1">
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Consistent distribution</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Strategic positioning</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Outcome tracking</div>
                  <div className="flex gap-3 text-sm text-gray-400"><Check size={18} className="text-white shrink-0"/> Premium support</div>
               </div>
               <Button 
                 variant="outline" 
                 className="w-full h-14 rounded-xl"
                 data-cal-namespace="foundervoice"
                 data-cal-link="hari-prasad/foundervoice"
                 data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
               >
                 Book Strategy Call
               </Button>
            </div>
         </div>
      </Section>

      {/* Big Font Section */}
      <Section className="!py-0 mb-20 pb-20">
         <div className="text-center pb-16">
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-12">
               Ready to turn your work<br/>
               <span className="text-gray-600">into leverage?</span>
            </h2>
            <Button 
               className="!text-xl !px-12 !py-6 !h-auto !rounded-full !bg-gradient-to-r !from-white !to-gray-200 !text-black hover:!from-gray-100 hover:!to-gray-300 !shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:!shadow-[0_0_60px_rgba(255,255,255,0.4)] !scale-110 hover:!scale-115 transition-all duration-300"
               data-cal-namespace="foundervoice"
               data-cal-link="hari-prasad/foundervoice"
               data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
               Book a Strategy Call
            </Button>
         </div>
      </Section>

      {/* Final Footer Links */}
      <div className="container mx-auto px-6 max-w-7xl pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex items-center gap-2">
            <span className="text-white font-medium">FounderVoice</span>
         </div>
         
         <div className="flex gap-8 text-sm text-gray-500">
            <a href="/book/" className="hover:text-white transition-colors">Book</a>
            <a href="#" className="hover:text-white transition-colors">Mission</a>
            <a href="#" className="hover:text-white transition-colors">Team</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
         </div>

         <div className="text-xs text-gray-600">
             © 2026 FounderVoice Inc.
         </div>
      </div>
    </footer>
  );
};