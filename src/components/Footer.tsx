import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                © {currentYear} Kasala Umasankar. All rights reserved.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <a
              href="#about"
              className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-primary-500 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 