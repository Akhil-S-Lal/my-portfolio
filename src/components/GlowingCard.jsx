import React from 'react';

const GlowingCard = ({ children, className = "" }) => (
    <div className={`group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-violet-500/20 hover:from-cyan-400 hover:to-violet-500 transition-all duration-500 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
        <div className="relative h-full bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            {children}
        </div>
    </div>
);

export default GlowingCard;
