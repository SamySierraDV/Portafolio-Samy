import React from 'react';
import { 
  Github, 
  ExternalLink, 
  LayoutGrid, 
  Info
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsViewProps {
  onProjectSelect: (project: Project) => void;
  onDownloadDossier: () => void;
}

export default function ProjectsView({ onProjectSelect }: ProjectsViewProps) {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Page Header */}
      <header className="border-l-4 border-primary-container pl-6 text-left">
        <span className="font-mono text-[10px] md:text-xs text-primary-container tracking-widest uppercase">Performance Reports</span>
        <h2 className="font-display text-2xl md:text-5xl font-black text-primary mt-1 uppercase">Project Repository</h2>
      </header>

      {/* Grid: 3-column performance reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article 
            key={project.id}
            className="group flex flex-col bg-surface-container border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary-container/40 transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.05)]"
          >
            {/* Encabezado Visual con Badge */}
            <div className="relative h-48 overflow-hidden bg-surface-container-low/50">
              <img 
                src={project.image} 
                alt={project.title}
                className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-110 ${
                  index === 0 ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-2 py-0.5 bg-background/80 backdrop-blur-sm border border-primary-container/30 text-primary-container font-mono text-[9px] font-bold rounded uppercase">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Cuerpo de la Tarjeta */}
            <div className="p-5 flex-1 flex flex-col text-left relative">
              <h3 className="font-display text-lg font-bold text-primary mb-3 uppercase tracking-tight">{project.title}</h3>
              
              <div className="mb-4">
                <span className="block font-mono text-[9px] text-primary-container/70 uppercase tracking-widest mb-1">Objetivo de la Misión</span>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tecnologías como labels compactos */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-surface-container-low px-1.5 py-0.5 rounded border border-outline-variant/20 font-mono text-[8px] text-outline-variant uppercase">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Valor Táctico - Esquina inferior derecha */}
              <div className="absolute bottom-20 right-5 text-right">
                <span className="block font-mono text-[8px] text-outline uppercase">Valor Táctico</span>
                <span className="font-display text-2xl font-black text-primary-container glow-cyan-text">
                  {project.matchRating}%
                </span>
              </div>

              {/* Botones de Acción */}
              <footer className="mt-auto pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                <div className="flex gap-2">
                  {project.demoUrl ? (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-1.5 bg-primary-container text-background font-mono text-[10px] font-extrabold rounded hover:shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all uppercase"
                    >
                      Ver Demostración
                    </a>
                  ) : (
                    <button 
                      disabled 
                      className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant font-mono text-[10px] font-extrabold rounded cursor-not-allowed uppercase"
                    >
                      Preview N/A
                    </button>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-1.5 border border-outline-variant/30 text-on-surface-variant hover:text-primary-container transition-colors rounded"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
                <button 
                  onClick={() => onProjectSelect(project)}
                  className="flex items-center gap-1 font-mono text-[9px] font-bold text-outline-variant hover:text-primary transition-all uppercase tracking-tighter"
                >
                  Ver más <Info className="w-3 h-3" />
                </button>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
