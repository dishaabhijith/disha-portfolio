'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Sample blog posts data - replace with your actual blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js and Tailwind CSS",
      excerpt: "Learn how to create a modern website using Next.js and Tailwind CSS with this step-by-step guide for beginners.",
      image: "/blog1.jpg", // Add an image to public folder
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "web-dev",
      slug: "getting-started-nextjs-tailwind"
    },
    {
      id: 2,
      title: "Understanding React Hooks: A Comprehensive Guide",
      excerpt: "Dive deep into React Hooks and learn how they can simplify your code and make your components more reusable.",
      image: "/blog2.jpg",
      date: "June 22, 2023",
      readTime: "8 min read",
      category: "react",
      slug: "understanding-react-hooks"
    },
    {
      id: 3,
      title: "Building a Portfolio Website That Stands Out",
      excerpt: "Tips and techniques to make your developer portfolio website stand out from the crowd and impress potential employers.",
      image: "/blog3.jpg",
      date: "July 10, 2023",
      readTime: "6 min read",
      category: "career",
      slug: "building-standout-portfolio"
    },
    {
      id: 4,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "A beginner-friendly introduction to TypeScript and how it can improve your JavaScript development experience.",
      image: "/blog4.jpg",
      date: "August 5, 2023",
      readTime: "7 min read",
      category: "typescript",
      slug: "intro-typescript-for-js-devs"
    },
    {
      id: 5,
      title: "Working with APIs in React: Best Practices",
      excerpt: "Learn the best practices for fetching data from APIs in your React applications for better performance and user experience.",
      image: "/blog5.jpg",
      date: "September 18, 2023",
      readTime: "10 min read",
      category: "react",
      slug: "api-best-practices-react"
    },
    {
      id: 6,
      title: "Mastering CSS Grid Layout",
      excerpt: "Everything you need to know about CSS Grid Layout to create complex and responsive web layouts with ease.",
      image: "/blog6.jpg",
      date: "October 30, 2023",
      readTime: "9 min read",
      category: "web-dev",
      slug: "mastering-css-grid"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'react', name: 'React' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'career', name: 'Career' }
  ];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-28 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-pink-100/50 dark:bg-pink-900/20 blur-3xl"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-violet-100/50 dark:bg-violet-900/20 blur-3xl"></div>
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
                Blo<span>g</span>
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, stories, and ideas about web development, programming, and technology.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-pink-600 to-violet-600 text-white shadow-pink-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                }`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass dark:glass-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-video relative bg-gradient-to-br from-pink-50 to-violet-50 dark:from-pink-900/20 dark:to-violet-900/20 overflow-hidden">
                  {post.image ? (
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                      <span>Image Placeholder</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <motion.span 
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-pink-600 to-violet-600 text-white rounded-full shadow-sm shadow-pink-500/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {categories.find(c => c.id === post.category)?.name || post.category}
                    </motion.span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                    <Link href={`/blogs/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="text-pink-600 dark:text-pink-400 hover:underline text-sm font-medium inline-flex items-center group"
                  >
                    Read more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 group-hover:translate-x-1.5 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No blog posts found in this category. Check back later!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
