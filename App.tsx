import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        {/* Simple Call to Action Banner */}
        <section className="bg-[#2fb670] py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para proteger sua marca?</h2>
                <p className="text-green-50 text-lg mb-8">Baixe agora gratuitamente e comece a monitorar seus processos no INPI hoje mesmo.</p>
                <button className="bg-white text-[#2fb670] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gray-100 hover:scale-105 transition-transform">
                    Começar Agora
                </button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;