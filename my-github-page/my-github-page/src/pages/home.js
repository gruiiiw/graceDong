import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  margin: 20px 0;
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  width: 100%;
`;

const projects = [
  { title: 'Project 1', description: 'Description of project 1', link: '#' },
  { title: 'Project 2', description: 'Description of project 2', link: '#' },
  // Add more projects here
];

const Home = () => (
  <Section>
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </ProjectCard>
    ))}
  </Section>
);

export default Home;