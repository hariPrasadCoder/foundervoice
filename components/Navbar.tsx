import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Method', href: '#method' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className={`
          pointer-events-auto
          flex items-center justify-between 
          transition-all duration-500 ease-out
          ${isScrolled ? 'w-[90%] md:w-[600px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 py-2.5 px-4 rounded-full' : 'w-full max-w-7xl py-4 bg-transparent border-transparent'}
        `}>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-10">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              F
            </div>
            <span className={`text-lg font-semibold tracking-tight text-white transition-opacity ${isScrolled ? 'hidden md:block' : ''}`}>
              FounderVoice
            </span>
          </a>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" className="!px-5 !py-2 !text-xs !h-9">
              Book a Call
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 pointer-events-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-6 md:hidden">
          <div className="flex flex-col gap-8 items-center text-center">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-3xl font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="w-full max-w-xs h-px bg-white/10 my-4" />
            <Button fullWidth variant="primary" onClick={() => setIsMobileMenuOpen(false)}>Book Strategy Call</Button>
          </div>
        </div>
      )}
    </>
  );
};