import { 
  LayoutDashboard, 
  Settings, 
  Download, 
  Menu, 
  X, 
  Target, 
  FolderGit2, 
  Mail, 
  GraduationCap, 
  ChevronLeft,
  Briefcase
} from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onDownloadDossier: () => void;
}

export default function Sidebar({ isOpen, onClose, activeTab, setActiveTab, onDownloadDossier }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'DASHBOARD', icon: LayoutDashboard },
    { id: 'tacticals', label: 'TÁCTICAS', icon: Target },
    { id: 'projects', label: 'PROYECTOS', icon: FolderGit2 },
    { id: 'academy', label: 'ACADEMIA', icon: GraduationCap },
    { id: 'connect', label: 'CONTACTO', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-45 md:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Main Drawer Shell */}
      <nav 
        id="navigation-drawer"
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-surface-container-low text-on-surface h-full w-[280px] md:w-80 rounded-r-xl border-r border-outline-variant/30 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        aria-label="Navegación Principal"
      >
        {/* Profile Card Header */}
        <div className="p-6 md:p-8 flex flex-col items-start gap-4 border-b border-outline-variant/20 relative overflow-hidden">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary-container/30 p-1 bg-surface-container">
            <img 
              alt="Samy Sierra profile photo" 
              className="w-full h-full object-cover rounded-full" 
              src={developerProfile.drawerPhoto}
            />
            <div className="absolute -bottom-1 -right-1 bg-primary-container text-on-primary-container rounded-full p-1 border-2 border-surface-container-low">
              {/* Custom SVG Checkmark */}
              <svg className="w-3.5 h-3.5 text-on-surface-variant fill-on-primary-container" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.523.75.75 0 00-.55.224l-3.5 3.5a.75.75 0 101.06 1.06L5.5 4.81l7.47 7.47a.75.75 0 101.06-1.06l-8-8z" clipRule="evenodd" />
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="font-display text-xl md:text-2xl font-bold tracking-tight text-primary">
              {developerProfile.displayShortName}
            </h1>
            <p className="font-mono text-xs text-on-surface-variant flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
              {developerProfile.role.split('//')[0].toUpperCase()}
            </p>
            <p className="font-mono text-[10px] text-outline mt-2 opacity-60">ID: {developerProfile.id}</p>
          </div>
          
          {/* Subtle Scanline styling decor */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
        </div>

        {/* Menu Navigation list */}
        <div className="flex-1 py-6 space-y-1 overflow-y-auto px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onClose(); // Auto close on mobile
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg my-1 transition-all group font-mono text-xs tracking-widest text-left ${
                  isActive 
                    ? 'bg-surface-container-high text-primary-container border-l-2 border-primary-container' 
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`w-4 h-4 transition-transform ${!isActive && 'group-hover:scale-110'}`} />
                <span className="font-bold uppercase">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 bg-primary-container rounded-full shadow-[0_0_10px_#00f0ff]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom download panel & status indicators */}
        <div className="p-4 md:p-6 mt-auto border-t border-outline-variant/20 bg-surface-container-lowest/60">
          <button 
            onClick={onDownloadDossier}
            className="relative w-full group overflow-hidden bg-primary-container text-on-primary font-mono text-[11px] font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]"
          >
            <Download className="w-4 h-4" />
            <span className="tracking-[0.15em] uppercase text-on-primary">DESCARGAR DOSSIER</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </button>
          
          <div className="mt-4 flex justify-between items-center px-1">
            <span className="text-[10px] font-mono text-outline uppercase tracking-tighter">System Version 4.2.0</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono text-outline uppercase tracking-tighter">Online</span>
            </div>
          </div>
        </div>

        {/* Mobile close chevron triggers */}
        <button 
          onClick={onClose}
          className="absolute top-4 -right-11 bg-surface-container-high p-2 rounded-r-lg border-y border-r border-outline-variant/20 md:hidden"
          aria-label="Cerrar navegación"
        >
          <ChevronLeft className="w-4 h-4 text-primary" />
        </button>
      </nav>
    </>
  );
}
