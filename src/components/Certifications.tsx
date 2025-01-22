import React from 'react'
import Table from './Table'


interface CertData{
    id: number;
    name: string;
    platform: string;
    date: string;

}

const columns = [
    {header: 'ID', accessor: 'id'},
    { header: 'Certificate', accessor: 'name' },
    { header: 'Platform / Institution', accessor: 'platform' },

    { header: 'Date Completed', accessor: 'date' }
];
let info = 0;
const Certificates: CertData[] = [
    {id: info = info + 1, name: 'Developing AI Applications with Python and Flask', date: 'Dec 2024', platform: 'IBM & Coursera'},
    { id: info = info + 1, name: 'Python for Data Science, AI & Development', date: 'Dec 2024', platform: 'Coursera & IBM' },
    { id: info = info + 1, name: 'Generative AI: Prompt Engineering Basics', date: 'Dec 2024', platform: 'Coursera & IBM' },
    { id: info = info + 1, name: 'Generative AI: Introduction and Applications', date: 'Dec 2024', platform: 'Coursera & IBM' },
    { id: info = info + 1, name: 'Introduction to Artificial Intelligence (IBM AI Developer)', date: 'Dec 2024', platform: 'Coursera & IBM' },
    { id: info = info + 1, name: 'Advanced React, Meta Front-End Developer', date: 'Nov 2024', platform: 'Coursera & META' },
    { id: info = info + 1, name: 'React Basics, Meta Front-End Developer', date: 'Oct 2024', platform: 'Coursera & META' },
    { id: info = info + 1, name: 'Introduction to Software Engineering, IBM AI Developer', date: 'Nov 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'Foundations of Cybersecurity, Google Cybersecurity', date: 'Nov 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'Introduction to Back-End Development, Meta Back-End Developer', date: 'Jul 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'Libraries and Frameworks for Frontend Development, Board Infinity', date: 'Jun 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'HTML and CSS in depth (Meta)', date: 'Jul 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'Developing Interpersonal Skills (IBM)', date: 'Apr 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'Introduction to Front-End Development (Meta)', date: 'May 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'Programming with JavaScript (Meta)', date: 'Jun 2024', platform: 'Coursera' },
    { id: info = info + 1, name: 'Version Control (Meta)', date: 'Jul 2024', platform: 'Coursera' }
  ]
  
const Certifications: React.FC = () => {
  return (
    <div className='overflow-x-auto p-4'>
        <Table data={Certificates} columns={columns}></Table>
    </div>
  )
}

export default Certifications