import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Logo } from './Icons';
import { Menu, X, Globe, ChevronDown, Share2, MessageSquare, Terminal } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: '首頁', path: '/' },
    { name: '治理', path: '/' }, // Placeholder
    { name: '節點', path: '/nodes' },
    { name: '代幣經濟', path: '/tokenomics' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto glass-panel rounded-xl px-6 py-3 flex items-center justify-between border border-white/5 shadow-2xl shadow-black/20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="size-8 text-primary">
              <Logo />
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">XCASH</h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5 rounded-lg text-xs font-bold text-primary transition-all hover:bg-primary/20">
              <Globe size={14} />
              <span>EN</span>
              <ChevronDown size={14} />
            </button>
            <button 
              onClick={() => navigate('/staking')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              連接錢包
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button 
             onClick={() => {
                navigate('/staking');
                setIsMenuOpen(false);
             }}
             className="bg-primary px-8 py-3 rounded-xl text-lg font-bold shadow-lg shadow-primary/30"
          >
            連接錢包
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-background-dark/50 backdrop-blur-md mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-6 text-slate-500">
               <Logo />
            </div>
            <h2 className="text-xl font-bold text-slate-500">XCASH</h2>
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">文檔</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">瀏覽器</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">狀態</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">聯繫我們</a>
          </div>
          <div className="flex gap-6">
             <Share2 className="text-slate-600 hover:text-white transition-colors cursor-pointer" size={20} />
             <MessageSquare className="text-slate-600 hover:text-white transition-colors cursor-pointer" size={20} />
             <Terminal className="text-slate-600 hover:text-white transition-colors cursor-pointer" size={20} />
          </div>
          <p className="text-slate-600 text-sm md:w-full md:text-center lg:w-auto mt-4 lg:mt-0">© 2026 XCASH Network.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
