import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/moving-border";

const workExperience = [
  {
    id: 1,
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    thumbnail: "/exp3.svg",
  },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <div id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {t("Experience.label")}
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 lg:text-5xl">
          {t("Experience.title.part1")}{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {t("Experience.title.part2")}
          </span>
        </h2>
        <p className="text-center text-white/60 mt-4">{t("Experience.subtitle")}</p>

        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 5000}
              className="flex-1 text-white border-emerald-500/[0.2] bg-emerald-300/5"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={`thumbnail-${card.id}`}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h3
                    className="text-start text-xl md:text-2xl font-bold"
                    dangerouslySetInnerHTML={{
                      __html: t(`Experience.items.${card.id}.title`),
                    }}
                  />
                  <p
                    className="text-start text-white-100 mt-3 font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: t(`Experience.items.${card.id}.desc`),
                    }}
                  />
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
