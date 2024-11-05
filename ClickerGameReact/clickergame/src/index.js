import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import GameScreen from './pages/GameScreen';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/game" element={<GameScreen />} />
        </Routes>
    </Router>
);
