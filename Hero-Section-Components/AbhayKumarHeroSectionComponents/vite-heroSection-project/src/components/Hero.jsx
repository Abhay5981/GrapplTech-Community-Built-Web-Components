import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { Parallax } from "react-parallax";
import useTheme from "../contexts/theme"; // Import the useTheme hook

const Hero = () => {
  const { themeMode } = useTheme(); // Access the theme context

  return (
    <>
      <Particles
        className="absolute w-full h-full"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
      <Parallax bgImage="/path-to-your-image.jpg" strength={500}>
        {/* Apply theme classes conditionally */}
        <section
          className={`${
            themeMode === "dark"
              ? "bg-gray-900 text-white"
              : "bg-[#ecf4fb] text-gray-800"
          } body-font bg-[#ecf4fb] flex items-center w-full h-screen py-16 font-serif`}
        >
          <div className="container mx-auto flex px-5 py-10 flex-col-reverse md:flex-row items-center justify-center">
            {/* Left Content */}
            <div className="flex flex-col md:items-start md:text-left text-center w-full md:w-1/2 lg:pr-24 md:pr-16 mb-10 md:mb-0">
              <p className="title-font text-2xl sm:text-3xl md:text-4xl font-serif font-normal">
                Hello, It's Me
              </p>
              <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-violet-500">
                Abhay Kumar
              </h1>
              <p className="text-lg sm:text-xl mt-4 ">And I'm a</p>

              <ReactTyped
                strings={[
                  "Frontend Developer",
                  "React Enthusiast",
                  "UI/UX Designer!",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                wrapper="p"
                className="leading-relaxed text-2xl sm:text-xl font-semibold"
              />

              <p className="leading-relaxed text-base sm:text-lg mt-4 ">
                Aspiring frontend developer passionate about crafting engaging
                user experiences. Eager to learn and contribute to innovative
                web projects. With a strong foundation in HTML, CSS, and
                JavaScript, I strive to create responsive and visually appealing
                websites that not only look great but also provide seamless
                functionality. I am always excited to explore new technologies
                and frameworks, such as React, to enhance my skills and bring
                fresh ideas to life.
              </p>

              <div className="flex justify-center md:justify-start mt-6">
                <a
                  href="https://drive.google.com/file/d/1w8ADAasy1OS256_yPKnA03CNnJir5JSR/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 animate-bounce rounded text-lg">
                    Download Resume
                  </button>
                </a>
              </div>
              <div className="flex justify-center md:justify-start mt-6 space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://linkedin.com/in/abhayk5981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition duration-300"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/in/Abhay5981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition duration-300"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 lg:w-1/4 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full blur-sm opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <img
                className="object-cover object-center rounded-full mx-auto border-4 border-yellow-900 border-dotted sm:w-64 sm:h-64 md:h-80 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                alt="hero"
                src="/image/portfolio pic_processed.jpeg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white text-lg font-bold">Hello, I'm Abhay</p>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </>
  );
};

export default Hero;
