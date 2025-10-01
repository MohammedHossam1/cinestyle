import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { ProjectCard } from "../../components/ProjectCard";
import BackBtn from "../../components/shared/BackBtn";
import Pagination from "../../components/shared/Pagination";
import { getProjects } from "../../lib/subaMethods";
import { IProject } from "../../types/Index";
import { container } from "../../constants";

const CategoryVideos = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [videos, setVideos] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 12;
  console.log(videos)
  useEffect(() => {
    const fetchCategoryVideos = async () => {
      if (!id) return;
      setLoading(true);

      const { data, count } = await getProjects(page, limit, id, true);

      setVideos(data);
      setTotalPages(Math.ceil((count || 0) / limit));
      setLoading(false);
    };

    fetchCategoryVideos();
  }, [id, page]);

  if (loading) {
    return <div className="text-center text-white py-20"><Loader /></div>;
  }

  if (videos.length === 0) {
    return <div className="text-center text-white py-20">{t("noVideosFound")}</div>;
  }

  return (
    <div className="bg-neutral-900 min-h-screen py-20 lg:py-32">
      <div className={container}>
        <BackBtn slug="reel" />
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {videos.map((video, i) => (
            <ProjectCard key={i} project={video} index={i} aspect={false} />
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>

  );
};

export default CategoryVideos;
