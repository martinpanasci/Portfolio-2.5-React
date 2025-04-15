import Header from "./sections/Header";
import Hero from "./sections/Hero";
import ProjectsRecent from "./sections/ProjectsRecent";
import TapeSection from "./sections/Tape";
import AboutSection from "./sections/About";
import Experience from "./sections/Experience";
import ContactSection from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {


  return (
    <div>  
      <div>
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Break the world
      </button>
    </div>      
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
