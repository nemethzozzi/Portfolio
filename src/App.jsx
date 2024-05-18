import React, { useState } from 'react';
import './styles.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import Ratings from './Components/Ratings';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', color: darkMode ? '#fff' : '#000' }}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="container mx-auto max-w-full" style={{ flex: 1 }}>
        <About darkMode={darkMode} />
        <div className="md:-mt-32 sm:-mt-12 -mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={darkMode ? "#2d2d2d" : "#f3f4f6"} fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
        <div style={{ backgroundColor: darkMode ? '#2d2d2d' : '#f3f4f6'}}>
        <Skills darkMode={darkMode} />
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0369a1" fillOpacity="1" d="M0,64L40,53.3C80,43,160,21,240,48C320,75,400,149,480,181.3C560,213,640,203,720,181.3C800,160,880,128,960,112C1040,96,1120,96,1200,96C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
        </div>
        <div style={{ backgroundColor: '#0369a1'}}>
        <Counter />
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={darkMode ? "#2d2d2d" : "#f3f4f6"} fillOpacity="1" d="M0,96L40,133.3C80,171,160,245,240,245.3C320,245,400,171,480,144C560,117,640,139,720,144C800,149,880,139,960,149.3C1040,160,1120,192,1200,181.3C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
        </div>
        <div style={{ backgroundColor: darkMode ? '#2d2d2d' : '#f3f4f6'}}>
        <Projects darkMode={darkMode}/>
        {/* <div className="md:-mt-32 sm:-mt-12 -mt-8"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0369a1" fillOpacity="1" d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,154.7C560,149,640,171,720,186.7C800,203,880,213,960,197.3C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div> */}
        </div>
        {/* <div style={{ backgroundColor: '#0369a1'}}>
        <Ratings />
        <div> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={darkMode ? "#2d2d2d" : "#f3f4f6"} fillOpacity="1" d="M0,0L40,21.3C80,43,160,85,240,96C320,107,400,85,480,69.3C560,53,640,43,720,48C800,53,880,75,960,80C1040,85,1120,75,1200,64C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
        </div> */}
        <div style={{ backgroundColor: darkMode ? '#2d2d2d' : '#f3f4f6'}}>
        <Contact darkMode={darkMode}/>
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
