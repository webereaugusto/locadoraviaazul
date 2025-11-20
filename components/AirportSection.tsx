import React from 'react';
import { Plane, Banknote, Briefcase } from './Icons';
import Button from './Button';

const AirportSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header centered */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
             <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-via-blue text-xs font-bold tracking-wider uppercase mb-4">
                Oportunidade de Ouro
             </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Translados e Aeroportos: Onde está o dinheiro grosso.
            </h2>
            <p className="text-lg text-slate-600">
                Campinas é um hub logístico. Estar posicionado aqui permite pegar as corridas de <strong>maior valor agregado</strong> do estado.
            </p>
        </div>

        <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image with gradient overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Aeroporto Viagem Executiva" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12">
                
                <div className="w-full lg:w-1/2 text-white">
                    <h3 className="text-3xl font-bold mb-6">VCP • GRU • CGH</h3>
                    <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                        Uma única corrida de Campinas para Guarulhos (GRU) ou Congonhas (CGH) pode render o equivalente a <strong>um dia inteiro</strong> de corridas curtas no centro.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <Plane className="text-brand-orange" size={24} />
                            <span className="font-medium">Viracopos (VCP): Demanda 24h por dia.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Briefcase className="text-brand-orange" size={24} />
                            <span className="font-medium">Público Executivo: Passageiros educados e viagens tranquilas.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Banknote className="text-brand-orange" size={24} />
                            <span className="font-medium">Alto Ticket: Fature R$ 200, R$ 300 em uma tacada.</span>
                        </li>
                    </ul>
                    <Button variant="whatsapp" className="font-bold">
                        Quero pegar essas corridas
                    </Button>
                </div>

                {/* Visual Card representation */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-md w-full transform rotate-1 hover:rotate-0 transition duration-500">
                        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                            <span className="text-white font-bold">Estimativa de Ganho</span>
                            <span className="bg-brand-green/20 text-brand-green px-2 py-1 rounded text-xs font-bold">Corrida Black</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs uppercase">Origem</span>
                                <span className="text-white font-bold text-lg">Campinas</span>
                            </div>
                            <div className="flex-1 mx-4 border-t-2 border-dashed border-gray-500 relative top-1"></div>
                            <div className="flex flex-col text-right">
                                <span className="text-gray-400 text-xs uppercase">Destino</span>
                                <span className="text-white font-bold text-lg">Guarulhos</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <span className="block text-gray-300 text-sm mb-1">Valor ao motorista (est.)</span>
                            <span className="text-4xl font-extrabold text-brand-green">R$ 280 - 350</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default AirportSection;
