import React, { useState, useEffect } from 'react';
import { ArrowDown, Terminal as TerminalIcon, Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const ROLES = [
  'Embedded Systems & Firmware Engineer',
  'LoRa & Wireless Telemetry Architect',
  'ARM Cortex-M Programmer',
  'Full-Stack Developer (React 19 & Cloud)',
  'B.Tech ECE @ CET Trivandrum',
];

export const Hero: React.FC<{ onOpenTerminal: () => void }> = ({ onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < current.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-neutral-300 tracking-wide">
                B.Tech ECE @ CET Kerala • Available for Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
              Shahad <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
                Shameem
              </span>
            </h1>

            {/* Typing dynamic subtitle */}
            <div className="h-8 flex items-center mb-6">
              <span className="font-mono text-base sm:text-lg text-sky-400 font-medium">
                {ROLES[roleIndex].slice(0, charIndex)}
              </span>
              <span className="w-2 h-5 bg-sky-400 ml-1 inline-block animate-pulse" />
            </div>

            {/* Bio prose */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8">
              Architecting resilient hardware telemetry, edge IoT networks, and full-stack cloud web applications. 
              Creator of the <strong className="text-neutral-200 font-semibold">Survivor Protocol</strong> for LoRa sensor failover and the <strong className="text-neutral-200 font-semibold">WayMate</strong> campus carpooling PWA.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg shadow-white/5"
              >
                <span>View Shipped Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-5 py-3 rounded-lg bg-neutral-900 border border-neutral-700/80 text-sky-400 font-mono text-xs font-medium hover:border-sky-500/60 hover:bg-sky-500/10 transition-all flex items-center gap-2.5"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>Open Hardware CLI</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-lg bg-transparent border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 text-sm font-medium transition-all"
              >
                Get in touch
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-neutral-800/80">
              {PORTFOLIO_DATA.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-neutral-300 mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Studio Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-transparent rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Studio Frame Card */}
              <div className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 overflow-hidden shadow-2xl">
                {/* Header bar */}
                <div className="px-4 py-2.5 bg-neutral-950/80 border-b border-neutral-800/80 flex items-center justify-between font-mono text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  </div>
                  <span className="text-[11px] text-neutral-500">engineer_profile.sys</span>
                </div>

                {/* Photo container */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-neutral-950">
                  <img
                    src="./profile.webp"
                    alt="Shahad Shameem V.P"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      // Fallback if image path differs
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating specs badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-white">Shahad Shameem V.P</div>
                      <div className="text-[11px] font-mono text-sky-400 flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        <span>Trivandrum, Kerala</span>
                      </div>
                    </div>
                    <div className="px-2 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-[10px] font-mono text-sky-400">
                      ECE CET
                    </div>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="p-4 bg-neutral-900/60 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Verified CET Student
                  </span>
                  <span className="text-neutral-500">Node ID: 0xCET-24</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
