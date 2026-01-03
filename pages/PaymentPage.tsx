import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState(searchParams.get('event') || 'ai-thon');
  const [step, setStep] = useState<'info' | 'payment'>('info');
  const [loading, setLoading] = useState(false);

  const events = [
    { id: 'ai-thon', name: 'AI-Thon', tag: 'HOT', tagColor: 'blue', desc: 'Neural Network Challenge // V.2.0', price: 500, color: 'neon-cyan' },
    { id: 'coding-wars', name: 'Coding Wars', tag: 'ELITE', tagColor: 'purple', desc: 'Algorithm Battle Royale // DEATHMATCH', price: 300, color: 'neon-purple' },
    { id: 'tapfire', name: 'Tapfire Esports', tag: '', tagColor: '', desc: 'Valorant Protocol // 5v5', price: 800, color: 'neon-cyan' },
    { id: 'paper', name: 'Paper Presentation', tag: '', tagColor: '', desc: 'Research Archives // DATA DUMP', price: 200, color: 'neon-cyan' },
    { id: 'quiz', name: 'Tech Quiz', tag: '', tagColor: '', desc: 'Trivia Database // SPEED RUN', price: 150, color: 'neon-cyan' },
  ];

  const currentEvent = events.find(e => e.id === selectedEvent) || events[0];

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setStep('payment');
    }, 1500);
  };

  return (
    <div className="bg-bg-dark font-display text-white min-h-screen flex flex-col relative overflow-x-hidden selection:bg-neon-cyan selection:text-black">
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern bg-[length:40px_40px] opacity-[0.15] z-0"></div>
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0 mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.3))] bg-[length:100%_4px]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <header className="relative z-20 flex items-center justify-between whitespace-nowrap border-b border-white/5 bg-bg-dark/80 backdrop-blur-md px-4 sm:px-10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => navigate('/')}>
            <div className="size-10 text-neon-cyan flex items-center justify-center bg-white/5 rounded-md border border-white/10 shadow-[0_0_15px_rgba(0,234,255,0.2)]">
                <span className="material-symbols-outlined text-3xl animate-pulse-fast">token</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-white text-lg font-bold leading-none tracking-widest uppercase glitch-text" data-text="Dombivli Tech Summit">Dombivli Tech Summit</h2>
                <span className="text-xs text-neon-purple font-mono tracking-[0.3em] mt-1">2026 EDITION</span>
            </div>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <div className="flex items-center gap-9 bg-black/40 px-6 py-2 rounded-full border border-white/5">
                <a className="text-gray-400 hover:text-neon-cyan transition-colors text-xs font-bold tracking-widest uppercase hover:drop-shadow-[0_0_5px_rgba(0,234,255,0.8)]" href="#">Home</a>
                <a className="text-gray-400 hover:text-neon-purple transition-colors text-xs font-bold tracking-widest uppercase hover:drop-shadow-[0_0_5px_rgba(255,0,234,0.8)]" href="#">Events</a>
                <a className="text-gray-400 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase" href="#">Leaderboard</a>
            </div>
            <button className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-none h-10 px-6 bg-transparent border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all text-sm font-bold tracking-widest uppercase">
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-cyan group-hover:w-full group-hover:h-full transition-all duration-300"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-cyan group-hover:w-full group-hover:h-full transition-all duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">wallet</span>
                    Connect Wallet
                </span>
            </button>
        </div>
      </header>

      <main className="relative z-10 flex-grow p-4 sm:p-6 lg:p-10 flex flex-col items-center justify-center">
         <div className="max-w-7xl w-full flex flex-col gap-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-l-4 border-neon-cyan pl-6 py-2 bg-gradient-to-r from-neon-cyan/5 to-transparent">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neon-purple/20 text-neon-purple border border-neon-purple/30 uppercase">Secure Connection</span>
                        <div className="h-[1px] w-20 bg-gradient-to-r from-neon-purple to-transparent"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                        Shadow <span className="text-neon-cyan glitch-text" data-text="PAYMENT">PAYMENT</span> Gateway
                    </h1>
                    <p className="text-gray-400 text-lg tracking-wide font-light max-w-2xl">
                        Select your operational protocol and authorize credit transfer via the encrypted uplink.
                    </p>
                </div>
                <div className="hidden sm:block text-right">
                    <p className="text-xs text-gray-500 font-mono mb-1">SERVER TIME</p>
                    <p className="text-xl font-mono text-neon-cyan tracking-widest">23:59:01 <span className="text-xs animate-pulse">IST</span></p>
                </div>
            </div>

            {/* Content Switcher */}
            {step === 'info' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-enter">
                    {/* Event Selection */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="glass-panel rounded-xl p-1 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-50"></div>
                            <div className="p-5 flex flex-col gap-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3 text-white">
                                        <div className="p-1.5 rounded bg-neon-cyan/10 text-neon-cyan">
                                            <span className="material-symbols-outlined text-lg">dataset</span>
                                        </div>
                                        <span className="font-bold tracking-widest uppercase text-sm">Target Selection</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono border border-white/10 px-2 py-1 rounded bg-black/50">STATUS: AWAITING INPUT</span>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {events.map((event) => (
                                        <label key={event.id} className="group relative cursor-pointer">
                                            <input 
                                                type="radio" 
                                                name="event-selection" 
                                                className="peer sr-only" 
                                                checked={selectedEvent === event.id}
                                                onChange={() => setSelectedEvent(event.id)}
                                            />
                                            <div className={`relative flex items-center gap-4 rounded-lg border border-white/5 bg-black/40 p-4 transition-all duration-300 hover:border-neon-cyan/50 hover:bg-white/5 ${selectedEvent === event.id ? 'border-neon-cyan bg-white/5' : ''}`}>
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg shadow-[0_0_20px_rgba(0,234,255,0.1)]"></div>
                                                <div className="radio-dot h-5 w-5 rounded-sm border border-white/30 bg-black peer-checked:border-neon-cyan transition-all flex items-center justify-center">
                                                    <div className="w-2.5 h-2.5 bg-neon-cyan opacity-0 peer-checked:opacity-100 transition-opacity shadow-[0_0_5px_#00eaff]"></div>
                                                </div>
                                                <div className="flex grow flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-white text-lg font-bold tracking-wide group-hover:text-neon-cyan transition-colors">{event.name}</p>
                                                            {event.tag && <span className={`text-[10px] px-1.5 py-0.5 rounded bg-${event.tagColor}-500/20 text-${event.tagColor}-300 border border-${event.tagColor}-500/30`}>{event.tag}</span>}
                                                        </div>
                                                        <p className="text-gray-400 text-xs font-mono group-hover:text-white/70 transition-colors">{event.desc}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-neon-cyan text-xl font-bold font-mono group-hover:drop-shadow-[0_0_5px_rgba(0,234,255,0.5)]">₹{event.price}</span>
                                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">Credits</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Info Form */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="glass-panel border-white/10 rounded-xl p-0 shadow-2xl relative overflow-hidden flex flex-col h-full">
                             <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-neon-cyan">
                                    <span className="material-symbols-outlined text-sm">groups</span>
                                    <span className="font-bold tracking-widest uppercase text-xs">Mission Intel</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="block w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_5px_#00eaff]"></span>
                                    <span className="text-[10px] text-neon-cyan font-mono">PHASE 1</span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col gap-5 relative z-10 grow">
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest ml-1">Team Name</label>
                                        <input className="w-full bg-black/60 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 outline-none font-mono tracking-widest uppercase text-sm transition-all" placeholder="Enter Unit Designation" type="text"/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest ml-1">Captain Name</label>
                                        <input className="w-full bg-black/60 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 outline-none font-mono tracking-widest uppercase text-sm transition-all" placeholder="Enter Leader Name" type="text"/>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest ml-1">Contact</label>
                                            <input className="w-full bg-black/60 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-gray-600 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 outline-none font-mono tracking-widest uppercase text-sm transition-all" placeholder="+91 XXXXX" type="tel"/>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-bold text-neon-cyan uppercase tracking-widest ml-1">Members</label>
                                            <select className="w-full bg-black/60 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 outline-none font-mono tracking-widest uppercase text-sm transition-all">
                                                <option>1 Member</option>
                                                <option>2 Members</option>
                                                <option>3 Members</option>
                                                <option>4 Members</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex justify-between items-end mb-4 border-t border-white/10 pt-4">
                                        <div>
                                            <h2 className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-1">Total Authorization</h2>
                                        </div>
                                        <div className="text-right">
                                            <h2 className="text-white text-2xl font-bold font-mono tracking-tight">₹{currentEvent.price}</h2>
                                        </div>
                                    </div>
                                    <button onClick={handleProceed} className="group w-full bg-neon-cyan text-black font-black py-4 rounded-lg uppercase tracking-widest text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,234,255,0.6)] transition-all relative overflow-hidden clip-slant-r">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {loading ? 'Processing...' : 'Proceed to Payment'}
                                            {!loading && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>}
                                        </span>
                                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:animate-[shimmer_0.8s_infinite]"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                /* Payment Gateway View */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-enter">
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="bg-black/80 border border-white/10 rounded-lg p-4 font-mono text-[10px] text-gray-400 h-64 overflow-hidden flex flex-col justify-end relative shadow-inner">
                            <div className="absolute top-0 right-0 p-2 opacity-30">
                                <span className="material-symbols-outlined text-sm">terminal</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="opacity-40">&gt; INITIALIZING SECURE HANDSHAKE...</div>
                                <div className="opacity-60">&gt; VERIFYING UNIT DATA... [OK]</div>
                                <div className="text-neon-cyan/80">&gt; TARGET: {currentEvent.name.toUpperCase()}</div>
                                <div className="opacity-60">&gt; ENCRYPTING PACKETS [################] 100%</div>
                                <div className="text-neon-purple/80">&gt; ESTABLISHED CONNECTION: PORT 443</div>
                                <div className="opacity-40">&gt; WAITING FOR TRANSACTION HASH...</div>
                                <div className="flex items-center gap-1 text-neon-cyan">
                                    <span>&gt;</span>
                                    <span className="animate-pulse w-2 h-4 bg-neon-cyan block"></span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setStep('info')} className="text-gray-500 hover:text-white text-xs font-mono uppercase underline decoration-dashed">
                            &lt; Abort / Return to Intel
                        </button>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="glass-panel border-white/10 rounded-xl p-0 shadow-2xl relative overflow-hidden flex flex-col h-full">
                             <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-neon-cyan">
                                    <span className="material-symbols-outlined text-sm">qr_code_scanner</span>
                                    <span className="font-bold tracking-widest uppercase text-xs">Transfer Uplink</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="block w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                                    <span className="text-[10px] text-green-500 font-mono">LIVE</span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col items-center gap-6 relative z-10 grow justify-center">
                                 <div className="absolute inset-0 pointer-events-none opacity-30">
                                    <div className="absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent"></div>
                                    <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent"></div>
                                </div>
                                <div className="relative group/qr">
                                    {/* Corner Accents */}
                                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-neon-cyan transition-all group-hover/qr:w-8 group-hover/qr:h-8 group-hover/qr:shadow-[0_0_10px_#00eaff]"></div>
                                    <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-neon-cyan transition-all group-hover/qr:w-8 group-hover/qr:h-8 group-hover/qr:shadow-[0_0_10px_#00eaff]"></div>
                                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-neon-cyan transition-all group-hover/qr:w-8 group-hover/qr:h-8 group-hover/qr:shadow-[0_0_10px_#00eaff]"></div>
                                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-neon-cyan transition-all group-hover/qr:w-8 group-hover/qr:h-8 group-hover/qr:shadow-[0_0_10px_#00eaff]"></div>
                                    
                                    <div className="relative w-52 h-52 bg-black rounded-sm border border-white/10 p-2 flex items-center justify-center shadow-[0_0_30px_rgba(0,234,255,0.1)] overflow-hidden">
                                        <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent shadow-[0_0_15px_#00eaff] animate-[scan_2s_infinite_linear] opacity-80 pointer-events-none z-20"></div>
                                        <img alt="Payment QR" className="w-full h-full object-contain filter contrast-125 brightness-90 saturate-0 opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD959ew6KLQJYcKmM8Uzs8hDdeu0LgWH1_LOGF69nDq6XLC3pzSVpKkMVCitzK5_jIkllhfJoC5ndrhyEngfpw0C1ikGIDvzXxz0bwRdAPiA7hkKLUFD02DNKxz5IFRe1I4xDEwjorMBwTlN_XodIGIBEJpTKelXV7azP5HsjahofSYIsTqoAEzEhXPf5yk691lEw69vkVSjidAVvcKPTlAMsQJxJVaMP0yMDLt8zqCb0k7a2x7IUfc3TV6iZvT2DQnEOyydLVO3g"/>
                                    </div>
                                </div>
                                
                                <div className="text-center space-y-1">
                                    <p className="text-white text-sm font-bold tracking-widest">SCAN TO AUTHORIZE</p>
                                    <div className="flex justify-center gap-3 text-[10px] text-gray-500 font-mono uppercase">
                                        <span className="border-b border-dashed border-gray-500/50 pb-0.5">UPI</span>
                                        <span className="border-b border-dashed border-gray-500/50 pb-0.5">Crypto</span>
                                        <span className="border-b border-dashed border-gray-500/50 pb-0.5">Card</span>
                                    </div>
                                </div>
                                
                                <div className="w-full flex flex-col gap-5 mt-2">
                                    <div className="flex flex-col gap-2 group/input">
                                        <label className="flex justify-between text-[10px] font-bold text-neon-cyan uppercase tracking-widest ml-1">
                                            <span>Transaction Hash / UTR</span>
                                            <span className="opacity-0 group-hover/input:opacity-100 transition-opacity text-neon-purple">REQUIRED</span>
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 material-symbols-outlined text-lg group-focus-within:text-white transition-colors">key</span>
                                            <input className="relative w-full bg-black/60 border border-white/10 rounded-lg py-3.5 pl-10 pr-4 text-white placeholder-gray-600 focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 focus:shadow-[0_0_15px_rgba(0,234,255,0.2)] outline-none font-mono tracking-widest transition-all uppercase text-sm" placeholder="ENTER 12-DIGIT ID" type="text"/>
                                        </div>
                                    </div>
                                    <button className="group w-full bg-neon-cyan text-black font-black py-4 rounded-lg uppercase tracking-widest text-lg hover:bg-white hover:shadow-[0_0_30px_rgba(0,234,255,0.6)] transition-all relative overflow-hidden clip-slant-r">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Verify Transaction
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
                                        </span>
                                        <div className="absolute top-0 left-0 w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-75"></div>
                                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 group-hover:animate-[shimmer_0.8s_infinite]"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
         </div>
      </main>
      
      <footer className="mt-12 py-8 border-t border-white/5 bg-black/60 backdrop-blur text-center relative z-10">
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4 opacity-30 mb-2">
                <span className="material-symbols-outlined">lock</span>
                <span className="material-symbols-outlined">shield</span>
                <span className="material-symbols-outlined">verified_user</span>
            </div>
            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest opacity-50">
                SECURE GATEWAY V.2026 // DOMBIVLI TECH SUMMIT // UNAUTHORIZED ACCESS PROHIBITED
            </p>
            <p className="text-[9px] text-gray-500/30 font-mono mt-1">
                SESSION ID: <span className="uppercase">x78-99a-bf3</span>
            </p>
        </div>
      </footer>
    </div>
  );
};

export default PaymentPage;