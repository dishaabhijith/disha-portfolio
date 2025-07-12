'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import React from 'react'; // Added missing import for React

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={22} />,
      url: "https://github.com/dishaabhijith",
      color: "#333",
      lightBg: "from-gray-200 to-gray-300",
      darkBg: "from-gray-700 to-gray-800",
      iconColor: "group-hover:text-white",
      description: "Check out my code repositories"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      url: "https://linkedin.com/in/disha2005",
      color: "#0A66C2",
      lightBg: "from-blue-100 to-blue-200",
      darkBg: "from-blue-800 to-blue-900",
      iconColor: "group-hover:text-white",
      description: "Connect with me professionally"
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={22} />,
      url: "https://x.com/dishaabhijith",
      color: "#000000",
      lightBg: "from-gray-200 to-gray-300",
      darkBg: "from-gray-700 to-gray-800",
      iconColor: "group-hover:text-white",
      description: "Follow me for updates"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      url: "https://instagram.com/dishaabhijith",
      gradientFrom: "#fa7e1e",
      gradientVia: "#d62976",
      gradientTo: "#962fbf",
      lightBg: "from-pink-100 to-purple-100",
      darkBg: "from-pink-900 to-purple-900",
      iconColor: "group-hover:text-white",
      description: "See my photos and life updates"
    },
    {
      name: "Discord",
      icon: <FaDiscord size={22} />,
      url: "https://discord.com",
      color: "#5865F2",
      lightBg: "from-indigo-100 to-blue-100",
      darkBg: "from-indigo-800 to-blue-900",
      iconColor: "group-hover:text-white",
      description: "Chat with me on Discord"
    }
  ];

  return (
    <section className="flex-1 flex flex-col justify-center items-center px-4 pt-24 pb-0">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-50/30 dark:to-pink-950/20" />
      </div>
      
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-pink-600 dark:text-pink-400 tracking-tighter mb-4">
            Disha A
          </h1>
        </motion.div>
          
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 mb-6 md:mb-8"
        >
          Software Innovation Enthusiast
        </motion.h2>
          
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Information Science and Engineering student at RV College of Engineering with expertise in Machine Learning, AI, and software development.
        </motion.p>
        
        {/* Social Links with animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center flex-wrap gap-8 mb-16"
        >
          {socialLinks.map((social, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="relative group block"
              >
                <span className="text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-200">
                  {React.cloneElement(social.icon, { size: 28 })}
                </span>
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                  <div className="bg-pink-500/90 dark:bg-pink-600/90 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-lg">
                    <span>{social.name}</span>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-500/90 dark:bg-pink-600/90 rotate-45"></div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action Buttons with animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Resume Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/Disha_A_Resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              View Resume
            </Link>
          </motion.div>
          
          {/* Contact Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-pink-500 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Explore More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 