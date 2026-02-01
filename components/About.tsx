import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

const About: React.FC = () => {
  const [isHoveringDog, setIsHoveringDog] = useState(false);

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto flex items-center justify-center">
      <GlassCard className="w-full max-w-4xl min-h-[400px] flex flex-col md:flex-row gap-12 items-center md:items-start p-10 md:p-16 border-t border-t-white/20">
        
        <div className="absolute top-4 left-6 text-[10px] font-mono text-white/20 tracking-[0.2em]">ID: MIK-8842-DEV</div>
        <div className="absolute top-4 right-6 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-white/10"></div>
        </div>

        <div className="flex-1 space-y-8 z-10">
            <div className="space-y-4">
                <h2 className="text-sm font-mono text-accent-electric tracking-widest uppercase mb-2">/ Mission Profile</h2>
                <blockquote className="text-3xl font-light italic text-white/90 border-l-2 border-white/10 pl-6 py-2">
                    "Simplicity is the ultimate sophistication."
                </blockquote>
            </div>
            <p className="text-white/60 leading-relaxed font-light text-lg">
                I navigate the cosmos of code to find joy in automation. Building bridges between complex systems and human understanding, one line of clean, efficient code at a time. My workspace is my cockpit, and the universe of software is my playground.
            </p>
        </div>

        <div className="relative flex flex-col items-center gap-4 z-10">
            <motion.div
                onHoverStart={() => setIsHoveringDog(true)}
                onHoverEnd={() => setIsHoveringDog(false)}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
            >
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white/10 relative z-20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    <img 
                        src="https://images.unsplash.com/photo-1612536053381-862994542331?q=80&w=200&auto=format&fit=crop" 
                        alt="Sherry the Corgi" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="absolute inset-0 -m-2 border border-accent-lavender/30 rounded-full animate-spin-slow z-10 border-dashed"></div>

                <AnimatePresence>
                    {isHoveringDog && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-space-dark px-3 py-1 rounded-lg text-sm font-bold shadow-lg whitespace-nowrap z-30"
                        >
                            Woof! 🐾
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            
            <div className="text-center">
                <h3 className="text-lg font-medium text-white">Sherry</h3>
                <p className="text-xs font-mono text-accent-lavender opacity-70">Chief Code Reviewer</p>
            </div>
        </div>

      </GlassCard>
    </section>
  );
};

export default About;