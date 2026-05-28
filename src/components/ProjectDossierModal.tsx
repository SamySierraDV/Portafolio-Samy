import { X, Code, ClipboardList, Database, Terminal, ArrowUpRight, CheckCircle, Network, Layers, Container } from 'lucide-react';
import { Project } from '../types';

interface ProjectDossierModalProps {
  project: Project | null;
  onClose: () => void;
  onViewSource?: (project: Project) => void;
}

export default function ProjectDossierModal({ project, onClose, onViewSource }: ProjectDossierModalProps) {
  if (!project) return null;

  const stats = project.stats || {
    latencyReduction: 40,
    uptime: '99.99%',
    throughput: '50k req/s'
  };

  const getTechIcon = (techName: string) => {
    const name = techName.toLowerCase();
    if (name.includes('spring')) {
      return <Layers className="w-6 h-6 text-primary-container" />;
    } else if (name.includes('vaadin')) {
      return <ClipboardList className="w-6 h-6 text-primary-container" />;
    } else if (name.includes('kafka')) {
      return <Network className="w-6 h-6 text-primary-container" />;
    } else if (name.includes('docker')) {
      return <Container className="w-6 h-6 text-primary-container" />;
    } else if (name.includes('mongodb') || name.includes('sql')) {
      return <Database className="w-6 h-6 text-primary-container" />;
    }
    return <Terminal className="w-6 h-6 text-primary-container" />;
  };

  return (
    <div 
      className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-surface-container rounded-xl border border-primary-container/30 shadow-2xl p-6 md:p-8 my-8 transition-all overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        {/* Glow scanline detail overlay */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary-container to-transparent" />
        <div className="absolute inset-0 pointer-events-none scanline opacity-[0.06]" />

        {/* Top Header: Breadcrumbs & Close bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs">
            <span className="text-primary-container uppercase tracking-widest">PROJECT DOSSIER</span>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface-variant uppercase tracking-widest">{project.title}</span>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-surface-container-high rounded-full text-on-surface-variant hover:text-primary transition-colors focus:ring-1 focus:ring-primary-container focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Card Container */}
        <div className="relative overflow-hidden bg-surface-container-low/80 border border-outline-variant/30 rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 id="dossier-title" className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-primary mb-2">
              {project.title}
            </h1>
            <p className="font-sans text-sm text-on-surface-variant max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Match rating highlight card */}
          <div className="relative flex flex-col items-center justify-center p-4 bg-surface-container-highest/60 rounded-lg border border-primary-container/20 min-w-[150px] w-full md:w-auto">
            <span className="font-mono text-[10px] text-primary-container uppercase tracking-wider mb-1">
              MATCH RATING
            </span>
            <div className="font-display text-4xl font-extrabold text-primary shadow-sm glow-cyan-text">
              {project.matchRating.toFixed(1)}
            </div>
            <div className="w-full bg-surface-container-low h-1 mt-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary-container h-full shadow-[0_0_8px_#00f0ff] rounded-full" 
                style={{ width: `${project.matchRating * 10}%` }}
              />
            </div>
          </div>
        </div>

        {/* Split Grid Content layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column Section: Tactical Lineup & Scout Notes */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Tactical Lineup Bento Grid panel */}
            <div className="glass-panel rounded-xl p-5 border border-outline-variant/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-primary-container" />
                <h2 className="font-display text-sm font-bold text-primary tracking-wider uppercase">TACTICAL LINEUP</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.technologies.slice(0, 4).map((tech) => (
                  <div 
                    key={tech}
                    className="flex flex-col items-center p-3 bg-surface-container-high rounded-lg border border-outline-variant/30 hover:border-primary-container/50 transition-all group"
                  >
                    <div className="mb-2 transition-transform group-hover:scale-110">
                      {getTechIcon(tech)}
                    </div>
                    <span className="font-mono text-[9px] font-bold text-on-surface-variant group-hover:text-primary uppercase truncate w-full text-center">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scout Notes Commentary */}
            <div className="glass-panel rounded-xl p-5 border border-outline-variant/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-5 bg-primary-container" />
                <h2 className="font-display text-sm font-bold text-primary tracking-wider uppercase">SCOUT NOTES</h2>
              </div>
              
              <div className="space-y-4 font-sans text-xs md:text-[13px] text-on-surface-variant leading-relaxed">
                <p>
                  {project.longDescription || project.description}
                </p>
                {project.scoutNotes && (
                  <div className="p-4 bg-surface-container-lowest/60 border-l-4 border-primary-container font-mono text-[11px] italic leading-normal text-on-surface">
                    "{project.scoutNotes}"
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column Section: Match stats and visualizations */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Match Statistics Metrics list */}
            <div className="glass-panel rounded-xl p-5 border border-outline-variant/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-5 bg-primary-container" />
                <h2 className="font-display text-sm font-bold text-primary tracking-wider uppercase">MATCH STATISTICS</h2>
              </div>

              <div className="space-y-5">
                {/* Latency Reduction */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-end text-xs font-mono">
                    <span className="text-on-surface-variant uppercase tracking-wider">LATENCY REDUCTION</span>
                    <span className="text-primary-container font-bold">{stats.latencyReduction}%</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden text-left">
                    <div 
                      className="bg-primary-container h-full rounded-full shadow-[0_0_8px_#00f0ff]" 
                      style={{ width: `${stats.latencyReduction}%` }}
                    />
                  </div>
                </div>

                {/* Uptime */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-end text-xs font-mono">
                    <span className="text-on-surface-variant uppercase tracking-wider">UPTIME RATING</span>
                    <span className="text-primary-container font-bold">{stats.uptime}</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden text-left">
                    <div 
                      className="bg-primary-container h-full rounded-full shadow-[0_0_8px_#00f0ff]" 
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                {/* Throughput */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-end text-xs font-mono">
                    <span className="text-on-surface-variant uppercase tracking-wider">PEAK THROUGHPUT</span>
                    <span className="text-primary-container font-bold">{stats.throughput}</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden text-left">
                    <div 
                      className="bg-primary-container h-full rounded-full shadow-[0_0_8px_#00f0ff]" 
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Heatmap visualization drawing */}
              <div className="mt-6 p-4 bg-surface-container-lowest border border-outline-variant/25 rounded-lg overflow-hidden relative">
                <div 
                  className="absolute inset-0 opacity-[0.04]" 
                  style={{
                    backgroundImage: 'radial-gradient(circle, #00dbe9 1.5px, transparent 1.5px)',
                    backgroundSize: '16px 16px'
                  }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="font-mono text-[9px] text-outline uppercase tracking-wider mb-3">
                    System Architecture Routing Map
                  </span>
                  <div className="w-full aspect-video rounded bg-surface-container-high flex flex-col items-center justify-center border border-outline-variant/30 relative overflow-hidden">
                    {/* Concentric rings to look technical */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <div className="w-24 h-24 rounded-full border border-primary-container animate-pulse" />
                      <div className="w-36 h-36 rounded-full border border-primary-container/40 absolute" />
                    </div>
                    
                    <div className="flex items-center gap-6 z-10">
                      <div className="flex flex-col items-center gap-1">
                        <Terminal className="w-5 h-5 text-primary-container" />
                        <span className="font-mono text-[8px] text-outline">Client</span>
                      </div>
                      <div className="w-8 h-px bg-dashed border-t border-primary-container/30" />
                      <div className="w-10 h-10 rounded-full border border-primary-container flex items-center justify-center bg-surface-container-low animate-spin [animation-duration:8s]">
                        <Layers className="w-5 h-5 text-primary-container" />
                      </div>
                      <div className="w-8 h-px bg-dashed border-t border-primary-container/30" />
                      <div className="flex flex-col items-center gap-1">
                        <Database className="w-5 h-5 text-primary-container" />
                        <span className="font-mono text-[8px] text-outline">Cluster</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View Source Trigger actions block */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => onViewSource && onViewSource(project)}
                className="w-full py-3.5 bg-primary-container text-background font-mono text-[10px] font-extrabold uppercase tracking-widest rounded shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Code className="w-4 h-4" />
                LOG IN TO REPO / VIEW CODE
              </button>
              
              <button 
                onClick={onClose}
                className="w-full py-3.5 border border-primary-container/30 hover:border-primary-container text-primary font-mono text-[10px] font-bold uppercase tracking-widest rounded hover:bg-primary-container/5 transition-all"
              >
                CERRAR EXPEDIENTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
