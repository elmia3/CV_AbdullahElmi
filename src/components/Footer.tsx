"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerText = {
    en: {
      copyright: `© ${currentYear} Abdullah Elmi. All rights reserved.`,
      built: "Built with Next.js, TypeScript, and Tailwind CSS",
    },
    nl: {
      copyright: `© ${currentYear} Abdullah Elmi. Alle rechten voorbehouden.`,
      built: "Gemaakt met Next.js, TypeScript en Tailwind CSS",
    },
  };

  return (
    <footer className="bg-gray-100 dark:bg-black py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {footerText[language].copyright}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              {footerText[language].built}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
