'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaCertificate, FaUsers } from 'react-icons/fa';

export default function EducationPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const education = [
    {
      degree: "B.E. in Information Science and Engineering",
      institution: "RV College of Engineering",
      location: "",
      period: "2024–Present",
      gpa: "8.62",
      description: "Currently pursuing my bachelor's degree with a focus on software development, algorithms, and data structures.",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Computer Networks",
        "Operating Systems",
        "Object-Oriented Programming"
      ]
    },
    {
      degree: "Diploma of Education, Computer Science",
      institution: "PES University",
      location: "",
      period: "2021–2024",
      gpa: "91.9%",
      description: "Completed my diploma in Computer Science with a focus on mathematics and computer science.",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ]
    },
    {
      degree: "10th Grade, ICSE",
      institution: "Baldwin Co-Education Extension High School",
      location: "",
      period: "2009–2021",
      gpa: "93.33%",
      description: "Completed secondary education with excellence in academics.",
      coursework: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Computer Applications"
      ]
    }
  ];

  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "C", level: 75 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      name: "AI & ML",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Artificial Intelligence", level: 80 },
        { name: "Data Science", level: 80 },
        { name: "Graph Neural Networks", level: 75 },
        { name: "Deep Learning", level: 80 }
      ]
    },
    {
      name: "Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Framer Motion", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "Scikit", level: 75 },
        { name: "Keras", level: 80 }
      ]
    },
    {
      name: "Frameworks",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Next.js", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      name: "Data Science for Engineers",
      issuer: "NPTEL",
      date: "April 2025",
      credential: "https://nptel.ac.in/certificate"
    },
    {
      name: "Fundamentals of Information Security",
      issuer: "Infosys Springboard",
      date: "August 2023",
      credential: "https://infyspringboard.com/certificates"
    },
    {
      name: "Cyber Security",
      issuer: "Alpha Tech Academy",
      date: "November 2023",
      credential: "https://alpha-tech-academy.com/certificates"
    },
    {
      name: "Fundamentals of Cryptography",
      issuer: "Infosys Springboard",
      date: "August 2023",
      credential: "https://infyspringboard.com/certificates"
    },
    {
      name: "Introduction to Cyber Security",
      issuer: "Infosys Springboard",
      date: "August 2023",
      credential: "https://infyspringboard.com/certificates"
    },
    {
      name: "Core Java",
      issuer: "Alpha Tech Academy",
      date: "December 2023",
      credential: "https://alpha-tech-academy.com/certificates"
    },
    {
      name: "ITES",
      issuer: "Seventh Sense Talent Solutions",
      date: "January 2023",
      credential: "https://seventh-sense-talent-solutions.com/certificates"
    },
    {
      name: "C Programming",
      issuer: "Coursera",
      date: "January 2023",
      credential: "https://coursera.org/certificates"
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

  const tabVariants = {
    inactive: { opacity: 0.7, y: 0 },
    active: { 
      opacity: 1, 
      y: -3, 
      transition: { duration: 0.3 } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tabContent = {
    education: (
      <motion.div 
        className="space-y-12 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-pink-400 before:via-orange-400 before:to-pink-400 before:left-6 before:-translate-x-1/2 before:opacity-60 pl-12 md:pl-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            className="relative"
          >
            {/* Timeline dot with animation */}
            <motion.div 
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 border-4 border-white dark:border-gray-900 z-10"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            ></motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -left-2 top-0 w-8 h-8 rounded-full bg-pink-400/10 dark:bg-pink-400/5 -z-10"></div>
            
            <motion.div 
              className="glass dark:glass-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="p-6 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-3xl -z-10"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-orange-500/5 dark:bg-orange-500/10 blur-3xl -z-10"></div>
                
                <div className="flex flex-col md:flex-row md:justify-between mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                    <p className="text-pink-600 dark:text-pink-400 font-medium">{edu.institution}</p>
                    {edu.location && (
                      <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.location}</p>
                    )}
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-3 py-1.5 bg-pink-100/80 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm font-medium rounded-full mb-1"
                    >
                      {edu.period}
                    </motion.div>
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      {edu.gpa.includes("%") ? edu.gpa : `CGPA: ${edu.gpa}`}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-5">{edu.description}</p>
                
                <div className="bg-gray-50/80 dark:bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-pink-100/50 dark:border-pink-800/30"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    ),
    skills: (
      <motion.div 
        className="space-y-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            className="glass dark:glass-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative p-6">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-orange-500/5 dark:bg-orange-500/10 blur-3xl -z-10"></div>
              
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600">{category.name}</h3>
                <div className="h-px flex-grow bg-gradient-to-r from-pink-200 to-orange-200 dark:from-pink-700/30 dark:to-orange-700/30 opacity-70"></div>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-orange-500 relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer bg-shimmer bg-[length:200%_100%]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div 
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -5 }}
              className="glass dark:glass-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative p-6">
                {/* Certificate icon */}
                <div className="absolute -top-12 -right-12 w-24 h-24 flex items-center justify-center text-pink-200 dark:text-pink-900/30 -z-10">
                  <FaCertificate size={80} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{cert.name}</h3>
                <p className="text-pink-600 dark:text-pink-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.date}</p>
                
                <a 
                  href={cert.credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-pink-600 dark:text-pink-400 hover:underline"
                >
                  View Credential
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
    extracurricular: (
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {extracurricular.map((activity, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            whileHover={{ y: -5 }}
            className="glass dark:glass-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative p-6">
              {/* Background decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-3xl -z-10"></div>
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{activity.role}</h3>
                <div className="px-3 py-1 bg-pink-100/80 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-medium rounded-full">
                  {activity.period}
                </div>
              </div>
              
              <p className="text-pink-600 dark:text-pink-400 font-medium mb-3">{activity.organization}</p>
              <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  const tabs = [
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
    { id: "extracurricular", label: "Activities", icon: <FaUsers /> }
  ];

  return (
    <div className="py-28 px-4 md:px-8 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-pink-100/50 dark:bg-pink-900/20 blur-3xl"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-orange-100/50 dark:bg-orange-900/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">
              <span className="title-with-flowing-underline">
                Education
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications that have shaped my knowledge and skills.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 shadow-sm ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-pink-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                }`}
                variants={tabVariants}
                animate={activeTab === tab.id ? 'active' : 'inactive'}
                whileTap={{ scale: 0.95 }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {tabContent[activeTab as keyof typeof tabContent]}
        </motion.div>
      </div>
    </div>
  );
} 