import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Ramagiri Jithendar
        </h1>
        
        <nav aria-label="Main navigation">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
            <li><a href="#about" className="hover:text-indigo-500">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-500">Skills</a></li>
            <li><a href="#experience" className="hover:text-indigo-500">Experience</a></li>
            <li><a href="#projects" className="hover:text-indigo-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
            <li><ThemeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
