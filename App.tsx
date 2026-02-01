import React from 'react';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Dashboard from './components/Dashboard';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full relative">
        <div className="fixed inset-0 pointer-events-none z-[-1]">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.03)_0%,_transparent_50%)]"></div>
        </div>

        <main className="relative z-10 flex flex-col gap-0 pb-20">
          <Hero />
          <Journey />
          <Philosophy />
          <Dashboard />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
