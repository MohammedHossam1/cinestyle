import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  videoUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isLoading: boolean;
  onLoad: () => void;
}

export const ProjectCard = ({ project, index, isLoading, onLoad }: ProjectCardProps) => {
  const { t } = useTranslation();

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
      className="group relative bg-gradient-to-br from-main-color via-main-color/90 to-main-color/60 lg:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
    >
      <div className="relative">
        <div className="aspect-video lg:rounded-t-2xl overflow-hidden  ">
          {isLoading && (
            <div className="absolute inset-0 bg-neutral-200  animate-pulse z-10" />
          )}
          <iframe
            src={getEmbedUrl(project.videoUrl)}
            title={t(project.title)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`w-full h-full ${
              isLoading ? "invisible" : "visible"
            }`}
            onLoad={onLoad}
          />
        </div>
      </div>

      <div className="p-4 lg:p-6 transition-all  group-hover:bg-main-color/70  ">
        <Link
          to={project.videoUrl}
          target="_blank"
          className="block text-xl lg:text-2xl font-bold    "
        >
          <span className="inline-block w-2 h-2 mx-2 bg-primary-500 rounded-full"></span>
          {t(`${project.title}.title`)}
        </Link>
      </div>
    </motion.div>
  );
};
