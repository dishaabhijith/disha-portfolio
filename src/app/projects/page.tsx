'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from '@/components/ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Graph Neural Networks for Network Traffic Analysis - Deep Learning & Cybersecurity",
      description: "Developed a comprehensive GNN-based framework for real-time network traffic prediction achieving 94.2% accuracy",
      image: "/images/projects/graph-neural-networks.png",
      technologies: ["PyTorch", "PyTorch Geometric", "LSTM", "Graph Neural Networks", "Network Security", "Real-time Systems"],
      github: "https://github.com/your-repo/graph-neural-networks",
      live: "https://graph-neural-networks.com",
      category: "ai"
    },
    {
      id: 2,
      title: "Image Encryption and Decryption - Computer Vision Security Project",
      description: "Developed a secure image encryption system using OpenCV and Fernet symmetric cryptography with 256-bit AES encryption",
      image: "/images/projects/image-encryption.png",
      technologies: ["Python", "OpenCV", "Cryptography", "Tkinter", "NumPy", "PIL", "AES Encryption"],
      github: "https://github.com/your-repo/image-encryption",
      live: "https://image-encryption.com",
      category: "app"
    },
    {
      id: 3,
      title: "Fair Recruitment - ML Bias Analysis and Mitigation Tool",
      description: "Developed a bias detection framework analyzing 15+ fairness metrics across gender, race, and age demographics in recruitment",
      image: "/images/projects/fair-recruitment.png",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Matplotlib", "Seaborn", "Statistical Analysis"],
      github: "https://github.com/your-repo/fair-recruitment",
      live: "https://fair-recruitment.com",
      category: "ai"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'Applications' },
    { id: 'ai', name: 'AI & ML' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
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
                M<span>y</span> Pr<span>oj</span>ects
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work, featuring web applications, software projects, and experiments.
          </p>
        </motion.div>
        
        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, i) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-pink-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass hover-lift rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20 overflow-hidden">
                {project.image ? (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                    <span>Image Placeholder</span>
                  </div>
                )}
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-900/20 dark:to-orange-900/20 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-100/50 dark:border-gray-700/50"
                      whileHover={{ y: -2, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProject.title}
          description={selectedProject.description}
          image={selectedProject.image}
          tags={selectedProject.technologies}
          githubUrl={selectedProject.github}
          demoUrl={selectedProject.live}
        />
      )}
    </div>
  );
} 