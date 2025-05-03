import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface CertificationsProps {
  isDark: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const certifications = [
    {
      title: "JavaScript (Basic) Certificate",
      issuer: "HackerRank",
      date: "14-04-2022",
      credentialId: "Certificate ID: 976e05c12649",
      link: "https://www.hackerrank.com/certificates/976e05c12649",
      image: "/hacerrank.jpg",
      description: "Certified in JavaScript fundamentals including Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
      type: "certification"
    },
    {
      title: "Advanced React.js Proficiency",
      issuer: "Cutshort",
      date: "16-04-2022",
      credentialId: "Certificate ID: 65425",
      link: "https://cutshort.io/certificate/65425",
      image: "/cutshortreact.jpg",
      description: "Certified for advanced proficiency in React.js development and modern frontend practices.",
      type: "certification"
    },
    {
      title: "JavaScript Programming Skills",
      issuer: "TestDome",
      date: "13-04-2023",
      credentialId: "Certificate ID: 08782febdc654b5ebf75b9b33a25ca78",
      link: "https://www.testdome.com/certificates/08782febdc654b5ebf75b9b33a25ca78",
      image: "/dome.jpg",
      description: "Validated JavaScript programming skills through practical coding assessments.",
      type: "certification"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "16-04-2022",
      credentialId: "Certification ID: fccf8e55ba0-9dc1-4c31-b05e-9ca84365aac9",
      link: "https://www.freecodecamp.org/certification/fccf8e55ba0-9dc1-4c31-b05e-9ca84365aac9/javascript-algorithms-and-data-structures",
      image: "/freecodecamp.jpg",
      description: "Completed comprehensive JavaScript course covering algorithms, data structures, and programming fundamentals.",
      type: "certification"
    },
    {
      title: "Advanced JavaScript Proficiency",
      issuer: "Cutshort",
      date: "27-04-2022",
      credentialId: "Certificate ID: 65963",
      link: "https://cutshort.io/certificate/65963",
      image: "/cutshortjs.jpg",
      description: "Certified for advanced proficiency in JavaScript programming and development skills.",
      type: "certification"
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      date: "27-08-2024",
      credentialId: "Certificate ID: UC-cc04c710-52f8-4785-a883-27f3c0be8316",
      link: "https://www.udemy.com/certificate/UC-cc04c710-52f8-4785-a883-27f3c0be8316/",
      image: "/udemy.jpg",
      description: "Completed comprehensive web development course covering HTML, CSS, JavaScript, React, Node.js, and more.",
      type: "certification"
    },
    {
      title: "Star of the Month",
      issuer: "Tecnotree",
      date: "September 2024",
      description: "Honored to be named Star of the Month for my contributions to the DCM project! Adapting to the team and taking on key UI challenges has been a rewarding experience. Through collaboration and focus, we successfully delivered critical features that helped achieve our quarterly goals and improve stakeholder presentations.",
      image: "/tecnotree.jpg",
      type: "award"
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Certifications & Awards</h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>My professional achievements and recognitions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`glass-panel p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain bg-white p-4"
                />
              </div>
              <h4 className={`text-xl font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{item.title}</h4>
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.issuer}</p>
              <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</p>
              {item.credentialId && (
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.credentialId}</p>
              )}
              <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.description}</p>
              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`mt-4 flex items-center ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'}`}
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1" />
                  View Credential
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 