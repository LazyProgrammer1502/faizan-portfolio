import React from "react";
import { FaGraduationCap, FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-cyan-500 mb-2">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Aspiring Software Engineer || Passionate about Web Development &
            Problem-Solving
          </p>

          {/* Download PDF Button */}
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-transform hover:scale-105"
          >
            <FaFileDownload />
            Download Resume
          </a>
        </div>

        {/* Timeline */}
        <div className="border-l-2 border-cyan-500 pl-6 space-y-8 relative">
          {/* Timeline Item */}
          {[
            {
              title: "MATRICULATION IN SCIENCE",
              duration: "2017 - 2019 | BISE Kohat",
              icon: <FaGraduationCap />,
              desc: "Completed matriculation with core subjects in science. Developed strong foundational knowledge in Mathematics, Physics, and Computer Science.",
            },
            {
              title: "INTERMEDIATE IN PRE-MEDICAL",
              duration: "2019 - 2021 | BISE Kohat",
              icon: <FaGraduationCap />,
              desc: "Studied Biology, Chemistry, and Physics with a focus on analytical thinking and problem-solving.",
            },
            {
              title: "DIPLOMA IN INFORMATION TECHNOLOGY (DIT)",
              duration: "2021 | TTB Peshawar",
              icon: <FaGraduationCap />,
              desc: "Completed foundational diploma in software tools, programming logic, networking, and computer hardware.",
            },
            {
              title: "CERTIFICATE IN INFORMATION TECHNOLOGY",
              duration: "2021 | NAVTTC Pakistan",
              icon: <FaGraduationCap />,
              desc: "Earned practical training in  Web Basics, HTML/CSS/JS.",
            },
            {
              title: "BS IN COMPUTER SCIENCE",
              duration:
                "2022 - Present | Khushal Khan Khattak University, Karak",
              icon: <FaGraduationCap />,
              desc: "Currently pursuing BS-CS with focus on data structures, software engineering, and full-stack web development.",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              {/* Dot + Icon */}
              <div className="absolute -left-9 top-1 bg-cyan-500 text-white p-2 rounded-full shadow">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h4 className="text-xl font-semibold text-cyan-400">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.duration}
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
