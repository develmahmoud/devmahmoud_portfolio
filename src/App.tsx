import { Toaster } from 'sonner';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { ContactForm } from './components/ContactForm';
import { ProjectCard } from './components/ProjectCard';
import { Skills } from './components/Skills';
import { Social } from './components/Social';
import { smoothScroll } from './utils/smoothScroll';
import Typewriter from './components/Typewriter/Typewriter';
import DevMudi from "./assets/images/DevMudi.jpeg";
import Edstream from "./assets/images/Edstream.jpeg";
import ILS from "./assets/images/ILS.jpeg";
import Scholarship from "./assets/images/Scholarship.jpeg";
import MyAttend from "./assets/images/Attendance.jpeg";
import { MdWavingHand } from 'react-icons/md';
import { Trophy, GraduationCap } from 'lucide-react';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import { Rocket, GlobeIcon } from 'lucide-react';
function App() {
  const projects = [
    {
      title: 'Edstream',
      description: 'Frontend Developer at Edstream, A robust School Management Software',
      image: Edstream,
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Typescript'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://edstream.ng/'
    },
    {
      title: 'ILS Unilorin Website and Chatbot',
      description: 'Web App for Institute for Legislative Studies, University of Ilorin',
      image: ILS,
      technologies: ['React', 'Python', 'Material-UI', 'Typescript', 'AI, ML, LLM'],
      githubUrl: 'https://github.com'
    },
    {
      title: 'SmartScholar',
      description: 'A Scholarship Reminder Application',
      image: Scholarship,
      technologies: ['React', 'Material-UI', 'Typescript', 'Tailwind'],
      githubUrl: 'https://github.com'
    },
    {
      title: 'MyAttend',
      description: 'Smart Attendance Management Software',
      image: MyAttend,
      technologies: ['PHP', 'JavaScript', 'Bootstrap', 'JQuery'],
      githubUrl: 'https://github.com'
    }
  ];
  

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Toaster position="top-right" />
        <Header />
        
        <main className="pt-16 ">
          {/* Hero Section */}
          <section className="relative h-screen p-4 
           bg-[url('https://img.freepik.com/free-vector/gradient-style-galaxy-background_23-2148999258.jpg')] 
          bg-fixed bg-cover text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 sm:mt-20 mt-20">
            <Typewriter 
              text="Welcome to Dev Mahmoud's Portfolio, Connect with me let's build incredibly amazing things together!"
              speed={200}
              className="text-4xl sm:text-6xl"
              onComplete={() => console.log('Typing complete')}
              />
              <div className='mt-10'>
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, '#contact')}
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-100 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-betwwen gap-4">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                      Hello <MdWavingHand className='inline-block' /> I'm Mahmoud Muhammad Sani also known 
                      as <b>Dev Mahmoud <Rocket className='inline-block' /></b>, a passionate <b>Software Engineer</b> from <b>Kano</b> State, 
                      Nigeria, and a proud <b>first-class</b> graduate of Software Engineering, from the esteemed <b>Federal 
                        University Dutse</b> with an impressive CGPA of <b>4.82/5.00</b>. 
                      My academic excellence reflects my dedication to learning and pushing boundaries in the tech world.
                      </p>
                      <p className='text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify'>
                      I specialize in <b>Artificial Intelligence (AI)</b>, Machine Learning (ML), Generative AI (GenAI), and Large Language Models (LLMs). My favorite programming languages include Python, JavaScript, and PHP, as they enable me to craft innovative, impactful solutions.
                      </p>
                      
                      <p className='text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify'>
                      Beyond coding, I enjoy learning about new trends in tech, sharing knowledge, and mentoring others to help them grow in their careers. Let’s work together and bring your ideas to life!🌟
                      </p>
                      <p className='text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify'>Let’s connect and make something amazing together!</p>
                    </div>
                    <div className="flex-1 md:p-10 pt-20">
                        <img src={DevMudi} 
                        className='rounded-2xl transition-transform duration-300 ease-in-out 
                        transform hover:scale-110 cursor-pointer' />
                    </div>
                </div>
                
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
          <section id='achievements' className='py-20 bg-white dark:bg-gray-800 transition-colors duration-300'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"> My Achievements and Awards <Trophy className='inline-block' /></h2>
                <Achievements />
                </div>
          </section>
          <section id='certifications' className='py-20 bg-white dark:bg-gray-800 transition-colors duration-300'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"> My Professional Certifications <GraduationCap className='inline-block' /></h2>
                <Certifications />
                </div>
          </section>
          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send Message to Dev <Rocket className='inline-block' /> </h2>
              <ContactForm />
            </div>
          </section>

          <section id='connect' className='py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200'>
                <div className="p-10">
                    
                    <Social />
                </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© 2024 DevMahmoud. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;