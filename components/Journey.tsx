import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from './GlassCard';
import { useLanguage } from '../context/LanguageContext';

const nodeStyles = [
    { year: "2018", color: "bg-orange-400" },
    { year: "2022", color: "bg-blue-500" },
    { year: "2023", color: "bg-purple-500" },
    { year: "2025", color: "bg-accent-electric" },
];

const Journey: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 max-w-5xl mx-auto px-4 md:px-6 relative">
        <h2 className="text-3xl font-thin text-left mb-12 md:mb-16 text-white/80 pl-4 md:pl-16">{t.journey.title}</h2>
        
        <div className="relative pl-2 md:pl-8">
            <div className="absolute left-2 md:left-8 top-0 bottom-0 w-[2px] bg-white/5">
                <motion.div 
                    style={{ height: lineHeight }}
                    className="w-full bg-gradient-to-b from-accent-electric/20 via-accent-electric to-accent-electric/20 shadow-[0_0_15px_rgba(125,249,255,0.5)]"
                />
            </div>

            <div className="space-y-12">
                {t.journey.nodes.map((node, index) => {
                    const style = nodeStyles[index];
                    return (
                    <div key={index} className="relative flex items-start gap-6 md:gap-12">
                        
                        <div className="absolute left-0 -translate-x-[calc(50%-1px)] top-8 w-4 h-4 rounded-full border-2 border-white/10 bg-space-dark z-20 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            <div className={`w-1.5 h-1.5 rounded-full ${style.color} animate-pulse`}></div>
                        </div>

                        <div className="w-full pl-6 md:pl-8">
                            <GlassCard className="w-full p-6 md:p-8 border border-white/5 group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <span className="text-xs font-mono text-accent-electric/60 mb-1 block tracking-wider">{style.year}</span>
                                        <h3 className="text-2xl font-light text-white group-hover:text-accent-electric transition-colors">{node.title}</h3>
                                    </div>
                                    <span className="text-sm font-mono py-1 px-3 rounded-full bg-white/5 border border-white/10 text-white/50">
                                        {node.subtitle}
                                    </span>
                                </div>
                                <p className="text-white/60 text-base leading-relaxed max-w-3xl">
                                    {node.desc}
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    </section>
  );
};

export default Journey;
