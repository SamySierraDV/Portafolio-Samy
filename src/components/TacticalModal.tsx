import { X, Terminal, Shield, Cpu, Database, Cloud } from 'lucide-react';
import { TacticalNode } from '../types';

interface TacticalModalProps {
  node: TacticalNode | null;
  onClose: () => void;
  onActionClick?: (actionType: string) => void;
}

export default function TacticalModal({ node, onClose, onActionClick }: TacticalModalProps) {
  if (!node) return null;

  // Map icon names to lucide components
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'hub':
        return <svg className="w-6 h-6 text-primary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
      case 'terminal':
        return <Terminal className="w-6 h-6 text-primary-container" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-primary-container" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-primary-container" />;
      case 'database':
        return <Database className="w-6 h-6 text-primary-container" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-primary-container" />;
      default:
        return <Cpu className="w-6 h-6 text-primary-container" />;
    }
  };

  const d = node.details;

  return (
    <div 
      className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm opacity-100 transition-opacity duration-300 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-surface-container rounded-xl border border-primary-container/30 shadow-2xl transition-transform duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        {/* Glow scanline indicator bar */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-primary-container to-transparent animate-pulse" />
        
        {/* Scanline overlay effect */}
        <div className="absolute inset-0 pointer-events-none scanline opacity-10" />

        {/* Header section with badge */}
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-start bg-surface-container-high/40">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded bg-primary-container/10 border border-primary-container/50 flex items-center justify-center glow-cyan">
              {getIcon(node.icon)}
            </div>
            <div>
              <h3 id="modal-title" className="font-display text-xl md:text-2xl font-extrabold text-primary">
                {node.label}
              </h3>
              <div className="flex gap-2 mt-1">
                <span className="px-2 py-0.5 rounded bg-primary-container text-background font-mono text-[10px] font-bold">
                  CORE TACTIC
                </span>
                <span className="px-2 py-0.5 rounded border border-primary-container/30 text-primary-container font-mono text-[10px] uppercase">
                  ELITE TIER
                </span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 hover:bg-surface-container-high rounded-full text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-1 focus:ring-primary-container"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body split in two columns */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low/30">
          
          {/* Narrative text Column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-mono text-[10px] text-primary/70 uppercase tracking-wider mb-2">Technical Dossier</h4>
              <p className="font-sans text-[13px] md:text-sm text-on-surface-variant leading-relaxed">
                {d.description}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-mono text-[10px] text-primary/70 uppercase tracking-wider">Lineup Tools</h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {d.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-surface-container-low px-2 py-1 rounded border border-outline-variant/30 text-on-surface font-mono text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics stat ratings column */}
          <div className="space-y-6 bg-surface-container-low/70 p-4 rounded-lg border border-outline-variant/10">
            <h4 className="font-mono text-[10px] text-primary/70 uppercase tracking-wider">Attribute Metrics</h4>
            
            <div className="space-y-4">
              {/* Scalability */}
              <div>
                <div className="flex justify-between mb-1 text-xs font-mono">
                  <span className="text-on-surface-variant uppercase">SCALABILITY</span>
                  <span className="text-primary-container">{d.scalability}/100</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-container glow-cyan rounded-full transition-all duration-1000"
                    style={{ width: `${d.scalability}%` }}
                  />
                </div>
              </div>

              {/* Resilience */}
              <div>
                <div className="flex justify-between mb-1 text-xs font-mono">
                  <span className="text-on-surface-variant uppercase">RESILIENCE</span>
                  <span className="text-primary-container">{d.resilience}/100</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-container glow-cyan rounded-full transition-all duration-1000"
                    style={{ width: `${d.resilience}%` }}
                  />
                </div>
              </div>

              {/* Observability */}
              <div>
                <div className="flex justify-between mb-1 text-xs font-mono">
                  <span className="text-on-surface-variant uppercase">OBSERVABILITY</span>
                  <span className="text-primary-container">{d.observability}/100</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-container glow-cyan rounded-full transition-all duration-1000"
                    style={{ width: `${d.observability}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Operational details status bar */}
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-[9px] text-on-surface-variant uppercase">
                  OPERATIONAL STATUS: {d.operationalStatus}
                </span>
              </div>
              <span className="font-mono text-[9px] text-primary-container">
                CODE ID: {d.codeId}
              </span>
            </div>
          </div>
        </div>

        {/* Actions bar */}
        <div className="px-6 py-4 bg-surface-container-highest/50 border-t border-outline-variant/20 flex flex-wrap justify-end gap-3">
          <button 
            onClick={() => onActionClick && onActionClick('source')}
            className="px-4 py-2 border border-primary-container/40 text-primary-container font-mono text-[10px] font-bold tracking-wider rounded hover:bg-primary-container/10 transition-colors uppercase"
          >
            VER CÓDIGO FUENTE
          </button>
          <button 
            onClick={() => onActionClick && onActionClick('dossier')}
            className="px-4 py-2 bg-primary-container text-background font-mono text-[10px] font-extrabold tracking-wider rounded border border-primary-container shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase"
          >
            DESCARGAR DOSSIER TÁCTICO
          </button>
        </div>
      </div>
    </div>
  );
}
