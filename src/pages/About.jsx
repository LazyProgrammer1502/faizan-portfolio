import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* 🖼️ Your Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/Faizan.jpeg"
            alt="Faizan"
            className="w-60 h-60 object-cover rounded-full shadow-lg border-4 border-cyan-500 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* 📝 About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm <b>MUHAMMAD FAIZAN</b> -- a passionate Full Stack Developer with
            expertise in modern web technologies, specializing in React,
            Node.js, MongoDB, and Express. I thrive on building scalable,
            real-world applications that solve problems and deliver seamless
            user experiences.
          </p>
          <p className="mt-4">
            With a strong foundation in JavaScript, I enjoy crafting responsive
            front-end interfaces using React (with hooks, context, and Redux for
            state management) and efficient back-end systems with Node.js,
            Express, and MongoDB. I leverage Tailwind CSS for rapid,
            utility-first styling and Vite for blazing-fast builds and
            development workflows.
          </p>
          <p className="mt-4">
            Beyond coding, I’m passionate about clean architecture, performance
            optimization, and RESTful API design. I use Git for version control
            and follow best practices to ensure maintainable, collaborative
            code. Whether it’s debugging a tricky issue or learning a new
            technology, I’m always eager to grow and contribute to impactful
            projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
