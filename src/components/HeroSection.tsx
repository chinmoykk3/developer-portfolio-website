'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 px-6 md:py-28 overflow-hidden bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Chinmoy Kalita</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
            Frontend Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating clean, efficient, and user-friendly interfaces.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md h-80 sm:h-96"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            <Image
              src="/profile-placeholder.jpg"
              alt="Developer"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-xl"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-full shadow-lg z-10">
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 dark:bg-indigo-500 rounded-full text-white text-xl font-bold">
              New
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300">
              Years Experience
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 