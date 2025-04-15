import { useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { useLanguage } from "../context/LanguageContext";



export const ProjectsRecent = () => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { langEn } = useLanguage();

  

  const projectsEn = [
    {
      id: 1,
      title: "BUGGIA Trainer",
      description: "A platform for managing and selling workout plans with user roles, secure payments, and JWT auth.",
      des: [
        "Interactive routines: with a history of your progress.",
        "Secure purchases: of programs through Mercado Pago.",
        "Role differentiation: user and admin with JWT authentication.",
        "Robust backend: in Node.js and MySQL for comprehensive data management.",
        "Current Status: Project in development; missing assets and service details.",
      ],
      img: "https://i.imgur.com/DxOcN79.png",
      iconLists: [
        { icon: "/react.svg", iconName: "React" },
        { icon: "/nodejs.svg", iconName: "Node.js" },
        { icon: "/mysql.svg", iconName: "MySQL" },
        { icon: "/css3.svg", iconName: "CSS" },
        { icon: "/ml.svg", iconName: "Mercado Pago SDK" },
      ],
      link: "",
    },
    {
      id: 2,
      title: "URL Shortener",
      description: "A URL shortener with analytics, JWT authentication, and QR code generation.",
      des: [
        "Dynamic shortener: generates personalized short links.",
        "Statistics: track clicks and performance.",
        "QR Code: integrated for easy sharing.",
        "Link management: edit and delete links for registered users.",
        "JWT Authentication: for enhanced security.",
        "Intuitive frontend: minimalist design in React.",
      ],
      img: "https://i.imgur.com/voAcyGw.png",
      iconLists: [
        { icon: "/react.svg", iconName: "React" },
        { icon: "/nodejs.svg", iconName: "Node.js" },
        { icon: "/mysql.svg", iconName: "MySQL" },
        { icon: "/css3.svg", iconName: "CSS" },
      ],
      link: "https://urlshortener.mpanasci.com",
    },
    {
      id: 3,
      title: "App LRobledo",
      description: "Client management and automated WhatsApp messaging using Twilio.",
      des: [
        "Client management: allows adding, editing, and deleting contacts.",
        "Scheduled messages: automatic sending on specific dates.",
        "Reusable templates: create predefined messages to save time.",
        "Robust database: MySQL storage for secure data handling.",
        "JWT Authentication: secure access with encrypted tokens.",
        "Twilio integration: uses the WhatsApp Business API for automated messaging.",
      ],
      img: "https://i.imgur.com/U3yQrl3.png",
      iconLists: [
        { icon: "/react.svg", iconName: "React" },
        { icon: "/nodejs.svg", iconName: "Node.js" },
        { icon: "/mysql.svg", iconName: "MySQL" },
        { icon: "/css3.svg", iconName: "CSS" },
      ],
      link: "",
    },
    {
      id: 4,
      title: "My Landing Page",
      description: "Personal landing page with a modern design, animations, and Tailwind CSS optimization.",
      des: [
        "Responsive design: adapts to any device.",
        "Modern style: uses Tailwind CSS for a professional look.",
        "Efficient navigation: allows smooth exploration of information.",
        "Optimization: clean and efficient code for better performance.",
        "Animations: integrated with Framer Motion for an interactive experience.",
      ],
      img: "https://i.imgur.com/CxRRcyq.png",
      iconLists: [
        { icon: "/nextjs.svg", iconName: "Next.js" },
        { icon: "/tail.svg", iconName: "Tailwind CSS" },
        { icon: "/framer.svg", iconName: "Framer Motion" },
      ],
      link: "https://dev.mpanasci.com/",
    },
    {
      id: 5,
      title: "Rendersmdp Landing Page",
      description: "A sleek architecture landing page with animations and interactive project showcases.",
      des: [
        "Minimalist and elegant design: combines modern aesthetics with a smooth user experience.",
        "Immersive animations: integrated with Framer Motion to add dynamism.",
        "Smooth experience: clear, essential information with a guided user journey.",
        "Project showcase: interactive modal and slider for clean multi-project display.",
      ],
      img: "https://i.imgur.com/DZqeKZU.png",
      iconLists: [
        { icon: "/nextjs.svg", iconName: "Next.js" },
        { icon: "/tail.svg", iconName: "Tailwind CSS" },
        { icon: "/framer.svg", iconName: "Framer Motion" },
      ],
      link: "https://rendersmdp.com/",
    },
  ];

  const projectsEs = [
    {
      id: 1,
      title: "BUGGIA Trainer",
      description: "Plataforma para vender planes de entrenamiento con roles, pagos seguros y autenticación JWT.",
      des: [
        "Rutinas interactivas: con historial de progreso.",
        "Compras seguras: mediante Mercado Pago.",
        "Diferenciación de roles: usuario y admin con autenticación JWT.",
        "Backend robusto: Node.js y MySQL para gestión completa de datos.",
        "Estado actual: En desarrollo, faltan imágenes, videos y detalles de los servicios.",
      ],
      img: "https://i.imgur.com/DxOcN79.png",
      iconLists: [
        { icon: "/react.svg", iconName: "React" },
        { icon: "/nodejs.svg", iconName: "Node.js" },
        { icon: "/mysql.svg", iconName: "MySQL" },
        { icon: "/css3.svg", iconName: "CSS" },
        { icon: "/ml.svg", iconName: "Mercado Pago SDK" },
      ],
      link: "",
    },
    {
      id: 2,
      title: "Acortador de URLs",
      description: "Acortador de URLs con estadísticas, autenticación JWT y generación de QR.",
      des: [
        "Acortador dinámico: genera enlaces personalizados.",
        "Estadísticas: seguimiento de clics y rendimiento.",
        "Código QR: para compartir fácilmente.",
        "Gestión de enlaces: edición y borrado para usuarios registrados.",
        "Autenticación JWT: mayor seguridad.",
        "Frontend intuitivo: diseño minimalista en React.",
      ],
      img: "https://i.imgur.com/voAcyGw.png",
      iconLists: [
        { icon: "/react.svg", iconName: "React" },
        { icon: "/nodejs.svg", iconName: "Node.js" },
        { icon: "/mysql.svg", iconName: "MySQL" },
        { icon: "/css3.svg", iconName: "CSS" },
      ],
      link: "https://urlshortener.mpanasci.com",
    },
    {
      id: 3,
      title: "App LRobledo",
      description: "Gestión de clientes y mensajes automatizados por WhatsApp usando Twilio.",
      des: [
        "Gestión de clientes: agregar, editar y eliminar contactos.",
        "Mensajes programados: envío automático en fechas específicas.",
        "Plantillas reutilizables: mensajes predefinidos para ahorrar tiempo.",
        "Base de datos segura: almacenamiento en MySQL.",
        "Autenticación JWT: acceso seguro con tokens cifrados.",
        "Integración Twilio: usa la API de WhatsApp Business para la mensajería.",
      ],
      img: "https://i.imgur.com/U3yQrl3.png",
      iconLists: [
        { icon: "/react.svg", iconName: "React" },
        { icon: "/nodejs.svg", iconName: "Node.js" },
        { icon: "/mysql.svg", iconName: "MySQL" },
        { icon: "/css3.svg", iconName: "CSS" },
      ],
      link: "",
    },
    {
      id: 4,
      title: "Mi Landing Page",
      description: "Landing moderna, animada y optimizada con Tailwind CSS.",
      des: [
        "Diseño responsive: se adapta a cualquier dispositivo.",
        "Estilo moderno: utiliza Tailwind CSS para un look profesional.",
        "Navegación eficiente: exploración fluida de la información.",
        "Optimización: código limpio y eficiente.",
        "Animaciones: integradas con Framer Motion para una experiencia interactiva.",
      ],
      img: "https://i.imgur.com/CxRRcyq.png",
      iconLists: [
        { icon: "/nextjs.svg", iconName: "Next.js" },
        { icon: "/tail.svg", iconName: "Tailwind CSS" },
        { icon: "/framer.svg", iconName: "Framer Motion" },
      ],
      link: "https://dev.mpanasci.com/",
    },
    {
      id: 5,
      title: "Landing Rendersmdp",
      description: "Landing de arquitectura con animaciones e interacción de proyectos.",
      des: [
        "Diseño minimalista: moderno, claro y elegante.",
        "Animaciones inmersivas: integradas con Framer Motion.",
        "Fluidez: cada sección presenta la información esencial sin saturar.",
        "Exposición de proyectos: modal interactivo con slider visualmente armónico.",
      ],
      img: "https://i.imgur.com/DZqeKZU.png",
      iconLists: [
        { icon: "/nextjs.svg", iconName: "Next.js" },
        { icon: "/tail.svg", iconName: "Tailwind CSS" },
        { icon: "/framer.svg", iconName: "Framer Motion" },
      ],
      link: "https://rendersmdp.com/",
    },
  ];


  const projects = langEn ? projectsEn : projectsEs;

  const handleModalOpen = (data) => {
    window.__nodesBefore = document.querySelectorAll("*").length; // <- ESTA LÍNEA
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="projects" className="py-24 overflow-x-clip">
      <div className="mx-auto max-w-[375px] md:max-w-[880px] lg:max-w-[1400px]">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {langEn ? "Real-world Results" : "Resultados Reales"}
          </p>
        </div>
        <h2 className="font-serif text-3xl lg:text-5xl text-center mt-6">
          {langEn ? "A Small Selection of" : "Una Pequeña Selección de"}{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {langEn ? "Recent Projects" : "Proyectos Recientes"}
          </span>
        </h2>
        <p className="text-center text-white/60 mt-4">
          {langEn
            ? "See how I transformed concepts into engaging digital experiences"
            : "Mirá cómo convertí ideas en experiencias digitales atractivas"}
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10 mt-12 px-4">
          {projects.map(({ id, title, description, des, img, iconLists, link }) => (
            <div
              key={id}
              onClick={() => handleModalOpen({ id, title, description, des, img, iconLists, link })}
              className="cursor-pointer w-[330px] md:w-96 min-h-[28rem] relative z-0 rounded-3xl border
              border-emerald-500/[0.2] bg-emerald-300/5 p-4 flex flex-col justify-between 
              after:content-[''] after:absolute after:inset-0 after:rounded-3xl  after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5 "
                style={{
                  backgroundImage: `url('/grain.jpg')`,
                }}
              />
              <div className="w-full h-[14rem] mb-2 overflow-hidden rounded-xl bg-neutral-800">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl mt-6 font-bold text-white">{title}</h3>
              <p className="text-white/70 text-sm mt-1 line-clamp-3">{description}</p>
              <div className="flex items-end justify-between mt-auto pt-4">
                <div className="flex items-center">
                  {iconLists.map((tech, index) => (
                    <div
                      key={tech.icon}
                      className="border border-white/[0.2] rounded-full bg-black p-1 mr-[-6px]"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.iconName}
                        className="w-8 h-8 object-contain invert"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-emerald-300 border border-emerald-300 px-3 py-1 rounded-lg hover:bg-emerald-300/10 transition">
                  {langEn ? "View More" : "Ver Más"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>


      {isModalOpen && <Modal onClose={handleModalClose} data={modalData} />}


    </div>
  );
};

export default ProjectsRecent;