import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className={`${isDark ? 'dark' : ''} grain-overlay`}>
      <div className="dark:bg-obsidian-900 bg-white min-h-screen transition-colors duration-500">
        <CustomCursor />
        <ScrollProgress />
        <Navbar isDark={isDark} toggleDark={toggle} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
