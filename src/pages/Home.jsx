import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      id="home"
      className=" relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden text-white"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <div className="z-20">
        <h1 className="tex-4xl md:text-6xl font-bold mb-4">
          Hi, I am Muhammad Faizan
        </h1>
        <h2 className="text-xl mb-4 md:text-2xl text-white-600 dark:text-gray-300">
          I'm a{" "}
          <span className="text-gray-600 font-semibold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN STACK ENGINEER",
                " JavaScript Lover",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorBlinking={true}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-blue-600 text-whit rounded-lg hover:bg-blue-700 transition"
        >
          {" "}
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
