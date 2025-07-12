'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.1 * i, duration: 0.5 } 
    })
  };

  const skills = {
    Languages: ["Java", "Kotlin", "Python", "C", "SQL", "JavaScript"],
    "AI & ML": ["Machine Learning", "Artificial Intelligence", "Data Science", "Graph Neural Networks", "Deep Learning"],
    "Design & modeling": ["3D Modeling", "Graphic Designing"],
    Libraries: ["React", "TensorFlow", "Framer motion", "Pandas", "Scikit", "Keras"],
    Coursework: ["Application Development", "Data Structures", "Linux", "Cloud Computing", "Git", "Software Engineering"],
    Frameworks: ["PyTorch", "Flutter", "Flask", "OpenCV", "Django"]
  };

  const education = [
    {
      degree: "B.E. in Information Science and Engineering",
      institution: "RV College of Engineering",
      location: "",
      period: "2024–Present",
      description: "CGPA: 8.62"
    },
    {
      degree: "Diploma of Education, Computer Science",
      institution: "PES University",
      location: "",
      period: "2021–2024",
      description: "91.9%"
    },
    {
      degree: "10th Grade, ICSE",
      institution: "Baldwin Co-Education Extension High School",
      location: "",
      period: "2009–2021",
      description: "93.33%"
    }
  ];

  const experiences = [
    {
      role: "Web Development Intern",
      company: "Alpha Tech Academy",
      period: "Apr 2023",
      location: "On-Site",
      description: [
        "Completed a month of intensive web development internship program, mastering 5+ modern web technologies including HTML5, CSS3, JavaScript, React, and Node.js",
        "Developed a responsive web application with 95%+ cross-browser compatibility, serving 20+ users during testing phase",
        "Implemented best practices in web security and accessibility, ensuring WCAG 2.1 AA compliance across all applications"
      ]
    }
  ];

  return (
    <div className="py-28 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-pink-100/50 dark:bg-pink-900/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">
              <span className="title-with-flowing-underline">
                About Me
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my background, skills, and what drives me in the world of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
              <div className="aspect-square relative bg-gradient-to-br from-pink-100 via-purple-50 to-violet-100 dark:from-pink-900/30 dark:via-purple-900/20 dark:to-violet-900/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                
                {/* You can uncomment and add your image here */}
                <Image 
                  src="/profile.jpg" 
                  alt="Disha A" 
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-20"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1, 1.05, 1],
                }}
                transition={{ 
                  duration: 6, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                }}
              >
                <span className="text-4xl">👩‍💻</span>
              </motion.div>
              
              <div className="absolute bottom-20 right-8 w-16 h-16 rounded-full bg-purple-500/10 dark:bg-purple-500/5 backdrop-blur-sm z-10"></div>
            </div>
            
            {/* Floating badges */}
            <motion.div
              className="absolute -left-8 top-1/3 glass dark:glass-dark rounded-full px-4 py-2 shadow-md flex items-center gap-2 z-20"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium">Machine Learning</span>
            </motion.div>
            
            <motion.div
              className="absolute -right-8 top-2/3 glass dark:glass-dark rounded-full px-4 py-2 shadow-md flex items-center gap-2 z-20"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <span className="text-xs font-medium">Web Development</span>
            </motion.div>
          </motion.div>

          <motion.div 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col justify-center"
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello there!
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.h2>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I&apos;m <span className="font-semibold text-pink-600 dark:text-pink-400">Disha A</span>, an Information Science and Engineering student with a passion for building modern web applications and solving complex problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Currently in my journey to become a proficient software developer, I enjoy working with JavaScript, React, and other modern technologies to create intuitive and elegant solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                When I&apos;m not coding, you can find me exploring new tech, contributing to open-source projects, or expanding my knowledge in various computer science domains.
              </motion.p>
              
              <motion.div 
                className="pt-6 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <Link 
                  href="/contact" 
                  className="btn-primary flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <a 
                  href="/Disha_A_Resume.pdf"
                  target="_blank"
                  className="btn-secondary"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold gradient-text">My Skills</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-pink-200 to-violet-200 dark:from-pink-700/30 dark:to-violet-700/30"></div>
          </div>
          
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="glass dark:glass-dark rounded-xl overflow-hidden shadow-md p-8 relative"
          >
            {/* Background decorations */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-3xl -z-10"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {Object.entries(skills).map(([category, skillsList], index) => (
                <motion.div 
                  key={category} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 opacity-70"></div>
                  
                  <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 pl-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsList.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -3, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className="px-4 py-2 bg-gradient-to-r from-pink-50 to-violet-50 dark:from-pink-900/20 dark:to-violet-900/20 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-pink-100/50 dark:border-pink-800/30 shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold gradient-text">Education</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-pink-200 to-violet-200 dark:from-pink-700/30 dark:to-violet-700/30"></div>
            <Link 
              href="/education" 
              className="text-sm flex items-center gap-1.5 text-pink-600 dark:text-pink-400 hover:underline"
            >
              <span>View full details</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                custom={index + 10}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="glass dark:glass-dark rounded-xl overflow-hidden shadow-sm p-6 relative"
              >
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-xl -z-10"></div>
                
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <motion.span 
                      className="inline-block px-3 py-1.5 bg-gradient-to-r from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 text-pink-800 dark:text-pink-300 text-xs font-medium rounded-full mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.period}
                    </motion.span>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{item.degree}</h3>
                    <p className="text-pink-600 dark:text-pink-400 mb-3">
                      {item.institution} {item.location ? `, ${item.location}` : ''}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center h-fit">
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold gradient-text">Work Experience</h2>
            <div className="h-px flex-grow bg-gradient-to-r from-pink-200 to-violet-200 dark:from-pink-700/30 dark:to-violet-700/30"></div>
            <Link 
              href="/experience" 
              className="text-sm flex items-center gap-1.5 text-pink-600 dark:text-pink-400 hover:underline"
            >
              <span>View full details</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.role}
                custom={index + 10}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="glass dark:glass-dark rounded-xl overflow-hidden shadow-sm relative"
              >
                {/* Colored top border */}
                <div className="h-1 w-full bg-gradient-to-r from-pink-500 to-violet-500"></div>
                
                <div className="p-6">
                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-xl -z-10"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-200">{item.role}</h3>
                      <p className="text-pink-600 dark:text-pink-400 mb-1">{item.company}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.location}</p>
                    </div>
                    <div>
                      <motion.span 
                        className="inline-block px-3 py-1.5 bg-gradient-to-r from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 text-pink-800 dark:text-pink-300 text-xs font-medium rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.period}
                      </motion.span>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 marker:text-pink-500">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">{desc}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative glass dark:glass-dark rounded-2xl overflow-hidden p-12 shadow-lg text-center"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl"></div>
          
          <h2 className="text-3xl font-bold gradient-text mb-4">Ready to Collaborate?</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link href="/contact" className="btn-primary">Contact Me</Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
              <a href="/Disha_A_Resume.pdf" target="_blank" className="btn-secondary">Download Resume</a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 