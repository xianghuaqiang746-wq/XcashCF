import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NodeNetwork from './pages/NodeNetwork';
import NodeApply from './pages/NodeApply';
import Tokenomics from './pages/Tokenomics';
import Staking from './pages/Staking';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nodes" element={<NodeNetwork />} />
          <Route path="nodes/apply" element={<NodeApply />} />
          <Route path="tokenomics" element={<Tokenomics />} />
        </Route>
        {/* Staking Dashboard typically has its own layout or is standalone */}
        <Route path="/staking" element={<Staking />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
