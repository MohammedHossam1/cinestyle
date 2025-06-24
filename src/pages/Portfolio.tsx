import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { getProjects } from "../lib/subaMethods";

const Portfolio = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const baseProjects = [
    {
      titleAr: "",
      titleEn: "",
      link: "",
    },
  ];

  const [projects, setProjects] = useState(baseProjects);

  const loadMoreProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data: newData, count } = await getProjects(page, 6);

      if (!newData || newData.length === 0) {
        setHasMore(false);
      } else {
        setProjects((prev) => [...prev, ...newData]);
        setPage((prev) => prev + 1);
        // إذا وصلنا لآخر عنصر
        if (count !== null && projects.length + newData.length >= count) {
          setHasMore(false);
        }
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load more projects"
      );
      console.error("Error loading more projects:", err);
    } finally {
      setLoading(false);
    }
  };
// d
// d
// d

  useEffect(() => {
    const fetchInitialProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, count } = await getProjects(1, 6);
        if (!data) {
          throw new Error("Failed to fetch initial projects");
        }
        setProjects(data);
        setHasMore(count !== null && data.length < count);
        setPage(2);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch projects"
        );
        console.error("Error fetching initial projects:", err);
        setProjects(baseProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore || error) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      console.log(scrollHeight, "scrollHeight");
      console.log(scrollTop, "scrollTop");
      console.log(clientHeight, "clientHeight");
      if (scrollHeight - scrollTop - clientHeight <= 900) {
        loadMoreProjects();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, error]);

  if (error && projects.length === 0) {
    return (
      <div className="bg-neutral-900 min-h-screen py-32 flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-4">{t("common.error")}</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

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

        {error && (
          <div className="text-red-500 text-center mb-8">
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {loading && (
          <div className="text-center mt-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-main-color border-r-transparent"></div>
          </div>
        )}

        {!hasMore && !loading && (
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
