import StarIcon from "../assets/icons/star.svg?react";
import { useLanguage } from "../context/LanguageContext";


export default function TapeSection() {
  const { langEn } = useLanguage();  

  const wordsEn = [
    "Performant", "Accessible", "Secure", "Interactive", "Scalable",
    "User Friendly", "Responsive", "Maintainable", "Search Optimized",
    "Usable", "Reliable",
    
  ];

  const wordsEs = [
    "Rendimiento", "Accesible", "Seguro", "Interactivo", "Escalable",
    "Amigable", "Responsivo", "Mantenible", "Optimizado para SEO",
    "Usable", "Confiable",
    
  ];

  const words = langEn ? wordsEn : wordsEs;

  return (
    <div className="py-16 overflow-x-clip">
      <div className="bg-[linear-gradient(to_right,#6ee7b7,#38bdf8)] -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mx-60">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-[move-left_45s_linear_infinite]">
            {words.map((word, index) => (
              <div key={`${word}-${index}`} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
