import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-panel p-4 rounded-full">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-900/20 rounded-full blur-xl" />
                  <img
                    src="/Profile.jpg"
                    alt="Kasala Umasankar"
                    className="w-full h-full object-cover rounded-full relative z-10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-semibold">Location:</span> Bangalore, India
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Experience:</span> 3+ years in Frontend Development
                </p>
                
                <p className="text-lg leading-relaxed">
                  I'm a passionate Frontend Developer with a keen eye for design and a love for creating
                  intuitive user experiences. My journey in web development started with a curiosity about
                  how things work on the internet, and it has evolved into a career where I get to build
                  beautiful and functional applications every day.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Currently, I'm focused on building modern web applications using React, TypeScript, and
                  other cutting-edge technologies. I believe in writing clean, maintainable code and
                  constantly learning new things to stay ahead in this ever-evolving field.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Current Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Javascript', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 italic text-primary-500">
                  "The only way to do great work is to love what you do." - Steve Jobs
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 