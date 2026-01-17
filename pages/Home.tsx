import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, Cpu, Globe2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] opacity-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 blur-[120px] rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          {/* Globe/Hologram Container */}
          <div className="mb-10 relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse blur-xl"></div>
            <div className="relative w-full h-full rounded-full border border-primary/30 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(19,91,236,0.3)] bg-black/40 backdrop-blur-sm overflow-hidden">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzp8LFoJsAbv3WfaphETcf01XMF7y1hAtBBrGiXqIjt49YXmS32LFdBs6p4KIZGdNNZvEBwDL3WXV_a2njzgO5drB1WHlOGgpcdRZi1Irv8rtXSdOILl4E3-v9-8CiJAr1rMVMLrXeojo1c639b2x-tcZ_ZjTZPI4cIM_j-6s9ImZkilI7LPDAa6z9RMnCZkwROd_LnSfxrTV0kELi0_kCvFv65Q6pVEgaVQbKV7k2mmW862dB7VTgpHIAZjR57OqJkKiJJY3oMnU" 
                 alt="Holographic Earth"
                 className="w-full h-full object-contain opacity-90 brightness-150 scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
            </div>
            {/* Orbiting Elements */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none">
              <div className="absolute -top-1 left-1/2 size-2 bg-accent-cyan rounded-full shadow-[0_0_15px_#00f2ff]"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight uppercase italic">
              XCASH: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan drop-shadow-[0_0_10px_rgba(0,242,255,0.3)]">全球首個基於世界模型的隱私層</span>
            </h1>
            <p className="text-[#92a4c9] text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              通過對去中心化神經網絡實現全球數據分析。為 AI 時代打造安全、隱私且具備超大規模擴展能力的底層設施。
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-10">
              <Link to="/nodes/apply" className="flex items-center justify-center rounded-lg h-14 px-12 bg-primary text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(19,91,236,0.4)] font-bold text-lg">
                啟動應用
              </Link>
              <Link to="/nodes" className="flex items-center justify-center rounded-lg h-14 px-12 border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 font-bold text-lg">
                探索網絡
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-y border-white/5 bg-background-dark/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="已處理全球數據" value="1.28" unit="PB" color="primary" icon={<Globe2 />} />
            <StatCard label="活躍隱私節點" value="統計中..." unit="" color="accent-cyan" icon={<Cpu />} />
            <StatCard label="合作伙伴數量" value="10" unit="" color="accent-purple" icon={<ShieldCheck />} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                核心技術
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                為全球數據主權<br/>
                <span className="text-primary italic">量身構建</span>
              </h2>
              <p className="text-[#92a4c9] text-lg leading-relaxed">
                XCASH 利用先進的零知識原語和去中心化神經網絡，在不犧牲個人隱私的前提下處理行星級規模的數據。
              </p>
            </div>
            
            <div className="space-y-4">
              <FeatureRow 
                icon={<ShieldCheck className="text-primary" size={24} />}
                title="超大規模隱私保護"
                desc="經過 ZKP 優化的層級，每秒可處理數千筆私密交易。"
                bgColor="bg-primary/20"
              />
              <FeatureRow 
                icon={<Cpu className="text-accent-cyan" size={24} />}
                title="神經共識"
                desc="通過分布在 1.4 萬多個節點上的去中心化 AI 驗證網絡健康與數據完整性。"
                bgColor="bg-accent-cyan/20"
              />
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
             <div className="relative glass-card aspect-square rounded-3xl p-4 border border-white/10 flex flex-col justify-center items-center overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1yMqw8WWXhZife7IIkFXGYPwIEt1_yCj5m7C8AR_Sdy75lIwNvPhb8hK1k192rc4Hw3mNr14-5M67nKeb8yQHsPU2i5SNFYsTaIcAa89UtvNBMc4c6AyTdruy95pw9Qm_cHEx8uPQTt3XNaJZiVi-QiwlwoG6Pc1nM5MRaeNauCWrnSyHNt75bRuxv72QSIgizfUvLWbDfzh6vD_MjlTzUaAkf4dLUzuOP9hny3mw_FES7iwPSDjJc5mGtJLRLIknYm6Z_jP_pl0" 
                  alt="Neural Network" 
                  className="w-full h-full object-cover rounded-2xl opacity-60 mix-blend-screen"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent-purple/20 blur-[150px] rounded-full"></div>
         </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-black italic">發展路線圖</h2>
          </div>
          
          <div className="grid grid-cols-[40px_1fr] gap-x-6">
            {/* Stage 1 */}
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary shadow-[0_0_15px_rgba(19,91,236,0.5)]">
                <Rocket size={20} />
              </div>
              <div className="w-[2px] bg-gradient-to-b from-primary/50 to-white/10 h-24"></div>
            </div>
            <div className="flex flex-col py-3 mb-6">
              <p className="text-white text-xl font-bold italic leading-none">第一階段：啟動跨鏈隱私挖礦</p>
              <p className="text-[#92a4c9] text-base leading-relaxed mt-3">建立跨鏈互操作性協議，正式開啟隱私挖掘獎勵與算力網絡對接。</p>
            </div>

            {/* Stage 2 */}
            <div className="flex flex-col items-center gap-1">
              <div className="size-10 bg-accent-cyan/20 rounded-full flex items-center justify-center text-accent-cyan shadow-[0_0_15px_rgba(0,242,255,0.5)]">
                <Globe2 size={20} />
              </div>
              <div className="w-[2px] bg-white/10 h-24"></div>
            </div>
            <div className="flex flex-col py-3 mb-6">
              <p className="text-white text-xl font-bold italic leading-none">第二階段：全球節點招募與協議發佈</p>
              <p className="text-[#92a4c9] text-base leading-relaxed mt-3">向全球擴張驗證節點生態，發佈底層隱私計算協議 V2.0 提升網絡容量。</p>
            </div>

             {/* Stage 3 */}
             <div className="flex flex-col items-center gap-1">
              <div className="size-10 bg-accent-purple/20 rounded-full flex items-center justify-center text-accent-purple shadow-[0_0_15px_rgba(188,19,254,0.5)]">
                <ShieldCheck size={20} />
              </div>
            </div>
            <div className="flex flex-col py-3">
              <p className="text-white text-xl font-bold italic leading-none">第三階段：開啟社區質押收益</p>
              <p className="text-[#92a4c9] text-base leading-relaxed mt-3">激活社區治理模塊，開放代幣質押池，實現去中心化治理與經濟激勵正循環。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ label, value, unit, color, icon }: { label: string, value: string, unit: string, color: string, icon: React.ReactNode }) => (
  <div className="glass-card p-8 rounded-xl flex flex-col gap-2 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}/10 -mr-8 -mt-8 rounded-full blur-2xl`}></div>
    <div className="flex items-center justify-between">
      <p className="text-[#92a4c9] text-sm font-bold tracking-widest uppercase">{label}</p>
      <div className={`text-${color} opacity-50`}>{icon}</div>
    </div>
    <p className="text-white text-4xl font-black leading-tight tabular-nums mt-2">
      {value} <span className={`text-${color} text-2xl italic`}>{unit}</span>
    </p>
  </div>
);

const FeatureRow = ({ icon, title, desc, bgColor }: { icon: React.ReactNode, title: string, desc: string, bgColor: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
    <div className={`${bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div>
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-[#92a4c9] text-sm mt-1">{desc}</p>
    </div>
  </div>
);

export default Home;
