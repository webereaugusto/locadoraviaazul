import React from 'react';
import Button from './Button';
import { MessageCircle, ShieldCheck } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
          alt="Motorista dirigindo em Campinas" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-via-dark/95 via-via-blue/80 to-via-blue/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 animate-[fadeIn_1s_ease-out]">
            <ShieldCheck size={16} className="text-brand-orange" />
            <span>Locadora Oficial de Campinas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
            Comece a rodar hoje mesmo <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-300">sem burocracia</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
            Carros revisados e prontos para Uber, 99 e InDrive. A aprovação mais rápida de Campinas e região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="whatsapp" className="text-lg px-8 py-4">
              <MessageCircle className="mr-2" />
              Quero Alugar e Ser Meu Próprio Chefe
            </Button>
          </div>

        </div>

        {/* Hero Image/Graphic (Desktop only or simplified on mobile) */}
        <div className="hidden lg:block w-full lg:w-1/2 mt-12 lg:mt-0 pl-0 lg:pl-12">
          <div className="relative">
             {/* Abstract Car Representation or Floating Card */}
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img src="https://editorial.pxcrush.net/carsales/general/editorial/2023-volkswagen-golf-life-02.jpg?width=1024&height=682" alt="Volkswagen Golf" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900">Hatch Premium 1.4</h3>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Disponível</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">Ideal para Uber Comfort e Black. Economia e conforto.</p>
                        <div className="flex justify-between items-end border-t pt-4">
                             <div>
                                <p className="text-xs text-gray-500">Plano Semanal</p>
                                <p className="text-2xl font-bold text-via-blue">R$ 749</p>
                             </div>
                             <span className="text-sm text-brand-orange font-semibold">Manutenção Inclusa</span>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
