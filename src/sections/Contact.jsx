import React from "react";
import Boxes from "../Components/ui/background-boxes"; // Asegurate de ajustar el path si no está ahí
import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg?react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div id="contact" className="py-16 lg:py-24 pt-14 lg:pt-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl text-center md:text-left relative overflow-hidden">
          <div
            className="min-h-64 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg py-8 px-10"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent), linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              maskImage:
                "linear-gradient(to bottom, transparent, black 5%, black 95%, transparent), linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskComposite: "intersect",
              maskComposite: "intersect",
            }}
          >
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none" />
            <Boxes />

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2
                  className="font-serif text-2xl md:text-3xl relative z-20"
                  dangerouslySetInnerHTML={{ __html: t("Contact.title") }}
                />
                <p className="text-sm mt-2 md:text-base relative z-20">
                  {t("Contact.subtitle")}
                </p>
              </div>
              <div>
                <a
                  href="https://wa.me/5492235972102?text=Hi%20Martin!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center text-white bg-gray-900 px-6 h-12 rounded-xl gap-2 w-max relative z-20">
                    <span className="font-semibold">
                      {t("Contact.button")}
                    </span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
