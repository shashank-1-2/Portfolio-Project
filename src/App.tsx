import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import Work from './components/Work';
// import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Skills />
        <Work />
        {/* <Services /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;