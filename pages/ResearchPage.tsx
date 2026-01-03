import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResearchPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-slate-200 font-display min-h-screen flex flex-col selection:bg-research-green selection:text-black">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md shadow-glass">
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-research-green/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
              <div className="relative flex items-center justify-center w-10 h-10 border border-research-green/30 bg-research-green/10 rounded group-hover:border-research-green group-hover:shadow-[0_0_15px_rgba(6,249,27,0.3)] transition-all">
                 <span className="material-symbols-outlined text-research-green text-2xl">terminal</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-white text-lg font-bold tracking-tight uppercase leading-none">Dombivli</span>
                 <span className="text-research-green text-xs font-mono tracking-[0.2em] uppercase leading-none">Tech Summit 2026</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <nav className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/5">
                    <button onClick={() => navigate('/')} className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">Home</button>
                    <button onClick={() => navigate('/research')} className="px-4 py-2 rounded-full text-sm font-medium text-black bg-research-green shadow-[0_0_10px_rgba(6,249,27,0.4)] transition-all font-bold">Research League</button>
                    <button onClick={() => navigate('/events')} className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">Events</button>
                    <button className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">Sponsors</button>
                </nav>
                <button onClick={() => navigate('/login')} className="relative overflow-hidden group border border-research-green text-research-green px-6 py-2 rounded text-sm font-bold uppercase tracking-wider hover:bg-research-green hover:text-black transition-all">
                    <span className="relative z-10 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-research-green rounded-full group-hover:bg-black transition-colors animate-pulse"></span>
                        System Login
                    </span>
                    <div className="absolute inset-0 bg-research-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
            </div>
            <div className="md:hidden">
                <button className="text-white hover:text-research-green">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center w-full relative">
         <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:50px_50px] opacity-10 pointer-events-none"></div>
         <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-research-green/5 via-transparent to-transparent pointer-events-none"></div>
         
         <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 z-10">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-[0_0_50px_rgba(6,249,27,0.05)] clip-path-corner">
                 <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-research-green/30 rounded-tl-lg pointer-events-none"></div>
                 <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-research-green/30 rounded-br-lg pointer-events-none"></div>
                 <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGTa-paSU0MMQgDoH06JWuNRyC6GlRK_SIghkPhAVGbT8EJb9_Kw8meuYMwrH1HbNakBBylQ5M_xwBIg3gK7Tr9hSj0bC1GSaAWETJjEJYOlUGI-xSjI6zw460LTBONtZuNaJQnraLLjL-AmvN-xo7r19gNPT-mpu-2mdxngTduR9wRmnDE12SAk_JOCOzcIHI4IPNpynpcNn5exFT7FX9-A-AxEwPfa2doql6rfzBZv1NFnz48B4IdnOqrT0UM6s3ePaM0u7nH6w")'}}></div>
                 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                 <div className="relative p-8 md:p-16 flex flex-col gap-6 max-w-3xl">
                    <div className="flex items-center gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-research-green/30 bg-research-green/5 backdrop-blur-md">
                            <div className="w-1.5 h-1.5 bg-research-green animate-[pulse_1s_infinite]"></div>
                            <span className="text-research-green text-xs font-mono uppercase tracking-widest">System Status: Online</span>
                        </div>
                        <div className="h-[1px] w-12 bg-research-green/30"></div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase relative">
                        Innovate <span className="text-research-green">'26</span> <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600 text-5xl md:text-7xl">Research League</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl font-body border-l-4 border-research-green/50 pl-6 py-1 bg-gradient-to-r from-research-green/5 to-transparent">
                        Mission Brief: Initiate the sequence. Join the elite research division of the Dombivli Tech Summit. Submit your abstract now.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                        <button className="group relative flex items-center gap-3 bg-research-green text-black px-8 py-4 font-bold text-base uppercase tracking-widest clip-path-polygon hover:shadow-[0_0_30px_rgba(6,249,27,0.4)] transition-all">
                            <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">download</span>
                            <span>Download Rulebook</span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                        </button>
                        <button className="group flex items-center gap-3 border border-white/20 hover:border-research-green text-gray-300 hover:text-white px-8 py-4 font-bold text-base uppercase tracking-widest clip-path-polygon bg-black/50 backdrop-blur-md transition-all">
                            <span>Past Papers</span>
                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform text-research-green">arrow_forward</span>
                        </button>
                    </div>
                 </div>
            </div>
         </section>

         <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 z-10 flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3 flex flex-col gap-6">
                <div className="bg-black/40 border border-white/10 backdrop-blur-md p-0 relative overflow-hidden group hover:border-research-green/50 transition-colors duration-500">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-research-green to-transparent opacity-50"></div>
                    <div className="p-6 pb-0 flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <span className="material-symbols-outlined text-research-green">pending_actions</span>
                                Mission Timeline
                            </h3>
                            <p className="text-xs text-gray-500 font-mono mt-1">SYNCED WITH SERVER TIME</p>
                        </div>
                        <span className="material-symbols-outlined text-4xl text-white/5">timeline</span>
                    </div>
                    <div className="relative px-6 pb-8">
                        <div className="absolute left-[43px] top-2 bottom-12 w-[1px] bg-gradient-to-b from-research-green via-research-green/30 to-white/10"></div>
                        <div className="relative flex gap-6 mb-8 group/item">
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded bg-black border border-research-green shadow-[0_0_15px_rgba(6,249,27,0.2)] group-hover/item:shadow-[0_0_20px_rgba(6,249,27,0.5)] transition-all">
                                <span className="material-symbols-outlined text-research-green text-xl">upload_file</span>
                            </div>
                            <div className="flex-1 pt-1">
                                <h4 className="text-white font-bold text-lg leading-none group-hover/item:text-research-green transition-colors">Abstract Submission</h4>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-research-green text-black">Active</span>
                                    <span className="text-xs text-gray-500 font-mono">Phase 1/3</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-2 font-light">Upload PDF for initial screening.</p>
                            </div>
                        </div>
                         <div className="relative flex gap-6 mb-8 opacity-60 hover:opacity-100 transition-opacity">
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded bg-surface-lighter border border-white/10">
                                <span className="material-symbols-outlined text-gray-400 text-xl">visibility</span>
                            </div>
                            <div className="flex-1 pt-1">
                                <h4 className="text-gray-300 font-bold text-lg leading-none">Selection Phase</h4>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/10 text-gray-400 border border-white/5">Locked</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2 font-light">Panel review of submitted abstracts.</p>
                            </div>
                        </div>
                        <div className="relative flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded bg-surface-lighter border border-white/5">
                                <span className="material-symbols-outlined text-gray-500 text-xl">mic</span>
                            </div>
                            <div className="flex-1 pt-1">
                                <h4 className="text-gray-400 font-bold text-lg leading-none">Final Pitch</h4>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/5 text-gray-500 border border-white/5">Locked</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2 font-light">Live presentation at the summit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black/40 border border-white/10 backdrop-blur-md p-6 relative">
                    <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-research-green"></div>
                    <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-research-green"></div>
                    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                        <span className="material-symbols-outlined text-research-green">info</span>
                        Protocol Data
                    </h3>
                    <div className="grid grid-cols-1 gap-1">
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 border-l-2 border-transparent hover:border-research-green hover:bg-white/10 transition-all group cursor-default">
                            <span className="text-gray-400 text-xs uppercase tracking-widest font-mono group-hover:text-research-green transition-colors">Team Size</span>
                            <span className="text-white text-sm font-bold">Max 2 Units</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 border-l-2 border-transparent hover:border-research-green hover:bg-white/10 transition-all group cursor-default">
                            <span className="text-gray-400 text-xs uppercase tracking-widest font-mono group-hover:text-research-green transition-colors">File Type</span>
                            <span className="text-white text-sm font-bold">PDF Only</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 border-l-2 border-transparent hover:border-research-green hover:bg-white/10 transition-all group cursor-default">
                            <span className="text-gray-400 text-xs uppercase tracking-widest font-mono group-hover:text-research-green transition-colors">Max Size</span>
                            <span className="text-white text-sm font-bold">10 MB</span>
                        </div>
                        <div className="flex justify-between items-center py-3 px-4 bg-white/5 border-l-2 border-transparent hover:border-research-green hover:bg-white/10 transition-all group cursor-default">
                            <span className="text-gray-400 text-xs uppercase tracking-widest font-mono group-hover:text-research-green transition-colors">Fee</span>
                            <span className="text-research-green text-sm font-bold">FREE</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-2/3 h-full">
                <div className="h-full relative group">
                     <div className="absolute -inset-0.5 bg-gradient-to-r from-research-green to-green-800 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                     <div className="relative h-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
                            <div className="w-full h-[50%] bg-gradient-to-b from-transparent via-research-green/10 to-transparent absolute top-[-50%] animate-scan"></div>
                        </div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10"></div>
                        <div className="relative z-10 w-full h-full border-2 border-dashed border-white/20 rounded-lg bg-white/5 p-12 flex flex-col items-center justify-center group-hover:border-research-green/50 group-hover:bg-white/10 transition-all duration-300">
                            <div className="w-24 h-24 mb-6 relative">
                                <div className="absolute inset-0 bg-research-green/20 rounded-full animate-pulse blur-xl"></div>
                                <div className="relative h-full w-full bg-black/50 border border-research-green/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,249,27,0.2)] group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-outlined text-research-green text-5xl">cloud_upload</span>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-wide">Drop Zone Active</h2>
                            <p className="text-gray-400 mb-10 max-w-md text-lg">Initialize Upload Sequence. Drag & Drop Abstract Data Here.</p>
                            <button className="relative bg-research-green text-black px-10 py-4 font-bold text-lg uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(6,249,27,0.6)] transition-all clip-path-polygon flex items-center gap-3 group/btn">
                                <span className="material-symbols-outlined group-hover/btn:rotate-12 transition-transform">folder_open</span>
                                Browse System Files
                            </button>
                            <div className="mt-12 flex items-center gap-4 text-xs font-mono text-green-500/70 border border-green-500/20 px-4 py-2 rounded bg-black/40">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                SECURE CONNECTION ESTABLISHED // ENCRYPTION: AES-256
                            </div>
                        </div>
                     </div>
                </div>
            </div>
         </section>

         <footer className="w-full border-t border-white/10 bg-black/90 backdrop-blur-lg mt-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-research-green/30 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-500 text-sm font-mono flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-research-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-research-green"></span>
                    </span>
                    © 2026 Dombivli Tech Summit. All systems operational.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-research-green transition-colors transform hover:scale-110"><span className="material-symbols-outlined">public</span></a>
                    <a href="#" className="text-gray-500 hover:text-research-green transition-colors transform hover:scale-110"><span className="material-symbols-outlined">alternate_email</span></a>
                    <a href="#" className="text-gray-500 hover:text-research-green transition-colors transform hover:scale-110"><span className="material-symbols-outlined">code</span></a>
                </div>
            </div>
         </footer>
      </main>
    </div>
  );
};

export default ResearchPage;