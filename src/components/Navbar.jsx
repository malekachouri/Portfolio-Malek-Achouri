import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Ramagiri Jithendar
        </h1>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          <a href="#about" className="hover:text-indigo-600 transition-all">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition-all">Skills</a>
          <a href="#experience" className="hover:text-indigo-600 transition-all">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 transition-all">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition-all">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
