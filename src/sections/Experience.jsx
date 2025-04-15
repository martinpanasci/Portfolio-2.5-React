import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/moving-border";

const workExperienceEn = [
  {
    id: 1,
    thumbnail: "/exp2.svg",
    title: "Full Stack Developer",
    desc: "📌 Freelance, 2024 - Present <br />💬 Designed and developed full-stack applications with a strong focus on performance, security, and seamless backend/frontend integration.",
  },
  {
    id: 2,
    thumbnail: "/exp1.svg",
    title: "Higher Diploma <br /> in Programming",
    desc: "🎓 Completed a Higher Diploma in Programming at Instituto Técnico Superior Teclab.<br />📅 Duration: March 2023 - December 2024.<br />💡 Gained solid knowledge in backend and frontend development, databases, and API integration.",
  },
  {
    id: 3,
    thumbnail: "/exp4.svg",
    title: "Video Game Coach",
    desc: "📌 Freelance, 2020 - Present <br />💬 Led a team of professional players, providing coaching and in-game assistance while managing client acquisition, payments, and high-performance results.",
  },
  {
    id: 4,
    thumbnail: "/exp3.svg",
    title: "IT Area Coordinator",
    desc: "📌 Don Orione School, 2017 - 2021 <br />💬 Ensured optimal system performance by providing IT support, solving technical issues, and managing server maintenance across multiple offices.",
  },
];

const workExperienceEs = [
  {
    id: 1,
    thumbnail: "/exp2.svg",
    title: "Desarrollador Full Stack",
    desc: "📌 Freelance, 2024 - Presente <br />💬 Diseño y desarrollo de aplicaciones full-stack con foco en rendimiento, seguridad e integración fluida entre backend y frontend.",
  },
  {
    id: 2,
    thumbnail: "/exp1.svg",
    title: "Tecnicatura Superior <br /> en Programación",
    desc: "🎓 Tecnicatura en Programación en el Instituto Técnico Superior Teclab.<br />📅 Duración: Marzo 2023 - Diciembre 2024.<br />💡 Conocimientos sólidos en desarrollo backend y frontend, bases de datos e integración de APIs.",
  },
  {
    id: 3,
    thumbnail: "/exp4.svg",
    title: "Coach de Videojuegos",
    desc: "📌 Freelance, 2020 - Presente <br />💬 Lideré equipos de jugadores profesionales, brindando coaching, asistencia in-game y gestionando clientes, pagos y resultados de alto rendimiento.",
  },
  {
    id: 4,
    thumbnail: "/exp3.svg",
    title: "Coordinador Área IT",
    desc: "📌 Colegio Don Orione, 2017 - 2021 <br />💬 Soporte técnico, resolución de problemas y mantenimiento de servidores en múltiples sedes para asegurar el funcionamiento del sistema.",
  },
];

export default function Experience() {
  const { langEn } = useLanguage();
  const workExperience = langEn ? workExperienceEn : workExperienceEs;


  return (
    <div id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {langEn ? "What Shaped Me" : "Mi Trayectoria"}
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 lg:text-5xl">
          {langEn ? "My Work & Education" : "Mi Trabajo y Educación"}{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {langEn ? "Experience" : "Experiencia"}
          </span>
        </h2>
        <p className="text-center text-white/60 mt-4">
          {langEn
            ? "Learn more about my professional journey and academic background."
            : "Conocé más sobre mi recorrido profesional y académico."}
        </p>

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
                  loading="lazy"
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h3
                    className="text-start text-xl md:text-2xl font-bold"
                    dangerouslySetInnerHTML={{
                      __html: card.title,
                    }}
                  />
                  <p
                    className="text-start text-white-100 mt-3 font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: card.desc,
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
