import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center relative overflow-hidden font-display">
      <div className="fixed inset-0 pointer-events-none z-0 bg-cyber-grid bg-[length:40px_40px] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,255,0.1),transparent_70%)]"></div>
      <div className="fixed inset-0 pointer-events-none z-50 bg-scanline bg-[length:100%_4px] opacity-10"></div>

      <button onClick={() => navigate('/')} className="absolute top-8 left-8 text-neon-cyan hover:text-white flex items-center gap-2 z-50 uppercase tracking-widest text-xs font-bold transition-colors">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Return to Grid
      </button>

      <div className="w-full max-w-md relative z-10 p-1">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-red opacity-30 blur-xl"></div>
        <div className="relative bg-surface border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-neon-purple/10 blur-xl rounded-full"></div>

            <div className="flex flex-col items-center gap-6 mb-8">
                <div className="size-16 border border-neon-cyan/30 bg-neon-cyan/10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,234,255,0.2)]">
                    <span className="material-symbols-outlined text-3xl text-neon-cyan">lock_person</span>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white uppercase tracking-wider mb-1">System Access</h1>
                    <p className="text-xs text-gray-500 font-mono">DTS '26 SECURE GATEWAY</p>
                </div>
            </div>

            <div className="space-y-5">
                <div className="group/input">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within/input:text-neon-cyan transition-colors">Operator ID</label>
                    <div className="relative">
                        <input type="text" className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-700 outline-none focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,234,255,0.1)] transition-all font-mono text-sm" placeholder="USR-2026-X" />
                        <span className="absolute right-3 top-3 text-gray-600 material-symbols-outlined text-sm">badge</span>
                    </div>
                </div>
                
                <div className="group/input">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within/input:text-neon-purple transition-colors">Access Key</label>
                    <div className="relative">
                        <input type="password" className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-700 outline-none focus:border-neon-purple focus:shadow-[0_0_15px_rgba(191,0,255,0.1)] transition-all font-mono text-sm" placeholder="••••••••" />
                        <span className="absolute right-3 top-3 text-gray-600 material-symbols-outlined text-sm">key</span>
                    </div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                        <input type="checkbox" className="rounded bg-black border-white/20 text-neon-cyan focus:ring-0 w-3 h-3" />
                        Remember Node
                    </label>
                    <a href="#" className="hover:text-neon-red transition-colors">Lost Key?</a>
                </div>

                <button className="w-full bg-neon-cyan text-black font-black py-4 uppercase tracking-[0.2em] text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(0,234,255,0.5)] transition-all clip-slant-r mt-4 relative overflow-hidden group/btn">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Authenticate
                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">login</span>
                    </span>
                    <div className="absolute inset-0 bg-white/40 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>

                <div className="relative flex items-center gap-4 py-2">
                    <div className="flex-grow h-px bg-white/10"></div>
                    <span className="text-[10px] text-gray-600 uppercase font-mono">Or Connect Via</span>
                    <div className="flex-grow h-px bg-white/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-2 border border-white/10 hover:border-neon-purple hover:bg-neon-purple/10 text-white transition-all rounded">
                        <span className="material-symbols-outlined text-sm">wallet</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Wallet</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 border border-white/10 hover:border-white hover:bg-white/5 text-white transition-all rounded">
                        <span className="font-bold">G</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Google</span>
                    </button>
                </div>
            </div>
        </div>
        
        <p className="text-center text-[10px] text-gray-600 mt-6 font-mono uppercase tracking-widest">
            Unauthorized access is a federal offense under Protocol 7.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;