import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcherMobile() {
  const { langEn, setLangEn } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleChange = (value) => {
    setLangEn(value);
    setOpen(false);
  };

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-lg"
        aria-label="Select Language"
      >
        <img src="/idioma.png" alt="Language icon" width={36} height={28} className="invert" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white text-gray-900 rounded shadow-md py-1 z-50 w-24">
          <button
            onClick={() => handleChange(true)}
            className={`flex items-center gap-1 w-full px-3 py-2 text-left hover:bg-gray-100 ${langEn ? "font-semibold" : ""}`}
          >
            <img src="/en.png" alt="UK Flag" width={24} height={16} />
            EN
          </button>
          <button
            onClick={() => handleChange(false)}
            className={`flex items-center gap-1 w-full px-3 py-2 text-left hover:bg-gray-100 ${!langEn ? "font-semibold" : ""}`}
          >
            <img src="/es.png" alt="Spain Flag" width={24} height={16} />
            ES
          </button>
        </div>
      )}
    </div>
  );
}
