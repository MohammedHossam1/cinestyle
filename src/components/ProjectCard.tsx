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
        className="group relative  lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
      >
        {/* Thumbnail with YouTube Icon Button */}
        <div
          className={`relative overflow-hidden ${aspect ? "aspect-video" : "h-[70vh] xl:h-[80vh]"} lg:rounded-t-2xl group`}
        >
          {/* Scalable Image on Hover */}
          <div className="w-full h-full overflow-hidden relative">
            {/* The actual image */}
            <Image
              src={project.thumbnail_url}
              alt={project.titleEn}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/0 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500" />
          </div>


          {/* YouTube Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-2 lg:top-4 right-2 lg:right-4 p-2 rounded-full hover:scale-105 transition animate-pulse z-10"
            title="Play Video"
          >
            <Image src={youtubeIcon} alt="YouTube" className="w-12 lg:w-14" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 lg:p-5">
            <div className="text-white text-3xl font-bold line-clamp-1 pb-2 pt-10">
              <span className="inline-block w-2 h-2 mx-2 bg-primary-500 rounded-full "></span>
              {isAr ? project.titleAr : project.titleEn}
            </div>
          </div>
        </div>


      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className={`relative bg-black rounded-xl overflow-hidden shadow-xl w-full 
          ${isReel ? "max-w-sm h-[90vh]" : "aspect-video max-w-6xl"}`}
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
                className="w-full h-full"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500 z-10"
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
