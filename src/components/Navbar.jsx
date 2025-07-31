import React from "react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Ramagiri Jithendar
        </h1>
        <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-indigo-600"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
