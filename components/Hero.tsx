import React from 'react';
import { PhoneFrame } from './ui/PhoneFrame';
import { DashboardScreen } from './AppScreens';
import { Download, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] wave-bg overflow-hidden pt-24 pb-32 md:pb-0 flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute -right-20 top-20 w-[600px] h-[600px] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,60.2,29.8C50.2,41.1,41.5,51.4,30.8,59.2C20.1,67,7.4,72.3,-4.6,79.4C-16.6,86.5,-27.9,95.4,-38.3,90.8C-48.7,86.2,-58.2,68.1,-65.4,52.2C-72.6,36.3,-77.5,22.6,-78.9,8.5C-80.3,-5.6,-78.2,-20.1,-70.7,-32.1C-63.2,-44.1,-50.3,-53.6,-37.1,-61.2C-23.9,-68.8,-10.4,-74.5,2.9,-79C16.2,-83.5,30.5,-69.3,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -left-20 bottom-0 w-[800px] h-[800px] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M38.1,-49.9C49.9,-44.1,60.4,-34.5,65.8,-22.8C71.2,-11.1,71.5,2.7,66.8,14.7C62.1,26.7,52.4,36.9,41.9,45.4C31.4,53.9,20.1,60.7,7.7,63.2C-4.7,65.7,-18.2,63.9,-30.9,57C-43.6,50.1,-55.5,38.1,-62.1,23.9C-68.7,9.7,-70,-6.7,-64.1,-20.6C-58.2,-34.5,-45.1,-45.9,-32.1,-51.1C-19.1,-56.3,-6.2,-55.3,3.8,-60.5C13.8,-65.7,26.3,-55.7,38.1,-49.9Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="text-white space-y-8 animate-in slide-in-from-left duration-700 fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold tracking-wide">
                🚀 O jeito fácil de proteger sua marca
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Sua Marca, <br/>
                <span className="text-[#2f2f2f] drop-shadow-sm">Protegida</span> e <span className="text-[#2f2f2f] drop-shadow-sm">Monitorada.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-light">
                Esqueça a burocracia do INPI. Acompanhe seus processos, receba alertas e encontre especialistas em um só lugar. Ultra-simples. Ultra-seguro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center gap-3 bg-white text-[#2fb670] px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all w-full sm:w-auto">
                    <Download size={24} className="fill-current" />
                    <div className="text-left">
                        <span className="block text-xs font-medium opacity-70">Baixar no</span>
                        <span className="text-lg leading-none">App Store</span>
                    </div>
                </button>
                <button className="flex items-center justify-center gap-3 bg-[#2f2f2f] text-white px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all w-full sm:w-auto">
                    <Play size={24} className="fill-current" />
                    <div className="text-left">
                        <span className="block text-xs font-medium opacity-70">Disponível no</span>
                        <span className="text-lg leading-none">Google Play</span>
                    </div>
                </button>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium text-green-100 pt-4">
                <div className="flex -space-x-3">
                    <img className="w-10 h-10 rounded-full border-2 border-[#2fb670]" src="https://picsum.photos/100/100?random=1" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-[#2fb670]" src="https://picsum.photos/100/100?random=2" alt="User" />
                    <img className="w-10 h-10 rounded-full border-2 border-[#2fb670]" src="https://picsum.photos/100/100?random=3" alt="User" />
                </div>
                <p>+1.000 marcas protegidas este mês</p>
            </div>
        </div>

        {/* Hero Image / Phone Mockup */}
        <div className="relative flex justify-center md:justify-end animate-float">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-white/20 rounded-full blur-3xl -z-10"></div>
            <PhoneFrame className="scale-90 md:scale-100 rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                <DashboardScreen />
            </PhoneFrame>
            
            {/* Floating Cards (Decorative) */}
            <div className="absolute top-[20%] -left-4 bg-white p-4 rounded-2xl shadow-xl animate-float-delayed hidden md:block max-w-[180px]">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-[#2fb670] rounded-full"></div>
                    <span className="text-xs font-bold text-gray-800">Processo 9182...</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-[#2fb670] rounded-full"></div>
                </div>
                <p className="text-[10px] text-gray-400 mt-2">Atualizado há 2 min</p>
            </div>
        </div>
      </div>
      
      {/* Wave Separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};