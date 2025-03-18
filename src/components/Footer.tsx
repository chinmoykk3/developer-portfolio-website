import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 shadow-inner py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
            © {new Date().getFullYear()} Developer Portfolio. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 