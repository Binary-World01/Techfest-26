import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeaderboardPage: React.FC = () => {
  const navigate = useNavigate();

  const leaders = [
    { rank: 1, team: 'Null Pointers', event: 'Coding Wars', score: 9850, status: 'Online' },
    { rank: 2, team: 'Frag Fraggers', event: 'Tapfire', score: 9400, status: 'In-Game' },
    { rank: 3, team: 'TensorFlow Titans', event: 'AI-Thon', score: 8900, status: 'Online' },
    { rank: 4, team: 'Syntax Error', event: 'Coding Wars', score: 8500, status: 'Offline' },
    { rank: 5, team: 'Quantum Leap', event: 'Research', score: 8200, status: 'Online' },
    { rank: 6, team: 'Script Kiddies', event: 'Tech Quiz', score: 7800, status: 'Offline' },
    { rank: 7, team: 'Binary Beasts', event: 'Coding Wars', score: 7500, status: 'Online' },
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-white font-mono flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(191,0,255,0.1),transparent_50%)]"></div>
      
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-bg-dark/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <span className="material-symbols-outlined text-neon-purple text-2xl">leaderboard</span>
              <h1 className="text-lg font-bold tracking-widest uppercase">Global <span className="text-neon-purple">Rankings</span></h1>
            </div>
            <button onClick={() => navigate('/events')} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors">View Events</button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
                <h2 className="text-4xl font-black text-white uppercase mb-2">Hall of Fame</h2>
                <p className="text-gray-500 text-sm">Live data feed from all active sectors.</p>
            </div>
            <div className="flex gap-2">
                {['Global', 'Coding', 'Esports', 'Research'].map(tab => (
                    <button key={tab} className={`px-4 py-2 text-xs font-bold uppercase border ${tab === 'Global' ? 'bg-neon-purple text-black border-neon-purple' : 'bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white'} transition-all rounded-sm`}>
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        <div className="bg-surface border border-white/10 rounded-lg overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-widest border-b border-white/10">
                            <th className="p-4 font-bold">Rank</th>
                            <th className="p-4 font-bold">Unit Designation</th>
                            <th className="p-4 font-bold">Protocol</th>
                            <th className="p-4 font-bold text-right">Score</th>
                            <th className="p-4 font-bold text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {leaders.map((team) => (
                            <tr key={team.rank} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                <td className="p-4 font-bold text-gray-500 group-hover:text-white">
                                    {team.rank === 1 && <span className="text-yellow-400 text-lg mr-2">👑</span>}
                                    #{team.rank.toString().padStart(2, '0')}
                                </td>
                                <td className="p-4 font-bold text-white group-hover:text-neon-cyan transition-colors">{team.team}</td>
                                <td className="p-4 text-gray-400">{team.event}</td>
                                <td className="p-4 text-right font-mono text-neon-purple">{team.score.toLocaleString()}</td>
                                <td className="p-4 text-center">
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase ${team.status === 'Online' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : team.status === 'In-Game' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' : 'bg-gray-800 text-gray-500 border border-gray-700'}`}>
                                        <span className={`w-1.5 h-1.5 rounded-full ${team.status === 'Online' ? 'bg-green-500 animate-pulse' : team.status === 'In-Game' ? 'bg-blue-500' : 'bg-gray-500'}`}></span>
                                        {team.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </main>
    </div>
  );
};

export default LeaderboardPage;