import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  // ✅ Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 } // Adjust if needed
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed w-full z-50 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/20 shadow-md transition-all">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 text-blue-600">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-cyan-400">
          Faizan.dev
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-cyan-400 after:w-full"
                    : "after:w-0"
                } hover:text-cyan-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl z-50"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-gray-900/90 text-white p-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 mt-16 text-lg">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-cyan-400 font-bold"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
