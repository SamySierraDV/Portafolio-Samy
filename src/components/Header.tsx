import { Menu, Settings, ShieldCheck, Database, Search } from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface HeaderProps {
  onMenuToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSettingsToggle?: () => void;
}

export default function Header({ onMenuToggle, activeTab, setActiveTab, onSettingsToggle }: HeaderProps) {
  const tabs = [
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'tacticals', label: 'TÁCTICAS' },
    { id: 'projects', label: 'PROYECTOS' },
    { id: 'academy', label: 'ACADEMIA' },
    { id: 'connect', label: 'CONTACTO' },
  ];

  return (
    <header className="fixed top-0 w-full z-40 flex justify-between items-center px-6 md:px-10 py-4 bg-background/80 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
      {/* Target Brand Logo / Hamburger */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuToggle}
          className="md:hidden p-2 hover:bg-surface-container rounded-lg text-primary transition-colors focus:ring-1 focus:ring-primary-container"
          aria-label="Abrir navegación"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3">
          <img 
            alt={developerProfile.displayShortName} 
            className="w-8 h-8 rounded-full border border-primary-container/40 object-cover" 
            src={developerProfile.profilePhoto}
          />
          <span className="font-display font-extrabold tracking-tighter text-sm md:text-base text-primary uppercase">
            {developerProfile.titleName}
          </span>
        </div>
      </div>

      {/* Desktop menu tabs */}
      <nav className="hidden md:flex gap-6 items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`font-mono text-xs tracking-widest py-1 border-b-2 transition-all ${
              activeTab === tab.id 
                ? 'text-primary-container font-extrabold border-primary-container' 
                : 'text-on-surface-variant font-medium border-transparent hover:text-primary-container'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Right widgets/gear */}
      <div className="flex items-center gap-4">
        {/* Interactive icons */}
        <button
          onClick={() => setActiveTab('connect')}
          className="flex items-center text-on-surface-variant hover:text-primary-container transition-colors"
          title="Scouting Support"
        >
          <span className="relative flex h-3 w-3 mr-1 md:hidden">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container"></span>
          </span>
        </button>

        {onSettingsToggle && (
          <button 
            onClick={onSettingsToggle}
            className="p-2 hover:bg-surface-container rounded-full text-primary hover:scale-110 active:scale-95 transition-all"
            aria-label="Ajustar parámetros scout"
            title="Ajustes de Calibración"
          >
            <Settings className="w-5 h-5" />
          </button>
        )}
      </div>
    </header>
  );
}
