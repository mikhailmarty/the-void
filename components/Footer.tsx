import React from 'react';
import { motion } from 'framer-motion';
import { Github, Send, Mail, Radio, Youtube, Gamepad2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-20 md:py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-accent-electric/5 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
            
            <div 
                className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#13161c] border border-accent-electric/20 shadow-[0_0_20px_rgba(125,249,255,0.05)]"
            >
                <div className="relative flex items-center justify-center w-3 h-3">
                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-electric opacity-50"></span>
                     <Radio className="w-3 h-3 text-accent-electric relative z-10" />
                </div>
                <span className="text-xs font-mono text-accent-electric tracking-[0.2em] uppercase">{t.footer.status}</span>
            </div>

            <h2 
                className="text-3xl md:text-5xl font-thin text-white tracking-tight leading-tight px-4"
            >
                {t.footer.cta}
            </h2>

            <div 
                className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4 px-4"
            >
                {[
                    { icon: Github, href: "https://github.com/mikhailmarty", label: "GitHub" },
                    { icon: Send, href: "https://t.me/mikhailstudio", label: "Channel" },
                    { icon: Gamepad2, href: "https://discord.com/users/679612854579888133", label: "Discord" },
                    { icon: Youtube, href: "https://youtube.com/@mikhailstudio", label: "YouTube" }
                ].map((link, idx) => (
                    <a 
                        key={idx} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-center gap-3"
                    >
                         <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-accent-electric/40 group-hover:shadow-[0_0_20px_rgba(125,249,255,0.15)] group-hover:-translate-y-1">
                            <link.icon className="w-6 h-6 text-white/70 group-hover:text-accent-electric transition-colors duration-300" strokeWidth={1.5} />
                         </div>
                         <span className="text-[10px] uppercase font-mono tracking-widest text-white/30 group-hover:text-accent-electric/70 transition-colors duration-300 opacity-0 group-hover:opacity-100 absolute top-full mt-2">
                            {link.label}
                         </span>
                    </a>
                ))}
            </div>

            <div 
                className="pt-16"
            >
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto mb-6"></div>
                <p className="text-slate-500 text-xs font-light tracking-wide">
                    {t.footer.copyright}
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
