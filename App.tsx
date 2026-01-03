import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CodingWarsPage from './pages/CodingWarsPage';
import PaymentPage from './pages/PaymentPage';
import EsportsPage from './pages/EsportsPage';
import QuizPage from './pages/QuizPage';
import ResearchPage from './pages/ResearchPage';
import AiThonPage from './pages/AiThonPage';
import LoginPage from './pages/LoginPage';
import EventsPage from './pages/EventsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import BattlePassPage from './pages/BattlePassPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-bg-dark text-white font-grotesk selection:bg-neon-cyan selection:text-black">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/coding-wars" element={<CodingWarsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/esports" element={<EsportsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/aithon" element={<AiThonPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/battle-pass" element={<BattlePassPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;