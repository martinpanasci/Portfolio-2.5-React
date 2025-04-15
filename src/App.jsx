import { useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ProjectsRecent from "./sections/ProjectsRecent";
import TapeSection from "./sections/Tape";
import AboutSection from "./sections/About";
import Experience from "./sections/Experience";
import ContactSection from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  useEffect(() => {
    throw new Error("Error de prueba en iOS");
  }, []); 

  return (
    <div>        
      <Header />
      <Hero />
      <ProjectsRecent />
      <TapeSection />
      <AboutSection />
      <Experience />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
