import { motion } from "framer-motion";
import {
    ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "projects.etherealDreams",
      category: "projects.etherealDreams.category",
      imageUrl:
        "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/portfolio/ethereal-dreams",
      featured: true,
      className: "lg:col-span-2",
    },
    {
      title: "projects.novaAthletics",
      category: "projects.novaAthletics.category",
      imageUrl:
        "https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/portfolio/nova-athletics",
    },
    {
      title: "projects.horizonTech",
      category: "projects.horizonTech.category",
      imageUrl:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/portfolio/horizon-tech",
    },
    {
      title: "projects.wilderness",
      category: "projects.wilderness.category",
      imageUrl:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/portfolio/wilderness",
    },
    {
      title: "projects.echo",
      category: "projects.echo.category",
      imageUrl:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/portfolio/echo-music-video",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              {t("projects.title")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-lg">
              {t("projects.description")}
            </p>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors mt-4 md:mt-0"
          >
            {t("projects.viewAll")}
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={project.className}
            >
              <ProjectCard
                title={t(project.title)}
                category={t(project.category)}
                imageUrl={project.imageUrl}
                link={project.link}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
