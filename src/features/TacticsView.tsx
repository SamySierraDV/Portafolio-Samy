import React, { useState } from 'react';
import { 
  Dribbble, 
  Settings, 
  Database, 
  Cloud, 
  Languages, 
  SlidersHorizontal,
  FolderDot,
  Radio,
  FileCheck2,
  Tv2,
  Target,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { tacticalNodes, workExperiences } from '../data/portfolioData';
import { TacticalNode, ScoutingFilters } from '../types';
import TacticalModal from '../components/TacticalModal';

interface TacticsViewProps {
  onNodeSelect: (node: TacticalNode) => void;
  filters: ScoutingFilters;
  onFiltersChange: (newFilters: ScoutingFilters) => void;
}

export default function TacticsView({ onNodeSelect, filters, onFiltersChange }: TacticsViewProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const formationsList = ["Java/Spring", "Node/React", "Python/AI"];
  const selectLanguages = ["ENGLISH", "SPANISH", "GERMAN", "MANDARIN"];

  const handleFormationChange = (form: string) => {
    onFiltersChange({ ...filters, selectedFormation: form });
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, minExperience: parseInt(e.target.value) || 0 });
  };

  const handleLanguageToggle = (lang: string) => {
    const list = filters.languages.includes(lang)
      ? filters.languages.filter(l => l !== lang)
      : [...filters.languages, lang];
    onFiltersChange({ ...filters, languages: list });
  };

  const handleAvailabilityChange = (av: 'TRANSFERABLE' | 'SIGNED') => {
    onFiltersChange({ ...filters, availability: av });
  };

  const toggleSwitch = (field: 'darkMode' | 'dataIntensity') => {
    onFiltersChange({ ...filters, [field]: !filters[field] });
  };

  // Convert node details codeIds/names to Lucide icons
  const getNodeIndicatorIcon = (nodeId: string) => {
    if (nodeId.includes('micro')) return <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    if (nodeId.includes('api')) return <Tv2 className="w-5 h-5 text-primary-container" />;
    if (nodeId.includes('security')) return <FileCheck2 className="w-5 h-5 text-primary-container" />;
    if (nodeId.includes('database')) return <Database className="w-5 h-5 text-primary-container" />;
    if (nodeId.includes('cache')) return <SlidersHorizontal className="w-5 h-5 text-primary-container" />;
    if (nodeId.includes('cloud')) return <Cloud className="w-5 h-5 text-primary-container" />;
    return <FolderDot className="w-5 h-5 text-primary-container" />;
  };

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* Title block */}
      <div className="border-l-4 border-primary-container pl-6 text-left">
        <span className="font-mono text-[10px] md:text-xs text-primary-container tracking-widest uppercase">Field Positioning</span>
        <h2 className="font-display text-2xl md:text-5xl font-black text-primary mt-1">TECHNICAL FORMATION</h2>
      </div>

      {/* Grid: Pitch Visual & Filters Calibration Layout side-by-side */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* Footy Football Pitch Diagram Panel inside grid layout */}
        <div className="xl:col-span-7 space-y-4">
          <div className="relative w-full aspect-[4/3] bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden flex items-center justify-center shadow-lg tactical-grid">
            
            {/* Atmospheric Scanline and grid lights overlay */}
            <div className="absolute inset-0 pointer-events-none scanline opacity-5" />

            {/* Soccer pitch field lines */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
              {/* Half-field divider line */}
              <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-primary" />
              {/* Midfield circle drawing */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary rounded-full" />
              {/* Box lines top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-24 border-b border-x border-primary" />
              {/* Box lines bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-24 border-t border-x border-primary" />
            </div>

            {/* Strategic Tactical Nodes rendered based on pitch coordinates */}
            {tacticalNodes.map((node) => {
              const pulseEffect = node.id === 'node-microservices' || node.id === 'node-api';
              return (
                <button
                  key={node.id}
                  onClick={() => onNodeSelect(node)}
                  className="absolute group flex flex-col items-center justify-center transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:scale-110 active:scale-95"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-container/10 hover:bg-primary-container/20 border-2 border-primary-container flex items-center justify-center glow-cyan group-hover:scale-110 transition-transform">
                    {getNodeIndicatorIcon(node.id)}
                  </div>
                  
                  <span className="mt-2 font-mono text-[9px] font-bold text-primary bg-background/95 px-2.5 py-1 rounded-full border border-primary-container/30 shadow tracking-wider whitespace-nowrap">
                    {node.label}
                  </span>

                  {/* Pulsing indicator loop visual details */}
                  {pulseEffect && (
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary-container"></span>
                    </span>
                  )}
                </button>
              );
            })}

          </div>
          <p className="font-sans text-[11px] text-on-surface-variant italic text-left">
            * Haz clic en cualquier nodo táctico de la formación para desplegar su expediente técnico.
          </p>
        </div>

        {/* Tactical Parameters Scouting Filters Calibration panel inside grid */}
        <div className="xl:col-span-5 bg-surface-container-low border border-outline-variant/30 p-6 md:p-8 rounded-xl relative shadow-lg space-y-8 text-left">
          {/* Cyan glow scanner details */}
          <div className="className absolute inset-x-0 top-0 h-[2.5px] bg-primary-container" />
          
          <div className="border-b border-outline-variant/20 pb-4">
            <h3 className="font-display text-lg font-bold text-primary tracking-wider uppercase">SCOUTING PARAMETERS</h3>
            <span className="font-mono text-[9px] text-outline uppercase tracking-wider">Calibration Filters</span>
          </div>

          {/* Filter by Formation Button block */}
          <section className="space-y-3">
            <h4 className="font-mono text-[10px] text-primary/70 uppercase tracking-widest flex items-center gap-2">
              <Dribbble className="w-4 h-4 text-primary-container" />
              Filter by Formation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {formationsList.map((form) => {
                const isActive = filters.selectedFormation === form;
                return (
                  <button
                    key={form}
                    onClick={() => handleFormationChange(form)}
                    className={`px-3 py-2.5 rounded text-[10px] font-mono tracking-widest font-bold transition-all flex items-center justify-between border ${
                      isActive 
                        ? 'border-primary-container bg-primary-container/15 text-primary-container' 
                        : 'border-outline-variant/30 text-on-surface-variant hover:border-primary-container/45 hover:text-primary'
                    }`}
                  >
                    <span>{form}</span>
                    {isActive && <div className="w-1.5 h-1.5 bg-primary-container rounded-full shadow-[0_0_6px_#00f0ff]" />}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Experience Range slider */}
          <section className="space-y-3">
            <div className="flex justify-between items-center text-left">
              <h4 className="font-mono text-[10px] text-primary/70 uppercase tracking-widest flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-primary-container" />
                Experience Range
              </h4>
              <span className="font-mono text-sm font-bold text-primary-container">{filters.minExperience}+ YRS</span>
            </div>
            
            <input 
              type="range"
              min="0"
              max="15"
              value={filters.minExperience}
              onChange={handleExperienceChange}
              className="mt-2"
            />
            
            <div className="flex justify-between font-mono text-[9px] text-outline px-1">
              <span>ROOKIE</span>
              <span>MID-LEVEL</span>
              <span>VETERAN</span>
            </div>
          </section>

          {/* Language selection switches */}
          <section className="space-y-3">
            <h4 className="font-mono text-[10px] text-primary/70 uppercase tracking-widest flex items-center gap-2">
              <Languages className="w-4 h-4 text-primary-container" />
              Language Preferences
            </h4>
            
            <div className="flex flex-wrap gap-2 pt-1">
              {selectLanguages.map((lang) => {
                const isSelected = filters.languages.includes(lang);
                return (
                  <button
                    key={lang}
                    onClick={() => handleLanguageToggle(lang)}
                    className={`px-3 py-1.5 border font-mono text-[10px] rounded-full transition-all flex items-center gap-1.5 ${
                      isSelected 
                        ? 'border-primary-container/40 bg-primary-container/10 text-primary-container' 
                        : 'border-outline-variant/30 text-on-surface-variant hover:border-primary-container/40'
                    }`}
                  >
                    <span>{lang}</span>
                    {lang === 'ENGLISH' && (
                      <svg className="w-3 h-3 text-primary-container fill-primary-container" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.102-1.196 4.622c-.21.81.67 1.45 1.366.994l4.18-2.73 4.18 2.73c.696.456 1.576-.184 1.365-.994l-1.196-4.622 3.6-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Availability state selection toggle choices */}
          <section className="space-y-3 bg-surface-container-high/40 p-4 rounded-lg border border-outline-variant/10">
            <h4 className="font-mono text-[10px] text-primary/70 uppercase tracking-wider">Availability Status</h4>
            <div className="flex bg-surface-container/60 p-1 rounded-lg border border-outline-variant/20">
              <button 
                onClick={() => handleAvailabilityChange('TRANSFERABLE')}
                className={`flex-grow py-2 text-center font-mono text-[10px] font-bold rounded transition-all uppercase ${
                  filters.availability === 'TRANSFERABLE' 
                    ? 'bg-primary-container text-background shadow-lg' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                TRANSFERABLE
              </button>
              <button 
                onClick={() => handleAvailabilityChange('SIGNED')}
                className={`flex-grow py-2 text-center font-mono text-[10px] font-bold rounded transition-all uppercase ${
                  filters.availability === 'SIGNED' 
                    ? 'bg-primary-container text-background shadow-lg' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                SIGNED
              </button>
            </div>
            <p className="font-sans text-[11px] text-on-surface-variant italic">
              * Mostrando jugadores con disponibilidad actual para negociación contractual.
            </p>
          </section>

          {/* Visual calibrators toggle indicators */}
          <section className="space-y-4 border-t border-outline-variant/15 pt-4">
            <span className="block font-mono text-[9px] text-outline uppercase tracking-wider mb-2">Visual Calibration</span>
            
            {/* Dark mode switcher */}
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-xs font-sans text-on-surface font-semibold">Dark Mode perimeter</span>
                <span className="block text-[10px] font-mono text-outline uppercase">Energy efficient black-slate UI</span>
              </div>
              <button 
                onClick={() => toggleSwitch('darkMode')}
                className={`w-11 h-6 rounded-full relative p-1 transition-colors ${
                  filters.darkMode ? 'bg-primary-container/40' : 'bg-surface-container-highest'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-transform ${
                  filters.darkMode 
                    ? 'translate-x-5 bg-primary-container shadow-[0_0_8px_#00f0ff]' 
                    : 'translate-x-0 bg-outline'
                }`} />
              </button>
            </div>

            {/* Data intensity switcher */}
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-xs font-sans text-on-surface font-semibold">Data Intensity overlays</span>
                <span className="block text-[10px] font-mono text-outline uppercase">Show full tracking metrics</span>
              </div>
              <button 
                onClick={() => toggleSwitch('dataIntensity')}
                className={`w-11 h-6 rounded-full relative p-1 transition-colors ${
                  filters.dataIntensity ? 'bg-primary-container/40' : 'bg-surface-container-highest'
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-transform ${
                  filters.dataIntensity 
                    ? 'translate-x-5 bg-primary-container shadow-[0_0_8px_#00f0ff]' 
                    : 'translate-x-0 bg-outline'
                }`} />
              </button>
            </div>
          </section>

          {/* Main search execution triggers */}
          <button 
            type="button"
            onClick={() => {
              if (onNodeSelect && tacticalNodes.length > 0) {
                onNodeSelect(tacticalNodes[0]); // Preview first node
              }
            }}
            className="w-full bg-primary-container text-background font-mono text-xs font-extrabold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all hover:scale-[1.01] active:scale-[0.98] uppercase tracking-widest-lg"
          >
            <Radio className="w-4 h-4 text-background animate-pulse" />
            INITIALIZE RADAR SEARCH
          </button>

        </div>

      </div>

      {/* Career Trajectory Section: EXPEDIENTE DE CAMPO */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
          <div className="w-1.5 h-6 bg-primary-container rounded" />
          <h3 className="font-display text-xl font-bold text-primary tracking-wider uppercase">EXPEDIENTE DE CAMPO: TRAYECTORIA TÁCTICA</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {workExperiences.map((exp) => (
            <div 
              key={exp.id} 
              className="group bg-surface-container border border-outline-variant/30 rounded-xl p-6 hover:border-primary-container/40 transition-all shadow-lg text-left"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="font-mono text-[10px] text-primary-container font-black tracking-[0.2em] uppercase">
                    {exp.period}
                  </span>
                  <h4 className="font-display text-xl font-black text-primary uppercase">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-on-surface-variant font-mono text-xs font-bold">
                    <Target className="w-3.5 h-3.5 text-primary-container" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-surface-container-low border border-outline-variant/20 rounded font-mono text-[9px] text-outline uppercase font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exp.achievements?.map((achievement, i) => (
                  <div 
                    key={i} 
                    className="flex gap-3 p-3 bg-background/40 border border-outline-variant/10 rounded-lg group-hover:bg-primary-container/5 group-hover:border-primary-container/20 transition-colors"
                  >
                    <Zap className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                    <p className="font-sans text-[11px] text-on-surface-variant leading-tight">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
