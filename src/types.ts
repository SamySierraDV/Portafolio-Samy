export interface Project {
  id: string;
  title: string;
  rating: string; // e.g. "A+", "A", "B+"
  matchRating: number; // e.g. 9.2
  description: string;
  longDescription?: string;
  technologies: string[];
  complexity: string; // e.g. "PRO", "CORE"
  calcReduction: string; // e.g. "80%", "40%"
  status: string; // e.g. "LIVE", "STABLE"
  syncTime?: string; // e.g. "120ms"
  secureProtocol?: string; // e.g. "JWT"
  extraBadge?: string; // e.g. "Encrypted Environment"
  image?: string; // URL or placeholder path
  stats?: {
    latencyReduction: number; // e.g. 40 (meaning 40%)
    uptime: string; // e.g. "99.99%"
    throughput: string; // e.g. "50k req/s"
  };
  githubUrl?: string;
  demoUrl?: string;
  scoutNotes?: string;
}

export interface AcademicCredential {
  id: string;
  title: string;
  institution: string;
  type: 'DEGREE' | 'SPECIALIZATION' | 'FORMATION';
  verified: boolean;
  tagText: string; // e.g. "DEGREE", "SPECIALIZATION", "326h"
  icon: string; // lucide icon name
  durationVolume?: string; // e.g. "326h TOTAL VOLUME"
}

export interface WorkExperience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'ecosystem';
}

export interface TacticalNode {
  id: string;
  label: string;
  x: number; // positioning percentage on soccer field x
  y: number; // positioning percentage on soccer field y
  icon: string;
  details: {
    description: string;
    tags: string[];
    scalability: number;
    resilience: number;
    observability: number;
    operationalStatus: string;
    codeId: string;
  };
}

export interface ScoutingFilters {
  selectedFormation: string;
  minExperience: number;
  languages: string[];
  availability: 'TRANSFERABLE' | 'SIGNED';
  darkMode: boolean;
  dataIntensity: boolean;
}
