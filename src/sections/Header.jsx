// src/section/Header.jsx
import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher"; 
import LanguageSwitcherMobile from "../components/LanguageSwitcherMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

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
          {t("Header.home")}
        </Link>
        <Link to="projects" smooth duration={500} className="nav-item cursor-pointer">
          {t("Header.projects")}
        </Link>
        <Link to="about" smooth duration={500} className="nav-item cursor-pointer">
          {t("Header.about")}
        </Link>
        <Link to="experience" smooth duration={500} className="nav-item cursor-pointer hidden md:flex">
          {t("Header.experience")}
        </Link>
        <Link to="contact" smooth duration={500} className="nav-item cursor-pointer bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          {t("Header.contact")}
        </Link>
      </nav>

      {/* EXTERNAL LINKS */}
      <nav className="flex p-0.5 border border-white/15 border-t-0 rounded-full bg-white/10 backdrop-blur -mt-[0px]">
        <a href="https://mpanasci.com/cv.pdf" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FontAwesomeIcon icon={faFilePdf} className="icon" /> {t("Header.cv")}
        </a>
        <div className="relative inline-block">
          <button onClick={(e) => { e.preventDefault(); handleCopyEmail(); }} className="nav-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" /> {t("Header.email")}
          </button>
          {copied && (
            <span className="tooltip tooltip-visible">{t("Header.copied")}</span>
          )}
        </div>
        <a href="https://www.linkedin.com/in/martin-panasci/" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://github.com/martinpanasci" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FontAwesomeIcon icon={faGithub} className="icon" />
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
