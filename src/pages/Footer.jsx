import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-700">
      <p className="text-sm">
        © {new Date().getFullYear()} Achouri Malek. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
