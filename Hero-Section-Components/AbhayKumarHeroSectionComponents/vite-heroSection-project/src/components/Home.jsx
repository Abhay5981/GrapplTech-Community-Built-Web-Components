import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skill";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Hero />
        <About />
        <Skill />
        <Contact />
      </div>
    </>
  );
};

export default Home;
