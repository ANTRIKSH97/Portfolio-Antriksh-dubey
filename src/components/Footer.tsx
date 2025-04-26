
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-background text-white dark:text-foreground py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Antriksh Dubey</h2>
            <p className="text-gray-400 dark:text-muted-foreground mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/ANTRIKSH97" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/adidev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@adidev.me" 
              className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 dark:border-border my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Antriksh Dubey. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary-foreground transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary-foreground transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary-foreground transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 dark:text-muted-foreground hover:text-white dark:hover:text-primary-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
