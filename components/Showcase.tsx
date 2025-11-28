import React from 'react';
import { PhoneFrame } from './ui/PhoneFrame';
import { LearnScreen } from './AppScreens';
import { Check } from 'lucide-react';

export const Showcase = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
             <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-50 -z-10"></div>
                <PhoneFrame className="shadow-2xl border-gray-900">
                    <LearnScreen />
                </PhoneFrame>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                    <div className="bg-purple-100 p-2 rounded-full">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 text-sm">Base de Conhecimento</p>
                        <p className="text-xs text-gray-500">Conteúdo atualizado 2024</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Não sabe por onde começar? <br/>
                <span className="text-purple-600">Nós te ensinamos.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O registro de marca pode parecer complexo, mas o <strong>Marca em dia</strong> desmistifica o processo. Nossa área "Aprenda" oferece guias passo a passo, explicação sobre as classes de Nice (NCL) e dicas vitais.
            </p>

            <ul className="space-y-4">
                {[
                    "Conteúdo didático e acessível",
                    "Explicação detalhada sobre taxas e prazos",
                    "Evite indeferimentos por erros básicos",
                    "Glossário de termos jurídicos"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                ))}
            </ul>

            <button className="mt-10 text-purple-600 font-bold border-b-2 border-purple-200 hover:border-purple-600 transition-colors pb-1">
                Explorar Central de Ajuda &rarr;
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};