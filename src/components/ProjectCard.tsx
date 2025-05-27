import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IProject } from "../types/Index";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: IProject;
  index: number;
  aspect?: boolean;
}

export const ProjectCard = ({
  project,
  index,
  aspect=true,
}: ProjectCardProps) => {
   
  const { i18n } = useTranslation();
  const isAr =  i18n.language === "ar";

  const getEmbedUrl = (url: string, autoplay: boolean = false) => {
    let videoId = "";

    if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/shorts/")) {
      videoId = url.split("shorts/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}${
      autoplay ? "?autoplay=1" : ""
    }`;
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-gradient-to-br from-main-color via-main-color/90 to-main-color/60 lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full `}
    >
      <div className="relative">
        <div className={` ${aspect?"aspect-video":" h-[50vh] xl:h-[70vh] max-md:aspect-video"} lg:rounded-t-2xl overflow-hidden`}>
        
          <iframe
            src={getEmbedUrl(project.link)}
            title={isAr ? project.titleAr : project.titleEn}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`w-full h-full `}
          />
        </div>
      </div>

      <div className="p-4 lg:p-6 transition-all  group-hover:bg-main-color/70  ">
        <Link
          to={project.link}
          aria-label={`Watch ${isAr ? project.titleAr : project.titleEn}`}
          target="_blank"
          className="block text-xl lg:text-2xl font-bold    "
        >
          <span className="inline-block w-2 h-2 mx-2 bg-primary-500 rounded-full"></span>
          {isAr ? project.titleAr : project.titleEn}
        </Link>
      </div>
    </motion.div>
  );
};
