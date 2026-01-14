import React from 'react';
import { PLANS, WHATSAPP_LINK } from '../constants';
import Button from './Button';
import { Check, MessageCircle } from './Icons';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Escolha o plano ideal para seu bolso
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Veículos econômicos e confortáveis para maximizar seus ganhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className="relative flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200"
            >
              {plan.uberBlack && (
                <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide z-20">
                  Uber Black
                </div>
              )}
              
              <div className="h-48 bg-gray-200 relative">
                 <img 
                    src={plan.image} 
                    alt={plan.category} 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="675"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{plan.category}</h3>
                    <p className="text-white/80 text-sm">{plan.name}</p>
                 </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1 mt-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-brand-green" />
                      </div>
                      <p className="ml-3 text-sm text-slate-600">{feature}</p>
                    </li>
                  ))}
                </ul>

                <Button variant="secondary" fullWidth>
                  Reservar {plan.name}
                </Button>
              </div>
            </div>
          ))}
          
          {/* Card Especial de CTA */}
          <div className="relative flex flex-col bg-gradient-to-br from-via-blue to-via-dark rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-via-blue">
            <div className="p-6 flex-1 flex flex-col items-center justify-center text-center min-h-[320px] md:min-h-[400px]">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Não encontrou o que procura?
                </h3>
                <p className="text-blue-100 text-lg mb-2">
                  Temos mais opções disponíveis!
                </p>
                <p className="text-blue-200 text-sm mb-8">
                  Fale conosco pelo WhatsApp e descubra o veículo perfeito para você.
                </p>
              </div>
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-green text-white text-base font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
