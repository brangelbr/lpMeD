import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <Logo className="h-10 w-auto" lightMode={true} />
                </div>
                <p className="text-gray-400 text-sm max-w-sm mb-6">
                    A plataforma definitiva para empreendedores protegerem seu maior patrimônio: sua marca. Simples, transparente e eficiente.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20}/></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20}/></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
                </div>
            </div>

            {/* Links */}
            <div>
                <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Produto</h3>
                <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-[#2fb670] text-sm">Download</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#2fb670] text-sm">Funcionalidades</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#2fb670] text-sm">Preços</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#2fb670] text-sm">Para Advogados</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Legal</h3>
                <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-[#2fb670] text-sm">Privacidade</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#2fb670] text-sm">Termos de Uso</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#2fb670] text-sm">Contato</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 Marca em dia. Todos os direitos reservados.</p>
            <div className="flex gap-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                 <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8" />
            </div>
        </div>
      </div>
    </footer>
  );
};