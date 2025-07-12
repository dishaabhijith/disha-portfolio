'use client';

import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaPinterest, FaStackOverflow, FaCodepen, FaYoutube, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiHashnode } from 'react-icons/si';
import { FaSpotify } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import { SiMedium, SiSteam } from 'react-icons/si';

const SocialLinks = () => {
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
      opacity: 1
    }
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.2,
      y: -3,
      rotate: 8,
      transition: {
        type: "spring",
        stiffness: 300,
        rotate: {
          duration: 0.2,
          ease: "easeOut"
        }
      }
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub size={20} />,
      url: "https://github.com/dishaabhijith",
      label: "GitHub",
      hoverColor: "hover:text-gray-900 dark:hover:text-white"
    },
    { 
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/disha2005",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2]"
    },
    { 
      icon: <FaXTwitter size={20} />,
      url: "https://x.com/dishaabhijith",
      label: "X (Twitter)",
      hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
      icon: <SiLeetcode size={20} />,
      url: "https://leetcode.com/dishaabhijith",
      label: "LeetCode",
      hoverColor: "hover:text-[#FFA116]"
    },
    { 
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/disha_abhijith",
      label: "Instagram",
      hoverColor: "hover:text-[#E4405F]"
    },
    { 
      icon: <FaDiscord size={20} />,
      url: "https://discord.com/invite/YGXX4ue5eb",
      label: "Discord",
      hoverColor: "hover:text-[#5865F2]"
    },
    { 
      icon: <FaSpotify size={20} />,
      url: "https://open.spotify.com/user/o1mhl5cn2icv8bc2z81fgaiqc?si=f870f4d6a78e4ce4",
      label: "Spotify",
      hoverColor: "hover:text-[#1DB954]"
    },
    {
      icon: <FaDev size={20} />,
      url: "https://dev.to/noiseless47",
      label: "Dev.to",
      hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
      icon: <SiMedium size={20} />,
      url: "https://medium.com/@asishyeleti2005",
      label: "Medium",
      hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
      icon: <SiSteam size={20} />,
      url: "https://steamcommunity.com/id/noiseless47",
      label: "Steam",
      hoverColor: "hover:text-[#00adee]"
    },
    {
      icon: <FaPinterest size={20} />,
      url: "https://pinterest.com/asishyeleti2005",
      label: "Pinterest",
      hoverColor: "hover:text-[#E60023]"
    },
    {
      icon: <FaStackOverflow size={20} />,
      url: "https://stackoverflow.com/users/your-stackoverflow-id",
      label: "Stack Overflow",
      hoverColor: "hover:text-[#F48024]"
    },
    {
      icon: <SiHashnode size={20} />,
      url: "https://hashnode.com/@asishyeleti2005",
      label: "Hashnode",
      hoverColor: "hover:text-[#2962FF]"
    },
    {
      icon: <FaCodepen size={20} />,
      url: "https://codepen.io/noiseless47",
      label: "CodePen",
      hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
      icon: <FaYoutube size={20} />,
      url: "https://youtube.com/@asishyeleti2005",
      label: "YouTube",
      hoverColor: "hover:text-[#FF0000]"
    },
    {
      icon: <FaReddit size={20} />,
      url: "https://reddit.com/u/noiseless47",
      label: "Reddit",
      hoverColor: "hover:text-[#FF4500]"
    }
  ];

  return (
    <motion.div 
      className="mt-8 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div 
        className="flex flex-wrap gap-6 justify-center items-center"
        variants={containerVariants}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
            className={`text-gray-400 transition-all duration-300 ${social.hoverColor}`}
            aria-label={social.label}
          >
            <motion.div variants={iconVariants}>
              {social.icon}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks; 