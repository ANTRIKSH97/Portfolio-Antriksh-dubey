import React from "react";
import { User, Code, Briefcase } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-header">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 animate-scale-in">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <User className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-title font-bold text-gradient">Who I Am</h3>
            </div>
            <p className="text-neutral text-base">
            I’m Antriksh Dubey — a Full Stack Developer who loves turning ideas into reality through clean, scalable, and efficient code. I have hands-on expertise in both frontend and backend technologies, allowing me to create seamless, end-to-end digital experiences. Whether it's a sleek UI or a robust server-side application, I’m passionate about building solutions that truly make an impact.
            </p>
          </div>
          <div className="glass-card p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-title font-bold text-gradient">What I Do</h3>
            </div>
            <p className="text-neutral text-base">
            I specialize in building responsive and dynamic web applications using JavaScript, React, Node.js, and a range of modern technologies. I am committed to writing clean, efficient, and maintainable code, with a strong focus on crafting intuitive user interfaces that deliver exceptional user experiences.
            </p>
          </div>
          <div className="glass-card p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-title font-bold text-gradient">Experience</h3>
            </div>
            <p className="text-neutral text-base">
            With several years of professional experience, I’ve had the opportunity to work on a diverse range of projects, taking them from concept to deployment. My background spans both startups and established companies, where I’ve been instrumental in developing scalable applications and implementing efficient, high-impact solutions. Notably, I worked as a Web Developer at Transportix, where I contributed to real-world projects and gained hands-on experience in building and optimizing web solutions. This experience has further honed my ability to deliver robust, user-centric applications and refine development processes for maximum performance.
            </p>
          </div>
        </div>

        <div className="mt-12 glass-card p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-title font-bold text-gradient mb-4">My Journey</h3>
          <p className="text-neutral mb-4">
            My journey in tech began with a strong interest in programming and problem-solving. I've always been 
            fascinated by how technology can transform ideas into reality and create impactful solutions.
          </p>
          <p className="text-neutral mb-4">
            Throughout my career, I've focused on continuous learning and staying up-to-date with the latest 
            advancements in web development. I'm particularly interested in creating applications that are not only 
            functional but also provide exceptional user experiences.
          </p>
          <p className="text-neutral">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
            and sharing my knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
