import React from 'react';
import { TrendingUp, DollarSign, Users, Car } from './Icons';

const MarketOpportunity: React.FC = () => {
  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 bg-via-blue/20 w-96 h-96 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 bg-brand-orange/20 w-64 h-64 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-bold uppercase tracking-wider mb-6">
              <TrendingUp size={16} />
              Mercado em Expansão
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900">
              Seja seu próprio patrão e fature até <span className="text-brand-orange">R$ 10 mil/mês</span>.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              O mercado de transporte por aplicativo no Brasil não para de crescer. 
              Milhares de novos passageiros entram nas plataformas todos os anos, criando uma demanda 
              gigantesca por motoristas qualificados.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Esqueça o chefe chato e o horário fixo. Com a <strong>ViaSuL</strong>, você tem a ferramenta 
              para construir sua liberdade financeira. O carro é nosso, o lucro é todo seu.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-gray-100 p-6 rounded-2xl hover:shadow-lg hover:bg-white transition duration-300 shadow-sm">
                <Users className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-3xl font-bold mb-1 text-slate-900">+ 35%</h3>
                <p className="text-sm text-slate-500">Aumento na demanda por corridas em Campinas no último ano.</p>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-6 rounded-2xl hover:shadow-lg hover:bg-white transition duration-300 shadow-sm">
                <DollarSign className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-3xl font-bold mb-1 text-slate-900">R$ 250 - 500</h3>
                <p className="text-sm text-slate-500">Faturamento diário médio de um motorista dedicado.</p>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-6 rounded-2xl hover:shadow-lg hover:bg-white transition duration-300 shadow-sm">
                <Car className="w-10 h-10 text-via-blue mb-4" />
                <h3 className="text-3xl font-bold mb-1 text-slate-900">Zero</h3>
                <p className="text-sm text-slate-500">Preocupação com IPVA, Seguro e Oficina. É tudo conosco.</p>
              </div>
              <div className="bg-brand-orange p-6 rounded-2xl shadow-lg shadow-orange-200 transform hover:-translate-y-1 transition duration-300 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Comece Agora</h3>
                <p className="text-sm text-white/90">Pegue seu carro em menos de 24 horas.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
