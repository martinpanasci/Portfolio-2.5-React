import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { langEn, setLangEn } = useLanguage();

  return (
    <div className="flex gap-2 items-center text-sm">
      <button
        onClick={() => setLangEn(true)}
        className={`flex items-center gap-1 ${langEn ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
      >
        <img src="/en.png" alt="UK Flag" width={24} height={16} />
        EN
      </button>
      <span className="text-white opacity-50">|</span>
      <button
        onClick={() => setLangEn(false)}
        className={`flex items-center gap-1 ${!langEn ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
      >
        <img src="/es.png" alt="Spain Flag" width={24} height={16} />
        ES
      </button>
    </div>
  );
}
