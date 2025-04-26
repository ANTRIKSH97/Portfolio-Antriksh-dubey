
import React from "react";
import { ArrowRight, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bgDark via-bgGradient to-bgDark opacity-90" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 mt-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl space-y-6">
            <motion.div variants={itemVariants} className="glass-card inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary mb-6">
              <Code size={16} className="text-primary" />
              <span>Full Stack Developer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-gradient font-title">
              Hi, I'm <span className="text-primary">Antriksh Dubey</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Crafting innovative web solutions and AI-powered applications that push the boundaries of technology.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="glass-card group px-6 py-3 rounded-full flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 border border-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="glass-card px-6 py-3 rounded-full flex items-center gap-2 hover:bg-muted/10 transition-all duration-300 border border-muted/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <Rocket size={18} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
