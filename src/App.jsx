import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Languages from "./pages/Languages";
import Awards from "./pages/Awards";
import Associative from "./pages/Associative";
import Contact from "./pages/Contact";

const App = () => {
  // Dark mode initialization
  useEffect(() => {
    const theme = localStorage.theme || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  // Array to map sections dynamically
  const sections = [
    { id: "home", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "education", component: <Education /> },
    { id: "skills", component: <Skills /> },
    { id: "experience", component: <Experience /> },
    { id: "projects", component: <Projects /> },
    { id: "certifications", component: <Certifications /> },
    { id: "languages", component: <Languages /> },
    { id: "awards", component: <Awards /> },
    { id: "associative", component: <Associative /> },
    { id: "contact", component: <Contact /> },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-700">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {sections.map(({ id, component }) => (
          <div key={id} id={id}>
            {component}
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
