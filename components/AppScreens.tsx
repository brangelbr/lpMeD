import React from 'react';
import { Search, BookOpen, Shield, Plus, Home, Briefcase, User, MoreHorizontal, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import { Logo } from './ui/Logo';

export const DashboardScreen = () => {
  return (
    <div className="flex flex-col h-full bg-white font-sans">
      {/* Header */}
      <div className="bg-[#2fb670] p-6 pt-12 pb-16 rounded-b-[2rem] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
        <div className="flex justify-between items-start mb-6">
            <div>
                <h2 className="text-xs font-medium opacity-80 uppercase tracking-wider">Resumo Geral</h2>
                <h1 className="text-2xl font-bold mt-1">0 Processos</h1>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-white/20 flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full bg-white/10"></div>
            </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-emerald-800/20 px-3 py-1.5 rounded-full border border-emerald-400/30">
            <CheckCircle2 size={14} className="text-white" />
            <span className="text-xs font-medium text-emerald-50">Tudo certo por aqui</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="px-5 -mt-8 relative z-10 flex flex-col gap-5">
        
        {/* Orange Banner */}
        <div className="bg-[#e99e28] rounded-2xl p-5 text-white shadow-lg shadow-amber-500/20 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 -skew-x-12 transform origin-bottom-right"></div>
            <div className="flex justify-between items-center relative z-10">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-amber-100">★</span>
                        <h3 className="font-bold">Ajuda Especializada</h3>
                    </div>
                    <p className="text-xs text-amber-50 max-w-[160px] leading-relaxed">
                        Precisa de um advogado? Encontre especialistas verificados.
                    </p>
                </div>
                <div className="bg-white/20 p-2 rounded-full">
                    <ChevronRight size={20} />
                </div>
            </div>
        </div>

        <div>
            <h3 className="text-gray-800 font-bold text-sm mb-3">Ações Rápidas</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                        <Search size={22} />
                    </div>
                    <span className="text-xs font-semibold text-gray-700 text-center">Buscar<br/>Processo</span>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                        <BookOpen size={22} />
                    </div>
                    <span className="text-xs font-semibold text-gray-700 text-center">Como<br/>Depositar</span>
                </div>
            </div>
        </div>
        
        {/* Blue Bottom Banner */}
        <div className="bg-[#3b82f6] rounded-2xl p-4 text-white shadow-lg shadow-blue-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                    <Shield size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-sm">Authora - Blockchain</h4>
                    <p className="text-[10px] text-blue-100">Registre obras, ideias, músicas...</p>
                </div>
            </div>
            <MoreHorizontal size={16} className="text-blue-200" />
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
         <div className="bg-[#008ba3] rounded-full p-4 shadow-xl border-4 border-gray-50 -mb-6">
            <Plus size={28} color="white" strokeWidth={3} />
         </div>
      </div>

      {/* Bottom Nav */}
      <div className="mt-auto bg-white border-t border-gray-100 px-6 pt-3 pb-8 flex justify-between items-end text-[10px] font-medium text-gray-400">
         <div className="flex flex-col items-center gap-1 text-[#008ba3]">
            <Home size={20} />
            <span>Início</span>
         </div>
         <div className="flex flex-col items-center gap-1">
            <Briefcase size={20} />
            <span>Marcas</span>
         </div>
         <div className="w-8"></div> {/* Spacer for FAB */}
         <div className="flex flex-col items-center gap-1">
            <BookOpen size={20} />
            <span>Aprender</span>
         </div>
         <div className="flex flex-col items-center gap-1">
            <User size={20} />
            <span>Perfil</span>
         </div>
      </div>
    </div>
  );
};

export const LearnScreen = () => {
    return (
      <div className="flex flex-col h-full bg-gray-50 font-sans">
        <div className="bg-white p-4 pt-12 shadow-sm flex justify-between items-center sticky top-0 z-10">
            <div className="flex items-center gap-2">
                 <div className="w-32">
                     <Logo className="h-6 w-auto" />
                 </div>
                 <div className="h-5 w-[1px] bg-gray-300 mx-2"></div>
                 <h1 className="font-bold text-gray-800 text-sm">Central de Ajuda</h1>
            </div>
            <div className="bg-gray-100 p-2 rounded-full">
                <Search size={18} className="text-gray-500" />
            </div>
        </div>

        <div className="p-5 flex flex-col gap-4 overflow-y-auto">
            {/* Hero Card */}
            <div className="bg-[#8b5cf6] rounded-2xl p-6 text-white shadow-lg shadow-purple-500/20">
                <h2 className="text-2xl font-bold mb-2">Aprenda</h2>
                <p className="text-purple-100 text-sm leading-relaxed">Domine o processo de registro e evite erros comuns.</p>
            </div>

            {/* List */}
            {[
                { title: "Como depositar uma marca?", desc: "Guia passo a passo para proteger sua marca no INPI.", link: "Ler artigo" },
                { title: "Entenda as Classes (NCL)", desc: "Como escolher a categoria correta para o seu produto.", link: "Ler artigo" },
                { title: "Prazos Importantes", desc: "Não perca sua marca por falta de acompanhamento.", link: "Ler artigo" },
            ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <h3 className="font-bold text-gray-800 text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">{item.desc}</p>
                    <span className="text-purple-600 text-xs font-bold flex items-center gap-1">
                        {item.link} <ChevronRight size={12} />
                    </span>
                </div>
            ))}

            <div className="text-center mt-4">
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600 flex items-center justify-center gap-1">
                     Visitar portal oficial do INPI <span className="text-[10px]">↗</span>
                </a>
            </div>
        </div>
      </div>
    );
  };