'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Background() {
  // Using useState for theme fallback to avoid hydration errors
  const [themeState, setThemeState] = useState<'light' | 'dark'>('light');
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
    setThemeState(contextTheme);
  }, [contextTheme]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Minimalistic pink background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 to-white dark:from-[#1a0513] dark:to-[#0c0c0d]" />
      
      {/* Very subtle dot pattern - static, no animations */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(${themeState === 'dark' ? '#ec4899' : '#ec4899'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Subtle diagonal line in the bottom right */}
      <div className="absolute bottom-0 right-0 w-full max-w-[600px] h-1 bg-pink-200 dark:bg-pink-900 transform rotate-[135deg] origin-bottom-right translate-y-[200px]" />
      
      {/* Small decorative element in the top left */}
      <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full bg-pink-100/30 dark:bg-pink-950/20" />
      
      {/* Small decorative element in the bottom right */}
      <div className="absolute bottom-[15%] right-[10%] w-16 h-16 rounded-full bg-pink-100/30 dark:bg-pink-950/20" />
    </div>
  );
} 