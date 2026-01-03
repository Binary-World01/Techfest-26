import React from 'react';
import { useNavigate } from 'react-router-dom';

const BattlePassPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-dark text-white font-display flex flex-col relative overflow-x-hidden selection:bg-neon-red selection:text-white">
      <div className="fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-bg-dark/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <span className="material-symbols-outlined text-neon-red text-2xl">military_tech</span>
              <h1 className="text-lg font-bold tracking-widest uppercase">Season 1 <span className="text-neon-red">Battle Pass</span></h1>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-gray-400">ENDS IN 14 DAYS</span>
                <button onClick={() => navigate('/login')} className="bg-neon-red text-black px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded hover:bg-white transition-colors">Login</button>
            </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white uppercase mb-4 tracking-tighter">Upgrade Your <span className="text-neon-red">Experience</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Unlock exclusive perks, merchandise, and priority access across all event protocols.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Free Tier */}
            <div className="bg-surface border border-white/10 p-8 rounded-lg relative opacity-70 hover:opacity-100 transition-all">
                <h3 className="text-xl font-bold text-gray-300 uppercase mb-2">Standard</h3>
                <div className="text-3xl font-bold text-white mb-6">Free</div>
                <ul className="space-y-4 text-sm text-gray-400 mb-8">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Entry to Expo</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Participation in 1 Event</li>
                    <li className="flex items-center gap-2 text-gray-600"><span className="material-symbols-outlined text-lg">close</span> No Swag Pack</li>
                    <li className="flex items-center gap-2 text-gray-600"><span className="material-symbols-outlined text-lg">close</span> Standard Support</li>
                </ul>
                <button className="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded">Current</button>
            </div>

            {/* Premium Tier */}
            <div className="bg-black border border-neon-red p-8 rounded-lg relative transform md:scale-110 shadow-[0_0_40px_rgba(255,0,60,0.2)] z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-red text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Best Value</div>
                <h3 className="text-2xl font-bold text-neon-red uppercase mb-2">Elite Operator</h3>
                <div className="text-5xl font-black text-white mb-6">₹499</div>
                <ul className="space-y-4 text-sm text-gray-300 mb-8 font-mono">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-red text-lg">check</span> All Access Pass</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-red text-lg">check</span> Unlimited Event Reg</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-red text-lg">check</span> Exclusive T-Shirt</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-red text-lg">check</span> Priority Networking</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-red text-lg">check</span> 2x Leaderboard XP</li>
                </ul>
                <button className="w-full py-4 bg-neon-red text-black font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(255,0,60,0.5)] transition-all rounded shadow-neon-red">Unlock Pass</button>
            </div>

            {/* VIP Tier */}
            <div className="bg-surface border border-white/10 p-8 rounded-lg relative hover:border-neon-purple transition-all group">
                <h3 className="text-xl font-bold text-neon-purple uppercase mb-2">Cyberlord</h3>
                <div className="text-3xl font-bold text-white mb-6">₹999</div>
                <ul className="space-y-4 text-sm text-gray-400 mb-8">
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-purple text-lg">check</span> Everything in Elite</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-purple text-lg">check</span> VIP Lounge Access</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-purple text-lg">check</span> Meet & Greet Speakers</li>
                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-neon-purple text-lg">check</span> Hoodie + Goodies</li>
                </ul>
                <button className="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-wider group-hover:border-neon-purple group-hover:text-neon-purple hover:bg-neon-purple/10 transition-colors rounded">Purchase</button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BattlePassPage;