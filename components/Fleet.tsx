import React from 'react';
import { PLANS } from '../constants';
import Button from './Button';
import { Check } from './Icons';

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
              className={`relative flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-brand-orange shadow-xl md:scale-105 z-10' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide z-20">
                  Mais Popular
                </div>
              )}
              
              <div className="h-48 bg-gray-200 relative">
                 <img 
                    src={plan.image} 
                    alt={plan.category} 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{plan.category}</h3>
                    <p className="text-white/80 text-sm">{plan.name}</p>
                 </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-baseline justify-center my-4">
                  <span className="text-sm text-gray-500 font-medium mr-1">A partir de</span>
                  <span className="text-4xl font-extrabold text-slate-900">R$ {plan.price}</span>
                  <span className="text-slate-500 ml-1">/sem</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-brand-green" />
                      </div>
                      <p className="ml-3 text-sm text-slate-600">{feature}</p>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.popular ? "primary" : "secondary"} fullWidth>
                  Reservar {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
