import React from 'react';
import { MessageCircle } from './Icons';
import { WHATSAPP_LINK } from '../constants';

const StickyWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute -top-10 right-0 bg-white text-slate-800 text-xs font-bold py-1 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Alugue agora!
      </div>
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-green shadow-2xl text-white transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-3 animate-pulse hover:animate-none">
        <MessageCircle size={32} fill="currentColor" />
      </div>
      <span className="absolute flex h-16 w-16 top-0 right-0 -z-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      </span>
    </a>
  );
};

export default StickyWhatsApp;
