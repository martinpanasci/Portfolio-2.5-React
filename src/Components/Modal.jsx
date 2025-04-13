import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg?react";
import { useLanguage } from "../context/LanguageContext";

export const Modal = ({ onClose, data }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-gray-900 rounded-3xl my-8 mx-1">
        <div className="relative bg-emerald-300/5 rounded-3xl border border-emerald-500/[0.2] p-6 shadow-lg max-w-5xl w-full relative max-h-screen overflow-y-auto">
          <button
            onClick={onClose}
            className="sticky top-0 flex justigy-end text-white hover:text-emerald-300 text-xl p-2 transition duration-300 z-50"
          >
            ✖
          </button>

          <h2 className="font-serif text-3xl lg:text-5xl text-center pb-4 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            {data.title}
          </h2>

          <div className="flex justify-center">
            <img
              src={data.img}
              alt={data.title}
              className="w-auto h-80 object-cover rounded-lg mb-4"
            />
          </div>

          <p
            className="lg:text-base lg:font-normal font-light text-sm mb-6"
            dangerouslySetInnerHTML={{ __html: data.des }}
          ></p>

          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {data.iconLists.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="border border-white/[0.2] rounded-full">
                  <img
                    src={tech.icon}
                    alt={tech.iconName}
                    className="p-2 rounded-full bg-white w-14 h-14 flex justify-center items-center invert"
                  />
                </div>
                <p className="text-base text-white">{tech.iconName}</p>
              </div>
            ))}
          </div>

          {data.link ? (
            <div className="flex justify-center">
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-center bg-black text-white py-3 px-6 rounded-xl gap-2 w-max"
              >
                {t("Modal.visit")}
                <ArrowUpRightIcon className="size-5" />
              </a>
            </div>
          ) : (
            <p className="text-center text-gray-500">{t("Modal.noLink")}</p>
          )}
        </div>
      </div>
    </div>
  );
};
