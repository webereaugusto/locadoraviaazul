import React from 'react';
import { FEATURES } from '../constants';
import { AlertTriangle, CheckCircle } from './Icons';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-orange font-semibold tracking-wide uppercase">Por que escolher a Via Azul?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tudo o que você precisa para focar na corrida
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Simplificamos o aluguel de carros para motoristas de aplicativo em Campinas. Sem letras miúdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title} 
              className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-via-light rounded-full opacity-50 blur-2xl group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center p-3 bg-via-blue rounded-xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* New Approval Banner */}
        <div className="mt-16 bg-gradient-to-r from-via-blue to-via-dark rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
             <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
               <CheckCircle className="text-brand-green w-8 h-8" />
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
               As grandes locadoras não te aprovam?
             </h3>
             <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
               Dê uma chance a Via Azul. Temos especialistas prontos para te ajudar. 
               Aqui você não é apenas um número, é um parceiro.
             </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
