import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Medical Appointment System",
    description:
      "A full-stack MERN application to book, manage, and pay for appointments. Includes Stripe, email notifications, and admin dashboard.",
    image: "/project1.png",
    github: "https://github.com/yourname/project-1",
    demo: "https://yourproject1.vercel.app",
    tech: ["React", "Node", "MongoDB", "Stripe"],
  },
  {
    title: "Property Booking Platform",
    description:
      "Find and book properties with a dynamic listing interface, Cloudinary image upload, and Google Maps.",
    image: "/project2.png",
    github: "https://github.com/yourname/project-2",
    demo: "https://yourproject2.vercel.app",
    tech: ["MERN", "Cloudinary", "Google Maps"],
  },
  {
    title: "Developer Portfolio",
    description:
      " A personal portfolio built using React, Tailwind, Vite, and hosted on Vercel. Includes animated sections, scrollspy navbar, resume, and responsive design.",
    image: "/portfolio.jpg",
    github: "https://github.com/LazyProgrammer1502/faizan-portfolio",
    demo: "https://muhammad-faizan-portfolio.vercel.app/",
    tech: ["React", "Tailwind", "Vite"],
  },
];

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-20 bg-[#0f172a] dark:bg-gray-900 text-white "
      style={{
        backgroundImage: "url('/project-background.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur p-6 relative overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-3 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-cyan-500 font-medium mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-100/10 border border-cyan-300/20 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-lg">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaGithub />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
