import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ProjectsRecent from "./sections/ProjectsRecent";
import TapeSection from "./sections/Tape";
import AboutSection from "./sections/About";
import React, { Suspense } from "react";

// Lazy imports
const Experience = React.lazy(() => import('./sections/Experience'));
const ContactSection = React.lazy(() => import('./sections/Contact'));
const Footer = React.lazy(() => import('./sections/Footer'));

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectsRecent />
      <TapeSection />
      <AboutSection />

      <Suspense fallback={<div className="text-white text-center">Cargando secciones...</div>}>

        <Experience />
        <ContactSection />
        <Footer />
        
      </Suspense>
    </div>
  );
}

export default App;
