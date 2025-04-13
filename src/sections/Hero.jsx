import yo from '../assets/images/yo3e.png'
import ArrowDown from '../assets/icons/arrow-down.svg?react';
import StarIcon from '../assets/icons/star.svg?react';
import SparkleIcon from '../assets/icons/sparkle.svg?react';
import { HeroOrbit } from '../Components/HeroOrbit'
import { useLanguage } from '../context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <div id="home" className="py-32 relative z-0 overflow-x-clip">
      
      {/* ⚠️ NO TOCAR ESTE DIV */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url("/grain.jpg")`, }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
        <div className="size-[1620px] hero-ring"></div>
        <div className="size-[1820px] hero-ring"></div>
        <div className="size-[2020px] hero-ring"></div>
        <div className="size-[2220px] hero-ring"></div>
        <div className="size-[2420px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-green-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-3 bg-green-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-green-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      {/* CONTENIDO */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img
            src={yo}
            alt={t("Hero.alt")}
            className="h-[250px] md:h-[350px] w-auto"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg md:w-80 md:justify-center">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
            </div>
            <div className="text-sm font-semibold">{t("Hero.available")}</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Martin Panasci
            <br />
            <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
              Full Stack
            </span>{" "}
            Developer
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            {t("Hero.description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer z-10"
            onClick={() => {
              const target = document.querySelector("#projects")
              if (target) target.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="font-semibold">{t("Hero.explore")}</span>
            <ArrowDown className="size-4" />
          </button>
          <button
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer z-10"
            onClick={() => {
              const target = document.querySelector("#contact")
              if (target) target.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span>👋</span>
            <span className="font-semibold">{t("Hero.connect")}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
