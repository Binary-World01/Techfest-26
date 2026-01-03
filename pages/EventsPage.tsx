import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 'aithon',
      name: 'AI-Thon',
      path: '/aithon',
      icon: 'psychology',
      color: 'text-neon-cyan',
      border: 'hover:border-neon-cyan',
      shadow: 'hover:shadow-neon',
      desc: 'Build the next generation of generative AI models.',
      date: 'Mar 15',
      prize: '₹100k'
    },
    {
      id: 'coding',
      name: 'Coding Wars',
      path: '/coding-wars',
      icon: 'terminal',
      color: 'text-neon-red',
      border: 'hover:border-neon-red',
      shadow: 'hover:shadow-neon-red',
      desc: 'Competitive programming in a high-stakes arena.',
      date: 'Mar 16',
      prize: '₹75k'
    },
    {
      id: 'esports',
      name: 'Tapfire Esports',
      path: '/esports',
      icon: 'sports_esports',
      color: 'text-tapfire-purple',
      border: 'hover:border-tapfire-purple',
      shadow: 'hover:shadow-neon-purple',
      desc: '5v5 Valorant tournament. Dominate the lobby.',
      date: 'Mar 14',
      prize: '₹50k'
    },
    {
      id: 'research',
      name: 'Research League',
      path: '/research',
      icon: 'science',
      color: 'text-research-green',
      border: 'hover:border-research-green',
      shadow: 'hover:shadow-[0_0_20px_rgba(6,249,27,0.4)]',
      desc: 'Present groundbreaking papers to industry experts.',
      date: 'Mar 17',
      prize: '₹30k'
    },
    {
      id: 'quiz',
      name: 'Tech Quiz',
      path: '/quiz',
      icon: 'quiz',
      color: 'text-quiz-yellow',
      border: 'hover:border-quiz-yellow',
      shadow: 'hover:shadow-[0_0_20px_rgba(249,249,6,0.4)]',
      desc: 'Test your knowledge across all tech domains.',
      date: 'Mar 15',
      prize: '₹10k'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-white font-display flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern bg-[length:40px_40px] opacity-10"></div>
      
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-bg-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <span className="material-symbols-outlined text-neon-cyan text-3xl">terminal</span>
              <h1 className="text-xl font-bold tracking-widest uppercase">DTS <span className="text-neon-cyan">Events</span></h1>
            </div>
            <button onClick={() => navigate('/login')} className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Login</button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 border border-neon-cyan/30 bg-neon-cyan/5 rounded-full text-neon-cyan text-xs font-mono uppercase tracking-widest mb-4">Protocol Selection</div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Battle</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">Initialize participation in one of the following domains. Victory requires precision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {events.map((evt) => (
                <div key={evt.id} onClick={() => navigate(evt.path)} className={`group relative bg-surface border border-white/10 p-8 cursor-pointer transition-all duration-300 ${evt.border} ${evt.shadow} overflow-hidden`}>
                    <div className={`absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity`}>
                        <span className="material-symbols-outlined text-9xl text-white">{evt.icon}</span>
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full gap-6">
                        <div className="flex justify-between items-start">
                            <div className={`p-3 rounded bg-white/5 border border-white/10 ${evt.color}`}>
                                <span className="material-symbols-outlined text-3xl">{evt.icon}</span>
                            </div>
                            <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">{evt.date}</span>
                        </div>
                        
                        <div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-white transition-colors">{evt.name}</h3>
                            <p className="text-sm text-gray-400 font-mono leading-relaxed">{evt.desc}</p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Prize Pool</span>
                                <span className={`text-xl font-bold ${evt.color}`}>{evt.prize}</span>
                            </div>
                            <span className="material-symbols-outlined text-gray-500 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default EventsPage;