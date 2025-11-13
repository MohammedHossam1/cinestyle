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
import { container } from "../../constants";

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
console.log(isReel, "i222222222d")
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (isReel != "1") {
        const { data, count } = await getProjects(page, limit, undefined, isReel ? Number(isReel) : undefined);
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
    <div className=" min-h-screen py-20 lg:py-32">
      <div className={`min-h-screen ${container}`}>
        <BackBtn slug="#reelOrPromo" />
        <div className={`grid  h-full  gap-2 pb-10 pt-2 ${isReel === "promo" ? "grid-cols-2" : "grid-cols-3"} md:grid-cols-4 lg:gap-6`}>

          {isReel === "1"
            ?
            categoryList.map((cat, i) => (
              <motion.div
                key={cat.id}
                custom={i}
                initial="hidden"
                className="h-44 lg:h-80 border-[3px] border-main-color rounded-3xl overflow-hidden"
                animate="visible"
                variants={cardVariants}
              >
                <Link
                  to={`/reel/${cat.id}`}
                  className="relative group block rounded-3xl h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden  h-full">
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
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent py-2 lg:p-4">
                    <div className="text-white text-base lg:text-4xl font-semibold text-center">
                      {i18n.language === "ar" ? cat.categoryAr : cat.category}
                    </div>
                  </div>
                </Link>


              </motion.div>
            ))
            : projects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
              >
                <ProjectCard project={project} index={i} isReel={isReel === "1"} />
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
