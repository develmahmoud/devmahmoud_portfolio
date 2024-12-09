import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { ContactForm } from './components/ContactForm';
import { ProjectCard } from './components/ProjectCard';
import { Skills } from './components/Skills';
import { smoothScroll } from './utils/smoothScroll';

function App() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com'
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Toaster position="top-right" />
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Full Stack Developer</h1>
              <p className="text-xl md:text-2xl mb-8">Building beautiful and functional web applications</p>
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, '#contact')}
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies.
                I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
                With a strong foundation in both front-end and back-end development, I bring ideas to life through code.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    {...project} 
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
              <ContactForm />
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© 2024 John Doe. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;