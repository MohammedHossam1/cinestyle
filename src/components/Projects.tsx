import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { getHomeProjects } from "../lib/subaMethods";
import { IProject } from "../types/Index";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

console.log(projects)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getHomeProjects();
        if (!data || data.length === 0) {
          setError("No projects found");
          return;
        }
        const initialProjects = data.slice(0, 3);
        setProjects(initialProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  if (loading) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 flex justify-center items-center min-h-[50vh]">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-main-color border-r-transparent"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 flex justify-center items-center min-h-[50vh]">
          <div className="text-red-500 text-center">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

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
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={index + 1}
                project={project}
                index={index + 1}
                isReel={project.isReel}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/portfolio"
            aria-label="Go to portfolio"
            className="group flex items-center gap-3 px-8 py-4 bg-main-color text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t("projects.loadMore")}
            <ArrowRight
              className={`h-5 w-5 transform transition-transform ${isAr
                ? "scale-x-[-1] group-hover:-translate-x-2"
                : "group-hover:translate-x-2"
                }`}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
