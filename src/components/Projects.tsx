import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";


export default function Projects() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const projects = [
    {
      title: "projects.etherealDreams",
      videoUrl:
        "https://youtube.com/shorts/h158uLdBE58?si=RYHhp855tX5lCtIL",
    },
    {
      title: "projects.novaAthletics",
      videoUrl: "https://youtu.be/RE9K05LLy9Q?si=kDt7U2Xc4X0Tz8BP",
    },
    {
      title: "projects.horizonTech",
      videoUrl:
        "https://youtube.com/shorts/h158uLdBE58?si=RYHhp855tX5lCtIL",
    }
  ];

  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    Array(projects.length).fill(true)
  );

  const handleLoad = (index: number) => {
    setLoadingStates((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            {t("projects.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            {t("projects.description")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isLoading={loadingStates[index]}
              onLoad={() => handleLoad(index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/portfolio"
            className="group flex items-center gap-3 px-8 py-4 bg-main-color text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t("projects.loadMore")}
            <ArrowRight
              className={`h-5 w-5 transform transition-transform ${
                isAr
                  ? "scale-x-[-1] group-hover:-translate-x-2"
                  : "group-hover:translate-x-2"
              }`}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
