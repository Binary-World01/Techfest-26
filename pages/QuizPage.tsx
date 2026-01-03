import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f8f5] dark:bg-bg-dark text-black dark:text-white overflow-x-hidden selection:bg-quiz-yellow selection:text-black font-grotesk min-h-screen flex flex-col group/design-root">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern bg-[length:40px_40px] opacity-20"></div>
      
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-bg-dark/90 backdrop-blur-md">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1280px]">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
             <div className="size-8 text-quiz-yellow">
               <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L29.2 17.6L44 19.4L33 29.6L35.8 44L24 37.6L12.2 44L15 29.6L4 19.4L18.8 17.6L24 4Z" fill="currentColor"></path>
               </svg>
             </div>
             <h2 className="text-white text-lg font-bold tracking-tight hidden sm:block">Dombivli Tech Summit 2026</h2>
             <h2 className="text-white text-lg font-bold tracking-tight sm:hidden">DTS 2026</h2>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <nav className="hidden md:flex gap-6">
                <button onClick={() => navigate('/')} className="text-sm font-medium hover:text-quiz-yellow transition-colors">Home</button>
                <button onClick={() => navigate('/events')} className="text-sm font-medium hover:text-quiz-yellow transition-colors">Events</button>
                <button onClick={() => navigate('/quiz')} className="text-sm font-medium text-quiz-yellow">Quiz</button>
            </nav>
            <button onClick={() => navigate('/payment?event=quiz')} className="relative overflow-hidden rounded-lg bg-quiz-yellow h-9 px-5 text-bg-dark text-sm font-bold tracking-wide hover:bg-white transition-colors">
                REGISTER
            </button>
          </div>
        </div>
        <div className="h-1 w-full bg-[repeating-linear-gradient(45deg,#f9f906_0,#f9f906_10px,#000_10px,#000_20px)] opacity-50"></div>
      </header>

      <main className="flex-1 flex flex-col items-center w-full z-10">
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-quiz-yellow/30 bg-quiz-yellow/10 w-fit mx-auto lg:mx-0">
                        <span className="material-symbols-outlined text-quiz-yellow text-[18px]">terminal</span>
                        <span className="text-xs font-bold text-quiz-yellow tracking-wider uppercase">Esports Style Quiz</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white">
                        DEBUG <br className="hidden lg:block"/>
                        <span className="text-quiz-yellow">& DEPLOY</span>
                    </h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light">
                        Test your stack knowledge before the timer hits zero. A high-stakes tech quiz for the sharpest minds.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <button onClick={() => navigate('/payment?event=quiz')} className="h-12 px-8 rounded-lg bg-quiz-yellow text-black font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,249,6,0.4)]">
                            REGISTER NOW
                        </button>
                        <button className="h-12 px-8 rounded-lg border border-white/20 hover:border-quiz-yellow text-white font-medium hover:text-quiz-yellow transition-colors flex items-center justify-center gap-2 group">
                            <span>Learn Rules</span>
                            <span className="material-symbols-outlined text-white/50 group-hover:text-quiz-yellow transition-colors">arrow_forward</span>
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 w-full max-w-[500px]">
                    <div className="relative bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-quiz-yellow to-transparent opacity-50"></div>
                         <div className="absolute -top-3 -right-3 size-12 border-t-4 border-r-4 border-quiz-yellow rounded-tr-xl"></div>
                         <div className="absolute -bottom-3 -left-3 size-12 border-b-4 border-l-4 border-quiz-yellow rounded-bl-xl"></div>
                         
                         <div className="flex flex-col items-center gap-6">
                            <h3 className="text-neutral-500 uppercase tracking-[0.2em] text-sm font-bold">Time Remaining</h3>
                            <div className="flex gap-2 sm:gap-4 w-full justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-[#0a0a0a] border border-white/10 rounded-lg w-16 sm:w-20 h-20 sm:h-24 flex items-center justify-center shadow-inner">
                                        <span className="text-4xl sm:text-5xl font-mono font-bold text-white">00</span>
                                    </div>
                                    <span className="text-xs text-neutral-500 uppercase">Hours</span>
                                </div>
                                <div className="flex items-center h-20 sm:h-24 pb-4"><span className="text-2xl text-quiz-yellow animate-pulse">:</span></div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-[#0a0a0a] border border-quiz-yellow/30 rounded-lg w-16 sm:w-20 h-20 sm:h-24 flex items-center justify-center shadow-[inset_0_0_20px_rgba(249,249,6,0.1)] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-quiz-yellow/5 animate-pulse"></div>
                                        <span className="text-4xl sm:text-5xl font-mono font-bold text-quiz-yellow">05</span>
                                    </div>
                                    <span className="text-xs text-quiz-yellow uppercase font-bold">Minutes</span>
                                </div>
                                <div className="flex items-center h-20 sm:h-24 pb-4"><span className="text-2xl text-quiz-yellow animate-pulse">:</span></div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-[#0a0a0a] border border-quiz-yellow/30 rounded-lg w-16 sm:w-20 h-20 sm:h-24 flex items-center justify-center shadow-[inset_0_0_20px_rgba(249,249,6,0.1)] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-quiz-yellow/5 animate-pulse"></div>
                                        <span className="text-4xl sm:text-5xl font-mono font-bold text-quiz-yellow">00</span>
                                    </div>
                                    <span className="text-xs text-quiz-yellow uppercase font-bold">Seconds</span>
                                </div>
                            </div>
                            <div className="w-full h-px bg-white/10 my-2"></div>
                            <div className="flex items-center gap-3 text-sm text-neutral-300">
                                <span className="material-symbols-outlined text-quiz-yellow text-[20px]">error</span>
                                <span>Entries close automatically when timer hits zero.</span>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full border-y border-white/10 bg-[#121212]/50">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">TOURNAMENT ROUNDS</h2>
                        <p className="text-neutral-400">Two stages of elimination. Only the fastest coders survive to the final showdown.</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-2 w-8 bg-quiz-yellow rounded-full"></div>
                        <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                        <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] hover:border-quiz-yellow/50 transition-colors p-8">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-white">local_fire_department</span>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                            <div>
                                <div className="inline-flex items-center justify-center size-12 rounded-lg bg-white/5 border border-white/10 text-quiz-yellow mb-6 group-hover:bg-quiz-yellow group-hover:text-black transition-colors">
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Round 1: Rapid Fire</h3>
                                <p className="text-neutral-400">Speed is key. 20 Questions. 5 Minutes. Only the fastest survive.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">20 Qs</span>
                                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">5 Mins</span>
                                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Top 50% Qualify</span>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#121212] hover:border-quiz-yellow/50 transition-colors p-8">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-white">bolt</span>
                        </div>
                         <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                            <div>
                                <div className="inline-flex items-center justify-center size-12 rounded-lg bg-white/5 border border-white/10 text-quiz-yellow mb-6 group-hover:bg-quiz-yellow group-hover:text-black transition-colors">
                                    <span className="material-symbols-outlined">bolt</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Round 2: Buzzer Round</h3>
                                <p className="text-neutral-400">Head-to-head logical elimination. Buzz in first or get left behind. One wrong move and you're out.</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Live</span>
                                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Elimination</span>
                                <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Winner Takes All</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-24 relative">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-black text-white">READY TO DOMINATE?</h2>
                    <p className="text-lg text-neutral-400">Register your team now. Limited slots available for the first round.</p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-quiz-yellow">check_circle</span><span>Certificate of Participation</span></div>
                        <div className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-quiz-yellow">check_circle</span><span>Exciting Cash Prizes</span></div>
                        <div className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-quiz-yellow">check_circle</span><span>Access to Networking</span></div>
                        <div className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-quiz-yellow">check_circle</span><span>Free Swag for Finalists</span></div>
                    </div>
                </div>
                <div className="md:col-span-5 w-full">
                    <div className="relative rounded-2xl bg-[#0a0a0a] border border-quiz-yellow p-1">
                        <div className="absolute -inset-1 bg-quiz-yellow blur opacity-20"></div>
                        <div className="relative bg-[#121212] rounded-xl p-8 flex flex-col items-center text-center h-full">
                            <div className="absolute top-0 right-8 -translate-y-1/2 bg-quiz-yellow text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Cyberpunk Special</div>
                            <h3 className="text-xl font-bold text-white mb-2">Solo / Duo Entry</h3>
                            <div className="flex items-baseline justify-center gap-1 my-6">
                                <span className="text-lg text-neutral-400 font-medium">₹</span>
                                <span className="text-6xl font-black text-white tracking-tighter">100</span>
                                <span className="text-neutral-500 font-medium">/ team</span>
                            </div>
                            <button onClick={() => navigate('/payment?event=quiz')} className="w-full py-4 rounded-lg bg-quiz-yellow hover:bg-white text-black font-bold tracking-wide transition-all transform hover:translate-y-[-2px] mb-4">REGISTER TEAM</button>
                            <p className="text-xs text-neutral-500 text-center">Secure payment via UPI / Card</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <footer className="w-full border-t border-white/10 bg-[#121212] py-8">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-neutral-500">© 2026 Dombivli Tech Summit. All rights reserved.</div>
            <div className="flex gap-6">
                <a className="text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
                <a className="text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
                <a className="text-neutral-500 hover:text-white transition-colors" href="#">Contact</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default QuizPage;