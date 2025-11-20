import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, MapPin } from './Icons';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-via-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Quem aluga, recomenda
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Motoristas de toda Campinas confiam na Via Azul.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-lg relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
              
              <p className="text-slate-600 mb-6 relative z-10 italic">
                "{item.text}"
              </p>
              
              <div className="flex items-center border-t border-gray-100 pt-4">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-500 font-bold mr-3">
                    {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-brand-orange text-xs font-medium mb-1">{item.role}</p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <MapPin size={12} className="mr-1" />
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
