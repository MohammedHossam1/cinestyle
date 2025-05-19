import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const projects = [
    {
      title: "projects.etherealDreams",
      videoUrl:
        "https://www.youtube.com/watch?v=AeQTy9-NfJQ&list=PLkD-AsBKgh4a4_uDck40b9HIeULTAFXcg&ab_channel=CINESTYLEMEDIAPRODUCTION",
    },
    {
      title: "projects.novaAthletics",
      videoUrl: "https://www.youtube.com/watch?v=RE9K05LLy9Q",
    },
    {
      title: "projects.horizonTech",
      videoUrl:
        "https://www.youtube.com/watch?v=1RQtA3fMRog&ab_channel=CINESTYLEMEDIAPRODUCTION",
    },
    {
      title: "projects.wilderness",
      videoUrl:
        "https://www.youtube.com/watch?v=kqJBing6hy4&list=PLkD-AsBKgh4a4_uDck40b9HIeULTAFXcg&index=3&ab_channel=CINESTYLEMEDIAPRODUCTION",
    },
    {
      title: "projects.echo",
      videoUrl:
        "https://www.youtube.com/watch?v=1EE54uLPzsI&list=PLkD-AsBKgh4a4_uDck40b9HIeULTAFXcg&index=7&ab_channel=CINESTYLEMEDIAPRODUCTION",
    },
    {
      title: "projects.echo",
      videoUrl:
        "https://www.youtube.com/watch?v=1EE54uLPzsI&list=PLkD-AsBKgh4a4_uDck40b9HIeULTAFXcg&index=7&ab_channel=CINESTYLEMEDIAPRODUCTION",
    },
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
  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url: string, autoplay: boolean = false) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}${
      autoplay ? "?autoplay=1" : ""
    }`;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
            {t("projects.title")}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto text-lg">
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white via-neutral-100 to-neutral-200 dark:from-neutral-800 dark:via-neutral-900 dark:to-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* فيديو مع Overlay عند الهوفر */}
              <div className="relative">
                <div className="aspect-video rounded-t-2xl overflow-hidden border-b border-neutral-200 dark:border-neutral-700">
                  {loadingStates[index] && (
                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 animate-pulse z-10" />
                  )}
                  <iframe
                    src={getEmbedUrl(project.videoUrl)}
                    title={t(project.title)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={`w-full h-full ${
                      loadingStates[index] ? "invisible" : "visible"
                    }`}
                    onLoad={() => handleLoad(index)}
                  />
                </div>
              </div>

              {/* محتوى الكرت */}
              <div className="p-6 transition-all duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-700">
                <Link
                  to={project.videoUrl}
                  target="_blank"
                  className="block text-2xl font-bold text-neutral-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {t(`${project.title}.title`)}
                </Link>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary-500 rounded-full"></span>
                  {t(`${project.title}.category`)}
                </p>
              </div>
            </motion.div>
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
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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

export default Projects;
