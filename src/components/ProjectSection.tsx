import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Cpu, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

type FilterType = 'all' | 'embedded' | 'web';

export const ProjectSection: React.FC<{
  onSelectProject: (project: Project) => void;
}> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 font-semibold">
              <span className="w-4 h-px bg-sky-400" />
              <span>Shipped Systems & Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              From bare-metal ARM microcontrollers and long-range LoRa radios to transactional cloud web architectures.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeFilter === 'all'
                  ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              All ({PORTFOLIO_DATA.projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('embedded')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeFilter === 'embedded'
                  ? 'bg-neutral-800 text-sky-400 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Embedded & IoT ({PORTFOLIO_DATA.projects.filter((p) => p.category === 'embedded').length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeFilter === 'web'
                  ? 'bg-neutral-800 text-indigo-400 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Web & Cloud ({PORTFOLIO_DATA.projects.filter((p) => p.category === 'web').length})
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.badgeType === 'featured';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`studio-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                  isFeatured ? 'md:col-span-2 md:grid md:grid-cols-12 md:gap-8' : ''
                }`}
              >
                {/* Left / Top Information Block */}
                <div className={isFeatured ? 'md:col-span-7 flex flex-col justify-between' : 'flex flex-col'}>
                  <div>
                    {/* Top Bar: Number & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-neutral-500 font-semibold tracking-wider">
                        SYS // {project.number}
                      </span>
                      {project.badge && (
                        <span
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                            project.badgeType === 'live'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                          }`}
                        >
                          {project.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs font-mono text-neutral-400 mb-4">
                      {project.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 group-hover:border-neutral-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right / Highlights Block (for featured) or bottom details */}
                <div className={isFeatured ? 'md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-neutral-800/80 pt-6 md:pt-0 md:pl-8' : 'pt-4 border-t border-neutral-800/60'}>
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                      Engineering Highlights
                    </span>
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 leading-relaxed">
                        <span className="text-sky-400 mt-0.5">▸</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 group-hover:text-sky-300 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Inspect Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500 hover:text-neutral-950 text-[11px] font-mono transition-all flex items-center gap-1"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-all"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
