
import React, { useState } from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects } from "@/data/projects";
import type { CategoryType } from "@/types/project";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<CategoryType>("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => {
        if (filter === "AI" && project.tech.some(t => ["OpenAI", "AI", "Machine Learning", "ML"].includes(t))) return true;
        if (filter === "Frontend" && project.tech.some(t => ["React", "HTML/CSS", "JavaScript", "TypeScript", "Next.js"].includes(t))) return true;
        if (filter === "Backend" && project.tech.some(t => ["Node.js", "Express", "MongoDB", "SQL", "Fastify", "Python"].includes(t))) return true;
        if (filter === "Web App" && project.tech.some(t => ["React", "Next.js"].includes(t))) return true;
        return false;
      });

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bgGradient via-bgDark to-bgGradient opacity-50" />
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header">Projects</h2>
          <div className="section-divider"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on that represent my skills and interests.
          </p>
        </motion.div>

        <ProjectFilter 
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/ANTRIKSH97" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium shadow hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="mr-2" />
            See More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
