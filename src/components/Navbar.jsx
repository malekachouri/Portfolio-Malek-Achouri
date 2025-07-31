// src/components/Navbar.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer">
          Ramagiri Jithendar
        </h1>
        <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer hover:text-indigo-600 capitalize"
            >
              {item}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
