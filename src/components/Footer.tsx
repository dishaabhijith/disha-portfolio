'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Curved divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none h-16">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block h-16 w-full text-white dark:text-gray-900"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C57,0,136.33,45.89,180.6,51.38,225.87,57,300.12,70.76,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="bg-white dark:bg-gray-900 pt-20 pb-10">
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10 max-w-[1400px] mx-auto">
            {/* Logo and tagline - now on the left */}
            <div className="md:max-w-xs">
              <Link href="/" className="inline-block mb-4">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="text-2xl font-bold gradient-text"
                >
                  Disha A
                </motion.div>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Information Science & Engineering Student passionate about building software solutions with modern technologies.
              </p>
              
              {/* Social links - removed circular backgrounds */}
              <div className="flex space-x-6 mb-8 md:mb-0">
                <motion.a
                  href="https://github.com/dishaabhijith"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all"
                >
                  <FaGithub size={20} />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/disha2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                
                <motion.a
                  href="https://x.com/dishaabhijith"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all"
                >
                  <FaXTwitter size={20} />
                </motion.a>
                
                <motion.a
                  href="mailto:disha.a.docs@gmail.com"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all"
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>
            </div>
            
            {/* Navigation links - on the right */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 md:flex-1">
              <div className="col-span-1">
                <h3 className="font-medium text-sm text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-3">
                  Navigation
                </h3>
                <ul className="space-y-2.5">
                  <li><Link href="/" className="footer-link">Home</Link></li>
                  <li><Link href="/about" className="footer-link">About</Link></li>
                  <li><Link href="/projects" className="footer-link">Projects</Link></li>
                  <li><Link href="/blogs" className="footer-link">Blogs</Link></li>
                </ul>
              </div>
              
              <div className="col-span-1">
                <h3 className="font-medium text-sm text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-3">
                  Experience
                </h3>
                <ul className="space-y-2.5">
                  <li><Link href="/education" className="footer-link">Education</Link></li>
                  <li><Link href="/experience" className="footer-link">Work</Link></li>
                  <li><Link href="/projects" className="footer-link">Projects</Link></li>
                </ul>
              </div>
              
              <div className="col-span-1">
                <h3 className="font-medium text-sm text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-3">
                  Connect
                </h3>
                <ul className="space-y-2.5">
                  <li><Link href="/contact" className="footer-link">Contact</Link></li>
                  <li><a href="/Disha_A_Resume.pdf" target="_blank" className="footer-link">Resume</a></li>
                  <li><Link href="#" className="footer-link">Privacy Policy</Link></li>
                  <li><Link href="#" className="footer-link">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8 max-w-[1400px] mx-auto"></div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-[1400px] mx-auto">
            <p>© {currentYear} Disha A. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 