'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import Image from 'next/image';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface GithubUrl {
  label: string;
  url: string;
}

interface DownloadUrl {
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  githubUrls?: GithubUrl[];
  downloadUrls?: DownloadUrl[];
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  demoUrl,
  githubUrls,
  downloadUrls 
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMultiRepo = Boolean(githubUrls);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Stop propagation of clicks on links to prevent modal from opening
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-gray-900/10 transition-all duration-300 border border-gray-100/80 dark:border-gray-700/80 cursor-pointer"
        onClick={openModal}
      >
        <div className="relative w-full h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>
        
        <div className="p-6 relative">
          {/* Abstract decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <motion.h3 
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            {isMultiRepo ? (
              <div className="flex flex-col gap-2">
                {githubUrls?.map((repo, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <motion.a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300"
                      aria-label={`View ${repo.label} Source Code`}
                      onClick={handleLinkClick}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={downloadUrls?.[index].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300"
                      aria-label={`Download ${downloadUrls?.[index].label}`}
                      onClick={handleLinkClick}
                    >
                      <FaDownload size={20} />
                    </motion.a>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {repo.label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex gap-3">
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300"
                  aria-label="View Source Code"
                  onClick={handleLinkClick}
                >
                  <FaGithub size={20} />
                </motion.a>
                {demoUrl && (
                  <motion.a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300"
                    aria-label="View Live Demo"
                    onClick={handleLinkClick}
                  >
                    <FaExternalLinkAlt size={18} />
                  </motion.a>
                )}
              </div>
            )}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 transition-all duration-300">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full border border-gray-100/50 dark:border-gray-700/50"
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        description={description}
        image={image}
        tags={tags}
        githubUrl={githubUrl}
        demoUrl={demoUrl}
      />
    </>
  );
} 