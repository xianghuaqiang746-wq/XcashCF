import React, { useState } from 'react';
import { Share2, Cloud, Terminal, Send, Mail, Globe } from 'lucide-react';

const NodeApply: React.FC = () => {
  const [nodeType, setNodeType] = useState<'hosted' | 'self'>('hosted');
  const [budget, setBudget] = useState(1000);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-primary mb-4">
          <Share2 size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Node Application Wizard</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">加入 XCASH 節點網絡</h2>
        <p className="text-slate-400 text-lg">官方將在審核後與您聯繫，共建 2026 全球去中心化基礎設施。</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-12 max-w-2xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
        <StepIndicator number={1} active />
        <StepIndicator number={2} />
        <StepIndicator number={3} />
      </div>

      {/* Main Form Card */}
      <div className="glass-card rounded-2xl p-8 md:p-12 space-y-10 relative overflow-hidden border border-primary/20 bg-[#101622]/80">
        
        {/* Step 1: Type Selection */}
        <div className="space-y-6">
          <SectionHeader number="01" title="選擇節點類型" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RadioCard 
              selected={nodeType === 'hosted'} 
              onClick={() => setNodeType('hosted')}
              icon={<Cloud size={32} />}
              title="託管節點"
              desc="由 XCASH 官方認證服務商提供硬件維護，適合無技術背景的質押者。"
            />
             <RadioCard 
              selected={nodeType === 'self'} 
              onClick={() => setNodeType('self')}
              icon={<Terminal size={32} />}
              title="自主搭建節點"
              desc="完全掌控您的硬件設備與數據安全，需要具備 Linux 系統維護能力。"
            />
          </div>
        </div>

        {/* Step 2: Budget */}
        <div className="space-y-6 pt-10 border-t border-glass-border">
          <div className="flex items-center justify-between">
            <SectionHeader number="02" title="預算規劃" />
            <span className="text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">基本成本: 500 USDT/年</span>
          </div>
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {['500 - 1k', '1k - 5k', '5k - 20k', '20k+'].map((range, i) => (
                 <button key={i} className={`p-4 rounded-lg border transition-all text-sm font-bold ${i === 1 ? 'border-primary bg-primary/10 text-white' : 'border-glass-border bg-slate-800/30 text-slate-400 hover:border-primary hover:text-white'}`}>
                    {range}
                 </button>
               ))}
            </div>
            <div className="relative pt-2">
              <input 
                type="range" 
                min="500" 
                max="50000" 
                step="500" 
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-mono">
                <span>500 USDT</span>
                <span>50,000 USDT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Contact */}
        <div className="space-y-6 pt-10 border-t border-glass-border">
           <SectionHeader number="03" title="聯繫方式" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-sm text-slate-400">電子郵件 / Telegram</label>
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <input type="text" placeholder="@yourname or mail@example.com" className="w-full bg-slate-800/50 border-glass-border rounded-xl pl-12 pr-4 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all border-white/10" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-sm text-slate-400">所在區域 (可選)</label>
                 <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <select className="w-full bg-slate-800/50 border-glass-border rounded-xl pl-12 pr-4 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none border-white/10">
                       <option>亞太地區</option>
                       <option>歐洲</option>
                       <option>北美</option>
                       <option>其他區域</option>
                    </select>
                 </div>
              </div>
           </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
           <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
              提交申請
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
           <p className="text-center text-slate-500 text-xs mt-6">
              提交即代表您同意 XCASH 的節點隱私協議與服務條款
           </p>
        </div>

      </div>
    </div>
  );
};

const StepIndicator = ({ number, active }: { number: number, active?: boolean }) => (
   <div className={`relative z-10 size-10 rounded-full flex items-center justify-center font-bold transition-all ${active ? 'bg-primary text-white shadow-[0_0_15px_rgba(19,91,236,0.5)]' : 'bg-slate-800 text-slate-500 border border-glass-border'}`}>
      {number}
   </div>
);

const SectionHeader = ({ number, title }: { number: string, title: string }) => (
   <div className="flex items-center gap-3">
      <span className="text-primary font-bold">{number}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
   </div>
);

const RadioCard = ({ selected, onClick, icon, title, desc }: any) => (
   <div 
      onClick={onClick}
      className={`p-6 rounded-xl border cursor-pointer transition-all ${selected ? 'border-primary bg-primary/10' : 'border-glass-border bg-slate-800/30 hover:border-primary/50'}`}
   >
      <div className="flex justify-between items-start mb-4">
         <div className={`text-${selected ? 'primary' : 'slate-500'}`}>{icon}</div>
         <div className={`size-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-primary' : 'border-slate-600'}`}>
            {selected && <div className="size-2.5 bg-primary rounded-full"></div>}
         </div>
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
   </div>
);

export default NodeApply;
