'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe for payments. Includes product search, filtering, cart functionality, user authentication, and order tracking.',
    image: '/images/project1.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application that allows teams to organize projects, assign tasks, set deadlines, and track progress. Features real-time updates using WebSockets.',
    image: '/images/project2.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/task-manager'
  },
  {
    title: 'Fitness Tracking Dashboard',
    description: 'A comprehensive fitness tracking dashboard that visualizes workout data, nutrition information, and progress over time. Integrates with wearable devices through APIs.',
    image: '/images/project3.jpg',
    tags: ['React', 'D3.js', 'Firebase', 'OAuth'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/fitness-tracker'
  },
  {
    title: 'Weather Application',
    description: 'A weather application that provides real-time weather data, forecasts, and historical trends for locations worldwide. Features interactive maps and data visualization.',
    image: '/images/project4.jpg',
    tags: ['JavaScript', 'APIs', 'Chart.js', 'Geolocation'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/weather-app'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark mode support, and contact form functionality.',
    image: '/images/project5.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Recipe Sharing Platform',
    description: 'A community-driven recipe sharing platform where users can discover, share, and save recipes. Features user profiles, recipe ratings, and personalized recommendations.',
    image: '/images/project6.jpg',
    tags: ['React', 'GraphQL', 'AWS', 'Auth0'],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/recipe-platform'
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Next.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 w-full">
                <div className="absolute inset-0 bg-gray-900 opacity-10 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 