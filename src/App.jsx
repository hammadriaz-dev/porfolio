import React, { useState } from 'react';
// Assuming lucide-react icons are available in the environment
import {
  User, Briefcase, Code, Mail, Home, Linkedin, Github, MessageSquare, Phone
} from 'lucide-react';


import profileImg from './assets/profile-image.jpg';


// NOTE: Ensure your profile image is located at src/assets/profile-image.jpg
// If you don't have an image, remove the import and the <img> tag in HeroSection.
// import profileImg from './assets/profile-image.jpg'; 
// Since we cannot verify this image exists, we'll use a placeholder for stability.

/**
 * Main App Component: Professional Developer Portfolio
 * Features: Single-page layout, Teal/Orange accent, 3-column project layout, mock data.
 */
const App = () => {
  // Mock data for the portfolio
  const name = "Hammad Riaz"; // <<< CUSTOMIZED
  const role = "Full Stack Developer | Laravel & React Expert"; // <<< CUSTOMIZED
  // CRITICAL FIX: Removed '+' for proper wa.me link construction
  const whatsappNumber = "923088667579"; 

  // --- Theme Variables (Teal/Orange) ---
  const primaryColor = "text-cyan-400";
  const secondaryColor = "text-orange-400";
  const primaryBg = "bg-cyan-600";
  const primaryHoverBg = "hover:bg-cyan-700";
  const borderColor = "border-cyan-800";
  const shadowColor = "shadow-cyan-500/30";

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const projects = [
    { title: "Rental House Web App", description: "Comprehensive platform for listing and booking rental properties.", technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"] },
    { title: "Topnotch Growth Services", description: "Lead generation and cold calling services website with dynamic UI.", technologies: ["ReactJS", "Tailwind CSS", "APIs"] },
    { title: "Real Estate CRM", description: "Customer relationship management system tailored for the real estate industry.", technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"] },
    { title: "Clothing Store E-commerce", description: "Full-featured online store with product catalog and checkout system.", technologies: ["Laravel", "MySQL", "Blade"] },
    { title: "Art Selling Website", description: "Marketplace for artists to showcase and sell their original artwork.", technologies: ["Laravel", "PHP", "MySQL"] },
    { title: "Multivendor E-commerce APIS", description: "Robust backend APIs for a scalable multivendor platform.", technologies: ["Laravel", "PHP", "APIs", "MySQL"] },
  ];

  const skills = [
    { area: "Core Frameworks", list: ["Laravel", "ReactJS", "Bootstrap", "Tailwind CSS"] },
    { area: "Languages & Database", list: ["PHP", "JavaScript", "MySQL"] },
    { area: "Tools & Workflow", list: ["Git", "GitHub", "Vite", "Composer"] },
  ];
  
  // NOTE: State kept only for the local status message. 
  // Input fields are UNCONTROLLED and rely on the HTML action="POST" to Formspree.
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    // This handler prevents React from managing the submit, but we need the HTML form
    // action to execute, so we rely on the redirect for confirmation.
    // We can add a simple local message before redirecting.
    e.preventDefault(); 
    setStatusMessage('Submitting form to Formspree...');
    // Manually trigger the HTML form submission after showing the message
    e.target.submit();
  };

  // Utility component for skill badges
  const SkillBadge = ({ skill }) => (
    <span className={`inline-block bg-cyan-700/50 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-600 mr-2 mb-2 transition duration-300 hover:bg-cyan-600/70 hover:scale-[1.02]`}>
      {skill}
    </span>
  );

  // WhatsApp Button Component
  const WhatsAppButton = () => (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
      title="Chat on WhatsApp"
    >
      <Phone className="w-6 h-6" />
    </a>
  );

  // --- Sections ---

  const HeroSection = () => (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-20 pb-12 bg-gray-900 text-white border-b ${borderColor}`}>
      <div className="container mx-auto p-6 md:p-12 flex flex-col md:flex-row items-center justify-between max-w-6xl">
        <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left">
          <p className={`text-xl ${secondaryColor} mb-2 animate-fade-in-down`}>Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 animate-fade-in-left">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-8 animate-fade-in-up">{role}</h2>
          <a
            href="#projects"
            className={`inline-block ${primaryBg} ${primaryHoverBg} text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300 ease-in-out group`}
          >
            View Projects
            <Briefcase className="inline ml-2 w-4 h-4 group-hover:rotate-6 transition duration-300" />
          </a>
        </div>
        <div className="order-1 md:order-2 md:w-1/2 mb-10 md:mb-0 flex justify-center animate-fade-in-right">
          <div className={`w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-full flex items-center justify-center border-4 border-cyan-500 shadow-2xl ${shadowColor}`}>
            <img
              src={profileImg}
              alt="Hammad Riaz"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" className={`py-20 bg-gray-800 text-white border-b ${borderColor}`}>
      <div className="container mx-auto p-6 max-w-4xl">
        <h2 className={`text-4xl font-bold text-center mb-10 ${primaryColor}`}>
          <User className="inline-block w-6 h-6 mr-2 mb-1" /> About Me
        </h2>
        <div className="bg-gray-700 p-8 rounded-xl shadow-2xl">
          <p className="text-gray-300 mb-4 leading-relaxed">
            I am a dedicated <b>Full Stack Developer</b> specializing in the <b>Laravel and React ecosystem.</b> I focus on building robust, scalable applications, from complex e-commerce platforms to tailored CRM solutions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My experience in <b>PHP/Laravel</b> ensures a reliable and secure backend, while my proficiency in <b>ReactJS</b> delivers modern, dynamic user interfaces. I am committed to delivering high-quality, maintainable code that meets client needs perfectly.
          </p>
        </div>
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className={`inline-flex items-center text-lg text-white bg-orange-600 hover:bg-orange-700 font-semibold py-2 px-6 rounded-lg transition duration-300`}
          >
            Let's Collaborate <MessageSquare className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );

  const SkillsSection = () => (
    <section id="skills" className={`py-20 bg-gray-900 text-white border-b ${borderColor}`}>
      <div className="container mx-auto p-6 max-w-6xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${primaryColor}`}>
          <Code className="inline-block w-6 h-6 mr-2 mb-1" /> My Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div key={category.area} className={`bg-gray-800 p-6 rounded-xl shadow-xl border ${borderColor} hover:border-orange-500 transition duration-300`}>
              <h3 className={`text-2xl font-semibold mb-4 ${secondaryColor} border-b border-cyan-800 pb-2`}>{category.area}</h3>
              <div className="flex flex-wrap">
                {category.list.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section id="projects" className={`py-20 bg-gray-800 text-white border-b ${borderColor}`}>
      <div className="container mx-auto p-6 max-w-6xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${primaryColor}`}>
          <Briefcase className="inline-block w-6 h-6 mr-2 mb-1" /> Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition duration-300 border border-gray-600 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <SkillBadge key={tech} skill={tech} />
                  ))}
                </div>
                <a
                  href="https://github.com/hammadriaz-dev?tab=repositories"
                  className={`text-cyan-400 hover:text-orange-400 font-semibold inline-flex items-center text-sm group`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  View Live/Repo
                  <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto p-6 max-w-4xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${primaryColor}`}>
          <Mail className="inline-block w-6 h-6 mr-2 mb-1" /> Get in Touch
        </h2>
        <div className={`bg-gray-800 p-8 rounded-xl shadow-2xl border ${borderColor}`}>
          {statusMessage && (
            <div className={`p-4 mb-4 rounded-lg text-center bg-orange-600 text-white`}>
              {statusMessage}
            </div>
          )}
          
          {/* CRITICAL FIX: The onSubmit handler now triggers the status message before submitting */}
          <form action="https://formspree.io/f/xpwyblaz" method="POST" onSubmit={handleSubmit} className="space-y-6"> 
            
            {/* Input fields are now UNCONTROLLED (no value or onChange) to allow typing */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name" // REMAINS 'name'
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="_replyto" // CRITICAL FIX: Renamed for Formspree to enable reply-to functionality
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message" // REMAINS 'message'
                rows="4"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-4 ${primaryBg} ${primaryHoverBg} rounded-lg text-white font-semibold text-lg transition duration-300 ease-in-out shadow-lg transform hover:scale-[1.01]`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );


  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{/* CSS animations */}</style>

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800/95 backdrop-blur-sm shadow-xl">
        <nav className="container mx-auto p-4 flex justify-between items-center max-w-7xl">
          <div className="text-xl font-bold text-cyan-400">
            {name.split(' ')[0] || 'My'}
            <span className="text-orange-400">.dev</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-cyan-400 flex items-center transition duration-200 font-medium tracking-wide"
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md"
              aria-label="Toggle Menu"
              onClick={() => { /* Mobile menu toggle logic */ }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className={`bg-gray-800 py-8 border-t ${borderColor}`}>
        <div className="container mx-auto p-6 max-w-6xl text-center">
          <p className="text-gray-400 mb-4">&copy; {new Date().getFullYear()} {name || 'Portfolio'}. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/hammadriaz-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition duration-300" title="GitHub"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/hammad-riaz-95183721a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition duration-300" title="LinkedIn"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:hammadriaz458@gmail.com" className="text-gray-400 hover:text-cyan-400 transition duration-300" title="Email"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
