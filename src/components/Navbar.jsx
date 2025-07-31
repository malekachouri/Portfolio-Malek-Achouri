// src/components/Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Ramagiri Jithendar
        </h1>
        <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
          <a href="#experience" className="hover:text-indigo-600 transition">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
