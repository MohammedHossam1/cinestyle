import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Image from "../../components/shared/Image";
import SectionHeader from "../../components/shared/SectionHeader";
import { container } from "../../constants";
import { useGetOuterCategories } from "../../hooks/fetch-methods";
import Loader from "../../components/Loader";

const ReelOrPromo = () => {
  const { t, i18n } = useTranslation();
  const { data: outerCategories, isLoading, error } = useGetOuterCategories();
  if (error || isLoading) {
    return <div className="text-center text-white py-20"><Loader /></div>;
  }


  return (
    <div className="bg-neutral-900" id="reelOrPromo">
      <div className={container}>
        <SectionHeader text={t("reelPromoTitle")} desc={t("reelPromoDesc")} />

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-auto gap-2 lg:gap-10 w-full ">
          {outerCategories?.map(({ id, image, titleAr, titleEn }) => (
            <Link
              key={id}
              to={`/${id}`}
              className="relative group border-[3px] border-main-color rounded-3xl w-full overflow-hidden shadow-lg hover:shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={image}
                alt={i18n.language === "ar" ? titleAr : titleEn}
                className="w-full h-44 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
              />
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent " />

              {/* Title */}
              <div className="absolute bottom-4 w-full text-center text-white font-bold text-2xl lg:text-5xl z-20">
                {i18n.language === "ar" ? titleAr : titleEn}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelOrPromo;
