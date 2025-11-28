import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          <div className="flex items-center">
            <Logo className="h-12 w-auto" lightMode={!isScrolled} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`text-sm font-medium hover:opacity-80 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Funcionalidades</a>
            <a href="#about" className={`text-sm font-medium hover:opacity-80 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Sobre</a>
            <a href="#faq" className={`text-sm font-medium hover:opacity-80 transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}>FAQ</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ${
                isScrolled 
                ? 'bg-[#2fb670] text-white hover:bg-[#25945a]' 
                : 'bg-white text-[#2fb670] hover:bg-green-50'
            }`}>
              Baixar Grátis
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${isScrolled ? 'text-[#2f2f2f]' : 'text-white'}`}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Funcionalidades</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Sobre</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">FAQ</a>
            <button className="w-full bg-[#2fb670] text-white py-3 rounded-xl font-bold">Baixar Agora</button>
        </div>
      )}
    </nav>
  );
};