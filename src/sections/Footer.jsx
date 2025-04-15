import React, { useState } from "react";
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg?react";
import { useLanguage } from "../context/LanguageContext";


export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { langEn } = useLanguage();
  

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/40 
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. MPanasci {langEn ? "All rights reserved." : "Todos los derechos reservados."}</div>

          <nav className="flex flex-col md:flex-row items-center gap-8 pointer-events-auto">
            <a href="https://mpanasci.com/cv.pdf" className="inline-flex items-center gap-1.5">
              <span className="font-semibold">{langEn ? "CV" : "CV"}</span>
              <ArrowUpRightIcon className="size-4" />
            </a>

            <div className="relative inline-flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy("mpanasci95@gmail.com", setCopiedEmail);
                }}
                className="inline-flex items-center gap-1.5 cursor-pointer"
              >
                {langEn ? "Email" : "Correo"}
              </button>
              {copiedEmail && (
                <span className="tooltip-bottom tooltip-visible">
                  {langEn ? "Email copied!" : "¡Correo copiado!"}
                </span>
              )}
              <ArrowUpRightIcon className="size-4" />
            </div>

            <div className="relative inline-flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopy("+5492235972102", setCopiedPhone);
                }}
                className="inline-flex items-center gap-1.5 cursor-pointer"
              >
                {langEn ? "Phone" : "Teléfono"}
              </button>
              {copiedPhone && (
                <span className="tooltip-bottom tooltip-visible">
                  {langEn ? "Phone copied!" : "¡Teléfono copiado!"}
                </span>
              )}
              <ArrowUpRightIcon className="size-4" />
            </div>

            <a
              href="https://github.com/martinpanasci"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">GitHub</span>
              <ArrowUpRightIcon className="size-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/martin-panasci/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <span className="font-semibold">LinkedIn</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
