import React from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Contact Manager',
    description: 'A comprehensive contact management application that allows users to add, edit, delete, and organize their contacts. Features include contact categorization, search functionality, and data persistence.',
    image: '/projects/contact-manager.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    github: 'https://github.com/shankarkasala/contactsamanager',
    live: 'https://shankarkasala.github.io/contactsamanager/',
  },
  {
    title: 'Shopping Cart',
    description: 'An e-commerce shopping cart application with features like product listing, cart management, quantity updates, and total calculation. Demonstrates modern web development practices and user interface design.',
    image: '/projects/shopping.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
    github: 'https://github.com/shankarkasala/shopping',
    live: 'https://shankarkasala.github.io/shopping/',
  },
  {
    title: 'Todo List',
    description: 'A feature-rich todo list application with task management capabilities including adding, editing, deleting tasks, marking tasks as complete, and filtering tasks by status.',
    image: '/projects/todo.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    github: 'https://github.com/shankarkasala/ToDo_list-JS-HTML-CSS-',
    live: 'https://shankarkasala.github.io/ToDo_list-JS-HTML-CSS-/',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600">Here are some of my recent works</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-panel p-6 rounded-lg"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-500/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-500 hover:text-primary-600"
                >
                  <CodeBracketIcon className="w-5 h-5 mr-1" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-500 hover:text-primary-600"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 