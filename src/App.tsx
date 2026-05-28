import { useState, lazy, Suspense } from 'react';
import { 
  FileCheck2, 
  Settings, 
  ExternalLink,
  ChevronRight,
  Database,
  Terminal,
  Loader2,
  XCircle,
  Menu
} from 'lucide-react';

// Shared models, details, and Types mapping
import { developerProfile } from './data/portfolioData';
import { Project, TacticalNode, ScoutingFilters } from './types';

// Left layout sidebar menu drawers
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Tactical nodes detail overlay modals
import TacticalModal from './components/TacticalModal';
import ProjectDossierModal from './components/ProjectDossierModal';

// Code-splitting loading visual suspenders
const DashboardView = lazy(() => import('./features/DashboardView'));
const TacticsView = lazy(() => import('./features/TacticsView'));
const ProjectsView = lazy(() => import('./features/ProjectsView'));
const AcademyView = lazy(() => import('./features/AcademyView'));
const ConnectView = lazy(() => import('./features/ConnectView'));

export default function App() {
  // Navigation active indicators states
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Overlay stats detail triggers
  const [selectedNode, setSelectedNode] = useState<TacticalNode | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Custom prompt HUD overlays
  const [scoutAlert, setScoutAlert] = useState<{ message: string; type: 'success' | 'info' | null }>({
    message: '',
    type: null
  });

  // Scouting parameters filters calibration state
  const [filters, setFilters] = useState<ScoutingFilters>({
    selectedFormation: 'Java/Spring',
    minExperience: 3,
    languages: ['ENGLISH', 'SPANISH'],
    availability: 'TRANSFERABLE',
    darkMode: true,
    dataIntensity: true
  });

  const handleDownloadDossier = () => {
    // Simulated compilation dossier download Hud feedback
    setScoutAlert({
      message: "COMPILING DOSSIER... EXPORTING METRICS OF '#7000-M' S. SIERRA TO LOCAL CLIENT",
      type: 'info'
    });

    setTimeout(() => {
      setScoutAlert({
        message: "SUCCESS: PROFILE EXPORT PACKET COMPLETED! SAMY_SIERRA_DOSSIER.PDF DOWNLOADED.",
        type: 'success'
      });
      // Auto close after 3.5s
      setTimeout(() => {
        setScoutAlert({ message: '', type: null });
      }, 3500);
    }, 1500);
  };

  const handleActionClick = (actionType: string) => {
    if (actionType === 'source') {
      window.open('https://github.com/sssamyandres', '_blank');
    } else if (actionType === 'dossier') {
      handleDownloadDossier();
    }
    setSelectedNode(null);
  };

  const handleSettingsToggle = () => {
    setActiveTab('tacticals');
    setScoutAlert({
      message: 'HUD: SCOUTING PARAMETERS ACTIVE FOR CALIBRATION',
      type: 'info'
    });
    setTimeout(() => setScoutAlert({ message: '', type: null }), 2000);
  };

  return (
    <div className={`min-h-screen bg-background font-sans text-on-surface select-none relative pb-20 md:pb-0 ${filters.darkMode ? 'dark' : ''}`}>
      
      {/* Absolute scanline and radial lightning layer decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[50%] bg-primary-container/[0.04] blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-container/[0.02] blur-[120px] rounded-full" />
        <div className="w-full h-full opacity-[0.02] index-grid-visual pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      {/* Header element bar */}
      <Header 
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // Scroll smoothly to header context to prevent layout disorientation
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSettingsToggle={handleSettingsToggle}
      />

      {/* Main container structural layout */}
      <div className="flex pt-16 min-h-screen relative z-10">
        
        {/* Left Side: slide navigation drawer component */}
        <Sidebar 
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onDownloadDossier={handleDownloadDossier}
        />

        {/* Main interactive viewport panels */}
        <main className="flex-grow md:ml-80 px-6 md:px-10 py-8 relative">
          
          {/* Scout Alerts notifications console hud */}
          {scoutAlert.type && (
            <div 
              className={`mb-6 p-4 rounded-xl border flex justify-between items-center text-xs font-mono tracking-wider animate-bounce ${
                scoutAlert.type === 'success' 
                  ? 'bg-green-500/10 border-green-500/30 text-green-400 glow-cyan' 
                  : 'bg-primary-container/10 border-primary-container/30 text-primary'
              }`}
              role="alert"
            >
              <div className="flex items-center gap-2">
                {scoutAlert.type === 'success' ? (
                  <FileCheck2 className="w-4 h-4 text-green-400" />
                ) : (
                  <Loader2 className="w-4 h-4 text-primary-container animate-spin" />
                )}
                <span>{scoutAlert.message}</span>
              </div>
              <button 
                onClick={() => setScoutAlert({ message: '', type: null })}
                className="text-on-surface-variant hover:text-primary-container font-extrabold uppercase ml-4 text-[10px]"
              >
                DISMISS
              </button>
            </div>
          )}

          {/* Lazy dynamic views load triggers */}
          <Suspense fallback={
            <div className="h-[50vh] flex flex-col items-center justify-center gap-4 text-outline" aria-live="polite">
              <Loader2 className="w-10 h-10 text-primary-container animate-spin" />
              <span className="font-mono text-xs tracking-widest uppercase">INITIALIZING WAR ROOM DATA STREAM...</span>
            </div>
          }>
            {activeTab === 'dashboard' && (
              <DashboardView 
                onNavigateToTab={(tabId) => {
                  setActiveTab(tabId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onDownloadDossier={handleDownloadDossier}
                activeFilters={filters}
              />
            )}

            {activeTab === 'tacticals' && (
              <TacticsView 
                onNodeSelect={(node) => {
                  setSelectedNode(node);
                  // Setup simulated console logs on click
                  console.log(`Node loaded: ${node.label}`);
                }}
                filters={filters}
                onFiltersChange={(newFilters) => setFilters(newFilters)}
              />
            )}

            {activeTab === 'projects' && (
              <ProjectsView 
                onProjectSelect={(proj) => setSelectedProject(proj)}
                onDownloadDossier={handleDownloadDossier}
              />
            )}

            {activeTab === 'academy' && (
              <AcademyView 
                onDownloadDossier={handleDownloadDossier}
              />
            )}

            {activeTab === 'connect' && (
              <ConnectView />
            )}
          </Suspense>

        </main>
      </div>

      {/* Floating Tactical Overlay node modaler templates */}
      <TacticalModal 
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        onActionClick={handleActionClick}
      />

      {/* Floating project dossier detail overlay */}
      <ProjectDossierModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onViewSource={(proj) => {
          setSelectedProject(null);
          // Redirect seamlessly to github
          window.open('https://github.com/sssamyandres', '_blank');
        }}
      />

      {/* Bottom Nav indicators for Mobile viewport only */}
      <footer className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 pb-4 pt-2 md:hidden bg-surface-container/95 backdrop-blur-xl border-t border-primary-container/20 shadow-[0_-4px_20px_rgba(3,13,37,0.8)] rounded-t-xl">
        <button 
          onClick={() => {
            setActiveTab('dashboard');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 flex-1 transition-colors ${
            activeTab === 'dashboard' ? 'text-primary-container font-extrabold' : 'text-on-surface-variant'
          }`}
        >
          <span className="font-mono text-[9px] uppercase font-bold tracking-tight">DASHBOARD</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('tacticals');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 flex-1 transition-colors ${
            activeTab === 'tacticals' ? 'text-primary-container font-extrabold' : 'text-on-surface-variant'
          }`}
        >
          <span className="font-mono text-[9px] uppercase font-bold tracking-tight">TÁCTICAS</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 flex-1 transition-colors ${
            activeTab === 'projects' ? 'text-primary-container font-extrabold' : 'text-on-surface-variant'
          }`}
        >
          <span className="font-mono text-[9px] uppercase font-bold tracking-tight">PROYECTOS</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('academy');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 flex-1 transition-colors ${
            activeTab === 'academy' ? 'text-primary-container font-extrabold' : 'text-on-surface-variant'
          }`}
        >
          <span className="font-mono text-[9px] uppercase font-bold tracking-tight">ACADEMIA</span>
        </button>

        <button 
          onClick={() => {
            setActiveTab('connect');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 flex-1 transition-colors ${
            activeTab === 'connect' ? 'text-primary-container font-extrabold' : 'text-on-surface-variant'
          }`}
        >
          <span className="font-mono text-[9px] uppercase font-bold tracking-tight">CONTACTO</span>
        </button>
      </footer>

    </div>
  );
}
