import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from './Icons';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Dúvidas Frequentes</h2>
          <p className="mt-4 text-lg text-slate-500">Respondemos as principais perguntas dos motoristas.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden transition-colors duration-200 ${
                openIndex === index ? 'border-via-blue bg-blue-50' : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-5 focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className={`font-semibold text-left ${openIndex === index ? 'text-via-blue' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-via-blue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-slate-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
