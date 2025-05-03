import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

// Get EmailJS credentials from environment variables
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
}

interface FormData {
  name: string
  email: string
  message: string
}

interface ContactProps {
  isDark: boolean
}

const Contact = ({ isDark }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Check if EmailJS credentials are configured
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
        throw new Error('EmailJS credentials are not configured. Please add your credentials in the Contact.tsx file.')
      }

      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.publicKey)

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'umashankarno66@gmail.com', // Your email address
          reply_to: formData.email
        }
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      if (error instanceof Error) {
        setErrorMessage(`Failed to send message: ${error.message}`)
      } else {
        setErrorMessage('Failed to send message. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className={`min-h-screen py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="flex space-x-4">
                <a href="https://github.com/shankarkasala" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-primary-500'} transition-colors`}>
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/kasala-umasankar/" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-primary-500'} transition-colors`}>
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="https://x.com/kasala_shankar" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-primary-500'} transition-colors`}>
                  <TwitterIcon className="w-6 h-6" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isDark 
                      ? 'bg-gray-800 border border-gray-700 text-white' 
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isDark 
                      ? 'bg-gray-800 border border-gray-700 text-white' 
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isDark 
                      ? 'bg-gray-800 border border-gray-700 text-white' 
                      : 'bg-white border border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">{errorMessage}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 