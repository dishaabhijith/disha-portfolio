'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(10);
  const [errorIndex, setErrorIndex] = useState(0);
  const router = useRouter();
  const [interactionCount, setInteractionCount] = useState(0);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // Safe theme access with error handling
  let contextTheme: 'light' | 'dark' = 'light';
  try {
    const themeContext = useTheme();
    contextTheme = themeContext?.theme || 'light';
  } catch {
    // Fallback to light if context is not available
    contextTheme = 'light';
  }

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Array of error messages to cycle through
  const errorMessages = [
    "404 - Page not found",
    "404 - Lost in digital space",
    "404 - Reality glitch detected",
    "404 - Page has vanished",
    "404 - Digital void encountered"
  ];

  // Countdown effect
  useEffect(() => {
    if (countdown <= 0) {
      router.push('/');
      return;
    }
    
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown, router]);
  
  // Error message cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setErrorIndex((prevIndex) => (prevIndex + 1) % errorMessages.length);
      setGlitchIntensity(1);
      setTimeout(() => setGlitchIntensity(0), 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [errorMessages.length]);

  // Glitch effect on interaction
  const triggerGlitch = () => {
    setGlitchIntensity(0.8);
    setTimeout(() => setGlitchIntensity(0.2), 200);
    setTimeout(() => setGlitchIntensity(0), 400);
    
    setInteractionCount(interactionCount + 1);
    
    // Easter egg: If clicked 10 times, show special effect
    if (interactionCount >= 9) {
      document.documentElement.style.setProperty('--easter-egg', 'block');
      setTimeout(() => {
        document.documentElement.style.setProperty('--easter-egg', 'none');
        setInteractionCount(0);
      }, 2000);
    }
  };
  
  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* SVG filter for glitch effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="glitch-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" result="displacement" />
            <feColorMatrix in="displacement" type="matrix" 
              values="1 0 0 0 0
                     0 1 0 0 0
                     0 0 1 0 0
                     0 0 0 1 0" 
              result="colormatrix" />
            <feComposite in="SourceGraphic" in2="colormatrix" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />
          </filter>
        </defs>
      </svg>
      
      {/* Background blobs - using the same style as the main site */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${contextTheme === 'dark' ? '#555' : '#222'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.04, 0.08, 0.04],
              y: [0, -10, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 18,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 left-1/3 w-[30rem] h-[30rem] rounded-full bg-pink-300/10 dark:bg-pink-600/5 blur-3xl"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.03, 0.07, 0.03],
              x: [0, 10, 0],
              scale: [1, 1.01, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 right-1/3 w-[35rem] h-[35rem] rounded-full bg-indigo-300/10 dark:bg-indigo-600/5 blur-3xl"
          />
        </div>
        
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>
      
      <main className="relative z-10 max-w-4xl w-full px-4 py-20 text-center" onClick={triggerGlitch}>
        <motion.div
          animate={{
            filter: glitchIntensity > 0 ? "url(#glitch-filter)" : "none",
            scale: [1, 1 + glitchIntensity * 0.01, 1],
          }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glitchy 404 text */}
          <motion.h1 
            className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-600 dark:from-pink-400 dark:to-violet-400"
            animate={{
              x: glitchIntensity > 0.5 ? [0, -5, 5, -3, 0] : 0,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            404
          </motion.h1>
          
          {/* Digital artifacts */}
          <div className={`absolute inset-0 ${glitchIntensity > 0.2 ? 'opacity-70' : 'opacity-0'} transition-opacity pointer-events-none`}>
            <div className="absolute left-[10%] top-[20%] w-[10px] h-[20px] bg-pink-500/80" />
            <div className="absolute left-[50%] top-[40%] w-[15px] h-[4px] bg-purple-500/80" />
            <div className="absolute left-[80%] top-[30%] w-[20px] h-[8px] bg-violet-500/80" />
          </div>
          
          {/* Error message that cycles */}
          <motion.p 
            key={errorIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8"
          >
            {errorMessages[errorIndex]}
          </motion.p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto">
            The page you&apos;re looking for has been digitized, deleted, or never existed in the first place. 
            The system will redirect you to safety in {countdown} seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Home Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] font-medium group"
              >
                <span className="absolute inset-[-1000%] bg-gradient-to-r from-pink-500 via-violet-500 to-pink-500 animate-[spin_4s_linear_infinite]" />
                                  <span className="inline-flex items-center justify-center w-full h-full px-8 py-3 text-white transition-all duration-300 bg-pink-600 hover:bg-pink-700 rounded-full backdrop-blur-3xl group-hover:bg-opacity-90">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Return Home
                </span>
              </Link>
            </motion.div>
            
            {/* Go Back Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                onClick={() => router.back()}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] font-medium group"
              >
                <span className="absolute inset-[-1000%] bg-gradient-to-r from-pink-300 via-indigo-400 to-violet-500 opacity-40 dark:opacity-20 animate-[spin_4s_linear_infinite]" />
                                  <span className="inline-flex items-center justify-center w-full h-full px-8 py-3 text-pink-600 dark:text-pink-400 transition-all duration-300 bg-white dark:bg-gray-900 rounded-full backdrop-blur-3xl group-hover:text-pink-500 group-hover:dark:text-pink-300 hover:bg-opacity-90">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Go Back
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
      {/* Easter egg element */}
      <div className="fixed inset-0 bg-gradient-to-r from-pink-600 to-violet-600 z-50 flex items-center justify-center text-white text-4xl hidden easter-egg">
        SYSTEM OVERLOAD
      </div>
      
      <style jsx global>{`
        .easter-egg {
          display: var(--easter-egg);
        }
        
        :root {
          --easter-egg: none;
        }
      `}</style>
    </div>
  );
} 