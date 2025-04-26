
import React from "react";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-bgDark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out to me for collaboration, job opportunities, or just to say hi!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-white">contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-tertiary rounded-full mr-4">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <a href="mailto:contact@adidev.me" className="text-neutral hover:text-primary transition-colors">
                    antrikshdubey15@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-tertiary rounded-full mr-4">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Location</h4>
                  <p className="text-neutral">Noida, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-tertiary rounded-full mr-4">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="text-neutral">+91 6393176649</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ANTRIKSH97" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-tertiary rounded-full text-neutral hover:bg-primary hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/adidev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-tertiary rounded-full text-neutral hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:contact@adidev.me" 
                  className="p-3 bg-tertiary rounded-full text-neutral hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in glass-card p-8 rounded-lg" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-tertiary border border-tertiary rounded-md text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-tertiary border border-tertiary rounded-md text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-tertiary border border-tertiary rounded-md text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-tertiary border border-tertiary rounded-md text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

