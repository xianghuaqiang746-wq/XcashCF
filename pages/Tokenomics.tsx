import React from 'react';
import { PieChart, DollarSign, RefreshCcw, Wallet, TrendingUp, ShieldCheck } from 'lucide-react';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Community', value: 80, color: '#135bec' },
  { name: 'Team & Dev', value: 20, color: '#3b82f6' },
];

const Tokenomics: React.FC = () => {
  return (
    <div className="px-4 lg:px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col max-w-[1200px] flex-1">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 pt-10">
          <h1 className="text-white tracking-[0.1em] text-4xl lg:text-6xl font-bold leading-tight px-4 pb-3 uppercase">
            XCASH 代幣經濟學
          </h1>
          <p className="text-white/60 text-lg max-w-2xl font-normal leading-relaxed px-4">
            驅動下一代世界模型隱私保護與全球數據分析。XCASH 採用完全去中心化模型，所有權益回饋社區，構建公平且可持續的價值生態。
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-12">
          
          {/* Distribution Chart */}
          <div className="flex flex-col gap-6 rounded-xl bg-background-dark/50 border border-primary/30 shadow-[0_0_15px_rgba(19,91,236,0.2)] p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-xl font-bold flex items-center gap-2">
                <PieChart className="text-primary" />
                代幣持有分配
              </h3>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-center">
                100% 社區化
              </span>
            </div>
            
            <div className="flex flex-col items-center justify-center py-6 relative">
              <div className="relative w-64 h-64 flex items-center justify-center">
                 <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={data}
                        innerRadius={80}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0a0d14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                    </RePieChart>
                 </ResponsiveContainer>
                 {/* Center Text */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-tighter">總量固定</p>
                    <p className="text-white text-3xl font-bold">1B</p>
                    <p className="text-primary text-[10px] font-bold uppercase">XCASH</p>
                 </div>
              </div>
              
              <div className="mt-8 w-full text-center p-4 border border-primary/20 bg-primary/5 rounded-lg">
                <p className="text-white font-bold text-lg mb-1">100% 由社區持有</p>
                <p className="text-white/60 text-sm">無私募、無預留、無團隊分配。所有代幣均通過社區機制產出與循環。</p>
              </div>
            </div>
          </div>

          {/* Revenue Model & Stats */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-background-dark/50 border border-primary/30 shadow-[0_0_15px_rgba(19,91,236,0.2)] p-8 flex-1">
               <h3 className="text-white text-xl font-bold flex items-center gap-2 mb-6">
                  <DollarSign className="text-primary" />
                  收益分配模型 (20/80)
               </h3>
               
               <div className="flex flex-col gap-4 md:flex-row items-center mb-8">
                  {/* Small Pie Visual */}
                  <div className="relative size-32">
                     <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                        <circle cx="50" cy="50" r="40" stroke="#135bec" strokeWidth="12" fill="none" strokeDasharray="200 251" />
                        <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="12" fill="none" strokeDasharray="51 251" strokeDashoffset="-200" />
                     </svg>
                  </div>
                  
                  <div className="flex flex-col gap-4 flex-1">
                     <div className="flex items-start gap-3">
                        <div className="size-3 rounded-full bg-[#135bec] mt-1"></div>
                        <div>
                           <p className="text-white font-bold text-sm">80% 分配給 XCASH 持有者</p>
                           <p className="text-white/50 text-xs">直接回饋社區貢獻者</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <div className="size-3 rounded-full bg-[#3b82f6] mt-1"></div>
                        <div>
                           <p className="text-white font-bold text-sm">20% 團隊建設維護</p>
                           <p className="text-white/50 text-xs">用於核心開發與運營支出</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="text-primary text-xs font-bold uppercase mb-2 flex items-center gap-2">
                     <TrendingUp size={14} />
                     節點託管業務收益
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                     XCASH 提供專業節點託管服務，託管節點收入的 <span className="text-primary font-bold">30%</span> 將直接分配給 XCASH 持有者。
                  </p>
               </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <StatBox title="流通總量" value="1,000,000,000" sub="100% 流通 / 全社區" color="text-[#0bda5e]" />
               <StatBox title="當前價格" value="$0.00002" sub="+14.2% (24h)" color="text-[#0bda5e]" isPrice />
            </div>
          </div>
        </div>

        {/* Feature Matrix */}
        <div className="px-4 mb-20">
          <div className="border-t border-white/10 pt-12">
             <h2 className="text-center text-white/80 text-sm font-bold tracking-[0.3em] uppercase mb-10">
                代幣功能矩陣 & 回饋體系
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <FeatureBox icon={<ShieldCheck size={32} />} title="隱私挖礦" desc="回購資金跨鏈投入隱私挖礦，質押 XCASH 以支持零知識證明並獲取挖礦獎勵。" />
                <FeatureBox icon={<Wallet size={32} />} title="持有者紅利" desc="系統營收之 80% 通過多樣化機制分配給 XCASH 持有者，與社區共用增長。" />
                <FeatureBox icon={<TrendingUp size={32} />} title="節點託管收益" desc="託管節點收入的 30% 分配給 XCASH 持有者，進一步豐富持有者的被動收益來源。" />
                <FeatureBox icon={<RefreshCcw size={32} />} title="回購增強" desc="所有交易手續費自動執行回購，將外部價值轉化為 XCASH 生態內的流通動力。" />
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const StatBox = ({ title, value, sub, color, isPrice }: any) => (
  <div className={`flex flex-col gap-2 rounded-xl bg-background-dark/50 p-6 border border-primary/30 shadow-[0_0_10px_rgba(19,91,236,0.1)]`}>
    <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{title}</p>
    <p className="text-white text-2xl font-bold">{value}</p>
    <div className={`flex items-center gap-1 ${color}`}>
       {isPrice && <TrendingUp size={14} />}
       <span className="text-sm font-medium">{sub}</span>
    </div>
  </div>
);

const FeatureBox = ({ icon, title, desc }: any) => (
  <div className="p-6 rounded-lg bg-background-dark border border-white/5 hover:border-primary/50 transition-all flex flex-col items-center text-center gap-4 hover:-translate-y-1">
     <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
     </div>
     <h4 className="font-bold text-white uppercase tracking-widest">{title}</h4>
     <p className="text-sm text-white/50 leading-relaxed">
        {desc}
     </p>
  </div>
);

export default Tokenomics;
