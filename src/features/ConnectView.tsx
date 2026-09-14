import React, { useState } from 'react';
import { 
  Send, 
  Terminal, 
  User, 
  Mail, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  RefreshCw,
  Volume2
} from 'lucide-react';
import { developerProfile } from '../data/portfolioData';

export default function ConnectView() {
  const [formData, setFormData] = useState({
    scoutName: '',
    scoutEmail: '',
    company: '',
    subjectOption: 'assessment',
    budgetProposal: '3000000-4000000',
    customMessage: ''
  });

  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const subjects = [
    { id: 'assessment', label: 'Initialize Technical Assessment' },
    { id: 'contract', label: 'Draft Contract Negotiation' },
    { id: 'warroom', label: 'Schedule Strategic Call' }
  ];

  const handlePrepopulateMessage = (subjId: string) => {
    let msg = '';
    const devName = developerProfile.fullName.split(' ')[0];
    switch (subjId) {
      case 'assessment':
        msg = `Hi ${devName},\n\nWe have reviewed your profile at Scouting HQ. We are extremely impressed with your Microservices architecture expertise ($MS-808) and custom Kafka latency optimizations.\n\nWe would love to coordinate a technical review call next week to integrate with our system.`;
        break;
      case 'contract':
        msg = `Hello ${devName},\n\nOur recruiting committee has qualified you as an Elite Tier Backend Architect. We have allocated a performance budget targeting your signed release threshold.\n\nLet's negotiate your transfer draft options directly.`;
        break;
      case 'warroom':
        msg = `Dear ${devName},\n\nWe would like to coordinate a technical debate in our Recruiting War Room next week regarding high-concurrency Spring Boot / MongoDB deployments.\n\nPlease share your available scouting windows.`;
        break;
    }
    setFormData(prev => ({ 
      ...prev, 
      subjectOption: subjId,
      customMessage: msg 
    }));
    
    // Add audio visual console logs
    addConsoleLog(`MESSAGE DRAFT LOADED: [${subjId.toUpperCase()}]`);
  };

  const addConsoleLog = (text: string) => {
    const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
    setTerminalLogs(prev => [`[${timestamp}] ${text}`, ...prev.slice(0, 7)]);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.scoutEmail) {
      addConsoleLog('ERROR: Valid Corporate Scout Email required');
      return;
    }

    setIsSending(true);
    addConsoleLog(`ESTABLISHING ENCRYPTED HUD CONNECTION...`);
    addConsoleLog(`TARGET DISPATCH READY: '${formData.company}' -> [${developerProfile.displayShortName}]`);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sssamyandres@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nueva propuesta para ${developerProfile.fullName}`,
          _template: 'table',
          Nombre: formData.scoutName,
          Correo: formData.scoutEmail,
          Empresa: formData.company,
          Asunto: formData.subjectOption,
          Presupuesto: formData.budgetProposal,
          Mensaje: formData.customMessage
        })
      });

      if (!response.ok) {
        throw new Error(`Email service responded with ${response.status}`);
      }

      setIsSending(false);
      setIsSent(true);
      addConsoleLog(`SUCCESS: Scout query packet dispatched. Confirmation ID: #SQ-${Math.floor(Math.random() * 9000) + 1000}`);
      addConsoleLog(`PERIMETER SECURE. STANDING BY FOR RESPONSE...`);
    } catch (error) {
      setIsSending(false);
      addConsoleLog('ERROR: Unable to dispatch scout query packet. Please try again.');
      console.error('Contact form submission failed:', error);
    }
  };

  const handleReset = () => {
    setFormData({
      scoutName: '',
      scoutEmail: '',
      company: '',
      subjectOption: 'assessment',
      budgetProposal: '3000000-4000000',
      customMessage: ''
    });
    setIsSent(false);
    setTerminalLogs([]);
    addConsoleLog('HEADQUARTERS REGISTER: Reset completed.');
  };

  return (
    <div className="space-y-8 animate-fade-in text-left">
      
      {/* Title block */}
      <div className="border-l-4 border-primary pl-6">
        <span className="font-mono text-[10px] md:text-xs text-primary-container tracking-widest uppercase">SCOUTING WAR ROOM CONNECTION</span>
        <h2 className="font-display text-2xl md:text-5xl font-black text-primary mt-1">INITIALIZE NEGOTIATION</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: interactive setup form */}
        <div className="lg:col-span-7 bg-surface-container border border-outline-variant/30 p-6 rounded-xl shadow-lg relative">
          <div className="absolute inset-x-0 top-0 h-[2.5px] bg-primary-container" />
          
          {/* Preset trigger quick draft triggers */}
          <div className="mb-6 space-y-3">
            <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">Select Prepopulated Draft Blueprint:</span>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subj) => (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => handlePrepopulateMessage(subj.id)}
                  className={`px-3 py-2 text-[10px] font-mono rounded border transition-all ${
                    formData.subjectOption === subj.id 
                      ? 'border-primary-container bg-primary-container/10 text-primary-container font-bold shadow-sm' 
                      : 'border-outline-variant/30 text-on-surface-variant hover:border-primary-container/40'
                  }`}
                >
                  {subj.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Scout Name */}
              <div className="space-y-1">
                <label className="block font-mono text-[9px] text-outline uppercase tracking-wider">Scouter Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-outline" />
                  <input 
                    type="text" 
                    name="scoutName"
                    value={formData.scoutName}
                    onChange={handleTextChange}
                    placeholder="e.g. Director S. Sierra"
                    className="w-full bg-surface-container-low border border-outline-variant/30 focus:border-primary-container/50 text-xs rounded-lg pl-10 pr-4 py-3 text-on-surface focus:outline-none placeholder:text-outline/40"
                    required
                  />
                </div>
              </div>

              {/* Corporate Scout Email */}
              <div className="space-y-1">
                <label className="block font-mono text-[9px] text-outline uppercase tracking-wider">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-outline" />
                  <input 
                    type="email" 
                    name="scoutEmail"
                    value={formData.scoutEmail}
                    onChange={handleTextChange}
                    placeholder="e.g. director@clubscout.tech"
                    className="w-full bg-surface-container-low border border-outline-variant/30 focus:border-primary-container/50 text-xs rounded-lg pl-10 pr-4 py-3 text-on-surface focus:outline-none placeholder:text-outline/40"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Hiring Entity */}
              <div className="space-y-1">
                <label className="block font-mono text-[9px] text-outline uppercase tracking-wider">Club / Recruiting Entity</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 w-4 h-4 text-outline" />
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleTextChange}
                    placeholder="e.g. Enterprise Global S.A."
                    className="w-full bg-surface-container-low border border-outline-variant/30 focus:border-primary-container/50 text-xs rounded-lg pl-10 pr-4 py-3 text-on-surface focus:outline-none placeholder:text-outline/40"
                    required
                  />
                </div>
              </div>

              {/* Budget Allocation */}
              <div className="space-y-1">
                <label className="block font-mono text-[9px] text-outline uppercase tracking-wider">Estimated Budget Proposal</label>
                <select 
                  name="budgetProposal"
                  value={formData.budgetProposal}
                  onChange={handleTextChange}
                  className="w-full bg-surface-container-low border border-outline-variant/30 focus:border-primary-container/50 text-xs rounded-lg px-3 py-3 text-on-surface focus:outline-none appearance-none"
                >
                  <option value="less-than-2500000">&lt; $2.500.000 COP</option>
                  <option value="3000000-4000000">$3.000.000 - $4.000.000 COP</option>
                  <option value="4000000-5000000">$4.000.000 - $5.000.000 COP</option>
                  <option value="more-than-5000000">&gt; $5.000.000 COP</option>
                </select>
              </div>
            </div>

            {/* Custom messages */}
            <div className="space-y-1">
              <label className="block font-mono text-[9px] text-outline uppercase tracking-wider">Custom Message Dossier Proposal</label>
              <textarea 
                name="customMessage"
                value={formData.customMessage}
                onChange={handleTextChange}
                rows={5}
                placeholder="Draft your recruitment parameters or paste interview instructions here..."
                className="w-full bg-surface-container-low border border-outline-variant/30 focus:border-primary-container/50 text-xs rounded-lg px-4 py-3 text-on-surface focus:outline-none placeholder:text-outline/40 font-sans leading-relaxed"
                required
              />
            </div>

            {/* Success screen toggle displays */}
            {isSent ? (
              <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg flex flex-col items-center justify-center text-center space-y-2 animate-pulse">
                <Sparkles className="w-6 h-6" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">Query Packet Dispatched Successfully</h4>
                <p className="font-sans text-[11px] text-green-400/80 leading-relaxed max-w-md">
                  Negotiation packet encrypted and buffered. Standing by for responses on pipeline terminal. Click 'Reset Terminal' below to draft another.
                </p>
                
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 text-[10px] font-mono border border-green-500/40 text-green-400 bg-transparent px-3 py-1.5 rounded hover:bg-green-500/10 transition-colors uppercase tracking-wider"
                >
                  Reset Terminal Registry
                </button>
              </div>
            ) : (
              <div className="pt-4 flex justify-between items-center gap-4">
                <span className="font-mono text-[8px] text-outline-variant flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary-container animate-pulse" />
                  ENCRYPTED GATEWAY PERIMETER READY
                </span>
                
                <button 
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-3 bg-primary-container text-background font-mono text-xs font-black rounded border border-primary-container shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 transition-all flex items-center justify-center gap-2 uppercase tracking-widest font-bold font-mono"
                >
                  {isSending ? (
                    <>
                      <RefreshCw className="w-4 h-4 text-background animate-spin" />
                      DISPATCHATIVE ENLIGHT...
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5 text-background" />
                      SEND SCOUT DISPATCH
                    </>
                  )}
                </button>
              </div>
            )}

          </form>
        </div>

        {/* Right Side: Scouting Headquarters Terminal Output */}
        <div className="lg:col-span-5 bg-surface-container-low border border-outline-variant/30 p-6 rounded-xl shadow-lg relative text-left">
          <div className="absolute inset-x-0 top-0 h-[2.5px] bg-outline-variant" />
          
          <div className="flex justify-between items-center mb-4 border-b border-outline-variant/15 pb-3">
            <span className="font-mono text-[9px] text-outline uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary-container" />
              Recruiting Console Output
            </span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-mono text-outline">v4.2-STABLE</span>
            </div>
          </div>

          {/* Terminal log logs content */}
          <div className="bg-background/80 font-mono text-[10px] md:text-[11px] p-4 rounded border border-outline-variant/20 h-[220px] overflow-y-auto space-y-2 text-primary-container leading-normal">
            
            {/* Seed baseline logs if empty */}
            {terminalLogs.length === 0 ? (
              <div className="space-y-2 text-outline-variant">
                <div>[SYSTEM] INITIALIZING RECRUIT TERMINAL MODULE...</div>
                <div>[SYSTEM] ESTABLISHED SECURE CONNECT TO DEV PORTFOLIO PILES...</div>
                <div>[SYSTEM] WAITING FOR SCOUTER DISPATCH EVENT...</div>
                <div className="animate-pulse">[SYSTEM] SELECT BLUEPRINT PATTERNS ABOVE TO COMPOSE DISPATCH...</div>
              </div>
            ) : (
              terminalLogs.map((log, idx) => (
                <div 
                  key={idx} 
                  className={`${idx === 0 ? 'text-primary-container' : 'text-outline/70'} leading-relaxed`}
                >
                  {log}
                </div>
              ))
            )}

          </div>

          <div className="mt-4 p-4 bg-surface-container border border-outline-variant/10 rounded-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded bg-outline-variant/20 flex items-center justify-center animate-pulse">
              <Volume2 className="w-5 h-5 text-primary-container" />
            </div>
            
            <div>
              <span className="block font-mono text-[9px] text-outline uppercase tracking-wider">Haptic Audio</span>
              <span className="block font-sans text-xs text-on-surface-variant font-medium">Console sound diagnostic offline</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
