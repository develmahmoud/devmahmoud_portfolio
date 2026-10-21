import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import { Contact } from './components/Contact';
import { Social } from './components/Social';
import { Footer } from './components/Footer';
import BackToTopButton from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Toaster position="top-right" />
        <Header />

        <main className="pt-16">
          {/* <Hero /> */}
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
          <Social />
        </main>

        <Footer />
        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
