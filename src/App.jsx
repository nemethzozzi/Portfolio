import React, { useState } from 'react';
import './styles.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: darkMode ? '#2d2d2d' : '#f3f4f6', color: darkMode ? '#fff' : '#000' }}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="container mx-auto max-w-full" style={{ flex: 1 }}>
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode}/>
        <Contact darkMode={darkMode}/>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
