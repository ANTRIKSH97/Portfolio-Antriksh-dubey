import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
// Removed ThemeToggler import

const Index = () => {
  // ⬇️ Yaha Title set kar rahe hain
  useEffect(() => {
    document.title = "Antriksh Dubey"; // Yaha apna naam likh diya
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-bgDark via-bgGradient to-bgDark transition-colors">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
        {/* Removed ThemeToggler component */}
      </div>
    </>
  );
};

export default Index;
