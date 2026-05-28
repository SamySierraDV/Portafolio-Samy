import { useState } from 'react';
import { 
  Library, 
  MessageSquare, 
  Currency, 
  Coins, 
  Sparkles, 
  Eye, 
  Cpu, 
  Network, 
  Layers, 
  Download,
  Terminal,
  Database,
  Container,
  FolderDot
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectDossierModal from '../components/ProjectDossierModal';

interface ProjectsViewProps {
  onProjectSelect: (proj: Project) => void;
  onDownloadDossier: () => void;
}

export default function ProjectsView({ onProjectSelect, onDownloadDossier }: ProjectsViewProps) {
  
  // Custom icons for standard minor project cards
  const getSubProjectIcon = (projectId: string) => {
    switch (projectId) {
      case 'project-literalura':
        return <Library className="w-5 h-5 text-on-surface-variant group-hover:scale-110 transition-transform" />;
      case 'project-foro':
        return <MessageSquare className="w-5 h-5 text-on-surface-variant group-hover:scale-110 transition-transform" />;
      case 'project-conversor':
        return <Coins className="w-5 h-5 text-on-surface-variant group-hover:rotate-12 transition-transform" fill="none" />;
      case 'project-batatabit':
        return <svg className="w-5 h-5 text-on-surface-variant group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      default:
        return <FolderDot className="w-5 h-5 text-on-surface-variant" />;
    }
  };

  // Main system payroll system is our star featured project card (NOMINA EMPRESARIAL)
  const featuredProject = projects.find(p => p.id === 'project-nomina') || projects[0];
  const minorProjects = projects.filter(p => p.id !== 'project-nomina');

  return (
    <div className="space-y-12 animate-fade-in text-left">
      
      {/* Page Header */}
      <div className="border-l-4 border-primary pl-6">
        <h2 className="font-display text-2xl md:text-5xl font-black text-primary mb-2 uppercase">Technical Scouting Report</h2>
        <p className="font-mono text-[10px] md:text-xs text-on-surface-variant tracking-widest uppercase">Database: Proyectos Destacados // Global Assets Catalog</p>
      </div>

      {/* Bento Grid: Gallery of Tactical Assets */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Star featured project layout */}
        {featuredProject && (
          <div 
            onClick={() => onProjectSelect(featuredProject)}
            className="md:col-span-8 group relative overflow-hidden bg-surface-container border border-primary-container/20 rounded-xl p-6 transition-all hover:border-primary-container/50 glow-hover cursor-pointer"
          >
            {/* Pulsing visual scanline */}
            <div className="absolute inset-0 pointer-events-none scanline opacity-5" />

            <div className="flex justify-between items-start mb-6 border-b border-outline-variant/25 pb-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary-container animate-pulse" />
                <h3 className="font-display text-lg md:text-2xl font-bold text-primary uppercase">
                  {featuredProject.title}
                </h3>
              </div>
              <div className="bg-primary-container/10 border border-primary-container px-3 py-1 rounded text-primary-container font-mono text-xs font-bold glow-cyan-text">
                {featuredProject.rating}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Left Specifications stats side */}
              <div className="flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 bg-surface-container-high border border-outline-variant/30 text-[9px] font-mono rounded uppercase text-on-surface-variant font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  {featuredProject.description}
                </p>
                
                <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/10">
                  <div className="flex flex-col">
                    <span className="text-primary-container font-mono text-lg font-extrabold">{featuredProject.calcReduction}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-outline opacity-60">Calc Reduction</span>
                  </div>
                  <div className="h-8 w-[1px] bg-outline-variant/30 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-primary-container font-mono text-lg font-extrabold">{featuredProject.complexity}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-outline opacity-60">Complexity</span>
                  </div>
                </div>
              </div>

              {/* Right Mock visualization panel */}
              <div className="relative h-44 md:h-full min-h-[160px] rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-low flex items-center justify-center">
                {featuredProject.image ? (
                  <img 
                    alt="Payroll System Dashboard" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                    src={featuredProject.image} 
                  />
                ) : (
                  <div className="text-center p-4">
                    <Layers className="w-10 h-10 text-primary-container/30 mb-2 mx-auto animate-pulse" />
                    <span className="font-mono text-[9px] text-outline">VISUALIZATION PIPELINE</span>
                  </div>
                )}
                {/* Decorative blueprint matrix overlay */}
                <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
              </div>

            </div>
          </div>
        )}

        {/* Dynamic Minor Project cards rendering loop */}
        {minorProjects.map((proj) => {
          const isLeterAlura = proj.id === 'project-literalura';
          const isForo = proj.id === 'project-foro';
          const isConversor = proj.id === 'project-conversor';
          const isBatata = proj.id === 'project-batatabit';

          return (
            <div 
              key={proj.id}
              onClick={() => onProjectSelect(proj)}
              className="md:col-span-4 bg-surface-container border border-outline-variant/20 rounded-xl p-5 hover:border-primary-container/45 transition-all glow-hover cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-5 border-b border-outline-variant/10 pb-3">
                  {getSubProjectIcon(proj.id)}
                  <div className="bg-surface-container-high px-2 py-0.5 rounded border border-outline-variant/30 text-on-surface font-mono text-[10px] font-bold">
                    {proj.rating}
                  </div>
                </div>

                <h3 className="font-display text-base font-extrabold text-primary uppercase mb-2">
                  {proj.title}
                </h3>

                {/* Sub-label protocols details */}
                {proj.secureProtocol && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-2 py-1 rounded inline-block text-[9px] font-mono uppercase mb-4 font-bold tracking-tighter">
                    Secure Protocol: {proj.secureProtocol}
                  </div>
                )}
                
                {proj.status === 'RESPONSIVE MATRIX' && (
                  <div className="border border-primary-container text-primary-container px-2 py-0.5 rounded inline-block text-[9px] font-mono uppercase mb-4 font-extrabold tracking-wider">
                    {proj.status}
                  </div>
                )}

                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Bottom detail status specifications bar */}
              <div className="border-t border-outline-variant/15 pt-3">
                {isLeterAlura && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[9px] font-mono uppercase">
                      <span className="text-outline">Java 17 + PostgreSQL</span>
                      <span className="text-primary-container">LIVE</span>
                    </div>
                    <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden text-left">
                      <div className="h-full bg-primary-container w-[92%]" />
                    </div>
                  </div>
                )}

                {isForo && (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                    <span className="text-[10px] font-mono uppercase text-primary-container tracking-wider font-bold">
                      Encrypted Environment
                    </span>
                  </div>
                )}

                {isConversor && (
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-primary-container/10 border border-primary-container/40 flex items-center justify-center text-[7px] font-mono font-bold">USD</div>
                      <div className="w-5 h-5 rounded-full bg-primary-container/10 border border-primary-container/40 flex items-center justify-center text-[7px] font-mono font-bold">EUR</div>
                    </div>
                    <span className="text-[10px] font-mono text-on-surface-variant uppercase font-medium">
                      Sync: {proj.syncTime || '120ms'}
                    </span>
                  </div>
                )}

                {isBatata && (
                  <div className="flex justify-between items-center text-[9px] font-mono text-outline">
                    <span>RESPONSIVE STATS</span>
                    <span className="text-primary-container font-extrabold">LOW LATENCY</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

      </div>

      {/* Footer trigger downloads */}
      <div className="pt-8 flex flex-col items-center">
        <button 
          onClick={onDownloadDossier}
          className="group relative px-8 py-4 bg-primary-container text-background font-mono text-xs font-black tracking-widest uppercase rounded overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Download className="w-4 h-4 text-background" />
            Descargar Dossier Completo
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
        <p className="mt-4 text-[9px] font-mono text-outline uppercase tracking-widest opacity-50">
          Confidential Scouting Report // Authenticated UUID ID: {projects[0].id}
        </p>
      </div>

    </div>
  );
}
