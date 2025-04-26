import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-background/90 shadow-md backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto">
        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          <a 
            onClick={() => scrollToSection("home")}
            className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground cursor-pointer transition-colors"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection("about")} 
            className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground cursor-pointer transition-colors"
          >
            About
          </a>
          <a 
            onClick={() => scrollToSection("skills")} 
            className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground cursor-pointer transition-colors"
          >
            Skills
          </a>
          <a 
            onClick={() => scrollToSection("projects")} 
            className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground cursor-pointer transition-colors"
          >
            Projects
          </a>
          <a 
            onClick={() => scrollToSection("contact")} 
            className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground cursor-pointer transition-colors"
          >
            Contact
          </a>
          <a 
            href="/ANTRIKSH_DUBEY_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground cursor-pointer transition-colors flex items-center gap-2"
          >
            <FileText size={20} />
            Resume
          </a>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/ANTRIKSH97" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/adidev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center">
          <button onClick={toggleMenu} className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-background shadow-lg absolute top-full left-0 w-full py-4 animate-fade-in">
            <div className="container mx-auto flex flex-col space-y-4">
              <a 
                onClick={() => scrollToSection("home")}
                className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground px-4 py-2 cursor-pointer transition-colors"
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection("about")} 
                className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground px-4 py-2 cursor-pointer transition-colors"
              >
                About
              </a>
              <a 
                onClick={() => scrollToSection("skills")} 
                className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground px-4 py-2 cursor-pointer transition-colors"
              >
                Skills
              </a>
              <a 
                onClick={() => scrollToSection("projects")} 
                className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground px-4 py-2 cursor-pointer transition-colors"
              >
                Projects
              </a>
              <a 
                onClick={() => scrollToSection("contact")} 
                className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground px-4 py-2 cursor-pointer transition-colors"
              >
                Contact
              </a>
              <a 
                href="/ANTRIKSH_DUBEY_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground px-4 py-2 cursor-pointer transition-colors flex items-center gap-2"
              >
                <FileText size={20} />
                Resume
              </a>
              <div className="flex items-center space-x-4 px-4 py-2">
                <a 
                  href="https://github.com/ANTRIKSH97" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/adidev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-primary-foreground"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
