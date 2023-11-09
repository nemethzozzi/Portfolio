import './styles.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <div className="container mx-auto" style={{ flex: 1 }}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
