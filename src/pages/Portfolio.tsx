import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/ProjectCard";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const baseProjects = [
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

  const [projects, setProjects] = useState(baseProjects);
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

  const loadMoreProjects = () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const newProjects = [...projects, ...baseProjects];
      setProjects(newProjects);
      setLoadingStates(prev => [...prev, ...Array(baseProjects.length).fill(true)]);
      setPage(prev => prev + 1);
      // Stop loading after 5 pages
      if (page >= 5) {
        setHasMore(false);
      }
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="bg-neutral-900 min-h-screen py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("projects.title")}
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${index}-${project.title}`}
              project={project}
              index={index}
              isLoading={loadingStates[index]}
              onLoad={() => handleLoad(index)}
            />
          ))}
        </div>

        {loading && (
          <div className="text-center mt-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-main-color border-r-transparent"></div>
          </div>
        )}

        {!hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-neutral-400"
          >
            {t("projects.noMore")}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;