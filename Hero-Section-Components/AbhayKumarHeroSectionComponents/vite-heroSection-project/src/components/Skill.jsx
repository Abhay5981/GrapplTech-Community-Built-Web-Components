import React from "react";
import useTheme from "../contexts/theme"; // Ensure this path is correct

const Skill = () => {
  const { themeMode } = useTheme(); // Using the useTheme hook to get the current theme mode

  return (
    <section
      id="skill"
      className={`w-full min-h-screen flex items-center justify-center ${
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#ecf4fb] text-gray-800"
      }`}
    >
      <div className="text-center">
        <h1 className="font-serif font-bold text-2xl mb-5">Skills</h1>
        <ul className="flex flex-wrap gap-4 justify-center p-8">
          <li className="bg-yellow-300 px-4 py-2 rounded">HTML</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">CSS</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">JavaScript</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">React</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Node.js</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">TypeScript</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Bootstrap</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Git</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Tailwind</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">SASS</li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
