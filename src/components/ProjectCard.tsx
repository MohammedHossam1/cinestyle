import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IProject } from "../types/Index";
import { useTranslation } from "react-i18next";
import Image from "./shared/Image";
import youtubeIcon from "../assets/play.png";

interface ProjectCardProps {
  project: IProject;
  index: number;
  aspect?: boolean;
  isReel?: boolean;
}

export const ProjectCard = ({ project, index, aspect = true, isReel }: ProjectCardProps) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [isOpen, setIsOpen] = useState(false);

  const getEmbedUrl = (url: string, autoplay = false) => {
    let videoId = "";

    if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/shorts/")) {
      videoId = url.split("shorts/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}${autoplay ? "?autoplay=1" : ""}`;
  };

  return (
    <>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-gradient-to-br from-main-color via-main-color/90 to-main-color/60 lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
      >
        {/* Thumbnail with YouTube Icon Button */}
        <div
          className={`relative  ${aspect ? "aspect-video" : "h-[50vh] xl:h-[70vh] "} lg:rounded-t-2xl overflow-hidden`}
        >
          <Image
            src={project.thumbnail_url}
            alt={project.titleEn}
            className="w-full h-full object-cover"
          />

          {/* YouTube Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-2 lg:top-4 right-2 lg:right-4  p-2 rounded-full hover:scale-105 transition animate-pulse"
            title="Play Video"
          >
            <Image src={youtubeIcon} alt="YouTube" className="w-12 lg:w-14 " />
          </button>
        </div>

        {/* Title */}
        <div className="p-4 lg:p-6 transition-all group-hover:bg-main-color/70">
          <div className="block text-xl lg:text-4xl font-bold text-white line-clamp-1">
            <span className="inline-block w-2 h-2 mx-2 bg-primary-500 rounded-full "></span>
            {isAr ? project.titleAr : project.titleEn}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className={`relative w-full  ${aspect ? "aspect-video max-w-6xl" : "h-[80vh]"} ${isReel && isReel ? "aspect-video max-w-4xl" : "h-[80vh]"} bg-black`}

              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={getEmbedUrl(project.link, true)}
                title={project.titleEn}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
              >
                &times;
              </button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
