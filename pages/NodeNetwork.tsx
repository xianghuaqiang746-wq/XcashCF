import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Minus, Share2, ArrowRight, UserPlus, Cpu, Database, Server, Shield } from 'lucide-react';
import { NodeApplicant } from '../types';

const applicants: NodeApplicant[] = [
  { id: 'xc_req_9281...f2e1', region: 'Hong Kong, HK', time: '2026-01-05 14:30', status: 'pending' },
  { id: 'xc_req_1104...7cbb', region: 'Singapore, SG', time: '2026-01-05 12:15', status: 'pending' },
  { id: 'xc_req_4492...01aa', region: 'London, UK', time: '2026-01-05 11:45', status: 'pending' },
  { id: 'xc_req_8821...3d9f', region: 'Tokyo, JP', time: '2026-01-05 09:20', status: 'pending' },
];

const NodeNetwork: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      {/* Title Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Share2 size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">實時網絡監控</span>
          </div>
          <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded border border-primary/20 font-bold uppercase tracking-wider">
            基於門羅算法 (Based on Monero Algorithm)
          </span>
        </div>
        <h2 className="text-5xl font-black tracking-tight text-white max-w-3xl">全球節點基礎設施</h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          基於 2026 世界模型的隱私與數據分析網絡。驅動全球神經網絡計算未來的去中心化節點基礎設施。
        </p>
      </div>

      {/* Map Section */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative glass-card rounded-xl overflow-hidden min-h-[550px] flex flex-col border border-white/10">
          
          {/* Overlay UI: Top Left */}
          <div className="absolute top-6 left-6 z-10 space-y-4">
            <div className="glass-card p-4 rounded-lg flex items-center gap-4 border border-primary/20 bg-black/60 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="size-2 bg-primary rounded-full animate-ping"></span>
                <span className="text-xs font-medium text-white tracking-wide">統計中... 活動節點</span>
              </div>
              <div className="h-4 w-px bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <span className="size-2 bg-cyan-400 rounded-full"></span>
                <span className="text-xs font-medium text-white">42 核心區域</span>
              </div>
            </div>
          </div>

          {/* Overlay UI: Top Right Controls */}
          <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
            <button className="glass-panel size-10 flex items-center justify-center rounded-lg hover:bg-primary hover:text-white transition-colors text-white/70">
              <Plus size={20} />
            </button>
            <button className="glass-panel size-10 flex items-center justify-center rounded-lg hover:bg-primary hover:text-white transition-colors text-white/70">
              <Minus size={20} />
            </button>
            <button className="glass-panel size-10 flex items-center justify-center rounded-lg hover:bg-primary hover:text-white transition-colors mt-2 text-white/70">
              <Share2 size={20} />
            </button>
          </div>

          {/* Map Image & Effects */}
          <div className="flex-1 w-full bg-[#0a0e17] relative flex items-center justify-center overflow-hidden">
             {/* Base Map Image */}
             <img 
               className="w-full h-full object-cover opacity-30 grayscale-[0.5] scale-105" 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT0-OeyUTJQt6Vqv0IHCW9KdFmqGiDQwzcvBAdVS_oebSXzLJ8_oeUnOTT7IqZLfyEodTgIjbGxA5750tdH0xmkEWFAolmdQFxtP5m_9iQ62-rOXwnFirW7f8WyDDw13iDLuRyqwZjlzWZkfcpS9T2MttJcXSaxF45txFTuXE0Umvn5ALktKuW10teI4ObbQOxJga40gFMB3bTBQkaY_uusGuXrfHuxWTjQZRykH4cDCdHcsKypvt8wE0Dt-YPZAn2VtXV9TRpBlU" 
               alt="Global Network Map"
             />
             
             {/* Interactive Points (Simulated) */}
             <div className="absolute inset-0 pointer-events-none">
                {/* Point 1 */}
                <div className="absolute top-[25%] left-[20%] w-32 h-32">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 bg-primary rounded-full blur-[2px] animate-pulse"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 border border-primary/30 rounded-full animate-ping"></div>
                </div>
                {/* Point 2 */}
                <div className="absolute top-[22%] left-[48%] w-24 h-24">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 bg-cyan-400 rounded-full blur-[2px]"></div>
                </div>
                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full">
                  <path d="M 200 150 Q 400 100 580 140" stroke="rgba(19, 91, 236, 0.3)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                  <path d="M 600 150 Q 750 200 880 180" stroke="rgba(19, 91, 236, 0.3)" strokeWidth="1" fill="none" strokeDasharray="4,6" />
                </svg>
             </div>
             
             {/* Radial Overlay for Depth */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0d14_95%)] pointer-events-none"></div>

             {/* Bottom Search Bar */}
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6">
                <div className="glass-panel p-1.5 rounded-xl flex items-center shadow-2xl border border-primary/30 bg-black/40">
                   <input 
                      type="text" 
                      placeholder="搜尋區域神經集群或節點..." 
                      className="bg-transparent border-none focus:ring-0 text-white flex-1 px-4 py-2 text-sm placeholder-slate-400"
                   />
                   <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/80 transition-colors">
                      <Search size={18} />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NetworkStatCard 
          icon={<Share2 size={40} className="text-slate-500" />}
          label="總節點數"
          value="統計中..."
          subValue="同步中"
          progressColor="bg-primary"
        />
        <NetworkStatCard 
          icon={<Server size={40} className="text-slate-500" />}
          label="獎勵總量"
          value="100M XCK"
          subText="當前網絡累積獎勵池"
        />
        <NetworkStatCard 
          icon={<Database size={40} className="text-slate-500" />}
          label="網絡健康度"
          value="99.9%"
          subValue="穩定"
          subValueColor="text-primary"
          isHealthBar
        />
      </div>

      {/* How to Run Node */}
      <div className="space-y-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-white">如何運行節點</h2>
              <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded border border-white/10 font-medium">基於門羅算法</span>
            </div>
            <p className="text-slate-400">
              加入全球神經網絡，通過保護 2026 世界模型數據安全賺取 XCK 獎勵。
            </p>
          </div>
          <button 
            onClick={() => navigate('/nodes/apply')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group whitespace-nowrap shadow-lg shadow-primary/20"
          >
            成為驗證者
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <HardwareCard icon={<Cpu />} title="CPU 算力" desc="建議 8 核處理器 @ 3.5GHz 或更高，用於處理海量數據分析。" />
           <HardwareCard icon={<Server />} title="32GB 記憶體" desc="推薦使用 ECC 記憶體以維持世界模型狀態的數據完整性。" />
           <HardwareCard icon={<Database />} title="1TB 硬碟" desc="需要高速存儲以支持快速區塊索引和鏈上數據存儲。" />
           <HardwareCard icon={<Shield />} title="隱私協議" desc="集成門羅技術棧，支持零知識證明與隱身地址，確保驗證過程匿名。" />
        </div>
      </div>

      {/* Applicants Table */}
      <div className="glass-card rounded-xl overflow-hidden border border-primary/10">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-800/20">
          <h3 className="font-bold text-white flex items-center gap-2">
            <UserPlus size={20} className="text-primary" />
            新節點申請列表
          </h3>
          <span className="text-xs text-slate-500 font-mono">實時同步中...</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs text-slate-500 uppercase tracking-widest bg-slate-800/10">
                <th className="px-6 py-4">申請人 ID</th>
                <th className="px-6 py-4">區域</th>
                <th className="px-6 py-4">申請時間</th>
                <th className="px-6 py-4">狀態</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {applicants.map((app) => (
                <tr key={app.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-primary">{app.id}</td>
                  <td className="px-6 py-4 text-slate-300">{app.region}</td>
                  <td className="px-6 py-4 text-slate-400">{app.time}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-bold">審核中</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-center bg-slate-800/10">
          <button className="text-primary text-sm font-bold hover:underline">查看所有申請記錄</button>
        </div>
      </div>
    </div>
  );
};

// Sub-components for NodeNetwork
const NetworkStatCard = ({ icon, label, value, subValue, subText, progressColor, isHealthBar, subValueColor = "text-slate-500" }: any) => (
  <div className="glass-card p-8 rounded-xl flex flex-col gap-3 relative overflow-hidden group border-b-2 border-transparent hover:border-primary/30 transition-all">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      {icon}
    </div>
    <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">{label}</p>
    <div className="flex items-baseline gap-3">
      <span className="text-4xl font-black text-white whitespace-nowrap">{value}</span>
      {subValue && <span className={`${subValueColor} text-sm font-bold`}>{subValue}</span>}
    </div>
    {subText && <p className="text-slate-500 text-xs tracking-tight mt-4">{subText}</p>}
    {progressColor && (
      <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4">
        <div className={`${progressColor} h-full w-[45%] rounded-full animate-pulse shadow-[0_0_8px_rgba(19,91,236,0.6)]`}></div>
      </div>
    )}
    {isHealthBar && (
      <div className="flex gap-1 mt-4">
        {[1,2,3,4,5].map(i => <div key={i} className="h-8 flex-1 bg-primary/40 rounded-sm"></div>)}
        <div className="h-8 flex-1 bg-primary/10 rounded-sm"></div>
      </div>
    )}
  </div>
);

const HardwareCard = ({ icon, title, desc }: any) => (
  <div className="glass-card p-6 rounded-xl space-y-4 hover:bg-white/5 transition-colors">
    <div className="size-10 bg-primary/20 text-primary flex items-center justify-center rounded-lg">
      {icon}
    </div>
    <h3 className="font-bold text-white text-lg">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default NodeNetwork;
