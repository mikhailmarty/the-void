import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Video, Globe, PenTool } from 'lucide-react';
import GlassCard from './GlassCard';
import { useLanguage } from '../context/LanguageContext';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-thin text-center mb-16 text-white/80">{t.dashboard.title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
        
        <div 
            className="col-span-2 md:col-span-2 md:row-span-2"
        >
            <GlassCard className="h-full p-5 md:p-6">
                <div className="flex flex-col justify-between h-full gap-6">
                    <div className="flex justify-between items-start">
                        <div className="p-4 rounded-full bg-white/5">
                            <Cloud className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
                            <span className="text-xs font-mono text-green-400/70">{t.dashboard.active}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-3xl font-light text-white mb-1">{t.dashboard.cards.nextcloud.title}</h3>
                        <p className="text-white/50 text-sm md:text-base max-w-md">
                            {t.dashboard.cards.nextcloud.desc}
                        </p>
                    </div>
                </div>
            </GlassCard>
        </div>

        <div 
            className="md:col-span-1 md:row-span-1"
        >
            <GlassCard className="h-full p-5 md:p-6">
                <div className="flex flex-col justify-between h-full gap-6">
                    <div className="flex justify-between items-start">
                        <div className="p-3 rounded-full bg-white/5">
                            <Server className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white">{t.dashboard.cards.pterodactyl.title}</h3>
                        <p className="text-xs text-white/40">{t.dashboard.cards.pterodactyl.desc}</p>
                    </div>
                </div>
            </GlassCard>
        </div>

        <div 
            className="md:col-span-1 md:row-span-1"
        >
            <GlassCard className="h-full p-5 md:p-6">
                 <div className="flex flex-col justify-between h-full gap-6">
                     <div className="flex justify-between items-start">
                        <div className="p-3 rounded-full bg-white/5">
                            <Video className="w-6 h-6 text-orange-400" strokeWidth={1.5} />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-lg font-medium text-white">{t.dashboard.cards.jitsi.title}</h3>
                        <p className="text-xs text-white/40">{t.dashboard.cards.jitsi.desc}</p>
                     </div>
                 </div>
            </GlassCard>
        </div>

        <div 
            className="md:col-span-1 md:row-span-1"
        >
             <GlassCard className="h-full p-5 md:p-6">
                 <div className="flex flex-col justify-between h-full gap-6">
                     <div className="flex justify-between items-start">
                        <div className="p-3 rounded-full bg-white/5">
                            <Globe className="w-6 h-6 text-green-400" strokeWidth={1.5} />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-lg font-medium text-white">{t.dashboard.cards.nginx.title}</h3>
                        <p className="text-xs text-white/40">{t.dashboard.cards.nginx.desc}</p>
                     </div>
                 </div>
            </GlassCard>
        </div>

        <div 
            className="md:col-span-1 md:row-span-1"
        >
            <GlassCard className="h-full p-5 md:p-6">
                 <div className="flex flex-col justify-between h-full gap-6">
                     <div className="flex justify-between items-start">
                        <div className="p-3 rounded-full bg-white/5">
                            <PenTool className="w-6 h-6 text-pink-400" strokeWidth={1.5} />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-lg font-medium text-white">{t.dashboard.cards.excalidraw.title}</h3>
                        <p className="text-xs text-white/40">{t.dashboard.cards.excalidraw.desc}</p>
                     </div>
                 </div>
            </GlassCard>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;
