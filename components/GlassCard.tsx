import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glowColor = 'rgba(255,255,255,0.05)', ...props }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#13161c]/90 border border-white/5 ${className}`}
      style={{
        boxShadow: `inset 0 0 20px ${glowColor}`,
      }}
      {...props}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
