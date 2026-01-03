import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-dark text-white font-mono antialiased selection:bg-neon-red selection:text-white overflow-x-hidden relative flex flex-col min-h-screen w-full z-10">
      <div className="fixed inset-0 pointer-events-none z-0 bg-cyber-grid bg-[length:50px_50px] opacity-30"></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,234,255,0.05),transparent_80%)]"></div>
      <div className="fixed inset-0 pointer-events-none z-50 bg-scanline bg-[length:100%_4px] opacity-10"></div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-bg-dark/70 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 group cursor-pointer relative" onClick={() => navigate('/')}>
              <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="material-symbols-outlined text-neon-cyan text-4xl group-hover:animate-pulse relative z-10 drop-shadow-[0_0_10px_rgba(0,234,255,0.8)]">terminal</span>
              <div className="flex flex-col relative z-10">
                <h2 className="font-display text-2xl font-black tracking-wider text-white transition-colors duration-300 drop-shadow-[2px_2px_0px_#bf00ff]">
                  DTS <span className="text-neon-cyan">'26</span>
                </h2>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <button onClick={() => navigate('/')} className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] relative group">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 text-neon-cyan transition-opacity">&gt;</span>
                Home
              </button>
              <button onClick={() => navigate('/events')} className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-neon-cyan transition-colors hover:drop-shadow-[0_0_8px_rgba(0,234,255,0.8)] relative group">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 text-neon-cyan transition-opacity">&gt;</span>
                Events
              </button>
              <button onClick={() => navigate('/battle-pass')} className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-neon-purple transition-colors hover:drop-shadow-[0_0_8px_rgba(191,0,255,0.8)] relative group">
                <span className="absolute -left-4 opacity-0 group-hover:opacity-100 text-neon-purple transition-opacity">&gt;</span>
                Battle_Pass
              </button>
            </nav>
            <div className="hidden md:flex">
              <button onClick={() => navigate('/login')} className="relative group overflow-hidden px-8 py-2.5 bg-black border border-neon-cyan/50 text-neon-cyan font-display font-bold uppercase tracking-widest hover:border-neon-cyan transition-all duration-300 hover:shadow-neon">
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors">
                  <span className="w-2 h-2 bg-neon-cyan rounded-none animate-pulse"></span>
                  Login
                </span>
                <div className="absolute inset-0 bg-neon-cyan translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 skew-x-12 origin-left"></div>
              </button>
            </div>
            <div className="md:hidden">
                <button className="text-neon-cyan hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(0,234,255,0.8)]">
                    <span className="material-symbols-outlined text-4xl">menu_open</span>
                </button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-neon-cyan/20">
        <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/90 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-black/50 z-10 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neon-red/10 to-transparent z-10 pointer-events-none"></div>
            <div className="w-full h-full bg-cover bg-center opacity-40 grayscale contrast-125" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDK4GaMBlBSlVhrUoSyKl72pPcAE7yUmRXVkc0MwSOW2j0Cmj84ufvXBfRVV6LK1z2G4biCok_Y0nYL4vXs25WZpxdChkZpVNt9m7KVC0mOUneC4Ghv2wyXKG_RkwnsR0zVg9Lp9tdYk6QRgR62bzc98fOVWziDW222-UeWxnALws0lxatS9MnAhoSa7s7kOxvvZTriOBqWcdGPmhguFC80qcLimmnNAxraQGpfk_gdWnZ62XLGWbZcwRHhj-YXKLd_a4FaCjHcYo")'}}>
            </div>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-neon-cyan/30 bg-black/60 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,234,255,0.2)]">
            <span className="w-2 h-2 bg-neon-red shadow-[0_0_10px_#ff003c] animate-pulse-fast"></span>
            <span className="text-neon-cyan text-xs font-display font-bold uppercase tracking-[0.3em]">System: Red Alert</span>
            <span className="text-gray-500 text-xs font-mono">|</span>
            <span className="text-gray-400 text-xs font-mono">v.20.26</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none relative z-10">
            <div className="glitch-text" data-text="DOMBIVLI">DOMBIVLI</div>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-cyan bg-[length:200%_auto] animate-[pulse_3s_infinite] drop-shadow-[0_0_20px_rgba(0,234,255,0.6)] mt-2">
              TECH SUMMIT
            </span>
            <span className="absolute -right-4 -bottom-4 md:right-0 md:bottom-2 text-4xl md:text-6xl text-neon-purple opacity-80 font-mono italic rotate-[-5deg] drop-shadow-[0_0_10px_#bf00ff]">'26</span>
          </h1>

          <div className="relative mt-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-red rounded blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm border-x border-neon-cyan/50">
              <p className="font-display font-bold text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-white uppercase tracking-[0.15em] text-center drop-shadow-sm">
                Ultimate AI & Tech Showdown
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-400 font-mono leading-relaxed">
            Protocol <span className="text-neon-red">OMEGA</span> initialized. The grid is live. <br className="hidden md:block"/>
            Compete in the region's most aggressive technical arena.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full justify-center items-center">
            <button 
                onClick={() => navigate('/payment')}
                className="relative w-full sm:w-auto px-10 py-5 bg-neon-cyan text-black font-display font-black text-lg uppercase tracking-wider overflow-hidden group hover:scale-105 transition-transform duration-200 shadow-neon-strong clip-slant-r">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined animate-pulse">emergency</span>
                INITIALIZE REGISTRATION
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-100"></div>
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white animate-[pulse_0.5s_infinite]"></div>
            </button>
            <button className="w-full sm:w-auto px-8 py-5 bg-black/40 border border-white/20 text-white font-mono font-bold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center gap-3 backdrop-blur-md clip-slant-l">
              <span className="material-symbols-outlined text-neon-red">play_arrow</span>
              Decrypt Trailer
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-neon-cyan/30"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-neon-cyan/30"></div>
      </section>

      <section className="border-b border-neon-cyan/20 bg-bg-dark relative z-20">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div className="p-8 flex items-center justify-center gap-6 group hover:bg-white/5 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <span className="material-symbols-outlined text-5xl text-neon-cyan opacity-80 drop-shadow-[0_0_10px_rgba(0,234,255,0.6)] group-hover:scale-110 transition-transform duration-300">trophy</span>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-neon-cyan font-mono font-bold uppercase tracking-[0.2em] mb-1">Total Bounty</span>
                        <span className="font-display text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(0,234,255,0.3)]">₹100k<span className="text-neon-cyan text-2xl">+</span></span>
                    </div>
                </div>
                <div className="p-8 flex items-center justify-center gap-6 group hover:bg-white/5 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <span className="material-symbols-outlined text-5xl text-neon-purple opacity-80 drop-shadow-[0_0_10px_rgba(191,0,255,0.6)] group-hover:scale-110 transition-transform duration-300">groups</span>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-neon-purple font-mono font-bold uppercase tracking-[0.2em] mb-1">Operators</span>
                        <span className="font-display text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(191,0,255,0.3)]">500<span className="text-neon-purple text-2xl">+</span></span>
                    </div>
                </div>
                <div className="p-8 flex items-center justify-center gap-6 group hover:bg-white/5 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-neon-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <span className="material-symbols-outlined text-5xl text-neon-red opacity-80 drop-shadow-[0_0_10px_rgba(255,0,60,0.6)] group-hover:scale-110 transition-transform duration-300">handshake</span>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-neon-red font-mono font-bold uppercase tracking-[0.2em] mb-1">Partners</span>
                        <span className="font-display text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(255,0,60,0.3)]">20<span className="text-neon-red text-2xl">+</span></span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 relative bg-bg-dark overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tight relative drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              <span className="text-neon-cyan mr-2">&gt;</span> Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Battle</span>
            </h2>
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-pulse"></div>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-[0.2em] max-w-xl">
              Select your domain to dominate. Victory is calculated, not given.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {/* AI-Thon */}
            <div onClick={() => navigate('/aithon')} className="group cursor-pointer relative rounded-none overflow-hidden bg-surface border border-white/10 hover:border-neon-cyan transition-all duration-300 hover:shadow-neon h-[420px] flex flex-col justify-end">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcsFhnJhjyecug7M4PsX3OvaJV3gokTKVujAtjDJgamtXAP09sYcJZ7PKqFzdM0ntYWyZcAf69eF4bOinBMHXDTl238j6_V9XYh1Ic47XYUvQhcXeX5BoCRoa10VhXFCzpCGxbxfQOtemTg6LUTAFSBX3mgQElF8Twtsd2yxob5lEpr-aZTJEj4_rr7EgoJeaAcqMdyAHh_25SuiDaoBo4d4jA8iAUkN4Zr6Jbf-3Mz5OWI5pD39qm38_Jr7wxQ6E-i3Kj4UjyBCU")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="relative p-6 flex flex-col gap-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-10 h-10 border border-neon-cyan text-neon-cyan flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(0,234,255,0.3)] bg-black/50 backdrop-blur">
                        <span className="material-symbols-outlined text-xl">psychology</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-neon-cyan transition-colors tracking-wider">AI-Thon</h3>
                    <div className="h-[1px] w-full bg-white/20 group-hover:bg-neon-cyan/50 transition-colors"></div>
                    <p className="font-mono text-[10px] text-gray-400 leading-relaxed uppercase">Neural Networks Active. <br/>Build the mind of tomorrow.</p>
                </div>
            </div>

            {/* Coding Wars */}
            <div onClick={() => navigate('/coding-wars')} className="group cursor-pointer relative rounded-none overflow-hidden bg-black border border-neon-red/60 hover:border-neon-red transition-all duration-100 hover:shadow-neon-red-intense h-[420px] flex flex-col justify-end ring-1 ring-neon-red/20">
               <div className="absolute inset-0 bg-neon-red/5 z-0 animate-pulse"></div>
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmYwMDNjIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] z-0 opacity-50"></div>
               <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-60 grayscale group-hover:grayscale-0 mix-blend-luminosity" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBJfJqoD5oW19wIV24z76MuUrWfx8jWsMAAex4vJEsXFZO8p_sy0c5GLsLJNqnwfoKBEyjOccORQ4sjrtfSkTqEXxEpUcqDRvuVAgJaQ9OnWE8i1G3RaJWRUv9WCYbddNQe9WvjfHHThC8pLNFtqvbdyZFjqpbFJOEzCmdf1MQKYPXLWthSxF2_V5Ix8NdE_Tx2FpxQLhheoNf46F4RjhlEra_CZw802bIU_qaxAf21I1l1pm4hMgHPvoglJQkwX9vMQauBSwfwvI")' }}></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute top-4 right-4 bg-neon-red text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest animate-pulse z-20">High Alert</div>
               <div className="absolute inset-0 bg-neon-red/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-75"></div>
               <div className="relative p-6 flex flex-col gap-3 z-10">
                 <div className="w-10 h-10 border border-neon-red text-neon-red flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(255,0,60,0.5)] bg-black/80 backdrop-blur animate-pulse">
                   <span className="material-symbols-outlined text-xl">bug_report</span>
                 </div>
                 <h3 className="font-display text-2xl font-black text-neon-red uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)] tracking-wider">Coding Wars</h3>
                 <div className="h-[1px] w-full bg-neon-red/50 group-hover:bg-neon-red transition-colors shadow-[0_0_5px_#ff003c]"></div>
                 <p className="font-mono text-[10px] text-red-200 leading-relaxed uppercase font-bold">System Failure Imminent. <br/>Debug or perish.</p>
               </div>
            </div>

            {/* Tapfire */}
            <div onClick={() => navigate('/esports')} className="group cursor-pointer relative rounded-none overflow-hidden bg-surface border border-white/10 hover:border-neon-purple transition-all duration-300 hover:shadow-neon-purple h-[420px] flex flex-col justify-end">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-purple opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-purple opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-purple opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-purple opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyluTqDazGyQu2azBsWyFyes-5cpQxPzaapN6qEGXn6DegxMl5E7BEeRTsxtO5Rep2vd7jjDtsGbRjJFRJvqMy4ygDTPqIXA1PiYRgwwzXLZKKCMTGQW7HX_Sl0YzrX8bdP_7D6IDJNVsXWIEuOlUoCA0mC3z3fMfRselcMssbpIJQ50zZ_X6PuR_tPg1Ia3eGG87RxciG76K0yZFSVhofKcaMASr85yY6tfnb9oHBFBUqZV5UT-VgLpZN-tlfpdrDUVXU4X32jvM")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="relative p-6 flex flex-col gap-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-10 h-10 border border-neon-purple text-neon-purple flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(191,0,255,0.3)] bg-black/50 backdrop-blur">
                        <span className="material-symbols-outlined text-xl">sports_esports</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-neon-purple transition-colors tracking-wider">Tapfire</h3>
                    <div className="h-[1px] w-full bg-white/20 group-hover:bg-neon-purple/50 transition-colors"></div>
                    <p className="font-mono text-[10px] text-gray-400 leading-relaxed uppercase">Game On. Precision is key. <br/>Dominate the lobby.</p>
                </div>
            </div>

            {/* Research */}
            <div onClick={() => navigate('/research')} className="group cursor-pointer relative rounded-none overflow-hidden bg-surface border border-white/10 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] h-[420px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSHui3H2Z5JEQIfmnTt99DvGz8srGMjusMu0kDxLBwqbUVV8dLFuUAxN3s6bjgCso1knKZMEwfOKah3uwfLr-y7J7JJF_uSQ0MyckAaJXkN7oXloRC5oUP9tgJvWjQ5YqV16Elz4jS6G7JDz4IjTWHET0VHnA3KTdUYO9A9YfIGZxn-AGNCF0OK2IAAO-kXDSGMUllHoQTrIdxT1YdbB2YhVV_vE067kfbJAdnnKvpoWW2qs1ePaKh3wfvjGw_R_4Q5KErUiUqAMU")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative p-6 flex flex-col gap-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="w-10 h-10 border border-sky-400 text-sky-400 flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(56,189,248,0.3)] bg-black/50 backdrop-blur">
                  <span className="material-symbols-outlined text-xl">article</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-sky-400 transition-colors tracking-wider">Paper Pres.</h3>
                <div className="h-[1px] w-full bg-white/20 group-hover:bg-sky-400/50 transition-colors"></div>
                <p className="font-mono text-[10px] text-gray-400 leading-relaxed uppercase">Research Upload. <br/>Share the knowledge.</p>
              </div>
            </div>

             {/* Quiz */}
             <div onClick={() => navigate('/quiz')} className="group cursor-pointer relative rounded-none overflow-hidden bg-surface border border-white/10 hover:border-emerald-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] h-[420px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-30" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD88rWXGEbLGfTkBsXrVhiTBZEHYTVqGSUf_aApdOJ7HBbYSL2LGwdtt-RBZK1VXbKZKbsC7-2fH5gnTSZ2DhvE9RsLQgjXnlhV73qh2wOuDQeZ7frSL0L5TDCbZpRJh4SfFVK_2ydwTMVd2fJRWkNWFoMfxtLLdeTzu57Vfecph9tqUUqk5Tr7QfM20STVUUfE-YQ5wLGZgvYC7v3C8BDhcMZI1KG2NqTt5CSK_fVVECDYFwH_i-W2Mci2f2584KQKuQIpiWJL95M")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative p-6 flex flex-col gap-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="w-10 h-10 border border-emerald-500 text-emerald-500 flex items-center justify-center mb-2 shadow-[0_0_10px_rgba(16,185,129,0.3)] bg-black/50 backdrop-blur">
                  <span className="material-symbols-outlined text-xl">quiz</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-emerald-500 transition-colors tracking-wider">Tech Quiz</h3>
                <div className="h-[1px] w-full bg-white/20 group-hover:bg-emerald-500/50 transition-colors"></div>
                <p className="font-mono text-[10px] text-gray-400 leading-relaxed uppercase">Knowledge Check. <br/>Are you ready?</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="w-full bg-neon-cyan/5 overflow-hidden py-4 border-y border-neon-cyan/20 backdrop-blur-sm">
        <div className="flex gap-16 whitespace-nowrap justify-center items-center opacity-80">
            <span className="text-neon-cyan font-display font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 drop-shadow-[0_0_5px_rgba(0,234,255,0.8)]"><span className="w-1 h-1 bg-neon-cyan shadow-neon"></span> INITIALIZE REGISTRATION</span>
            <span className="text-white font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-4 text-opacity-50"><span className="w-1 h-1 bg-white"></span> Win Big</span>
            <span className="text-neon-purple font-display font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 drop-shadow-[0_0_5px_rgba(191,0,255,0.8)]"><span className="w-1 h-1 bg-neon-purple shadow-neon"></span> 50+ Colleges</span>
            <span className="text-white font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-4 text-opacity-50"><span className="w-1 h-1 bg-white"></span> 2 Days of Tech</span>
            <span className="text-neon-red font-display font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-4 drop-shadow-[0_0_5px_rgba(255,0,60,0.8)]"><span className="w-1 h-1 bg-neon-red shadow-neon"></span> DOMINATE</span>
        </div>
      </div>

      <footer className="mt-auto bg-black border-t border-gray-900 pt-20 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <h2 className="font-display text-3xl font-black text-white">DTS <span className="text-neon-cyan">'26</span></h2>
              <div className="h-1 w-12 bg-neon-cyan"></div>
              <p className="text-gray-500 font-mono text-xs leading-relaxed uppercase tracking-wider">
                Initializing next-gen tech ecosystem. <br/>
                Dombivli Tech Summit is the premier student-led technical festival.
              </p>
            </div>
            
            <div>
               <h3 className="font-display text-neon-cyan font-bold uppercase tracking-widest mb-6 text-sm flex items-center gap-2">
                 <span className="w-2 h-2 bg-neon-cyan"></span> Navigation
               </h3>
               <ul className="space-y-3 font-mono text-xs text-gray-500 uppercase tracking-wider">
                 <li><button onClick={() => navigate('/')} className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-cyan pl-0 text-left w-full">Home</button></li>
                 <li><button className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-cyan pl-0 text-left w-full">About_Us</button></li>
                 <li><button className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-cyan pl-0 text-left w-full">Sponsors</button></li>
                 <li><button className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-cyan pl-0 text-left w-full">Team</button></li>
               </ul>
            </div>

            <div>
               <h3 className="font-display text-neon-purple font-bold uppercase tracking-widest mb-6 text-sm flex items-center gap-2">
                 <span className="w-2 h-2 bg-neon-purple"></span> Events
               </h3>
               <ul className="space-y-3 font-mono text-xs text-gray-500 uppercase tracking-wider">
                 <li><button onClick={() => navigate('/aithon')} className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-purple pl-0 text-left w-full">Hackathon</button></li>
                 <li><button onClick={() => navigate('/esports')} className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-purple pl-0 text-left w-full">Esports</button></li>
                 <li><button onClick={() => navigate('/coding-wars')} className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-purple pl-0 text-left w-full">Coding</button></li>
                 <li><button onClick={() => navigate('/research')} className="hover:text-white hover:pl-2 transition-all duration-300 block border-l border-transparent hover:border-neon-purple pl-0 text-left w-full">Research</button></li>
               </ul>
            </div>

            <div>
               <h3 className="font-display text-neon-red font-bold uppercase tracking-widest mb-6 text-sm flex items-center gap-2">
                 <span className="w-2 h-2 bg-neon-red"></span> Connect
               </h3>
               <div className="flex gap-4 mb-6">
                 {['IG', 'LI', 'X'].map((social) => (
                    <div key={social} className="w-12 h-12 border border-gray-800 bg-gray-900/50 hover:bg-neon-cyan/20 hover:border-neon-cyan hover:text-neon-cyan flex items-center justify-center text-gray-400 transition-all duration-300 group cursor-pointer font-bold">
                        <span className="group-hover:scale-110 transition-transform">{social}</span>
                    </div>
                 ))}
               </div>
               <p className="text-gray-600 text-xs font-mono border border-gray-800 p-2 inline-block">contact@dts26.tech</p>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 font-mono text-[10px] uppercase">
              © 2026 DTS. System.AllRightsReserved(true);
            </p>
            <div className="flex gap-8">
                <a className="text-gray-600 hover:text-neon-cyan text-[10px] font-mono uppercase tracking-wider transition-colors" href="#">Privacy_Policy.txt</a>
                <a className="text-gray-600 hover:text-neon-cyan text-[10px] font-mono uppercase tracking-wider transition-colors" href="#">Terms_of_Service.md</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;