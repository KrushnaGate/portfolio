import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-primary/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-secondary text-xl font-bold">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} className="nav-link">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-tertiary hover:text-secondary"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link block px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">krushna Gate</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-tertiary mb-8">
              Software Engineer (Backend Developer)
            </h2>
            <p className="text-lg text-tertiary max-w-2xl mx-auto mb-8">
              I build exceptional digital experiences with modern technologies.
            </p>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-tertiary mb-4">
                I am a passionate Software Engineer with a postgraduate degree,
                specializing in creating innovative solutions and building
                robust applications.
              </p>
              <p className="text-tertiary">
                My name is Krushna Sakharam Gate. I am from Pune. I have
                completed my post-graduation (MCS) in 2023 from Pratibha College
                of Commerce and Computer Studies, affiliated with Savitribai
                Phule Pune University, with a score of 70%. I have completed a
                6-month full-stack MERN development internship at Seed Infotech.
                I have hands-on experience with technologies like Node.js,
                React.js, MongoDB, Express.js, Javascript and AWS (for file
                uploading). Currently, I am working as a Backend Developer in
                software development and also leading the team as a Team Lead
                (TL)
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              {/* Add your image here */}
              <div className="w-64 h-64 bg-tertiary rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-primary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "AWS",
              "Socket.io",
              "Github",
              "Mongodb",
            ].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-primary/50 p-6 rounded-lg text-center"
              >
                <span className="text-secondary text-xl font-medium">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary/50 p-6 rounded-lg"
              >
                <div className="h-48 bg-tertiary rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                <p className="text-tertiary mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-secondary hover:underline">
                    View Project
                  </a>
                  <a href="#" className="text-secondary hover:underline">
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-primary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-tertiary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-primary/50 border border-tertiary rounded-md px-4 py-2 focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-tertiary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-primary/50 border border-tertiary rounded-md px-4 py-2 focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-tertiary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-primary/50 border border-tertiary rounded-md px-4 py-2 focus:outline-none focus:border-secondary"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-tertiary">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
