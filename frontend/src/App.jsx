import Contact from './Components/Contact';
import Experience from './Components/Experience';
import About from './Components/About';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
        <Navbar />
      <div className='container mx-auto px-8'>
        <Hero />
        <About />
        <Features />
        <Technologies />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </div>
        <Footer />
    </div>
  );
};

export default App;
