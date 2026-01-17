import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Icons';
import { 
  LayoutGrid, 
  Wallet, 
  Settings, 
  ArrowLeft, 
  Bell, 
  Layers, 
  TrendingUp, 
  Sparkles,
  Lock,
  CircleDollarSign,
  Activity
} from 'lucide-react';

const Staking: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#0a0d14] text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#192233]/40 backdrop-blur-md flex flex-col h-screen z-20 sticky top-0">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 text-primary">
            <Logo />
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">XCASH</h2>
        </div>
        
        <nav className="flex-1 mt-6 px-3 space-y-1">
          <NavItem icon={<LayoutGrid size={22} />} label="概覽" />
          <NavItem icon={<Wallet size={22} />} label="質押中心" active />
          <NavItem icon={<Activity size={22} />} label="節點管理" />
          <NavItem icon={<Settings size={22} />} label="系統設置" />
        </nav>

        <div className="p-6 mt-auto">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-all">
            <ArrowLeft size={22} />
            <span className="font-medium">返回首頁</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto relative gradient-mesh">
        {/* Dashboard Header */}
        <header className="sticky top-0 z-10 px-8 py-4 bg-[#192233]/40 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold italic">質押儀表板 <span className="text-xs font-normal text-white/40 ml-2 uppercase tracking-widest not-italic">Staking Dashboard</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">錢包狀態</span>
              <span className="text-xs text-accent-cyan flex items-center gap-1 font-mono">
                <span className="size-1.5 bg-accent-cyan rounded-full"></span> 0x82...3f92
              </span>
            </div>
            <button className="bg-primary/10 border border-primary/40 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors">
              <Bell size={20} />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 max-w-6xl mx-auto space-y-8">
          
          {/* Top Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricCard 
              title="總質押 XCASH" 
              value="420,000" 
              unit="XCASH" 
              subtext="≈ $12,450.00 USD"
              icon={<Layers className="text-primary" />}
              color="primary"
            />
            <MetricCard 
              title="當前年化收益率" 
              value="12.85" 
              unit="%" 
              subtext="+1.2% 較昨日上升"
              subtextColor="text-green-400"
              icon={<TrendingUp className="text-accent-cyan" />}
              color="accent-cyan"
            />
             <MetricCard 
              title="我的已賺取獎勵" 
              value="1,245.82" 
              unit="XCASH" 
              subtext="預計下次結算：4h 12m"
              icon={<Sparkles className="text-accent-purple" />}
              color="accent-purple"
            />
          </div>

          {/* Staking & Rewards Split */}
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Left Column (3/5) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Staking Action Card */}
              <div className="glass-panel rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold italic">質押操作</h2>
                  <div className="flex gap-2">
                    <Badge text="網絡活躍" />
                    <Badge text="高收益" color="primary" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-white/60 uppercase">
                      <span>輸入質押數量</span>
                      <span>餘額: 24,000.00 XCASH</span>
                    </div>
                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="0.00" 
                        disabled
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-xl font-bold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50 text-white" 
                      />
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-bold text-sm opacity-50 cursor-not-allowed">最大值</button>
                    </div>
                  </div>
                  <button disabled className="w-full py-4 bg-gray-600/20 text-white/30 border border-white/10 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 cursor-not-allowed">
                    <Lock size={20} className="text-white/20" />
                    確認質押 (主網啟動中)
                  </button>
                </div>
              </div>

              {/* Rewards Card */}
              <div className="glass-panel rounded-2xl p-8 border border-white/10">
                <h3 className="text-lg font-bold italic mb-6">獎勵提取</h3>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                        <CircleDollarSign />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/40 uppercase">可領取餘額</p>
                        <p className="text-xl font-black">1,245.82 XCASH</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-white/40 uppercase">最小領取額</p>
                      <p className="text-sm font-bold">2,000 XCASH</p>
                    </div>
                  </div>
                  <button disabled className="w-full py-4 bg-gray-600/20 text-white/40 border border-white/5 rounded-xl font-black text-lg cursor-not-allowed flex items-center justify-center gap-2">
                     <Lock size={20} />
                     領取收益 (暫不可用)
                  </button>
                  <p className="text-center text-xs text-white/30">您尚未達到最小領取門檻或提取冷卻時間未結束。</p>
                </div>
              </div>
            </div>

            {/* Right Column (2/5) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Network Status */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-bold italic mb-6">網絡動態</h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-start">
                      <div className="space-y-1">
                         <p className="text-xs font-bold text-white/40 uppercase">當前高度</p>
                         <p className="font-mono text-accent-cyan">#8,492,031</p>
                      </div>
                      <div className="text-right space-y-1">
                         <p className="text-xs font-bold text-white/40 uppercase">平均出塊</p>
                         <p className="font-mono">1.2s</p>
                      </div>
                   </div>
                   <div className="h-[1px] bg-white/5"></div>
                   <div className="space-y-4">
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest">質押分配</p>
                      <div className="flex h-2 w-full rounded-full overflow-hidden bg-white/5">
                         <div className="bg-primary w-[65%]"></div>
                         <div className="bg-accent-cyan w-[20%]"></div>
                         <div className="bg-accent-purple w-[15%]"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] font-bold">
                         <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary"></span> 節點</div>
                         <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-accent-cyan"></span> 委託</div>
                         <div className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-accent-purple"></span> 儲備</div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Privacy Level */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-2xl -mr-12 -mt-12"></div>
                <h3 className="text-lg font-bold italic mb-4">隱私保護等級</h3>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                   <div className="text-3xl font-black text-primary">SSS</div>
                   <div className="h-8 w-[1px] bg-white/10"></div>
                   <p className="text-xs text-white/60 leading-tight">您的數據正在通過 1.4 萬個全球節點進行混淆處理，安全性極高。</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Decorative Background Text */}
        <div className="fixed bottom-0 right-0 p-12 opacity-5 pointer-events-none select-none z-0">
           <h1 className="text-[12rem] font-black italic leading-none">XCASH</h1>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all group ${active ? 'bg-gradient-to-r from-primary/15 to-transparent border-l-4 border-primary' : 'hover:bg-white/5 hover:text-white text-white/60 border-l-4 border-transparent'}`}>
    <div className={active ? 'text-primary' : 'group-hover:text-white'}>{icon}</div>
    <span className={`font-medium ${active ? 'text-white' : ''}`}>{label}</span>
  </div>
);

const MetricCard = ({ title, value, unit, subtext, subtextColor = "text-white/40", icon, color }: any) => (
  <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 -mr-16 -mt-16 rounded-full blur-3xl`}></div>
    <div className="flex items-center gap-3 mb-4">
       <div className={`p-2 bg-${color}/20 rounded-lg`}>{icon}</div>
       <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider">{title}</h3>
    </div>
    <div className="flex items-baseline gap-2">
       <span className={`text-4xl font-black tabular-nums ${color === 'accent-cyan' ? 'text-accent-cyan' : 'text-white'}`}>{value}</span>
       <span className={`text-${color} font-bold italic`}>{unit}</span>
    </div>
    <p className={`text-xs mt-2 ${subtextColor}`}>{subtext}</p>
  </div>
);

const Badge = ({ text, color }: any) => (
  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${color === 'primary' ? 'bg-primary/10 border border-primary/30 text-primary' : 'bg-white/5 border border-white/10 text-white/40'}`}>
    {text}
  </span>
);

export default Staking;
