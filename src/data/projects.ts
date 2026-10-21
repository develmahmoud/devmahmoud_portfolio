import Edstream from '../assets/images/Edstream.jpeg';
import ILS from '../assets/images/ILS.jpeg';
import Scholarship from '../assets/images/Scholarship.jpeg';
import MyAttend from '../assets/images/Attendance.jpeg';
import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    title: 'Edstream',
    description: 'Frontend Developer at Edstream, A robust School Management Software',
    image: Edstream,
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Typescript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://edstream.ng/',
  },
  {
    title: 'ILS Unilorin Website and Chatbot',
    description: 'Web App for Institute for Legislative Studies, University of Ilorin',
    image: ILS,
    technologies: ['React', 'Python', 'Material-UI', 'Typescript', 'AI, ML, LLM'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'SmartScholar',
    description: 'A Scholarship Reminder Application',
    image: Scholarship,
    technologies: ['React', 'Material-UI', 'Typescript', 'Tailwind'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'MyAttend',
    description: 'Smart Attendance Management Software',
    image: MyAttend,
    technologies: ['PHP', 'JavaScript', 'Bootstrap', 'JQuery'],
    githubUrl: 'https://github.com',
  },
];
