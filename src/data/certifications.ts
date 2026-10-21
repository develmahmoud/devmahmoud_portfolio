import type { Certification } from '../types/content';

export const certifications: Certification[] = [
  { id: 1, name: 'Developing AI Applications with Python and Flask', date: 'Dec 2024', platform: 'IBM & Coursera' },
  { id: 2, name: 'Python for Data Science, AI & Development', date: 'Dec 2024', platform: 'Coursera & IBM' },
  { id: 3, name: 'Generative AI: Prompt Engineering Basics', date: 'Dec 2024', platform: 'Coursera & IBM' },
  { id: 4, name: 'Generative AI: Introduction and Applications', date: 'Dec 2024', platform: 'Coursera & IBM' },
  { id: 5, name: 'Introduction to Artificial Intelligence (IBM AI Developer)', date: 'Dec 2024', platform: 'Coursera & IBM' },
  { id: 6, name: 'Advanced React, Meta Front-End Developer', date: 'Nov 2024', platform: 'Coursera & META' },
  { id: 7, name: 'React Basics, Meta Front-End Developer', date: 'Oct 2024', platform: 'Coursera & META' },
  { id: 8, name: 'Introduction to Software Engineering, IBM AI Developer', date: 'Nov 2024', platform: 'Coursera' },
  { id: 9, name: 'Foundations of Cybersecurity, Google Cybersecurity', date: 'Nov 2024', platform: 'Coursera' },
  { id: 10, name: 'Introduction to Back-End Development, Meta Back-End Developer', date: 'Jul 2024', platform: 'Coursera' },
  { id: 11, name: 'Libraries and Frameworks for Frontend Development, Board Infinity', date: 'Jun 2024', platform: 'Coursera' },
  { id: 12, name: 'HTML and CSS in depth (Meta)', date: 'Jul 2024', platform: 'Coursera' },
  { id: 13, name: 'Developing Interpersonal Skills (IBM)', date: 'Apr 2024', platform: 'Coursera' },
  { id: 14, name: 'Introduction to Front-End Development (Meta)', date: 'May 2024', platform: 'Coursera' },
  { id: 15, name: 'Programming with JavaScript (Meta)', date: 'Jun 2024', platform: 'Coursera' },
  { id: 16, name: 'Version Control (Meta)', date: 'Jul 2024', platform: 'Coursera' },
];

export const certificationColumns: { header: string; accessor: keyof Certification }[] = [
  { header: 'ID', accessor: 'id' },
  { header: 'Certificate', accessor: 'name' },
  { header: 'Platform / Institution', accessor: 'platform' },
  { header: 'Date Completed', accessor: 'date' },
];
