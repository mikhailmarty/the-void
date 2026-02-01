import React from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import { Code, Terminal, Box, GitBranch, Layout, Server, LucideIcon } from 'lucide-react';

const items = [
    { icon: Code, label: "Python" },
    { icon: Terminal, label: "Lua" },
    { icon: Box, label: "Docker" },
    { icon: Server, label: "Linux" },
    { icon: GitBranch, label: "Git" },
    { icon: Layout, label: "React" },
];

interface DockIconProps {
    mouseX: MotionValue<number>;
    item: {
        icon: LucideIcon;
        label: string;
    };
}

const DockIcon: React.FC<DockIconProps> = ({ mouseX, item }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useTransform(widthSync, (val) => val);

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center relative group cursor-pointer"
        >
            <item.icon className="w-1/2 h-1/2 text-white group-hover:text-accent-electric transition-colors" />
            
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs text-white whitespace-nowrap pointer-events-none">
                {item.label}
            </div>
        </motion.div>
    );
};

const Dock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-end h-24 pb-3">
        <motion.div 
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="flex gap-4 items-end px-4 py-3 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
            {items.map((item, index) => (
                <DockIcon key={index} mouseX={mouseX} item={item} />
            ))}
        </motion.div>
    </div>
  );
};

export default Dock;
