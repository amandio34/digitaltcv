import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { toggleTheme } from './redux/store'; // Importera toggleTheme från slicen
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  // Hämta tema från Redux
  const theme = useSelector((state) => state.theme.theme);

  // Funktion för att toggla tema
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  // Uppdatera body-klassen baserat på temat
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Dynamiskt ändra texten på knappen baserat på temat
  const buttonText = theme === 'light' ? 'Tema: Dag' : 'Tema: Natt';

  return (
    <Router>
      <main className="app">
        <nav className="nav">
          <ul>
            <li><Link to="/">Om mig</Link></li>
            <li><Link to="/about">Projekt</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>
        <button className="theme-button" onClick={handleToggleTheme}>
          {buttonText} {/* Dynamisk knapptext baserad på state */}
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Routes hanterar navigationen mellan olika sidor */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
