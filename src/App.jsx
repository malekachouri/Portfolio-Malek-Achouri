import React, { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

// ✅ Lazy-loaded sections (loaded only when needed)
const Projects = lazy(() => import("./pages/Projects"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Languages = lazy(() => import("./pages/Languages"));
const Awards = lazy(() => import("./pages/Awards"));
const Associative = lazy(() => import("./pages/Associative"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  // Initialize dark mode
  useEffect(() => {
    const theme = localStorage.theme || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-700">
      {/* Skip link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>

        {/* Suspense fallback while lazy-loaded sections render */}
        <Suspense
          fallback={
            <div className="text-center py-20 text-indigo-600 font-semibold">
              Loading...
            </div>
          }
        >
          <section id="projects">
            <Projects />
          </section>
          <section id="certifications">
            <Certifications />
          </section>
          <section id="languages">
            <Languages />
          </section>
          <section id="awards">
            <Awards />
          </section>
          <section id="associative">
            <Associative />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
