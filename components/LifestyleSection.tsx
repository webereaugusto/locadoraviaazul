import React from 'react';
import { Clock, Coffee, Music, Sun } from './Icons';
import Button from './Button';

const LifestyleSection: React.FC = () => {
  return (
    <section className="py-24 bg-via-dark text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-via-blue rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-orange rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">
              <Sun size={18} />
              <span>Qualidade de Vida</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Troque o escritório fechado pela <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-green">liberdade das ruas</span>.
            </h2>
            
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Cansado de bater ponto, aguentar reuniões intermináveis e ter alguém vigiando cada passo seu? 
              Na ViaSuL, acreditamos que você nasceu para mais.
            </p>
            
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Imagine um escritório onde você escolhe a temperatura do ar-condicionado, ouve a sua música preferida 
              e decide exatamente quando quer fazer uma pausa para o café. Esse escritório é o seu carro.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Clock className="text-brand-orange" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Horário Flexível</h4>
                  <p className="text-sm text-gray-300">Trabalhe de manhã, tarde ou noite. Você decide sua rotina.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Music className="text-brand-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Sem Monotonia</h4>
                  <p className="text-sm text-gray-300">Conheça pessoas novas e lugares diferentes todos os dias.</p>
                </div>
              </div>
            </div>

            {/* New Emotional Hook */}
            <div className="mb-8 border-l-4 border-brand-orange pl-4 bg-white/5 p-4 rounded-r-lg">
              <p className="text-xl font-medium text-white italic">
                "Tudo que você precisa para começar é um parceiro como a ViaSuL, que acredita em você."
              </p>
            </div>

            <Button variant="whatsapp" className="text-lg px-8 shadow-orange-500/20">
              Quero Minha Liberdade Financeira Agora
            </Button>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 border-2 border-brand-orange/30 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src="https://img.freepik.com/fotos-premium/jovem-indiano-feliz-aprendendo-a-dirigir-sentado-em-um-carro_116547-81419.jpg?semt=ais_incoming&w=740&q=80" 
                alt="Homem feliz dirigindo carro" 
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-700"
              />
              
              <div className="absolute bottom-8 left-8 z-20 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse"></div>
                  <span className="text-white font-medium text-sm">Faturando agora</span>
                </div>
                <p className="text-white font-bold italic text-xl">
                  "A melhor decisão que tomei foi largar a CLT. Hoje faço meu salário."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
