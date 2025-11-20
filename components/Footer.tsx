import React from 'react';
import { MessageCircle, MapPin, Clock } from './Icons';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <span className="font-bold text-2xl tracking-tight mb-4 block">
                Via<span className="text-via-blue">Azul</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A locadora parceira do motorista de aplicativo em Campinas. 
              Menos burocracia, mais rentabilidade para você.
            </p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-via-blue transition cursor-pointer">IG</div>
               <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-via-blue transition cursor-pointer">FB</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-via-blue shrink-0" />
                <span>Av. Norte-Sul, 1500 - Campinas, SP<br/>(Próximo ao centro)</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-brand-green shrink-0" />
                <a href={WHATSAPP_LINK} className="hover:text-white transition">(19) 98194-0463</a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-via-blue shrink-0" />
                <span>Seg a Sex: 08h às 18h<br/>Sáb: 08h às 12h</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#benefits" className="hover:text-brand-orange transition">Como Funciona</a></li>
              <li><a href="#fleet" className="hover:text-brand-orange transition">Nossa Frota</a></li>
              <li><a href="#faq" className="hover:text-brand-orange transition">Perguntas Frequentes</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-brand-orange transition">Reservar Agora</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Via Azul Locadora de Veículos Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
