import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Life Saver Kust",
    description:
      "Blood donation platform connecting patients with donors, managing events and certificates. Role-based access with Super Admin and Admins.",
    image: "/lifesaverkust.jpeg",
    github: "https://github.com/LazyProgrammer1502/blood-donation-frontend",
    demo: "https://life-saver-kust.vercel.app/",
    tech: ["React", "Node", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "Developer Portfolio",
    description:
      "Personal portfolio with animated sections, scrollspy navbar, resume download, and fully responsive design.",
    image: "/portfolio.jpg",
    github: "https://github.com/LazyProgrammer1502/faizan-portfolio",
    demo: "https://muhammad-faizan-portfolio.vercel.app/",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Job Portal",
    description:
      "Full-stack job board — employers post jobs, seekers apply. JWT auth, role-based access, file uploads, email notifications.",
    image: "/jobs.png",
    github: "https://github.com/LazyProgrammer1502/job-board",
    demo: "https://job-board-ten-peach.vercel.app/jobs",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "ChatApp",
    description:
      "Real-time chat with DMs, group rooms, typing indicators, read receipts, and file sharing via Socket.io.",
    image: "/chat-app.png",
    github: "https://github.com/LazyProgrammer1502/chat-app",
    demo: "https://chat-app-xi-nine-38.vercel.app",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
  },
  {
    title: "Auth System",
    description:
      "Production-grade auth — JWT refresh token rotation, Google OAuth 2.0, forgot/reset password, Swagger API docs.",
    image: "/auth-system.png",
    github: "https://github.com/LazyProgrammer1502/auth-system",
    demo: "https://auth-system-zeta-ten.vercel.app",
    tech: ["React", "Node.js", "Passport.js", "MongoDB", "Swagger"],
  },
  {
    title: "Blog CMS",
    description:
      "Full-stack blog platform — TipTap rich text editor, admin panel, comment moderation, SEO fields, Cloudinary uploads.",
    image: "/blog-cms.png",
    github: "https://github.com/LazyProgrammer1502/blog-cms",
    demo: "https://blog-cms-xi-eight.vercel.app",
    tech: ["React", "TipTap", "Node.js", "MongoDB", "Cloudinary"],
  },
];

export default function ProjectCards() {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-20 bg-[#0f172a] text-white"
      style={{
        backgroundImage: "url('/project-background.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 border border-white/20 rounded-xl shadow-lg backdrop-blur flex flex-col overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover"
              />
              {/* Overlay links on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 text-2xl transition-colors"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 text-xl transition-colors"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base font-semibold mb-1.5 leading-snug">{project.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-3 flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
