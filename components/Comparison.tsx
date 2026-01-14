import React from 'react';
import { XCircle, CheckCircle2 } from './Icons';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Carro Próprio vs. ViaSuL</h2>
          <p className="mt-4 text-lg text-slate-500">
            Colocando na ponta do lápis, alugar é muito mais inteligente para quem quer lucrar de verdade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Left: Own Car */}
          <div className="bg-white p-8 border-r border-gray-100 relative">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">Carro Próprio</h3>
              <p className="text-sm text-slate-400 mt-2">Burocracia e Custos Ocultos</p>
            </div>
            <ul className="space-y-6">
              <li className="flex items-center text-slate-500">
                <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                <span>Desvalorização do veículo (20%/ano)</span>
              </li>
              <li className="flex items-center text-slate-500">
                <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                <span>IPVA e Licenciamento caros</span>
              </li>
              <li className="flex items-center text-slate-500">
                <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                <span>Seguro particular altíssimo</span>
              </li>
              <li className="flex items-center text-slate-500">
                <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                <span>Custo surpresa com oficina</span>
              </li>
              <li className="flex items-center text-slate-500">
                <XCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                <span>Juros abusivos no financiamento</span>
              </li>
            </ul>
          </div>

          {/* Right: ViaSuL */}
          <div className="bg-via-blue p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">ViaSuL</h3>
              <p className="text-sm text-blue-100 mt-2">Liberdade e Lucro Líquido</p>
            </div>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-center text-white font-medium">
                <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
                <span>Carros revisados e segurados</span>
              </li>
              <li className="flex items-center text-white font-medium">
                <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
                <span>IPVA e DOC por nossa conta</span>
              </li>
              <li className="flex items-center text-white font-medium">
                <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
                <span>Seguro APP total incluso</span>
              </li>
              <li className="flex items-center text-white font-medium">
                <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
                <span>Manutenção preventiva inclusa</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
