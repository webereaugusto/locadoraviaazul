import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from './Icons';
import { WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Frota', href: '#fleet' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col leading-none group">
              <div className="flex items-center">
                <span
                  className={`font-bold text-3xl tracking-tight ${
                    isScrolled ? 'text-slate-800' : 'text-white drop-shadow-sm'
                  }`}
                >
                  Via
                </span>
                <span
                  className={`font-bold text-3xl tracking-tight ${
                    isScrolled ? 'text-via-blue' : 'text-blue-400 drop-shadow-sm'
                  }`}
                >
                  Azul
                </span>
              </div>
              <span
                className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5 ${
                  isScrolled ? 'text-slate-500' : 'text-blue-100'
                }`}
              >
                Locadora de Veículos
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green text-white text-sm font-bold hover:bg-green-600 transition-transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-via-blue hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-green text-white font-bold"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
