import React from 'react';
import { MessageCircle, FileCheck, Car } from './Icons';
import Button from './Button';

const StepsSection: React.FC = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Fale no WhatsApp",
      description: "Clique no botão e chame nossa equipe. Tire suas dúvidas e escolha o plano ideal para você."
    },
    {
      icon: FileCheck,
      title: "2. Análise Expressa",
      description: "Envie foto da sua CNH com EAR e comprovante de residência. Aprovamos seu cadastro em até 4 horas."
    },
    {
      icon: Car,
      title: "3. Comece a Rodar",
      description: "Cadastro aprovado? Agende a retirada, pegue as chaves e saia faturando no mesmo dia."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-orange font-bold tracking-wide uppercase">Sem Burocracia</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Alugar seu carro nunca foi tão fácil
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Eliminamos a papelada dos bancos tradicionais. Na Via Azul, o processo é transparente e focado na sua agilidade.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10 transform translate-y-4"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="relative z-10 bg-white p-4 rounded-full shadow-lg border-2 border-via-blue group-hover:scale-110 transition-transform duration-300 mb-6">
                <step.icon className="h-10 w-10 text-via-blue" />
                <div className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">
                  {index + 1}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="whatsapp" className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl">
            Iniciar Cadastro no WhatsApp
          </Button>
          <p className="mt-6 text-lg font-semibold text-via-blue">
            Dê seu primeiro passo, alugue um carro com a Via Azul com facilidade de aprovação.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            *Necessário CNH com observação EAR e caução facilitado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
