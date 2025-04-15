// src/section/Header.jsx
import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import LanguageSwitcherMobile from "../components/LanguageSwitcherMobile";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [copied, setCopied] = useState(false);
  const { langEn } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mpanasci95@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center fixed top-3 z-50">
      {/* NAVIGATION LINKS */}
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link to="home" smooth duration={500} className="nav-item cursor-pointer">
          {langEn ? "Home" : "Inicio"}
        </Link>
        <Link to="projects" smooth duration={500} className="nav-item cursor-pointer">
          {langEn ? "Projects" : "Proyectos"}
        </Link>
        <Link to="about" smooth duration={500} className="nav-item cursor-pointer">
          {langEn ? "About" : "Sobre mí"}
        </Link>
        <Link to="experience" smooth duration={500} className="nav-item cursor-pointer hidden md:flex">
          {langEn ? "Experience" : "Experiencia"}
        </Link>
        <Link to="contact" smooth duration={500} className="nav-item cursor-pointer bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          {langEn ? "Contact" : "Contacto"}
        </Link>
      </nav>

      {/* EXTERNAL LINKS */}
      <nav className="flex p-0.5 border border-white/15 border-t-0 rounded-full bg-white/10 backdrop-blur -mt-[0px]">
        {/* CV */}
        <a href="https://mpanasci.com/cv.pdf" target="_blank" rel="noopener noreferrer" className="nav-item flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L18.5 9H15z" />
          </svg>
          {langEn ? "CV" : "CV"}
        </a>

        {/* Email */}
        <div className="relative inline-block">
          <button onClick={(e) => { e.preventDefault(); handleCopyEmail(); }} className="nav-item flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0-5H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z" />
            </svg>
            {langEn ? "Email" : "Correo"}
          </button>
          {copied && (
            <span className="tooltip tooltip-visible">
              {langEn ? "Email copied!" : "¡Correo copiado!"}
            </span>
          )}
        </div>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/martin-panasci/" target="_blank" rel="noopener noreferrer" className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.453c.586-.836 1.618-1.453 2.75-1.453 1.932 0 3.5 1.568 3.5 3.5v6.5z" />
          </svg>
        </a>

        {/* GitHub */}
        <a href="https://github.com/martinpanasci" target="_blank" rel="noopener noreferrer" className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.39 7.86 10.907.574.104.785-.25.785-.557 0-.274-.01-1-.015-1.963-3.198.694-3.874-1.542-3.874-1.542-.523-1.327-1.278-1.681-1.278-1.681-1.046-.715.08-.7.08-.7 1.157.082 1.765 1.188 1.765 1.188 1.029 1.763 2.7 1.254 3.357.959.105-.745.404-1.254.733-1.542-2.553-.29-5.238-1.277-5.238-5.682 0-1.255.45-2.282 1.188-3.086-.119-.291-.514-1.462.112-3.048 0 0 .968-.31 3.17 1.18a11.01 11.01 0 012.884-.388c.977.004 1.963.132 2.884.388 2.202-1.49 3.167-1.18 3.167-1.18.628 1.586.233 2.757.114 3.048.741.804 1.188 1.831 1.188 3.086 0 4.415-2.689 5.388-5.25 5.672.418.358.787 1.06.787 2.137 0 1.54-.014 2.782-.014 3.16 0 .31.208.666.79.554C20.71 21.386 24 17.086 24 12c0-6.352-5.148-11.5-12-11.5z" />
          </svg>
        </a>
      </nav>

      {/* LANGUAGE SWITCHER */}
      <div className="absolute right-3 top-[44px] md:top-1">
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
        <div className="block md:hidden">
          <LanguageSwitcherMobile />
        </div>
      </div>
    </div>
  );
}
