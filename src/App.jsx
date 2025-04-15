import Header from "./sections/Header";
import Hero from "./sections/Hero";
import React, { Suspense } from "react";

// Lazy imports
const ProjectsRecent = React.lazy(() => import('./sections/ProjectsRecent'));
const TapeSection = React.lazy(() => import('./sections/Tape'));
const AboutSection = React.lazy(() => import('./sections/About'));
const Experience = React.lazy(() => import('./sections/Experience'));
const ContactSection = React.lazy(() => import('./sections/Contact'));
const Footer = React.lazy(() => import('./sections/Footer'));

function App() {
  return (
    <div>
      <Header />
      <Hero />

      <Suspense fallback={<div className="text-white text-center">Cargando secciones...</div>}>
        <ProjectsRecent />
        <TapeSection />
        <AboutSection />
        <Experience />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
