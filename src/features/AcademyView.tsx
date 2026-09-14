import { 
  School, 
  Database, 
  Award, 
  Download, 
  Code2, 
  Layers, 
  Network, 
  Globe2, 
  BookOpen, 
  Quote,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { 
  developerProfile, 
  academicCredentials, 
  coreLanguages, 
  frameworks, 
  ecosystem 
} from '../data/portfolioData';

interface AcademyViewProps {
  onDownloadDossier: () => void;
}

export default function AcademyView({ onDownloadDossier }: AcademyViewProps) {
  
  const getAcademicIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <School className="w-8 h-8 text-primary-container" />;
      case 'Database':
        return <Database className="w-8 h-8 text-primary-container" />;
      case 'Award':
        return <Award className="w-8 h-8 text-primary-container" />;
      default:
        return <Award className="w-8 h-8 text-primary-container" />;
    }
  };

  return (
    <div className="space-y-12 animate-fade-in text-left">
      
      {/* Screen Header matched to Image 7 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant/15 pb-6 gap-6">
        <div>
          <span className="font-mono text-[10px] md:text-xs text-primary-container tracking-[0.2em]">ACADEMY MODULE // 002</span>
          <h2 className="font-display text-2xl md:text-5xl font-black text-primary mt-1">TRAINING & FORMATION</h2>
          <div className="h-[2.5px] w-32 bg-primary-container mt-4 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={onDownloadDossier}
            className="px-5 py-2.5 border border-primary-container/40 text-primary-container font-mono text-[10px] font-bold tracking-widest hover:bg-primary-container/10 transition-all flex items-center justify-center gap-2 uppercase"
          >
            <Download className="w-4 h-4" />
            DESCARGAR DOSSIER
          </button>
          <div className="bg-surface-container-high border border-outline-variant/30 px-4 py-2.5 rounded-lg flex items-center">
            <span className="font-mono text-[10px] font-bold text-on-surface">
              STATUS: <span className="text-primary-container uppercase tracking-wider shadow-sm">ELITE PROSPECT</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main split grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left column: Academic list and stack inventory */}
        <div className="md:col-span-8 space-y-10">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-5 bg-primary-container rounded" />
              <h3 className="font-display text-base font-bold text-primary tracking-wider uppercase">Academic Formation</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1 and 2 from dataset credentials mapping */}
              {academicCredentials.slice(0, 2).map((acad) => (
                <div 
                  key={acad.id}
                  className="glass-panel p-5 rounded-lg relative overflow-hidden group flex flex-col justify-between h-[180px] border border-outline-variant/20 hover:border-primary-container/30 transition-all"
                >
                  <div className="absolute inset-0 pointer-events-none scanline opacity-0 group-hover:opacity-[0.04] transition-opacity" />

                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded bg-surface-container-high border border-outline-variant/25">
                      {getAcademicIcon(acad.icon)}
                    </div>
                    <span className="px-2 py-0.5 bg-primary-container/10 border border-primary-container/30 text-primary-container font-mono text-[9px] font-bold rounded uppercase">
                      {acad.tagText}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display text-sm font-extrabold text-primary leading-tight">
                      {acad.title}
                    </h4>
                    <p className="font-mono text-[10px] text-on-surface-variant mt-1 uppercase tracking-wider">
                      {acad.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 border-t border-outline-variant/15 pt-3 mt-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-container animate-pulse" />
                    <span className="font-mono text-[9px] text-primary-container uppercase tracking-widest font-bold">
                      {acad.type === 'DEGREE' ? 'CREDENTIAL VERIFIED' : 'STRATEGIC NODE'}
                    </span>
                  </div>
                </div>
              ))}

              {/* Additional credentials */}
              {academicCredentials.slice(2).map((acad) => (
                <div key={acad.id} className="sm:col-span-2 bg-surface-container border-l-4 border-l-primary-container border-y border-r border-outline-variant/25 p-5 rounded-r-lg relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container/10 border border-primary-container flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-container" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-extrabold text-primary tracking-wide">
                        {acad.title}
                      </h4>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                        {acad.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="font-mono text-sm font-black text-primary-container glow-cyan-text text-right">
                      {acad.tagText}
                    </span>
                    <span className="font-mono text-[9px] text-outline uppercase tracking-widest leading-none">
                      {acad.durationVolume}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Tech Stack Inventory */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-5 bg-primary-container rounded" />
              <h3 className="font-display text-base font-bold text-primary tracking-wider uppercase">Tech Stack Inventory</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              
              {/* Languages */}
              <div className="bg-surface-container-low border border-outline-variant/25 p-4 rounded-lg space-y-4">
                <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <Code2 className="w-4 h-4 text-primary-container" />
                  <h5 className="font-mono text-[10px] text-primary-container uppercase tracking-widest font-bold">Core Languages</h5>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {coreLanguages.map((lang) => (
                    <span key={lang} className="bg-surface-container-high px-2.5 py-1.5 font-mono text-[10px] text-on-surface border border-outline-variant/20 hover:border-primary-container/30 rounded cursor-default transition-all">
                      {lang.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="bg-surface-container-low border border-outline-variant/25 p-4 rounded-lg space-y-4">
                <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <Layers className="w-4 h-4 text-primary-container" />
                  <h5 className="font-mono text-[10px] text-primary-container uppercase tracking-widest font-bold font-bold">Frameworks</h5>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {frameworks.map((fw) => {
                    const isStar = fw.toLowerCase().includes('spring');
                    return (
                      <span 
                        key={fw} 
                        className={`px-2.5 py-1.5 font-mono text-[10px] rounded transition-all cursor-default border ${
                          isStar 
                            ? 'bg-primary-container/10 font-bold border-primary-container/30 text-primary-container shadow-[0_0_8px_rgba(0,240,255,0.15)]' 
                            : 'bg-surface-container-high border-outline-variant/20 text-on-surface hover:border-primary-container/30'
                        }`}
                      >
                        {fw.toUpperCase()}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-surface-container-low border border-outline-variant/25 p-4 rounded-lg space-y-4">
                <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-2">
                  <Network className="w-4 h-4 text-primary-container" />
                  <h5 className="font-mono text-[10px] text-primary-container uppercase tracking-widest font-bold font-bold">Ecosystem</h5>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ecosystem.map((eco) => (
                    <span key={eco} className="bg-surface-container-high px-2.5 py-1.5 font-mono text-[10px] text-on-surface border border-outline-variant/20 hover:border-primary-container/30 rounded cursor-default transition-all">
                      {eco.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right column: Proficiency radar diagram, scout commentaries, and blueprint */}
        <aside className="md:col-span-4 space-y-6">
          
          {/* Radar proficiency tracker */}
          <div className="glass-panel p-5 rounded-xl border border-outline-variant/20 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold">Language Proficiency</h3>
              <Globe2 className="w-4 h-4 text-primary-container animate-pulse" />
            </div>

            {/* Radar diagram drawing SVG matched to Image 7 */}
            <div className="relative w-full aspect-square flex items-center justify-center mb-6 max-h-[180px] bg-background/30 rounded-lg">
              <svg className="absolute w-full h-full p-2" viewBox="0 0 100 100">
                {/* Radar rings */}
                <circle className="radar-line" cx="50" cy="50" r="45" fill="none" />
                <circle className="radar-line" cx="50" cy="50" r="30" fill="none" />
                <circle className="radar-line" cx="50" cy="50" r="15" fill="none" />
                {/* Divider lines */}
                <line className="radar-line" x1="50" y1="5" x2="50" y2="95" />
                <line className="radar-line" x1="5" y1="50" x2="95" y2="50" />
                {/* Simulated mapped polygon rating */}
                <polygon 
                  fill="rgba(0, 240, 255, 0.12)" 
                  stroke="#00f0ff" 
                  strokeDasharray="2 1" 
                  strokeWidth="1.5" 
                  points="50,15 85,50 50,85 15,50" 
                />
              </svg>

              {/* Tactical overlay indicators in center */}
              <div className="z-10 flex flex-col items-center">
                <span className="font-mono text-lg font-extrabold text-primary shadow-sm">B2+</span>
                <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest font-bold">INTERMEDIO</span>
              </div>
            </div>

            {/* Horizontal progress indicators */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-xs font-mono">
                  <span className="text-on-surface font-semibold text-[10px]">ESPAÑOL (NATIVO)</span>
                  <span className="text-primary-container">100%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden text-left">
                  <div className="h-full bg-primary-container shadow-[0_0_8px_#00f0ff]" style={{ width: '100%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1 text-xs font-mono">
                  <span className="text-on-surface font-semibold text-[10px]">INGLÉS (INTERMEDIO)</span>
                  <span className="text-primary-container">70%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden text-left">
                  <div className="h-full bg-primary-container shadow-[0_0_8px_#00f0ff]" style={{ width: '70%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Technical Scout notes comment bubble block */}
          <div className="bg-primary-container/[0.03] p-5 border-l-2 border-primary-container rounded-r-lg relative">
            <div className="absolute top-2 right-2 opacity-10">
              <Quote className="w-12 h-12 text-primary-container" />
            </div>
            <h4 className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Technical Scout Notes
            </h4>
            <p className="font-sans text-xs text-on-surface-variant italic leading-relaxed">
              "{developerProfile.scoutNotes}"
            </p>
            
            <div className="mt-4 pt-3 border-t border-outline-variant/10 flex items-center justify-between">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] text-outline font-bold uppercase tracking-wider">DIRECTORATE ANALYSIS</span>
            </div>
          </div>

          {/* Blueprint catalog container */}
          <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-outline-variant/20 relative shadow-md">
            <img 
              alt="Tactical Academy Blueprint" 
              className="w-full h-44 object-cover" 
              src={developerProfile.blueprintPhoto} 
            />
            {/* Blueprint cyan grid details overlay */}
            <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay" />
          </div>

        </aside>

      </div>

    </div>
  );
}
