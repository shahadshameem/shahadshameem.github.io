import React from 'react';
import { Cpu, Radio, Layers, Shield, Terminal, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
  Radio: <Radio className="w-5 h-5 text-teal-400" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />,
  Shield: <Shield className="w-5 h-5 text-amber-400" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 font-semibold">
            <span className="w-4 h-px bg-sky-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Core Disciplines
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            A comprehensive matrix spanning low-level bare-metal firmware, wireless radio protocols, full-stack cloud ecosystems, and enterprise network security.
          </p>
        </div>

        {/* 4-Column Studio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.skills.map((category) => (
            <div
              key={category.id}
              className="studio-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Icon & Title */}
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4">
                  {ICONS[category.iconName]}
                </div>

                <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-neutral-400 font-mono mb-6 leading-relaxed">
                  {category.desc}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md border transition-colors ${
                        skill.highlight
                          ? 'bg-neutral-900 text-white border-neutral-700 font-medium'
                          : 'bg-neutral-950/60 text-neutral-400 border-neutral-800/80'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>{category.skills.length} competencies</span>
                <span className="text-sky-500/60">0x{category.id.slice(0, 3).toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
