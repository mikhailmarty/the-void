import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Fingerprint } from 'lucide-react';
import GlassCard from './GlassCard';
import { useLanguage } from '../context/LanguageContext';

const icons = [Cpu, Radio, Fingerprint];

const Philosophy: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
             <div className="text-center mb-16 md:mb-20">
                <h3 className="text-xs font-mono text-accent-electric tracking-[0.3em] uppercase mb-4 opacity-70">{t.philosophy.subtitle}</h3>
                <h2 className="text-4xl md:text-6xl font-thin text-white tracking-tight">{t.philosophy.title}</h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.philosophy.cards.map((card, idx) => {
                    const Icon = icons[idx];
                    return (
                    <div
                        key={idx}
                        className="h-full"
                    >
                         <GlassCard className="h-full p-6 md:p-10 flex flex-col items-center text-center">
                            <div className="mb-6 text-white/70 flex justify-center w-full">
                                <Icon className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            
                            <h4 className="text-xl font-light text-white mb-6 relative z-10">{card.title}</h4>
                            
                            <p className="text-white/50 font-light leading-relaxed text-sm relative z-10">
                                {card.text}
                            </p>
                         </GlassCard>
                    </div>
                )})}
             </div>
        </section>
    );
};

export default Philosophy;