import React from 'react';
import { Map, ArrowRightCircle } from './Icons';
import Button from './Button';

const RmcSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-base text-brand-orange font-bold tracking-wide uppercase mb-2">
              Região Metropolitana (RMC)
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Cidades conectadas: Você nunca roda vazio.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A grande vantagem da nossa região é a proximidade. Em Campinas, uma corrida termina e a outra já começa na cidade vizinha. 
              Amplie seu raio de atuação e atenda passageiros em <strong>Sumaré, Hortolândia, Paulínia, Valinhos e Indaiatuba</strong>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full text-via-blue">
                        <Map size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Hortolândia & Sumaré</h4>
                        <p className="text-xs text-slate-500 mt-1">Alto fluxo de trabalhadores pendulares para Campinas todo dia.</p>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full text-via-blue">
                        <Map size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Paulínia & Valinhos</h4>
                        <p className="text-xs text-slate-500 mt-1">Corridas de ticket médio mais alto e público qualificado.</p>
                    </div>
                </div>
            </div>

            <Button variant="whatsapp" className="w-full sm:w-auto">
              Quero Ampliar Meus Ganhos na Região
            </Button>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-brand-orange/20 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="/images/image-292-edited.webp" 
              alt="Mapa da Região Metropolitana de Campinas" 
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transform hover:scale-[1.02] transition duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg max-w-xs">
               <div className="flex items-center gap-2 mb-2">
                  <ArrowRightCircle className="text-brand-green" size={20} />
                  <span className="font-bold text-slate-800 text-sm">Fluxo Contínuo</span>
               </div>
               <p className="text-xs text-slate-500">Menos tempo parado esperando chamada, mais tempo faturando.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RmcSection;
