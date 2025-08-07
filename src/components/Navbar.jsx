import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Achouri Malek
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          <a href="#home" onClick={handleClose} className="hover:text-indigo-600">Home</a>
          <a href="#about" onClick={handleClose} className="hover:text-indigo-600">About</a>
          <a href="#education" onClick={handleClose} className="hover:text-indigo-600">Education</a>
          <a href="#skills" onClick={handleClose} className="hover:text-indigo-600">Skills</a>
          <a href="#experience" onClick={handleClose} className="hover:text-indigo-600">Experience</a>
          <a href="#projects" onClick={handleClose} className="hover:text-indigo-600">Projects</a>
          <a href="#certifications" onClick={handleClose} className="hover:text-indigo-600">Certifications</a>
          <a href="#languages" onClick={handleClose} className="hover:text-indigo-600">Languages</a>
          <a href="#awards" onClick={handleClose} className="hover:text-indigo-600">Awards</a>
          <a href="#associative" onClick={handleClose} className="hover:text-indigo-600">Associative</a>
          <a href="#contact" onClick={handleClose} className="hover:text-indigo-600">Contact</a>
          <ThemeToggle />
        </nav>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-gray-800 dark:text-white text-2xl cursor-pointer"
          onClick={handleToggle}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 pt-2 text-center space-y-4 shadow">
          <a href="#home" onClick={handleClose} className="block hover:text-indigo-600">Home</a>
          <a href="#about" onClick={handleClose} className="block hover:text-indigo-600">About</a>
          <a href="#education" onClick={handleClose} className="block hover:text-indigo-600">Education</a>
          <a href="#skills" onClick={handleClose} className="block hover:text-indigo-600">Skills</a>
          <a href="#experience" onClick={handleClose} className="block hover:text-indigo-600">Experience</a>
          <a href="#projects" onClick={handleClose} className="block hover:text-indigo-600">Projects</a>
          <a href="#certifications" onClick={handleClose} className="block hover:text-indigo-600">Certifications</a>
          <a href="#languages" onClick={handleClose} className="block hover:text-indigo-600">Languages</a>
          <a href="#awards" onClick={handleClose} className="block hover:text-indigo-600">Awards</a>
          <a href="#associative" onClick={handleClose} className="block hover:text-indigo-600">Associative</a>
          <a href="#contact" onClick={handleClose} className="block hover:text-indigo-600">Contact</a>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
