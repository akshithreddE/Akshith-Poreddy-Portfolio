import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Layout, Database, Server } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-blue-600">AP</a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-24">
        <div className="container mx-auto px-6 py-24">
          <div className="flex items-start justify-between">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Hi, I'm Akshith Poreddy</h1>
              <p className="text-xl mb-8 text-blue-100">A passionate Full-Stack Developer from Warangal, Hyderabad, India</p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get in Touch
                </a>
                <a href="#projects" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View My Work
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out hover:rotate-3">
                 
                   <img src="WhatsApp Image 2025-02-15 at 14.31.07_f6c8b947.jpg"

                    alt="Akshith Poreddy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-0.5 bg-white/20 blur rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm Akshith, a passionate Full-Stack Developer from Warangal, Hyderabad, India. Currently pursuing a Computer Science degree at Kakatiya Institute of Technology & Sciences (KITSW), I thrive on enhancing my coding skills and building innovative applications.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I specialize in developing WebApps and dynamic websites, constantly pushing my limits by working on Full-Stack clones. Dedicated to self-improvement, I am always exploring new technologies to refine my craft and create impactful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Layout className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">HTML5</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">CSS3</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">ReactJS</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">NodeJS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">ExpressJS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PHP</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Java</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">C++</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Database & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Netlify</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science</h3>
              <p className="text-gray-600 mb-2">Kakatiya Institute of Technology & Sciences (KITSW)</p>
              <p className="text-gray-500">2023 - 2026 (Pursuing)</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
              <p className="text-gray-600 mb-2">Alphores Junior College, Warangal</p>
              <p className="text-gray-500">2020 - 2022</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Primary Education</h3>
              <p className="text-gray-600 mb-2">Bharathi Vidya Bhavan High School, Hanamkonda</p>
              <p className="text-gray-500">2014 - 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-2">Self-Employed Full Stack Developer</h3>
              <p className="text-gray-600 mb-2">Freelance</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Developing WebApps and dynamic websites</li>
                <li>• Building Full-Stack clones of popular applications</li>
                <li>• Continuously learning and implementing new technologies</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Full Stack Development Intern</h3>
              <p className="text-gray-600 mb-2">Bharat Intern</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Completed comprehensive full stack development internship</li>
                <li>• Worked on real-world projects and applications</li>
                <li>• Enhanced skills in both frontend and backend development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="E-commerce Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">A full-stack e-commerce solution with React, Node.js, and MongoDB.</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <Github size={18} /> Code
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Task Management Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">A collaborative task management tool built with React and Firebase.</p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <Github size={18} /> Code
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <a href="mailto:akshithreddy494@gmail.com" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <span className="text-gray-600">Email Me</span>
              </a>
              <a href="https://github.com/akshithreddE" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Github className="w-8 h-8 text-blue-600 mb-3" />
                <span className="text-gray-600">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/akshith-poreddy-b065532b3/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Linkedin className="w-8 h-8 text-blue-600 mb-3" />
                <span className="text-gray-600">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Akshith Poreddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;