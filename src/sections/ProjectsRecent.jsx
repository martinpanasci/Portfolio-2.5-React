import { useEffect, useState } from "react";
import { PinContainer } from "../components/ui/3d-pin";
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
      des: "It is a platform for managing and selling personalized workout routines and training programs. It offers functionalities for both users and administrators, including the creation, editing, and assignment of routines.<br /><br /><strong>Main Features:</strong><br />- <strong>Interactive routines:</strong> with a history of your progress.<br />- <strong>Secure purchases:</strong> of programs through Mercado Pago.<br />- <strong>Role differentiation:</strong> (user and admin) with JWT authentication.<br />- <strong>Robust backend:</strong> in Node.js and MySQL for comprehensive data management.<br /><br /><strong>Current Status:</strong> The project is under development; only images, videos, and complete service details need to be added, which the client is currently working on.",
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
      des: "It is a tool for shortening URLs and managing links efficiently. Designed for both occasional and registered users, it combines functionality and ease of use.<br /><br /><strong>Main Features:</strong><br />- <strong>Dynamic shortener:</strong> generates personalized short links.<br />- <strong>Statistics:</strong> track clicks and performance.<br />- <strong>QR Code:</strong> integrated for easy sharing.<br />- <strong>Link management:</strong> edit and delete links for registered users.<br />- <strong>JWT Authentication:</strong> for enhanced security.<br />- <strong>Intuitive frontend:</strong> minimalist design in React.",
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
      des: "It is a tool for scheduling clients and automating messages via WhatsApp Business. Ideal for businesses and professionals who need to communicate with their clients efficiently.<br /><br /><strong>Main Features:</strong><br />- <strong>Client management:</strong> allows adding, editing, and deleting contacts.<br />- <strong>Scheduled messages:</strong> automatic sending on specific dates.<br />- <strong>Reusable templates:</strong> create predefined messages to save time.<br />- <strong>Robust database:</strong> MySQL storage for secure data handling.<br />- <strong>JWT Authentication:</strong> secure access with encrypted tokens.<br />- <strong>Twilio integration:</strong> uses the WhatsApp Business API for automated messaging.",
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
      des: "Modern and responsive landing page designed to showcase my services and skills.<br /><br /><strong>Main Features:</strong><br />- <strong>Responsive design:</strong> adapts to any device.<br />- <strong>Modern style:</strong> uses Tailwind CSS for a professional look.<br />- <strong>Efficient navigation:</strong> allows smooth exploration of information.<br />- <strong>Optimization:</strong> clean and efficient code for better performance.<br />- <strong>Animations:</strong> integrated with Framer Motion for an interactive experience.",
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
      des: "Landing page designed for an architect, functioning as an effective sales funnel.<br /><br /><strong>Highlights:</strong><br />- <strong>Minimalist and elegant design:</strong> combines modern aesthetics with a smooth user experience.<br />- <strong>Immersive animations:</strong> integrated with Framer Motion to add dynamism and highlight each section.<br />- <strong>Smooth experience:</strong> each section provides essential information without overwhelming the user, maintaining a continuous flow from the hero section to a call to action that drives conversions.<br />- <strong>Project showcase:</strong> achieved with an interactive modal and integrated slider that allows displaying multiple projects without interrupting navigation or breaking visual harmony.",
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
      des: "Es una plataforma para gestionar y vender rutinas personalizadas. Ofrece funcionalidades para usuarios y administradores, incluyendo la creación, edición y asignación de rutinas.<br /><br /><strong>Funciones principales:</strong><br />- <strong>Rutinas interactivas:</strong> con historial de progreso.<br />- <strong>Compras seguras:</strong> mediante Mercado Pago.<br />- <strong>Diferenciación de roles:</strong> (usuario y admin) con autenticación JWT.<br />- <strong>Backend robusto:</strong> Node.js y MySQL para gestión completa de datos.<br /><br /><strong>Estado actual:</strong> En desarrollo, faltan agregar imágenes, videos y detalles de los servicios.",
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
      des: "Herramienta para acortar URLs y gestionarlas eficientemente. Pensada para usuarios registrados y esporádicos.<br /><br /><strong>Funciones principales:</strong><br />- <strong>Acortador dinámico:</strong> genera enlaces personalizados.<br />- <strong>Estadísticas:</strong> seguimiento de clics y rendimiento.<br />- <strong>Código QR:</strong> para compartir fácilmente.<br />- <strong>Gestión de enlaces:</strong> edición y borrado.<br />- <strong>Autenticación JWT:</strong> mayor seguridad.<br />- <strong>Frontend intuitivo:</strong> diseño minimalista en React.",
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
      des: "Herramienta para agendar clientes y automatizar mensajes por WhatsApp Business. Ideal para profesionales y negocios.<br /><br /><strong>Funciones principales:</strong><br />- <strong>Gestión de clientes:</strong> agregar, editar y eliminar.<br />- <strong>Mensajes programados:</strong> envío automático.<br />- <strong>Plantillas reutilizables:</strong> ahorra tiempo.<br />- <strong>Base de datos segura:</strong> en MySQL.<br />- <strong>Autenticación JWT:</strong> con tokens cifrados.<br />- <strong>Integración Twilio:</strong> para mensajería automática.",
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
      des: "Landing responsive diseñada para mostrar mis servicios y habilidades.<br /><br /><strong>Funciones principales:</strong><br />- <strong>Diseño responsive:</strong> se adapta a cualquier dispositivo.<br />- <strong>Estilo moderno:</strong> con Tailwind CSS.<br />- <strong>Navegación eficiente:</strong> fluida.<br />- <strong>Optimización:</strong> código limpio.<br />- <strong>Animaciones:</strong> con Framer Motion.",
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
      des: "Landing para un arquitecto con enfoque comercial.<br /><br /><strong>Aspectos destacados:</strong><br />- <strong>Diseño minimalista:</strong> moderno y claro.<br />- <strong>Animaciones inmersivas:</strong> con Framer Motion.<br />- <strong>Fluidez:</strong> información clara y ordenada.<br />- <strong>Exposición de proyectos:</strong> modal interactivo con slider.",
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

        <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
          {projects.map(({ id, title, description, des, img, iconLists, link }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] my-4"
            >
              <PinContainer
                title={title}
                modalData={{ id, title, description, des, img, iconLists, link }}
                onOpenModal={handleModalOpen}
              >
                <div className="relative flex items-center justify-center w-80 md:w-96 overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img src={img} alt={title} className="z-10 absolute bottom-0 w-full h-full object-cover" />
                </div>
                <h3 className="font-bold lg:text-2xl md:text-lg line-clamp-1">{title}</h3>
                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">{description}</p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((tech, index) => (
                      <div
                        key={tech.icon}
                        className="border border-white/[0.2] rounded-full"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.iconName}
                          className="p-2 rounded-full bg-white lg:w-14 lg:h-14 w-8 h-8 flex justify-center items-center invert"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-emerald-300 border border-emerald-300 rounded-xl px-1 py-1 whitespace-nowrap">
                      {langEn ? "View More" : "Ver Más"}
                    </p>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleModalClose} data={modalData} />}
    </div>
  );
};

export default ProjectsRecent;
