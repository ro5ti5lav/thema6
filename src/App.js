
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ClosePage from './pages/ClosePage';
import OpenPage from './pages/OpenPage';
import RedirectPage from './pages/RedirectPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header /> {/* Используем компонент Header здесь */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/close" element={<ClosePage />} />
        <Route path="/open" element={<OpenPage />} />
        <Route path="/redirect" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;


