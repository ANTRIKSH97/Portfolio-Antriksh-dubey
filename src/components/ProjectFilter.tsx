
import React from "react";
import { motion } from "framer-motion";
import { CategoryType, categories } from "@/types/project";

interface ProjectFilterProps {
  activeFilter: CategoryType;
  onFilterChange: (category: CategoryType) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeFilter,
  onFilterChange
}) => {
  return (
    <motion.div 
      className="mb-10 flex flex-wrap justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {categories.map(category => (
        <motion.button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeFilter === category 
              ? "bg-primary text-white" 
              : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
          }`}
          onClick={() => onFilterChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectFilter;
