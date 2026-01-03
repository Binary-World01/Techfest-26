
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EsportsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f5f8] dark:bg-[#0f0f12] font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden selection:bg-tapfire-purple selection:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#362249] bg-[#1a1023]/80 backdrop-blur-md">
        <div className="px-6 md:px-10 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white cursor-pointer" onClick={() => navigate('/')}>
             <div className="size-8 text-tapfire-purple flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">sports_esports</span>
             </div>
             <h2 className="text-white text-lg md:text-xl font-bold leading-tight tracking-wider uppercase">Tapfire Esports</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-white/70 hover:text-tapfire-purple transition-colors text-sm font-medium uppercase tracking-widest">Home</button>
            <button onClick={() => navigate('/events')} className="text-white/70 hover:text-tapfire-purple transition-colors text-sm font-medium uppercase tracking-widest">Events</button>
            <button onClick={() => navigate('/esports')} className="text-tapfire-purple text-sm font-bold uppercase tracking-widest shadow-[0_2px_0_0_#7f0df2]">Esports</button>
            <button onClick={() => navigate('/login')} className="text-white/70 hover:text-tapfire-purple transition-colors text-sm font-medium uppercase tracking-widest">Contact</button>
          </nav>
          <div className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
         <div className="absolute inset-0 pointer-events-none bg-cyber-grid bg-[length:50px_50px] opacity-30 z-0"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tapfire-purple/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12 flex flex-col gap-12">
            
            <section className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex flex-col gap-4 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tapfire-purple/30 bg-tapfire-purple/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-tapfire-purple text-xs font-bold tracking-widest uppercase">Registration Live</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white">
                        SQUAD <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tapfire-purple to-blue-500 drop-shadow-[0_0_10px_rgba(127,13,242,0.6)]">MOBILIZATION</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-lg font-body">
                        Prepare your roster for the ultimate showdown at Dombivli Tech Summit 2026. Glory awaits the victors.
                    </p>
                </div>
                
                <div className="flex flex-col gap-2 p-6 rounded-xl bg-[#1a1023] border border-[#362249] shadow-2xl">
                    <div className="text-center text-slate-400 text-sm font-medium tracking-widest uppercase mb-2">Registration Ends In</div>
                    <div className="flex gap-4">
                        {[{v:'02', l:'Days'}, {v:'14', l:'Hrs'}, {v:'35', l:'Min'}].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#261834] border border-[#362249]">
                                    <p className="text-white text-2xl font-bold">{item.v}</p>
                                </div>
                                <span className="text-xs text-slate-500 uppercase">{item.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex justify-center">
                <div className="w-full max-w-4xl bg-[rgba(26,22,37,0.6)] backdrop-blur-md border border-tapfire-purple/20 rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-[0_0_20px_rgba(127,13,242,0.05)] group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tapfire-purple to-transparent opacity-50"></div>
                    
                    <div className="flex flex-col gap-8 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#362249] pb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Squad Registration</h3>
                                <p className="text-slate-400 text-sm font-body">Season 1 Qualifier Bracket</p>
                            </div>
                            <div className="bg-[#0f0f12] p-1.5 rounded-lg flex border border-[#2d2438]">
                                <label className="cursor-pointer relative px-6 py-2 rounded-md transition-all duration-300 has-[:checked]:bg-tapfire-purple has-[:checked]:shadow-lg group/bgmi overflow-hidden">
                                    <input className="peer sr-only" name="game_select" type="radio" value="bgmi" defaultChecked />
                                    <span className="relative z-10 text-slate-400 peer-checked:text-white font-bold text-sm tracking-wide transition-colors">BGMI</span>
                                    <div className="absolute inset-0 bg-tapfire-purple opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </label>
                                <label className="cursor-pointer relative px-6 py-2 rounded-md transition-all duration-300 has-[:checked]:bg-tapfire-purple has-[:checked]:shadow-lg group/ff overflow-hidden">
                                    <input className="peer sr-only" name="game_select" type="radio" value="free_fire"/>
                                    <span className="relative z-10 text-slate-400 peer-checked:text-white font-bold text-sm tracking-wide transition-colors">FREE FIRE</span>
                                    <div className="absolute inset-0 bg-tapfire-purple opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2 group/input">
                                <label className="text-xs font-bold text-tapfire-purple uppercase tracking-wider pl-1">Squad Name</label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 text-slate-500 material-symbols-outlined">groups</span>
                                    <input className="w-full bg-[#0f0f12] border border-[#2d2438] text-white rounded-lg py-3.5 pl-12 pr-4 focus:outline-none focus:border-tapfire-purple focus:ring-1 focus:ring-tapfire-purple transition-all placeholder:text-slate-600 font-body focus:shadow-[0_0_15px_rgba(127,13,242,0.3)]" placeholder="Enter Squad Name" type="text"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 group/input">
                                <label className="text-xs font-bold text-tapfire-purple uppercase tracking-wider pl-1">Leader WhatsApp</label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 text-slate-500 material-symbols-outlined">chat</span>
                                    <input className="w-full bg-[#0f0f12] border border-[#2d2438] text-white rounded-lg py-3.5 pl-12 pr-4 focus:outline-none focus:border-tapfire-purple focus:ring-1 focus:ring-tapfire-purple transition-all placeholder:text-slate-600 font-body focus:shadow-[0_0_15px_rgba(127,13,242,0.3)]" placeholder="+91 XXXXX XXXXX" type="tel"/>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-tapfire-purple">person_add</span>
                                <h4 className="text-white font-bold text-lg">Active Roster</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 p-6 rounded-xl border border-[#2d2438] bg-[#0f0f12]/50">
                                {['Player 1 (IGL)', 'Player 2', 'Player 3', 'Player 4'].map((player, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-slate-400 uppercase">{player}</span>
                                            {idx === 0 && <span className="material-symbols-outlined text-[16px] text-yellow-500">stars</span>}
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <input className="w-full bg-[#1a1625] border border-[#2d2438] text-white rounded px-3 py-2.5 text-sm focus:outline-none focus:border-tapfire-purple transition-colors placeholder:text-slate-600 font-body focus:shadow-[0_0_15px_rgba(127,13,242,0.3)]" placeholder="IGN" type="text"/>
                                            <input className="w-full bg-[#1a1625] border border-[#2d2438] text-white rounded px-3 py-2.5 text-sm focus:outline-none focus:border-tapfire-purple transition-colors placeholder:text-slate-600 font-body focus:shadow-[0_0_15px_rgba(127,13,242,0.3)]" placeholder="UID" type="text"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-[#362249]">
                            <div className="flex items-center gap-3 bg-[#1a1625] px-4 py-3 rounded-lg border border-tapfire-purple/30 shadow-[0_0_15px_rgba(127,13,242,0.15)]">
                                <span className="material-symbols-outlined text-tapfire-purple text-2xl">confirmation_number</span>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Entry Fee</span>
                                    <span className="text-lg font-bold text-white leading-none">₹200 <span className="text-xs font-normal text-slate-400">/ Squad</span></span>
                                </div>
                            </div>
                            <button 
                                onClick={() => navigate('/payment?event=tapfire')}
                                className="w-full md:w-auto flex-1 max-w-sm group relative overflow-hidden rounded-lg bg-tapfire-purple py-4 px-8 text-white font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(127,13,242,0.6)]">
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    <span>Initiate Registration</span>
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </div>
                                <div className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 transition-transform duration-500 group-hover:translate-x-full"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 rounded-xl overflow-hidden h-48 relative group border border-[#2d2438]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_sHQ9c8cHMGuWSAwNCSKmVZ1cE-58kjUbHiIa6GpWjLjYX46wPvw2l7eWUPJLMWk0JBGosicslFu-PKF7MEBuXu8bAUIt2RCbFzXMtJ0rqXXi_51bMqBdQtJs9HnKNAbBxwPxfgYTqKS7qgemQYGYy_r1raL8B-acF-jcgvLxJjb20J0ZLz4wZV4skisTjayVbA_TFic2smQ4v8LIJ15uvEVSgVwfTJJiYuJPWaRE4ZAW9PVnncWOwq23lXiTQJT81sGlYvaHmU" alt="Live Finals" />
                    <div className="absolute bottom-4 left-4 z-20">
                        <h4 className="text-white font-bold text-lg">Live Finals</h4>
                        <p className="text-xs text-slate-300">Experience the roar of the crowd.</p>
                    </div>
                </div>
                <div className="md:col-span-1 rounded-xl overflow-hidden h-48 relative group border border-[#2d2438]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJd3hbarLc4iMGuLki_gdHgxa43PBGAknpdfshkKZl5WZ96Yw-7FW8ftrQP5EhNYz0EvtI1e4ideSJ3ht-Ya_-G3QzwGp3NRJxD5w0nynvv5IW1g5nVpztNUZ837B9V7u_928-fku8AfuKHSaV5IgJ19I3bm44t3mlApzbVhZHHb6fwhfd0ZPYELpJLHfQ-EZSJrwyJHGH-c80W2GwRNdYpEF1cLipgz9Kxp4XapthSAb5yO6vi2GekbgRgisia93jRwnw7Uojv1s" alt="Pro Gear" />
                    <div className="absolute bottom-4 left-4 z-20">
                        <h4 className="text-white font-bold text-lg">Pro Gear</h4>
                        <p className="text-xs text-slate-300">Powered by top-tier hardware.</p>
                    </div>
                </div>
                <div className="md:col-span-1 rounded-xl overflow-hidden h-48 relative group border border-[#2d2438]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjfow6QvyUQ6cPEPo4zmFr1FWvDYd0Bn1Do5VarO8yl-Or6UpCfFQdc3C_U5jRS4CkL3xVEHuTr6z0H2oBgPk5R2dfN-rrW7W6vPIE56If2qq7rLBdOkmfO0zZO_2Uun316UJrBvOHbNuYqGLd5LhmCKAXMi0WBfTkVJ7-JrAtgdYb4DLxuZU5-jOi9bcHQXCmgI7iAfRrFTgAusmIQ1xgU1opfyA4aS8vLv214CXumeVGLBJ2kSsndT6v7CZ3oZtqSULXtIn4ao4" alt="Dombivli 2026" />
                    <div className="absolute bottom-4 left-4 z-20">
                        <h4 className="text-white font-bold text-lg">Dombivli 2026</h4>
                        <p className="text-xs text-slate-300">The future is here.</p>
                    </div>
                </div>
            </section>
         </div>
      </main>
      
      <footer className="border-t border-[#362249] bg-[#1a1023] py-8">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">© 2026 Dombivli Tech Summit. All rights reserved.</p>
            <div className="flex gap-6">
                <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
                <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
                <a className="text-slate-500 hover:text-white transition-colors text-sm" href="#">Support</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default EsportsPage;
