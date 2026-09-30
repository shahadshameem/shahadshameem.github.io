import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 font-semibold">
            <span className="w-4 h-px bg-sky-400" />
            <span>Background & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            Industry network administration experience combined with rigorous formal engineering education at Kerala's premier technical institution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Industry Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono text-neutral-300 font-semibold uppercase tracking-wider mb-6">
              <Briefcase className="w-4 h-4 text-sky-400" />
              <span>Industry Work Experience</span>
            </div>

            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div
                key={idx}
                className="studio-card rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-sky-400 mt-0.5">
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 self-start">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {exp.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <span className="text-sky-400 mt-1 shrink-0">—</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Certification Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  Professional Certification
                </div>
                <h4 className="text-sm font-bold text-white">
                  Project Prototyping Using Embedded Systems and IoT
                </h4>
                <p className="text-xs text-neutral-400 font-mono">
                  Laxmi Infoteck, Ernakulam • 2022
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Track (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono text-neutral-300 font-semibold uppercase tracking-wider mb-6">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Academic Foundation</span>
            </div>

            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="studio-card rounded-2xl p-6 space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                      {edu.grade}
                    </span>
                    <span className="font-mono text-xs text-neutral-500">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-sky-400 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <ul className="space-y-2 pt-2 border-t border-neutral-800/60">
                  {edu.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-400 leading-relaxed">
                      <span className="text-neutral-500 mt-0.5">▸</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
