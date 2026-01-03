import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiThonPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-dark min-h-screen flex flex-col font-display selection:bg-aithon-cyan selection:text-bg-dark relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-50 bg-scanline bg-[length:100%_4px] opacity-10"></div>
      
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#050a0a]/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
             <div className="text-aithon-cyan animate-pulse">
                <span className="material-symbols-outlined" style={{fontSize: '32px'}}>terminal</span>
             </div>
             <h1 className="text-white text-lg font-bold tracking-tight"><span className="text-aithon-cyan">Dombivli</span> Tech Summit '26</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-sm font-medium text-gray-400 hover:text-aithon-cyan transition-colors">Home</button>
            <button onClick={() => navigate('/events')} className="text-sm font-medium text-aithon-cyan shadow-[0_1px_0_0_#0df2f2]">Events</button>
            <button onClick={() => navigate('/events')} className="text-sm font-medium text-gray-400 hover:text-aithon-cyan transition-colors">Schedule</button>
            <button onClick={() => navigate('/leaderboard')} className="text-sm font-medium text-gray-400 hover:text-aithon-cyan transition-colors">Leaderboard</button>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="hidden md:flex h-9 items-center justify-center rounded border border-aithon-cyan/50 px-4 text-sm font-bold text-aithon-cyan hover:bg-aithon-cyan hover:text-[#050a0a] transition-all duration-300 uppercase tracking-wider">
                Login
            </button>
            <button onClick={() => navigate('/payment?event=ai-thon')} className="flex h-9 items-center justify-center rounded bg-aithon-cyan px-4 text-sm font-bold text-[#050a0a] shadow-neon hover:shadow-[0_0_15px_rgba(13,242,242,0.8),0_0_30px_rgba(13,242,242,0.5)] transition-all duration-300 uppercase tracking-wider">
                Register
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col relative">
        <section className="relative min-h-[600px] flex items-center justify-center py-20 overflow-hidden">
             <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 pointer-events-none"></div>
             <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,10,0)0%,#050a0a_100%)] pointer-events-none"></div>
             <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-aithon-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
             
             <div className="container mx-auto px-4 z-10 relative">
                 <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-aithon-cyan/30 bg-aithon-cyan/5 px-3 py-1 text-xs font-bold text-aithon-cyan uppercase tracking-widest mb-4">
                        <span className="w-2 h-2 rounded-full bg-aithon-cyan animate-pulse"></span>
                        Incoming Transmission
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(13,242,242,0.15)]">
                        AI-THON <span className="text-transparent bg-clip-text bg-gradient-to-r from-aithon-cyan to-blue-500">'26</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
                        The ultimate <span className="text-aithon-cyan font-semibold">Generative AI</span> showdown.
                        <br className="hidden md:block"/>
                        Enter the grid. Code the future. Break the boundaries.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                        {[{icon:'calendar_today', text:'March 15, 2026'}, {icon:'schedule', text:'10:00 AM - 01:00 PM IST'}, {icon:'location_on', text:'Main Arena, Hall A'}].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#112222] rounded border border-white/10 hover:border-aithon-cyan/50 transition-colors">
                                <span className="material-symbols-outlined text-aithon-cyan">{item.icon}</span>
                                <span className="text-sm font-mono text-gray-300">{item.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button onClick={() => navigate('/payment?event=ai-thon')} className="h-14 px-8 bg-aithon-cyan text-[#050a0a] font-bold text-lg rounded hover:shadow-[0_0_15px_rgba(13,242,242,0.8),0_0_30px_rgba(13,242,242,0.5)] transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2 group">
                            Register Squad
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button className="h-14 px-8 border border-white/20 hover:border-aithon-cyan text-white font-bold text-lg rounded hover:bg-aithon-cyan/10 transition-all duration-300 uppercase tracking-wider">
                            View Handbook
                        </button>
                    </div>
                 </div>
             </div>
        </section>

        <section className="py-20 bg-[#050a0a]">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                            <span className="material-symbols-outlined text-aithon-cyan text-4xl">terminal</span>
                            MISSION SPECS
                        </h2>
                        <p className="text-gray-400 font-mono text-sm uppercase tracking-wide">/// Classified Intel /// Authorized Personnel Only</p>
                    </div>
                    <div className="flex gap-2">
                        <span className="h-2 w-2 rounded-full bg-aithon-cyan/20"></span>
                        <span className="h-2 w-2 rounded-full bg-aithon-cyan/40"></span>
                        <span className="h-2 w-2 rounded-full bg-aithon-cyan"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[{title:'Time Limit', val:'3 Hours', desc:'High-intensity coding sprint. No extensions. Pure adrenaline.', icon:'timer', subIcon:'hourglass_top'}, 
                      {title:'Arsenal', val:'Gen-AI Enabled', desc:'ChatGPT, Gemini, Copilot fully authorized. Prompt your way to victory.', icon:'smart_toy', subIcon:'psychology'}, 
                      {title:'Squad Size', val:'3-4 Members', desc:'Form your elite unit. Collaboration is key. Lone wolves will struggle.', icon:'groups', subIcon:'diversity_3'}, 
                      {title:'Loadout', val:'BYOD Required', desc:'Bring Your Own Laptop. Power & Wi-Fi grid provided by HQ.', icon:'laptop_chromebook', subIcon:'computer'}].map((card, i) => (
                        <div key={i} className="group relative bg-[#112222] border border-white/10 p-6 rounded-lg hover:border-aithon-cyan/50 transition-colors duration-300 overflow-hidden hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-white">{card.icon}</span>
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                                <div className="p-3 bg-[#0a1414] w-fit rounded border border-white/5">
                                    <span className="material-symbols-outlined text-aithon-cyan text-3xl">{card.subIcon}</span>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-sm font-mono uppercase mb-1">{card.title}</h3>
                                    <p className="text-2xl font-bold text-white">{card.val}</p>
                                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKuYAbO3ZODsLMIksuDMrltWex8-EmyAxvoyOSgEbuH5dzbO3IO0yIXiW9ZMbEAcH3aN4D4L9pjmaIjsPsNXU8WWINoEpDfjnb3FE9RtS31sBJmmT0SDAQStsRcrtkDv9ZUBdXcFmEoZIdP2ImOge6BAxj7q7ePaHZCvnwCWDISRH75C--oHo1H39nH7sgXjjh3qyyJiovb4oXhQzkIXPX5wsTsigq6WM7TA1xo49v_8BXUj-wouscFZHmnPeLk1CLt3B63aeuplM")'}}></div>
            <div className="absolute inset-0 z-0 bg-[#050a0a]/90 backdrop-blur-sm"></div>
            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    <div className="flex-1 bg-[#112222]/80 backdrop-blur-md border border-aithon-cyan p-1">
                        <div className="h-full bg-[#0a1414] p-8 md:p-12 border border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-aithon-cyan shadow-[0_0_20px_#0df2f2]"></div>
                            <h3 className="text-aithon-cyan font-bold text-xl uppercase tracking-widest mb-4">Entry Fee</h3>
                            <div className="flex items-baseline justify-center gap-1 mb-6">
                                <span className="text-6xl md:text-7xl font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">₹300</span>
                                <span className="text-xl text-gray-400 font-medium">/ Team</span>
                            </div>
                            <ul className="space-y-3 text-left mb-8 max-w-xs mx-auto">
                                <li className="flex items-center gap-3 text-gray-300"><span className="material-symbols-outlined text-aithon-cyan text-sm">check_circle</span><span>Access to Summit Area</span></li>
                                <li className="flex items-center gap-3 text-gray-300"><span className="material-symbols-outlined text-aithon-cyan text-sm">check_circle</span><span>Free Red Bull & Snacks</span></li>
                                <li className="flex items-center gap-3 text-gray-300"><span className="material-symbols-outlined text-aithon-cyan text-sm">check_circle</span><span>Certificate of Valor</span></li>
                                <li className="flex items-center gap-3 text-gray-300"><span className="material-symbols-outlined text-aithon-cyan text-sm">check_circle</span><span>Chance to win ₹50k</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-6 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Secure Your Spot on the Grid.</h2>
                        <p className="text-lg text-gray-300">Slots are strictly limited. Only the fastest teams will get a chance to deploy their models. Don't let your latency cost you the win.</p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button onClick={() => navigate('/payment?event=ai-thon')} className="flex-1 h-16 bg-aithon-cyan text-[#050a0a] text-lg font-bold rounded shadow-neon hover:shadow-[0_0_15px_rgba(13,242,242,0.8),0_0_30px_rgba(13,242,242,0.5)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">rocket_launch</span>
                                Register Now
                            </button>
                            <button className="h-16 px-6 border border-white/20 hover:border-white text-white rounded flex items-center justify-center hover:bg-white/5 transition-all">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 font-mono mt-2">* Payment gateway secured by 256-bit encryption.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default AiThonPage;