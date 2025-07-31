import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Ramagiri Jithendar
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          <a href="#home" className="hover:text-indigo-600 transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors duration-200">Skills</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors duration-200">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors duration-200">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
