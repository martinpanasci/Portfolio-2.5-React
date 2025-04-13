import { useEffect, useState } from "react";
import { PinContainer } from "../Components/ui/3d-pin";
import { Modal } from "../components/Modal";
import { useLanguage } from "../context/LanguageContext";

export const ProjectsRecent = () => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { t } = useLanguage();
  const tp = (key) => t(`Projects.items.${key}`);

  const projects = [
    {
      id: 1,
      title: tp("project1.title"),
      description: tp("project1.description"),
      des: tp("project1.des"),
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
      title: tp("project2.title"),
      description: tp("project2.description"),
      des: tp("project2.des"),
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
      title: tp("project3.title"),
      description: tp("project3.description"),
      des: tp("project3.des"),
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
      title: tp("project4.title"),
      description: tp("project4.description"),
      des: tp("project4.des"),
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
      title: tp("project5.title"),
      description: tp("project5.description"),
      des: tp("project5.des"),
      img: "https://i.imgur.com/DZqeKZU.png",
      iconLists: [
        { icon: "/nextjs.svg", iconName: "Next.js" },
        { icon: "/tail.svg", iconName: "Tailwind CSS" },
        { icon: "/framer.svg", iconName: "Framer Motion" },
      ],
      link: "https://rendersmdp.com/",
    },
  ];

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
            {t("Projects.label")}
          </p>
        </div>
        <h2 className="font-serif text-3xl lg:text-5xl text-center mt-6">
          {t("Projects.title.part1")}{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {t("Projects.title.part2")}
          </span>
        </h2>
        <p className="text-center text-white/60 mt-4">
          {t("Projects.subtitle")}
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
                      {t("Projects.viewMore")}
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