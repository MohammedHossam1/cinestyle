import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories, getProjects } from "../../lib/subaMethods";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import placeholderImage from "../../assets/placeholder_large_dark.jpg";
import { ProjectCard } from "../../components/ProjectCard";
import Image from "../../components/shared/Image";
import Pagination from "../../components/shared/Pagination";
import Loader from "../../components/Loader";
import BackBtn from "../../components/shared/BackBtn";

type Category = {
  id: string;
  categoryAr: string;
  category: string;
  image_url: string;
};

type Project = {
  id: string;
  titleAr: string;
  titleEn: string;
  thumbnail_url: string;
  link: string;
  // Add other fields if needed
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: "spring",
    },
  }),
};

const CategoriesPage = () => {
  const { isReel } = useParams(); // read /categories/:isReel
  const { i18n } = useTranslation();
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (isReel === "promo") {
        const { data, count } = await getProjects(page, limit, undefined, false);
        setProjects(data);
        setTotalPages(Math.ceil((count || 0) / limit));
      } else {
        const data = await categories();
        setCategoryList(data);
      }

      setLoading(false);
    };

    fetchData();
  }, [isReel, page]);

  if (loading) {
    return <div className="text-center text-white py-20"><Loader /></div>;
  }

  return (
    <div className="bg-neutral-900 min-h-screen py-32">

      <div className="container mx-auto px-4 space-y-10 ">
        <BackBtn />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

          {isReel === "promo"
            ? projects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))
            : categoryList.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Link
                  to={`/portfolio/reel/${cat.id}`}
                  className="relative group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden h-80">
                    {/* The image */}
                    <Image
                      src={cat.image_url || placeholderImage}
                      alt={i18n.language === "ar" ? cat.categoryAr : cat.category}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                    />

                    {/* Black overlay with 20% opacity */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:backdrop-blur-sm transition-all duration-500" />
                  </div>



                  {/* Gradient just under the text */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <div className="text-white text-4xl font-semibold text-center">
                      {i18n.language === "ar" ? cat.categoryAr : cat.category}
                    </div>
                  </div>
                </Link>


              </motion.div>
            ))}


        </div>
        {isReel === "promo" && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) => setPage(p)}
          />
        )}
      </div>
    </div>

  );
};

export default CategoriesPage;
