import React from 'react';
import { MapPin, Navigation } from './Icons';
import Button from './Button';

const CitySection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-via-blue transform rotate-3 rounded-2xl opacity-20"></div>
            <img 
              src="/images/foto-prefeitura-de-campinas-scaled.webp" 
              alt="Campinas Rodovia e Cidade" 
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover transform -rotate-2 hover:rotate-0 transition duration-500"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <MapPin className="text-brand-orange" size={20} />
              <span className="font-bold text-slate-800 text-sm">Campinas, SP</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-base text-via-blue font-bold tracking-wide uppercase mb-2">
              Localização Estratégica
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Campinas: O melhor terreno para rodar e lucrar.
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Conhecemos cada canto da cidade. Nossos carros são perfeitos para enfrentar o dia a dia 
              das avenidas movimentadas como a <strong>Norte-Sul</strong> e a <strong>Barão de Itapura</strong>, 
              até as corridas longas para o <strong>Aeroporto de Viracopos</strong>.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <Navigation className="w-4 h-4 text-via-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Alta Demanda Universitária</h4>
                  <p className="text-slate-500">Região da Unicamp e PUCC com corridas constantes o dia todo.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <Navigation className="w-4 h-4 text-via-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Pólos Comerciais</h4>
                  <p className="text-slate-500">Shopping D. Pedro, Iguatemi e Centro. Passageiros que não param de chamar.</p>
                </div>
              </li>
            </ul>

            <Button variant="whatsapp">
              Quero Dominar as Ruas de Campinas
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CitySection;
