import React, { useState } from "react";
import useTheme from "../contexts/theme"; // Adjust the path according to your project structure

const Contact = () => {
  const { themeMode } = useTheme(); // Get the current theme mode from the context
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div
      className={`body-font relative font-serif ${
        themeMode === "dark"
          ? "bg-gray-900 text-white"
          : "bg-[#ecf4fb] text-gray-800"
      }`}
    >
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="font-serif font-bold text-2xl md:text-3xl mb-4 md:mb-8">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg">
            We would love to hear from you! Please fill out the form below to
            get in touch.
          </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`leading-7 text-sm ${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-opacity-50 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-4 leading-8 transition-colors duration-200 ease-in-out ${
                    themeMode === "dark"
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                  }`}
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`leading-7 text-sm ${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-opacity-50 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-4 leading-8 transition-colors duration-200 ease-in-out ${
                    themeMode === "dark"
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`leading-7 text-sm ${
                    themeMode === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-opacity-50 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out ${
                    themeMode === "dark"
                      ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-700 placeholder-gray-500"
                  }`}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
