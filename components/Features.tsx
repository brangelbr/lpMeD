import React from 'react';
import { Bell, ShieldCheck, GraduationCap, Search, Briefcase, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "Busca Inteligente",
    description: "Pesquise processos pelo número ou nome da marca diretamente na base do INPI.",
    color: "bg-blue-500"
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: "Monitoramento 24/7",
    description: "Receba notificações push assim que houver qualquer movimentação no seu processo.",
    color: "bg-[#2fb670]"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: "Aprenda Fácil",
    description: "Conteúdo educativo simplificado para você entender tudo sobre registro de marcas.",
    color: "bg-purple-500"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Segurança Blockchain",
    description: "Integração com Authora para registrar anterioridade de ideias e músicas.",
    color: "bg-[#2f2f2f]"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-white" />,
    title: "Gestão de Portfólio",
    description: "Organize todas as suas marcas em um único dashboard intuitivo.",
    color: "bg-[#6b737e]"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Suporte Especializado",
    description: "Conecte-se com advogados e especialistas verificados caso precise de ajuda.",
    color: "bg-amber-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-[#2fb670] tracking-wide uppercase">Funcionalidades</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#2f2f2f] sm:text-4xl">
            Tudo o que você precisa para <br/>proteger sua propriedade intelectual
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Democratizamos o acesso à proteção de marcas no Brasil. Ferramentas profissionais, gratuitas para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#2fb670] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
              <div className={`rounded-xl inline-flex p-3 ring-4 ring-white ${feature.color} shadow-lg mb-6`}>
                {feature.icon}
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-bold text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {feature.title}
                  </a>
                </h3>
                <p className="mt-2 text-base text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};