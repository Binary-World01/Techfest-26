import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CodingWarsPage: React.FC = () => {
  const navigate = useNavigate();
  const [deployed, setDeployed] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "> g++ core_patch.cpp -o patch",
    "> Compilation successful (0.4s)",
    "> ./patch",
    "> WARNING: Memory usage spike detected at 0x7ffd...",
    "> Waiting for input...",
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalOutput]);

  const handleDeploy = () => {
    setTerminalOutput(prev => [...prev, "> Initiating Sector 7 Patch...", "> Verifying integrity...", "> Patch deployed."]);
    setTimeout(() => {
        setTerminalOutput(prev => [...prev, "> Core stable.", "> MISSION ACCOMPLISHED."]);
        setDeployed(true);
    }, 1500);
  };

  return (
    <div className="bg-bg-dark font-display text-white overflow-x-hidden min-h-screen flex flex-col">
      <div className="fixed inset-0 pointer-events-none z-50 bg-scanline bg-[length:100%_4px] opacity-15"></div>
      
      <nav className="sticky top-0 z-40 w-full border-b border-[#20474b]/30 bg-bg-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="size-8 text-primary animate-pulse">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </div>
              <h2 className="text-white text-lg font-bold tracking-tight uppercase">Dombivli Tech Summit <span className="text-primary">2026</span></h2>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigate('/')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Home</button>
              <button onClick={() => navigate('/events')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Events</button>
              <button onClick={() => navigate('/coding-wars')} className="text-danger glow-text-red text-sm font-bold transition-colors border-b-2 border-danger">Coding Wars</button>
              <button onClick={() => navigate('/leaderboard')} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Leaderboard</button>
              <button onClick={() => navigate('/login')} className="flex items-center justify-center overflow-hidden rounded bg-surface-dark border border-danger text-danger hover:bg-danger hover:text-white transition-all duration-300 h-9 px-4 text-sm font-bold tracking-wider group">
                <span className="truncate mr-2">SECURE LOGIN</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">login</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col relative z-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.05] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2 text-danger font-mono text-sm tracking-widest mb-1">
                <span className="material-symbols-outlined text-base animate-pulse">warning</span>
                <span>RED ALERT: LEVEL 5 PROTOCOL ACTIVE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">
                Protocol: <span className="text-transparent bg-clip-text bg-gradient-to-r from-danger via-red-500 to-orange-500 glow-text-red">Elimination</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-light mt-2 max-w-xl">
                Survive the syntax. Debug the danger. Win the war. This is not just code—it's survival.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <div className="flex flex-col bg-surface-dark border border-white/10 rounded-lg p-4 min-w-[180px]">
                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">Combat Starts In</span>
                <div className="flex gap-2 font-mono text-2xl font-bold text-white">
                  <div>02<span className="text-xs text-gray-600 font-normal block">d</span></div>:
                  <div>14<span className="text-xs text-gray-600 font-normal block">h</span></div>:
                  <div>55<span className="text-xs text-gray-600 font-normal block">m</span></div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center bg-danger-dim/30 border border-danger rounded-lg p-4 min-w-[180px] shadow-[0_0_15px_rgba(255,0,60,0.2)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-danger font-mono uppercase tracking-wider">Slots Remaining</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-danger"></span>
                  </span>
                </div>
                <p className="text-3xl font-mono font-bold text-white tracking-tight animate-pulse-fast">05<span className="text-gray-500 text-xl">/30</span></p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="tech-border rounded-lg p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">description</span>
                  <h3 className="text-lg font-bold uppercase tracking-wider">Mission Brief</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A critical memory leak has been detected in Sector 7's cooling system. Your objective is to patch the leak before the core overheats. Beware: Erroneous submissions trigger a system lockout.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-primary">C++</span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-primary">Memory Mgmt</span>
                  <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-primary">Hard</span>
                </div>
              </div>

              <div className="bg-surface-dark border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm border-b border-white/5 pb-2">Engagement Rules</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-danger text-lg mt-0.5">block</span>
                    <div>
                      <strong className="text-gray-200 text-sm block">No AI Assistants</strong>
                      <span className="text-xs text-gray-500">Copilot/GPT usage results in immediate DQ.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-danger text-lg mt-0.5">timer_off</span>
                    <div>
                      <strong className="text-gray-200 text-sm block">Sudden Death</strong>
                      <span className="text-xs text-gray-500">Failed unit tests incur a 60s penalty freeze.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">visibility</span>
                    <div>
                      <strong className="text-gray-200 text-sm block">Open Spectating</strong>
                      <span className="text-xs text-gray-500">Your screen will be broadcast to the leaderboard.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <button onClick={() => navigate('/payment?event=coding-wars')} className="lg:hidden w-full py-4 bg-danger hover:bg-red-600 text-white font-bold uppercase tracking-widest text-lg rounded shadow-[0_0_20px_rgba(255,0,60,0.4)] transition-all">
                Initialize Registration
              </button>
            </div>

            <div className="lg:col-span-2 flex flex-col h-full min-h-[500px]">
              <div className="flex items-center justify-between px-4 py-2 bg-[#1a1d21] border-t border-x border-white/10 rounded-t-lg">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-xs font-mono text-gray-400">~/mission_critical/core_patch.cpp</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-mono text-green-500 uppercase">Live Connection</span>
                </div>
              </div>

              <div className="relative flex-grow bg-code-bg border-x border-white/10 p-0 font-mono text-sm overflow-hidden group">
                <div className="flex h-full">
                  <div className="hidden sm:flex flex-col items-end px-3 py-4 bg-[#111] text-gray-600 border-r border-white/5 select-none text-right min-w-[3rem]">
                    {Array.from({length: 15}, (_, i) => <span key={i}>{i+1}</span>)}
                  </div>
                  <div className="p-4 w-full text-gray-300 overflow-y-auto">
                    <pre><code>
<span className="text-purple-400">#include</span> <span className="text-green-400">&lt;iostream&gt;</span><br/>
<span className="text-purple-400">#include</span> <span className="text-green-400">&lt;memory&gt;</span><br/><br/>
<span className="text-blue-400">using</span> <span className="text-blue-400">namespace</span> std;<br/><br/>
<span className="text-gray-500">// TODO: Fix the potential leak in the processing loop</span><br/>
<span className="text-blue-400">void</span> <span className="text-yellow-300">process_sector_data</span>(<span className="text-blue-400">int</span> sector_id) {'{'}<br/>
    <span className="text-purple-400">if</span> (sector_id &lt; 0) <span className="text-purple-400">return</span>;<br/>
    <br/>
    <span className="text-blue-400">int</span>* buffer = <span className="text-purple-400">new</span> <span className="text-blue-400">int</span>[1024];<br/>
    <br/>
    <span className="text-purple-400">try</span> {'{'}<br/>
        <span className="text-gray-500">// Simulating critical operation</span><br/>
        <span className="text-purple-400">if</span> (rand() % 2 == 0) {'{'}<br/>
            <span className="text-purple-400">throw</span> runtime_error(<span className="text-green-400">"Core unstable"</span>);<br/>
        {'}'}<br/>
    {'}'} <span className="text-purple-400">catch</span> (...) {'{'}<br/>
        <span className="text-gray-500">// CRITICAL: Buffer not deleted on exception!</span><br/>
        <span className="text-purple-400">return</span>; <br/>
    {'}'}<br/>
    <br/>
    <span className="text-purple-400">delete</span>[] buffer;<br/>
{'}'}<br/><br/>
<span className="text-blue-400">int</span> <span className="text-yellow-300">main</span>() {'{'}<br/>
    cout &lt;&lt; <span className="text-green-400">"Initiating Sector 7 Patch..."</span> &lt;&lt; endl;<br/>
    process_sector_data(7);<br/>
    <span className="text-purple-400">return</span> 0;<br/>
{'}'}
                    </code></pre>
                    <div className="w-2 h-4 bg-primary inline-block animate-pulse mt-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 max-w-xs bg-black/90 border border-danger text-danger p-4 rounded backdrop-blur-sm hidden group-hover:block transition-all animate-pulse shadow-[0_0_15px_rgba(255,0,60,0.6)]">
                    <div className="flex items-center gap-2 mb-2 font-bold uppercase text-xs tracking-wider">
                        <span className="material-symbols-outlined text-lg">error</span>
                        System Warning
                    </div>
                    <p className="text-xs text-gray-300">Mock Interface: Submissions will trigger the Penalty Freeze simulation.</p>
                </div>
              </div>

              <div className="h-32 bg-[#0a0a0c] border border-white/10 p-3 font-mono text-xs text-gray-400 overflow-y-auto">
                {terminalOutput.map((line, i) => (
                    <p key={i} className={`mb-1 ${line.includes("WARNING") ? "text-yellow-500" : line.includes("ACCOMPLISHED") ? "text-green-500 font-bold" : "text-gray-400"}`}>
                        {line}
                    </p>
                ))}
                <div ref={terminalEndRef}></div>
              </div>

              <div className="bg-[#1a1d21] border-b border-x border-white/10 p-4 flex justify-between items-center rounded-b-lg">
                <div className="text-xs text-gray-500 font-mono hidden sm:block">
                    Ln 22, Col 12  &nbsp;|&nbsp;  UTF-8  &nbsp;|&nbsp;  4 spaces
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase rounded border border-white/10 transition-colors">
                        Dry Run
                    </button>
                    <button 
                        onClick={handleDeploy}
                        className={`flex-1 sm:flex-none px-6 py-2 ${deployed ? 'bg-green-600' : 'bg-danger hover:bg-red-600'} text-white text-xs font-bold uppercase rounded shadow-[0_0_15px_rgba(255,0,60,0.4)] hover:shadow-[0_0_25px_rgba(255,0,60,0.6)] transition-all flex items-center justify-center gap-2 group`}>
                        <span>{deployed ? 'Deployed' : 'Deploy Patch'}</span>
                        <span className="material-symbols-outlined text-sm group-hover:animate-ping">{deployed ? 'check' : 'send'}</span>
                    </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Ready to break the system?</h2>
            <button 
                onClick={() => navigate('/payment?event=coding-wars')}
                className="w-full max-w-md py-4 bg-primary text-bg-dark font-black uppercase tracking-widest text-xl rounded hover:bg-cyan-300 hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,234,255,0.3)] flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">swords</span>
                Enter the Arena
            </button>
            <p className="mt-4 text-sm text-gray-500 font-mono">
                By registering, you accept the <a className="text-primary hover:underline" href="#">Terms of Engagement</a>.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-[#020202] border-t border-white/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-700">terminal</span>
                <span>DOMBIVLI TECH SUMMIT 2026 // SYSTEM SECURE</span>
            </div>
            <div className="flex gap-6">
                <a className="hover:text-primary transition-colors" href="#">PRIVACY</a>
                <a className="hover:text-primary transition-colors" href="#">RULES</a>
                <a className="hover:text-primary transition-colors" href="#">CONTACT</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default CodingWarsPage;