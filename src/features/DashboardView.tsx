import { 
  ArrowRight, Trophy, TrendingUp, Cpu, Network, Award, ShieldAlert, 
  BadgeInfo, Code, Briefcase, Calendar, Download, Coffee, FileCode, 
  Palette, Leaf, ShieldCheck, Server, Layout, Atom, Hexagon, Database, 
  Layers, GitBranch, Github, Terminal, LayoutGrid, Box, Users, 
  RefreshCw, CreditCard, Brain 
} from 'lucide-react';
import { developerProfile, workExperiences, projects, skillsData } from '../data/portfolioData';

// Importación de imágenes para la tarjeta de perfil
import frontPhoto from '../../assets/images/foto-portafolio.webp';
import backPhoto from '../../assets/images/foto-portafolio-espalda.webp';

interface DashboardViewProps {
  onNavigateToTab: (tabId: string) => void;
  onDownloadDossier: () => void;
  activeFilters?: any;
}

export default function DashboardView({ onNavigateToTab, onDownloadDossier, activeFilters }: DashboardViewProps) {
  // Mock impact score metrics
  const impactMetrics = [
    { label: "PROJECT", value: "A+", percentage: 65, active: false },
    { label: "ALPHA", value: "A", percentage: 50, active: false },
    { label: "BETA", value: "MAX", percentage: 100, active: true },
    { label: "CURRENT", value: "A+", percentage: 80, active: false }
  ];

  // Helper para renderizar iconos dinámicamente según el nombre en la data
  const renderSkillIcon = (iconName: string) => {
    const iconProps = { className: "w-4 h-4" };
    switch (iconName) {
      case "Coffee": return <Coffee {...iconProps} />;
      case "Code": return <Code {...iconProps} />;
      case "Database": return <Database {...iconProps} />;
      case "FileCode": return <FileCode {...iconProps} />;
      case "Palette": return <Palette {...iconProps} />;
      case "Leaf": return <Leaf {...iconProps} />;
      case "ShieldCheck": return <ShieldCheck {...iconProps} />;
      case "Server": return <Server {...iconProps} />;
      case "Layout": return <Layout {...iconProps} />;
      case "Atom": return <Atom {...iconProps} />;
      case "Hexagon": return <Hexagon {...iconProps} />;
      case "Layers": return <Layers {...iconProps} />;
      case "GitBranch": return <GitBranch {...iconProps} />;
      case "Github": return <Github {...iconProps} />;
      case "Network": return <Network {...iconProps} />;
      case "Terminal": return <Terminal {...iconProps} />;
      case "LayoutGrid": return <LayoutGrid {...iconProps} />;
      case "Box": return <Box {...iconProps} />;
      case "Users": return <Users {...iconProps} />;
      case "RefreshCw": return <RefreshCw {...iconProps} />;
      case "CreditCard": return <CreditCard {...iconProps} />;
      case "Brain": return <Brain {...iconProps} />;
      default: return <Code {...iconProps} />;
    }
  };

  const techStats = [
    { title: "Languages", value: "Java / Python", level: "CV", grade: "JavaScript / SQL" },
    { title: "Frameworks", value: "Spring Boot / FastAPI", level: "CV", grade: "Spring Security / Vaadin / React / Node.js" },
    { title: "Persistence", value: "JPA / PostgreSQL", level: "CV", grade: "Hibernate / MySQL / MongoDB" }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Banner: MOST VALUABLE DEVELOPERS */}
      <div 
        onClick={() => onNavigateToTab('projects')}
        className="group flex justify-between items-center px-4 py-3 bg-surface-container-low border border-primary-container/20 hover:border-primary-container/40 rounded-xl cursor-pointer transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.05)] text-left"
      >
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-ping"></span>
          <span className="font-mono text-[10px] md:text-xs tracking-wider text-primary font-bold">
            THE MOST VALUABLE DEVELOPERS // VIEW ALL PROFILES
          </span>
        </div>
        <ArrowRight className="w-4 h-4 text-primary-container group-hover:translate-x-1 transition-transform" />
      </div>

      {/* Grid: Featured Profile Card & Visual Grid Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Core Profile Card Widget */}
        <div className="lg:col-span-8 bg-surface-container border border-outline-variant/30 rounded-xl overflow-hidden relative shadow-lg">
          {/* Cyan top indicator bar */}
          <div className="absolute inset-x-0 top-0 h-[2.5px] bg-primary-container" />
          
          {/* Interactive visual layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
            
            {/* FIFA Card Style Flip Wrapper */}
            <div 
              className="md:col-span-5 relative group [perspective:1000px] aspect-[4/5] max-w-[280px] mx-auto md:mx-0 cursor-pointer"
              role="img"
              aria-label={`Ficha técnica de ${developerProfile.fullName}. Pase el mouse para ver el dorso.`}
            >
              {/* The Inner Card that actually rotates */}
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* FRONT FACE */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-surface-container-low rounded-lg p-2 border border-outline-variant/20 shadow-xl">
                  {/* Transferable badge overlay */}
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-[9px] font-mono font-bold uppercase rounded bg-primary-container text-background tracking-widest cursor-default">
                    TRANSFERIBLE
                  </span>

                  {/* Headshot image front */}
                  <div className="w-full h-full rounded border border-outline-variant/20 overflow-hidden relative">
                    <img 
                      alt={`${developerProfile.fullName} - Front View`} 
                      className="w-full h-full object-cover" 
                      src={frontPhoto} 
                    />
                    {/* Visual filter blending */}
                    <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay" />
                  </div>

                  {/* Potential ratings markers (on front) */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col items-start bg-background/80 backdrop-blur-sm p-3 rounded border border-outline-variant/20">
                    <span className="text-[9px] font-mono text-outline uppercase tracking-wider mb-1">Market Value</span>
                    <div className="font-display text-2xl font-black text-primary flex items-baseline gap-1">
                      {developerProfile.marketValue} 
                    </div>
                    
                    <div className="flex gap-1 mt-1">
                      <span className="text-[8px] font-mono text-on-surface-variant mr-1">Potential:</span>
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < developerProfile.potential 
                              ? 'bg-primary-container shadow-[0_0_6px_#00f0ff]' 
                              : 'bg-surface-container-highest'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-surface-container-low rounded-lg p-2 border border-primary-container/30 shadow-2xl overflow-hidden">
                  <div className="w-full h-full rounded overflow-hidden relative">
                    <img 
                      alt={`${developerProfile.fullName} - Back View`} 
                      className="w-full h-full object-cover grayscale brightness-75 opacity-90" 
                      src={backPhoto} 
                    />
                    {/* Back side aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="w-16 h-16 border border-primary-container/30 rounded-full flex items-center justify-center mb-2 bg-primary-container/5">
                        <Cpu className="w-8 h-8 text-primary-container animate-pulse" />
                      </div>
                      <span className="font-display text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Tech Specifications</span>
                      <div className="mt-2 flex gap-1.5">
                        <span className="w-1 h-1 bg-primary-container rounded-full"></span>
                        <span className="w-1 h-1 bg-primary-container rounded-full"></span>
                        <span className="w-1 h-1 bg-primary-container rounded-full"></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Profile specifications list */}
            <div className="md:col-span-7 flex flex-col justify-between py-2 text-left">
              <div className="space-y-4">
                <div className="border-b border-outline-variant/20 pb-2">
                  <span className="font-mono text-[9px] text-primary-container uppercase tracking-wider">Candidate Profile</span>
                  <h2 className="font-display text-2xl font-extrabold text-primary">{developerProfile.fullName}</h2>
                  <p className="font-mono text-xs text-on-surface-variant uppercase">{developerProfile.role}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  <div>
                    <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">BIRTHPLACE</span>
                    <span className="font-sans text-xs font-bold text-on-surface">{developerProfile.birthplace}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">EXPERIENCE</span>
                    <span className="font-sans text-xs font-bold text-primary-container">{developerProfile.experienceYears}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">LATEST EXPERIENCE</span>
                    <span className="font-sans text-xs font-bold text-on-surface">{developerProfile.currentClub}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">AVAILABILITY</span>
                    <span className="font-sans text-xs font-bold text-on-surface">{developerProfile.signedUntil}</span>
                  </div>
                </div>
              </div>

              {/* Status details indicators */}
              <div className="mt-6 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-[10px] font-mono text-outline-variant">SYSTEM COMPLIANCE</span>
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/30 font-mono text-[9px] rounded uppercase">
                  READY FOR SIGNING
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Impact Score Widget column */}
        <div className="lg:col-span-4 bg-surface-container border border-outline-variant/30 rounded-xl p-5 flex flex-col relative shadow-lg text-left">
          <div className="absolute inset-x-0 top-0 h-[2.5px] bg-primary-container" />
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-display text-base font-bold text-primary tracking-wider uppercase">IMPACT SCORE</h3>
              <p className="font-mono text-[9px] text-outline uppercase tracking-wider">Performance Arbitrage</p>
            </div>
            <div className="flex items-center gap-1 font-mono text-xs text-green-400 bg-green-500/5 px-2 py-0.5 rounded border border-green-500/20 font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+12.4%</span>
            </div>
          </div>

          {/* Bar charts layout */}
          <div className="flex-1 flex items-end justify-between gap-3 h-[180px] p-2 bg-background/50 border border-outline-variant/10 rounded-lg">
            {impactMetrics.map((it) => (
              <div key={it.label} className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer">
                
                {/* Bar */}
                <div className="w-full relative rounded-t transition-all duration-500 group-hover:scale-x-[1.05]" style={{ height: `${it.percentage}%` }}>
                  
                  {/* Badge overlay on top */}
                  {it.active ? (
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-primary-container text-background font-mono text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow z-10 animate-pulse">
                      {it.value}
                    </div>
                  ) : (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-outline opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {it.value}
                    </div>
                  )}

                  <div className={`w-full h-full rounded-t ${
                    it.active 
                      ? 'bg-primary-container shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                      : 'bg-surface-container-highest/60 hover:bg-primary-container/40'
                  }`} />
                </div>
                
                {/* Label text */}
                <span className="font-mono text-[9px] text-outline mt-3 block group-hover:text-primary transition-colors">
                  {it.label}
                </span>

              </div>
            ))}
          </div>

          <p className="mt-4 font-sans text-[11px] text-on-surface-variant italic">
            "Profile highlights Java and Spring Boot development, REST APIs, database persistence and software automation."
          </p>
        </div>

      </div>

      {/* Section split: TACTICAL POSITIONING Quick Portal preview */}
      <div 
        onClick={() => onNavigateToTab('tacticals')}
        className="bg-surface-container border border-outline-variant/30 rounded-xl p-5 hover:border-primary-container/40 transition-all cursor-pointer group shadow-lg text-left"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-4 bg-primary-container rounded" />
            <h3 className="font-display text-sm font-bold text-primary tracking-wider uppercase">TACTICAL POSITIONING</h3>
          </div>
          <span className="font-mono text-[10px] text-primary-container uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
            CONFIGURAR FORMACIÓN DE COMBATE <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
        
        <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
          The candidate is positioned as a **Microservices Architect** driving tactical API Integration, perimeter security, and database caching patterns. Click to deploy dynamic scouting filters.
        </p>
      </div>

      {/* Featured Skills Section */}
      <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-6 shadow-lg text-left">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-5 bg-primary-container rounded" />
          <h3 className="font-display text-base font-bold text-primary tracking-wider uppercase">HABILIDADES DESTACADAS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-mono text-[10px] text-primary-container/70 uppercase tracking-widest border-b border-outline-variant/20 pb-2">
                {category === 'lenguajes' ? 'Lenguajes' : 
                 category === 'frameworks' ? 'Frameworks' : 
                 category === 'databases' ? 'Bases de Datos' : 
                 category === 'tools' ? 'Arquitectura / Herramientas' : 
                 category === 'methodologies' ? 'Prácticas / Otros' : category}
              </h4>
              <div className="flex flex-col gap-3">
                {(items as any[]).map((item) => (
                  <div
                    key={item.name} 
                    className="relative flex items-center gap-3 text-on-surface-variant hover:text-primary-container transition-all group cursor-default"
                  >
                    <span className="p-1.5 bg-surface-container-low rounded border border-outline-variant/10 group-hover:border-primary-container/30 group-hover:bg-primary-container/5 transition-all text-outline group-hover:text-primary-container">
                      {renderSkillIcon(item.icon)}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-tight">
                      {item.name}
                    </span>

                    {/* Tooltip Detallado */}
                    <div className="absolute bottom-full left-0 mb-2 w-max max-w-[200px] px-3 py-1.5 bg-background border border-primary-container/40 rounded shadow-[0_0_15px_rgba(0,240,255,0.2)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none transition-all duration-200 z-50">
                      <span className="block font-mono text-[8px] text-primary-container uppercase tracking-widest mb-0.5 font-black">Scout Analysis:</span>
                      <p className="font-mono text-[10px] text-on-surface font-bold leading-tight">
                        {item.detail}
                      </p>
                      <div className="absolute -bottom-1 left-4 w-2 h-2 bg-background border-r border-b border-primary-container/40 rotate-45" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: TECHNICAL STATS shortlist & employment timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Technical Stats Card */}
        <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-6 shadow-lg text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-5 bg-primary-container rounded" />
            <h3 className="font-display text-base font-bold text-primary tracking-wider uppercase">TECHNICAL STATS</h3>
          </div>

          <div className="space-y-4">
            {techStats.map((stat, i) => (
              <div 
                key={i} 
                className="p-4 bg-surface-container-low border border-outline-variant/20 rounded-lg flex justify-between items-center hover:border-primary-container/30 transition-all"
              >
                <div>
                  <span className="font-mono text-[9px] text-outline uppercase tracking-wider">{stat.title}</span>
                  <div className="font-display text-lg font-bold text-primary">{stat.value}</div>
                </div>
                
                <div className="text-right">
                  <span className="px-2 py-0.5 bg-primary-container/10 text-primary-container border border-primary-container/30 font-mono text-[10px] font-bold rounded uppercase">
                    {stat.level}
                  </span>
                  <div className="font-mono text-[10px] text-outline mt-1">{stat.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historial de Partidas Timeline */}
        <div className="bg-surface-container border border-outline-variant/30 rounded-xl p-6 shadow-lg text-left">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-5 bg-primary-container rounded" />
              <h3 className="font-display text-base font-bold text-primary tracking-wider uppercase">HISTORIAL DE PARTIDAS</h3>
            </div>
            <span className="font-mono text-[9px] text-outline uppercase tracking-wider">FULL CAREER</span>
          </div>

          <div className="space-y-6 relative pl-4 border-l border-outline-variant/50">
            {workExperiences.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {/* Glowing bullet marker */}
                <span className={`absolute -left-[20.5px] top-1 w-2.5 h-2.5 rounded-full ${
                  exp.isCurrent 
                    ? 'bg-primary-container shadow-[0_0_8px_#00f0ff]' 
                    : 'bg-surface-container-highest'
                }`} />

                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] text-primary-container uppercase tracking-wider">{exp.period}</span>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <h4 className="font-display text-sm font-bold text-primary">{exp.company}</h4>
                    <span className="text-[10px] font-mono text-outline-variant uppercase">{exp.role}</span>
                  </div>
                  
                  {/* Quote-like bubble formatting */}
                  <div className="p-3 bg-surface-container-high/60 border border-outline-variant/15 rounded-lg text-xs font-sans text-on-surface-variant leading-relaxed">
                    "{exp.description}"
                    
                    <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-outline-variant/10">
                      {exp.tags.map(t => (
                        <span key={t} className="bg-surface-container-low px-1.5 py-0.5 rounded border border-outline-variant/20 font-mono text-[9px] uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Grid: Secondary metrics labels cards & Dossier Download */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Methodology card */}
        <div className="bg-surface-container-low border border-outline-variant/20 p-4 rounded-xl flex items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
            <Calendar className="w-5 h-5 text-primary-container" />
          </div>
          <div>
            <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">Methodology</span>
            <span className="font-display text-sm font-extrabold text-primary uppercase">Agile/Scrum Orchestration</span>
          </div>
        </div>

        {/* Scale Card */}
        <div className="bg-surface-container-low border border-outline-variant/20 p-4 rounded-xl flex items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center border border-primary-container/20">
            <Code className="w-5 h-5 text-primary-container" />
          </div>
          <div>
            <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">Scale</span>
            <span className="font-display text-sm font-extrabold text-primary uppercase">Enterprise Platforms</span>
          </div>
        </div>

      </div>

      <div className="text-center pt-4">
        <button 
          onClick={onDownloadDossier}
          className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-primary-container text-background font-mono text-xs font-extrabold tracking-widest rounded shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 active:scale-95 transition-all uppercase"
        >
          <Download className="w-4 h-4 text-background" />
          Descargar Dossier Completo
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </button>
      </div>

    </div>
  );
}
