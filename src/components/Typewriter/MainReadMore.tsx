import React from 'react';
import ReadMore from './ReadMore';

const MainRead: React.FC = () => {
  const content = "Hello, I'm Mahmoud Muhammad Sani, a dedicated Software Engineer and a passionate advocate for technology-driven solutions. With a strong foundation in React, Node.js, PHP, and software testing, I specialize in crafting innovative, scalable applications that empower users and solve real-world challenges.";

  return (
    <div className="p-4">
      <ReadMore maxCharacterCount={150}>
        {content}
      </ReadMore>
    </div>
  );
};

export default MainRead;
