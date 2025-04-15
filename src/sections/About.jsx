import { useLanguage } from "../context/LanguageContext";
import StarIcon from "../assets/icons/star.svg?react";
import bookImage from "../assets/images/book.jpg";
import JavasscripIcon from "../assets/icons/square-js.svg?react";
import TypescriptIcon from "../assets/icons/square-ts.svg?react";
import HtmlIcon from "../assets/icons/html5.svg?react";
import CssIcon from "../assets/icons/css3.svg?react";
import ReactIcon from "../assets/icons/react.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import nextjsIcon from "../assets/icons/nextjs.svg?react";
import nodejsIcon from "../assets/icons/nodejs.svg?react";
import expressIcon from "../assets/icons/express.svg?react";
import mysqlIcon from "../assets/icons/mysql.svg?react";
import tailwindIcon from "../assets/icons/tailwind.svg?react";
import mapImage from "../assets/images/mapa.png";
import SmileMemoji from "../assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import Card from "../components/Card";
import TechIcon from "../components/TechIcon";

const toolboxItems = [
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: nextjsIcon },
  { title: "Node.js", iconType: nodejsIcon },
  { title: "Express.js", iconType: expressIcon },
  { title: "MySQL", iconType: mysqlIcon },
  { title: "JavaScript", iconType: JavasscripIcon },
  { title: "TypeScript", iconType: TypescriptIcon },
  { title: "HTML5", iconType: HtmlIcon },
  { title: "CSS", iconType: CssIcon },
  { title: "Tailwind CSS", iconType: tailwindIcon },
  { title: "Github", iconType: GithubIcon },
];

export default function AboutSection() {
  const { langEn } = useLanguage();
  const ref = useRef(null);

  const hobbies = langEn
    ? [
        { title: "Football", emoji: "⚽", left: "5%", top: "5%" },
        { title: "Gaming", emoji: "🎮", left: "50%", top: "15%" },
        { title: "Hiking", emoji: "🥾", left: "10%", top: "35%" },
        { title: "Coaching", emoji: "💪", left: "55%", top: "60%" },
        { title: "Fitness", emoji: "🏋️‍♀️", left: "70%", top: "35%" },
        { title: "Cryptocurrency", emoji: "💰", left: "15%", top: "65%" },
        { title: "Trading", emoji: "📈", left: "35%", top: "25%" },
        { title: "Bike riding", emoji: "🚴‍♀️", left: "75%", top: "0%" },
      ]
    : [
        { title: "Fútbol", emoji: "⚽", left: "5%", top: "5%" },
        { title: "Videojuegos", emoji: "🎮", left: "50%", top: "15%" },
        { title: "Trekking", emoji: "🥾", left: "10%", top: "35%" },
        { title: "Coaching", emoji: "💪", left: "55%", top: "60%" },
        { title: "Fitness", emoji: "🏋️‍♀️", left: "70%", top: "35%" },
        { title: "Criptomonedas", emoji: "💰", left: "15%", top: "65%" },
        { title: "Trading", emoji: "📈", left: "35%", top: "25%" },
        { title: "Ciclismo", emoji: "🚴‍♀️", left: "75%", top: "0%" },
      ];

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {langEn ? "About Me" : "Sobre mí"}
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 lg:text-5xl">
          {langEn ? "A Glimpse Into" : "Un vistazo a"}{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {langEn ? "My World" : "Mi mundo"}
          </span>
        </h2>
        <p className="text-center text-white/60 mt-4">
          {langEn
            ? "Learn more about who I am, what I do, and what inspires me."
            : "Conocé más sobre quién soy, qué hago y qué me inspira."}
        </p>

        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">
                    {langEn ? "My Reads" : "Mis Lecturas"}
                  </h3>
                </div>
                <p className="text-sm text-white/60 mt-2">
                  {langEn
                    ? "Explore the books shaping my perspectives."
                    : "Explorá los libros que moldean mi perspectiva."}
                </p>
              </div>
              <div className="w-40 mx-auto mt-8">
                <img src={bookImage} alt="book cover" loading="lazy" />
              </div>
            </Card>

            <Card className="h-auto p-0 md:col-span-3 lg:col-span-2">
              <div className="flex flex-col px-6 pt-6">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">
                    {langEn ? "My Toolbox" : "Mi Caja de Herramientas"}
                  </h3>
                </div>
                <p className="text-sm text-white/60 mt-2">
                  {langEn
                    ? "Explore the technologies and tools I use to craft exceptional digital experiences."
                    : "Descubrí las tecnologías y herramientas que uso para crear experiencias digitales excepcionales."}
                </p>
              </div>
              <div className="flex ml-6 my-6">
                <div className="flex flex-wrap py-0.5 gap-6">
                  {toolboxItems.map((item) => (
                    <div
                      key={item.title}
                      className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
                    >
                      <TechIcon component={item.iconType} />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-3">
              <div className="flex flex-col px-6 py-6">
                <div className="inline-flex items-center gap-2">
                  <StarIcon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">
                    {langEn ? "Beyond the Code" : "Más allá del código"}
                  </h3>
                </div>
                <p className="text-sm text-white/60 mt-2">
                  {langEn
                    ? "Explore my interests and hobbies beyond the digital realm."
                    : "Conocé mis intereses y hobbies fuera del mundo digital."}
                </p>
              </div>
              <div className="relative flex-1" ref={ref}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={ref}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.emoji} {hobby.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative col-span-2">
              <img
                src={mapImage}
                alt="map"
                loading="lazy"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <img src={SmileMemoji} alt="smiling memoji" className="size-20" />
                <p className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-sm font-semibold text-white bg-black/50 px-4 py-1 rounded-lg w-[180px] text-center">
                  Mar del Plata, Buenos Aires, Argentina 📍
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
