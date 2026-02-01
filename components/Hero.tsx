import React from 'react';
import { Github, Send, Terminal, Globe } from 'lucide-react';
import mikhailImg from '@/assets/mikhail.jpg';
import sherryImg from '@/assets/sherry.jpg';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[80px] translate-x-20 -translate-y-20" />
      </div>

      <div className="relative z-10 w-64 h-64 mb-12">
        <div className="w-full h-full relative rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <img 
                src={mikhailImg} 
                alt="Mikhail Martynenko" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 -m-4 border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>
      </div>

      <div 
        className="text-center z-10 mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-thin tracking-tighter text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-accent-lavender/80 font-light tracking-widest uppercase">
          {t.hero.role}
        </p>
      </div>

      <div 
        className="flex gap-4 z-10 mb-20"
      >
        <a 
          href="https://github.com/mikhailmarty"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#13161c] hover:bg-white/10 border border-white/5 transition-all group"
        >
          <Github className="w-5 h-5 text-accent-electric group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span className="text-sm font-medium">{t.hero.github}</span>
        </a>
        <a 
          href="https://t.me/mikhailmarty"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#13161c] hover:bg-white/10 border border-white/5 transition-all group"
        >
          <Send className="w-5 h-5 text-accent-sage group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span className="text-sm font-medium">{t.hero.telegram}</span>
        </a>
      </div>

      <div 
        className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-6 px-4 py-3 md:px-6 md:py-3 rounded-2xl md:rounded-full bg-[#0f1219]/95 border border-white/5 shadow-2xl pointer-events-auto mx-4 max-w-[95vw]">
            <div className="flex items-center gap-2 md:gap-3 pr-3 md:pr-6 border-r border-white/10">
                <div className="w-3 h-3 md:w-4 md:h-4 relative flex items-end gap-[2px]">
                   <span className="w-0.5 md:w-1 bg-green-400 animate-[pulse_1s_ease-in-out_infinite] h-full"></span>
                   <span className="w-0.5 md:w-1 bg-green-400 animate-[pulse_1.2s_ease-in-out_infinite] h-2/3"></span>
                   <span className="w-0.5 md:w-1 bg-green-400 animate-[pulse_0.8s_ease-in-out_infinite] h-1/2"></span>
                </div>
                <div className="text-[10px] md:text-xs text-white/70">
                    <span className="opacity-50 hidden sm:inline">{t.hero.listening} </span>
                    <span className="font-medium text-white">Interstellar OST</span>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 pr-3 md:pr-6 border-r border-white/10 hidden sm:flex">
                <Terminal className="w-3 h-3 md:w-4 md:h-4 text-accent-electric" strokeWidth={1.5} />
                <span className="text-[10px] md:text-xs font-mono text-white/70">{t.hero.os}</span>
            </div>

            <div onClick={toggleLanguage} className="flex items-center gap-2 md:gap-3 pr-3 md:pr-6 border-r border-white/10 cursor-pointer hover:bg-white/5 transition-colors px-2 rounded-lg select-none">
                <Globe className="w-3 h-3 md:w-4 md:h-4 text-accent-electric" strokeWidth={1.5} />
                <span className="text-[10px] md:text-xs font-mono text-white/70">
                    <span className={language === 'en' ? 'text-white font-bold' : 'opacity-50'}>ENG</span>
                    <span className="mx-1">/</span>
                    <span className={language === 'ru' ? 'text-white font-bold' : 'opacity-50'}>RU</span>
                </span>
            </div>

            <div className="flex items-center gap-2 md:gap-3 relative group cursor-pointer">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden border border-white/20 shadow-sm">
                    <img 
                        src={sherryImg} 
                        alt="Sherry" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-[8px] md:text-[9px] uppercase text-white/40 font-mono leading-none mb-0.5 tracking-wider">{t.hero.copilot}</span>
                    <span className="text-[10px] md:text-xs font-medium text-white leading-none">{t.hero.sherry}</span>
                </div>
                
                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-space-dark text-[10px] font-bold rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white">
                    {t.hero.woof}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
