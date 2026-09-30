import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../data/portfolioData';

export const ProjectModal: React.FC<{
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-neutral-900/80 border-b border-neutral-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
                Project {project.number} • {project.categoryLabel}
              </span>
              {project.badge && (
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    project.badgeType === 'live'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                  }`}
                >
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-400 mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="font-mono text-xs text-neutral-400">{m.label}</span>
                <span className="text-lg font-bold text-white font-mono mt-0.5">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4" />
                The Challenge
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4" />
                Engineered Solution
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Diagram */}
          {project.architectureDiagram && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-sky-400" />
                  System Architecture Pipeline
                </span>
                <span className="text-[11px] font-mono text-neutral-500">ASCII Topology</span>
              </div>
              <pre className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-sky-300 font-mono text-xs overflow-x-auto leading-relaxed selection:bg-sky-500/30">
                {project.architectureDiagram}
              </pre>
            </div>
          )}

          {/* Deep Dive Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
              Deep-Dive Overview
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Architectural Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
              Key Engineering Achievements
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                  <span className="text-sky-400 mt-0.5 shrink-0">▸</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between gap-4">
          <div className="text-xs font-mono text-neutral-500">Role: {project.role}</div>

          <div className="flex items-center gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-sky-500 text-neutral-950 font-semibold text-xs hover:bg-sky-400 transition-all flex items-center gap-1.5 shadow-md shadow-sky-500/20"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-600 text-xs font-medium transition-all flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
