import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-neutral-800/80 bg-neutral-950 text-neutral-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copy */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</span>
            <span className="text-neutral-500 ml-2">© {new Date().getFullYear()} • All systems operational</span>
          </div>
        </div>

        {/* Tech Stack Indicator */}
        <div className="text-[11px] text-neutral-500 flex items-center gap-2">
          <span>React 19 + TypeScript + Tailwind CSS</span>
          <span>•</span>
          <span>College of Engineering Trivandrum</span>
        </div>

        {/* Action Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors flex items-center gap-1.5"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[10px]">TOP</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
