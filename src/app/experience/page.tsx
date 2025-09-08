'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers } from 'react-icons/fa';

export default function ExperiencePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const workExperience = [
    {
      role: "Web Development Intern",
      company: "Alpha Tech Academy",
      period: "Apr 2023",
      location: "On-Site",
      description: [
        "Completed a month of intensive web development internship program, mastering 5+ modern web technologies including HTML5, CSS3, JavaScript, React, and Node.js",
        "Developed a responsive web application with 95%+ cross-browser compatibility, serving 20+ users during testing phase",
        "Implemented best practices in web security and accessibility, ensuring WCAG 2.1 AA compliance across all applications"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"]
    }
  ];

  const extracurricular = [
    {
      role: "Marketing Member at TedX RVCE",
      period: "December 2024–Present",
      organization: "TedX RVCE",
      description: "Marketing Member at TedX RVCE Dec 2024–Present"
    },
    {
      role: "Member at Astra Robotics",
      period: "November 2024–Present",
      organization: "Astra Robotics",
      description: "Member at Astra Robotics Nov 2024–Present"
    },
    {
      role: "Member at RV QuizCorp",
      period: "October 2024–Present",
      organization: "RV QuizCorp",
      description: "Member at RV QuizCorp Oct 2024–Present"
    },
    {
      role: "Member at Kannada CARV",
      period: "November 2024–Present",
      organization: "Kannada CARV",
      description: "Member at Kannada CARV Nov 2024–Present"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.1 * i, duration: 0.5 } 
    })
  };

  return (
    <div className="min-h-screen pt-24 pb-0">
      <div className="w-full px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">
              <span className="title-with-flowing-underline">
                Ex<span>p</span>erience
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, skills, and activities in the world of software development.
          </p>
        </motion.div>

        <div className="max-w-[1400px] mx-auto">
          {/* Work Experience Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center mr-4 shadow-md"
              >
                <FaBriefcase size={24} />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-semibold">Work Experience</h2>
            </div>

                          <div className="space-y-12 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-pink-400 before:via-orange-400 before:to-pink-400 before:left-7 before:-translate-x-1/2 pl-14 md:pl-16">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1 w-5 h-5 rounded-full bg-pink-500 border-4 border-white dark:border-gray-900 shadow-glow-sm"></div>
                  
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white dark:bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{job.role}</h3>
                        <p className="text-pink-600 dark:text-pink-400 font-medium">{job.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">{job.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                    
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Key Achievements</h4>
                    <ul className="space-y-2 mb-6">
                      {job.description.map((description, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="flex items-start"
                        >
                          <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{description}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.05) }}
                          className="px-3 py-1 text-xs font-medium bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 rounded-full border border-pink-100/50 dark:border-pink-800/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Extracurricular Experience Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-4 shadow-md"
              >
                <FaUsers size={24} />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-semibold">Extracurricular Experience</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extracurricular.map((activity, index) => (
                <motion.div
                  key={index}
                  custom={index + workExperience.length}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{activity.role}</h3>
                      <p className="text-pink-600 dark:text-pink-400">{activity.organization}</p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 md:ml-4">{activity.period}</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Resume Download Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 mb-20 text-center bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20 rounded-xl p-8 border border-pink-100 dark:border-pink-900/30 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Want to know more?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto">
              Download my resume for a complete overview of my experience, skills, and educational background.
            </p>
            <motion.a 
              href="/Disha_A_Resume.pdf" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors shadow-md"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 