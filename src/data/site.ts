import type { NavItem } from '../types/content';
import portrait from '../assets/images/Mahmoud.jpeg';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  greeting: 'Hi, I am',
  name: 'Mahmoud Sani',
  role: 'Software Engineer',
  headline: 'Crafting Seamless Digital',
  highlight: 'Experiences',
  description:
    'I help businesses turn ideas into web and mobile products — from school platforms to AI-assisted tools that people actually use.',
  ctaHref: '#contact',
  ctaLabel: "Let's Talk",
  secondaryHref: '#projects',
  secondaryLabel: 'Portfolio',
  chips: [
    { label: "Hi, I'm Mahmoud", align: 'left' as const },
    { label: 'Best Graduating Student · 2024', align: 'right' as const },
  ],
};

export const stats = [
  { value: '2024', label: 'Best Graduating Student' },
  { value: '16+', label: 'Professional Certifications' },
  { value: 'Open', label: 'Available for projects' },
];

export const about = {
  kicker: 'My Intro',
  heading: 'About Me',
  paragraphs: [
    "I'm Dev Mahmoud — a software engineer focused on web and mobile products that help businesses ship ideas with clarity and speed.",
    'From school management platforms to scholarship tools and AI-assisted experiences, I care about clean interfaces, reliable systems, and work that holds up in production.',
  ],
  details: [
    { label: 'Name', value: 'Mahmoud Muhammad Sani' },
    { label: 'Email', value: 'sanimahmoud10@gmail.com' },
    { label: 'Role', value: 'Software Engineer' },
  ],
  linkedInVanity: 'mahmoud-muhammad-sani-680752223',
  photo: portrait,
  photoAlt: 'Mahmoud Muhammad Sani',
};

export const contact = {
  kicker: 'Contact',
  heading: 'Get in Touch',
  email: 'sanimahmoud10@gmail.com',
  phone: '+905016484900, +234 810 500 3394',
  location: 'Kocaeli, Turkey',
  whatsapp: '+905016484900',
};

export const footer = {
  name: 'DevMahmoud',
};
