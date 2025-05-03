import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    company: 'Tecnotree Convergence Pvt. Ltd',
    role: 'Lead Developer - Frontend Development',
    duration: 'November 2023 - Present',
    description: 'Spearheaded the development of Digital Catalogue Manager (DCM), ensuring seamless integration with business requirements. Successfully delivered critical UI features that enhanced stakeholder demos and met quarterly goals. Streamlined workflows, optimized application performance, and led a team to deliver high-quality, scalable code.',
    technologies: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    company: 'Innominds Software Pvt. Ltd',
    role: 'Software Engineer – Frontend Development',
    duration: 'July 2022 - November 2023',
    description: 'Designed advanced workflows for data classification and annotation using React.js and JavaScript. Incorporated advanced features like zoom, pan, and SVG manipulation on Canvas into custom components. Built a reusable global component library, reducing development overhead across the application. Integrated AI functionalities with RESTful APIs for semi-automated data tagging.',
    technologies: ['React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Storybook', 'Redux'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <p className="text-lg text-gray-600 mt-2">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-500/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'md:left-0' : 'md:right-0'
                } transform ${
                  index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'
                } w-4 h-4 bg-primary-500 rounded-full`}
              />

              <div className="glass-panel p-6">
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="w-6 h-6 text-primary-500 mr-2" />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-medium">{exp.company}</h4>
                  <p className="text-sm text-primary-500">{exp.duration}</p>
                </div>
                
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 