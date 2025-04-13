import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-2 items-center text-sm">
      <button
        onClick={() => setLocale("en")}
        className={`flex items-center gap-1 ${locale === "en" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
      >
        <img src="/en.png" alt="UK Flag" width={24} height={16} />
        EN
      </button>
      <span className="text-white opacity-50">|</span>
      <button
        onClick={() => setLocale("es")}
        className={`flex items-center gap-1 ${locale === "es" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
      >
        <img src="/es.png" alt="Spain Flag" width={24} height={16} />
        ES
      </button>
    </div>
  );
}
