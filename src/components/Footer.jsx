import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 text-gray-600 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Left - Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Faizan.dev</h2>
          <p className="text-sm text-gray-300 mt-1">
            Full-Stack Developer Portfolio
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="space-x-4">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Right - Social Links */}
        <div className="flex justify-center md:justify-end gap-6 text-xl">
          <a
            href="https://github.com/LazyProgrammer1502"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-faizan-08028127b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-cyan-400 transition-transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-8 text-sm text-gray-400">
        ©️ {new Date().getFullYear()} Faizan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
