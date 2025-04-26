
import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectProps } from "@/types/project";

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tech,
  github,
  liveDemo,
  impact
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-[2rem] border border-muted/20 hover:border-primary/30 transition-all duration-300 bg-bgCard shadow-lg"
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -15px rgba(155, 135, 245, 0.3)" 
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ 
            backgroundImage: `url(${image})`, 
            transform: isHovered ? "scale(1.05)" : "scale(1)"
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent transition-opacity duration-300 flex items-end ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <div className="p-4 flex space-x-3">
            {github && (
              <motion.a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>
            )}
            {liveDemo && (
              <motion.a 
                href={liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary/80 transition-colors text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-title text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        
        {impact && (
          <div className="mb-4 p-2 bg-primary/10 rounded-md border border-primary/20">
            <p className="text-xs text-primary font-medium">💡 {impact}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((item, index) => (
            <motion.span 
              key={index}
              className="text-xs bg-tertiary text-grayDark px-2 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
