'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaRegPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  if (!mounted) return null;

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      label: "Email",
      value: "disha.a.docs@gmail.com",
      link: "mailto:disha.a.docs@gmail.com"
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      value: "disha2005",
      link: "https://linkedin.com/in/disha2005"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      label: "Location",
      value: "Bengaluru, India",
      link: "https://maps.google.com/?q=Bengaluru,India"
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.1 * i, duration: 0.5 } 
    })
  };

  return (
    <div className="py-28 px-4 md:px-8 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-pink-100/50 dark:bg-pink-900/20 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl"></div>
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
                Get in Touch
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out using the form below.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 glass dark:glass-dark rounded-xl overflow-hidden shadow-lg relative"
            >
              {/* Decorative top border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-orange-500 to-pink-500"></div>
              
              <div className="p-8 md:p-10 relative">
                {/* Subtle background decorations */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-3xl -z-10"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-orange-500/5 dark:bg-orange-500/10 blur-3xl -z-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Send a Message</h2>
                    <div className="h-px flex-grow bg-gradient-to-r from-pink-200 to-orange-200 dark:from-pink-700/30 dark:to-orange-700/30"></div>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-lg flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/30"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center text-green-600 dark:text-green-400">
                        <FaCheck />
                      </div>
                      <p className="text-green-700 dark:text-green-400 font-medium">
                        Thank you for your message! I&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-lg flex items-center gap-3 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border border-red-100 dark:border-red-800/30"
                    >
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-800/30 flex items-center justify-center text-red-600 dark:text-red-400">
                        <FaExclamationTriangle />
                      </div>
                      <p className="text-red-700 dark:text-red-400 font-medium">
                        There was an error sending your message. Please try again later.
                      </p>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            placeholder="John Doe"
                          />
                          <div className="absolute inset-0 rounded-lg pointer-events-none border border-pink-500/0 focus-within:border-pink-500/30 transition-all duration-300"></div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            placeholder="john@example.com"
                          />
                          <div className="absolute inset-0 rounded-lg pointer-events-none border border-pink-500/0 focus-within:border-pink-500/30 transition-all duration-300"></div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      custom={2}
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 appearance-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="Job Opportunity">Job Opportunity</option>
                          <option value="Project Collaboration">Project Collaboration</option>
                          <option value="Consultation">Consultation</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute inset-0 rounded-lg pointer-events-none border border-pink-500/0 focus-within:border-pink-500/30 transition-all duration-300"></div>
                        
                        {/* Custom select arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      custom={3}
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                          placeholder="Your message here..."
                        ></textarea>
                        <div className="absolute inset-0 rounded-lg pointer-events-none border border-pink-500/0 focus-within:border-pink-500/30 transition-all duration-300"></div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      custom={4}
                      initial="hidden"
                      animate="visible"
                      variants={fadeIn}
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 shadow-lg shadow-pink-600/20 hover:shadow-xl hover:shadow-pink-600/30"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaRegPaperPlane className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          
          {/* Contact Info Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="glass dark:glass-dark rounded-xl overflow-hidden shadow-lg h-auto">
              <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500"></div>
              <div className="p-8 relative">
                {/* Background decorations */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-500/5 dark:bg-orange-500/10 blur-3xl -z-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Contact Info</h2>
                    <div className="h-px flex-grow bg-gradient-to-r from-pink-200 to-orange-200 dark:from-pink-700/30 dark:to-orange-700/30"></div>
                  </div>
                  
                  <div className="space-y-8">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="flex items-center space-x-5"
                      >
                        <motion.div 
                          whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900/30 dark:to-orange-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center flex-shrink-0 shadow-md shadow-pink-600/5 border border-pink-100/50 dark:border-pink-800/30"
                        >
                          {item.icon}
                        </motion.div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                            {item.label}
                          </p>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-lg text-gray-800 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or Additional Info Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass dark:glass-dark rounded-xl overflow-hidden shadow-lg relative flex-1"
            >
              <div className="p-8 h-full bg-gradient-to-br from-pink-50/70 to-orange-50/70 dark:from-pink-900/20 dark:to-orange-900/20 flex flex-col">
                {/* Background decorations */}
                                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-pink-500/5 dark:bg-pink-500/10 blur-3xl -z-10"></div>
                
                <div className="flex items-center mb-3">
                  <div className="h-10 w-1.5 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full mr-4"></div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Let&apos;s Connect</h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-sm">
                  Whether you have a question about my work, or you just want to say hello, I&apos;ll try my best to get back to you as soon as possible!
                </p>
                
                <div className="mt-auto flex space-x-4">
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/dishaabhijith" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-md hover:text-pink-600 dark:hover:text-pink-400 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/disha2005" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-md hover:text-pink-600 dark:hover:text-pink-400 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://x.com/dishaabhijith" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-200 shadow-md hover:text-pink-600 dark:hover:text-pink-400 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Preferred Contact Hours */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Preferred contact hours: 9am - 5pm IST (Mon-Fri)
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
            Response time: Usually within 24 hours
          </p>
        </motion.div>
      </div>
    </div>
  );
} 