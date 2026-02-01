import React from 'react';
import { Box, Code2, Users } from 'lucide-react';
import GlassCard from './GlassCard';

const Blueprint: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <GlassCard className="relative p-10 md:p-16 overflow-hidden bg-blue-900/5 !border-blue-500/20">
        
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ 
                 backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                 backgroundSize: '20px 20px' 
             }}>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl font-mono text-blue-300 mb-12 border-b border-blue-500/30 pb-2 tracking-widest">
                SYSTEM_BLUEPRINT::MINECRAFT_ENG
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-lg border border-blue-400/30 flex items-center justify-center mb-6 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors">
                        <Box className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Server Core</h3>
                    <p className="font-mono text-sm text-blue-200/60">Java 1.21.10</p>
                    <p className="font-mono text-xs text-blue-200/40 mt-1">+ Python API Bridge</p>
                    <div className="hidden md:block w-full h-[1px] bg-blue-500/20 mt-8 relative">
                        <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-blue-500/50"></div>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-lg border border-blue-400/30 flex items-center justify-center mb-6 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors">
                        <Code2 className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Education Module</h3>
                    <p className="font-mono text-sm text-blue-200/60">MakeCode Algorithms</p>
                    <p className="font-mono text-xs text-blue-200/40 mt-1">Logic Gates & Redstone</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-lg border border-blue-400/30 flex items-center justify-center mb-6 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors">
                        <Users className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                    <p className="font-mono text-sm text-blue-200/60">Private SMP</p>
                    <p className="font-mono text-xs text-blue-200/40 mt-1">Collaborative Build</p>
                    <div className="hidden md:block w-full h-[1px] bg-blue-500/20 mt-8 relative">
                         <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-blue-500/50"></div>
                    </div>
                </div>
            </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default Blueprint;