
import React from "react";
import { Star, Code, Layers, Database, Layout, Server, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  level: number;
  color: string;
  icon: string;
}

const TechIcon = ({ iconName }: { iconName: string }) => {
  const iconPath = `/icons/${iconName.toLowerCase()}.svg`;
  
  return (
    <img 
      src={iconPath} 
      alt={`${iconName} icon`} 
      className="w-6 h-6" 
      onError={(e) => {
        // Fallback to text if icon not found
        e.currentTarget.style.display = 'none';
      }}
    />
  );
};

const SkillCard = ({ name, level, color, icon }: SkillProps) => {
  return (
    <motion.div 
      className="glass-card p-4 rounded-xl transition-all duration-300"
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 30px -15px rgba(155, 135, 245, 0.3)" 
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="space-y-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <TechIcon iconName={icon} />
            <span className="text-sm font-medium text-foreground">{name}</span>
          </div>
          <span className="text-xs font-medium text-primary">{level}%</span>
        </div>
        <div className="w-full bg-muted/20 rounded-full h-2 overflow-hidden">
          <motion.div 
            className={`h-2 rounded-full ${color}`} 
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills: SkillProps[] = [
    { name: "React", level: 90, color: "bg-gradient-to-r from-blue-500 to-blue-600", icon: "react" },
    { name: "JavaScript", level: 95, color: "bg-gradient-to-r from-yellow-400 to-yellow-500", icon: "javascript" },
    { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-400 to-blue-500", icon: "typescript" },
    { name: "HTML/CSS", level: 95, color: "bg-gradient-to-r from-red-400 to-red-500", icon: "html" },
    { name: "Next.js", level: 80, color: "bg-gradient-to-r from-gray-600 to-gray-700", icon: "nextjs" },
  ];

  const backendSkills: SkillProps[] = [
    { name: "Node.js", level: 85, color: "bg-gradient-to-r from-green-500 to-green-600", icon: "nodejs" },
    { name: "Java", level: 80, color: "bg-gradient-to-r from-red-500 to-red-600", icon: "java" },
    { name: "Express", level: 80, color: "bg-gradient-to-r from-gray-700 to-gray-800", icon: "express" },
    { name: "Fastify", level: 75, color: "bg-gradient-to-r from-purple-500 to-purple-600", icon: "fastify" },
    { name: "MongoDB", level: 75, color: "bg-gradient-to-r from-green-400 to-green-500", icon: "mongodb" },
    { name: "SQL", level: 70, color: "bg-gradient-to-r from-blue-300 to-blue-400", icon: "sql" },
    { name: "Python", level: 65, color: "bg-gradient-to-r from-yellow-500 to-yellow-600", icon: "python" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bgDark via-bgDark to-bgGradient opacity-50" />
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-header">Technical Expertise</h2>
          <div className="section-divider"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency in various technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-card p-6 rounded-2xl space-y-6 border border-muted/20 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Layout className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gradient">Frontend Development</h3>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-card p-6 rounded-2xl space-y-6 border border-muted/20 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Server className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gradient">Backend Development</h3>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={index} {...skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { name: "Problem Solving", icon: <Lightbulb className="w-6 h-6 text-primary mx-auto mb-2" /> },
            { name: "Clean Code", icon: <Code className="w-6 h-6 text-primary mx-auto mb-2" /> },
            { name: "Responsive Design", icon: <Layout className="w-6 h-6 text-primary mx-auto mb-2" /> },
            { name: "Database Design", icon: <Database className="w-6 h-6 text-primary mx-auto mb-2" /> }
          ].map((skill, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-4 rounded-xl text-center hover:bg-primary/5 transition-colors border border-muted/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {skill.icon}
              <h4 className="text-sm font-medium text-foreground">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
