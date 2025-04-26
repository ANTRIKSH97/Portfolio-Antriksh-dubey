
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const ThemeToggler: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  
  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("light-mode", savedTheme === "light");
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(!newTheme);
    
    // Save theme preference
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    
    // Apply theme class to document
    document.documentElement.classList.toggle("light-mode", newTheme);
    
    // Show toast notification
    toast(newTheme ? "Light mode activated" : "Dark mode activated", {
      description: "Your theme preference has been saved",
      position: "bottom-right"
    });
  };
  
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-muted/30 backdrop-blur-md border border-muted/20 text-primary hover:bg-muted/50 transition-colors flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Sun size={20} className={`text-yellow-400 ${!isDark ? 'opacity-100' : 'opacity-40'}`} />
      <Switch 
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-slate-200"
      />
      <Moon size={20} className={`text-primary ${isDark ? 'opacity-100' : 'opacity-40'}`} />
    </motion.div>
  );
};

export default ThemeToggler;
