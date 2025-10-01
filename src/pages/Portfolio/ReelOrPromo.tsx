import { Link } from "react-router-dom";
import Image from "../../components/shared/Image";
import reelImage from "../../assets/reel.jpg";
import promoImage from "../../assets/promo.jpg";
import { useTranslation } from "react-i18next";
import { container } from "../../constants";
import SectionHeader from "../../components/shared/SectionHeader";

const ReelOrPromo = () => {
  const { t } = useTranslation();

  const cards = [
    {
      to: "/reel",
      image: reelImage,
      title: t("reel"),
    },
    {
      to: "/promo",
      image: promoImage,
      title: t("promo"),
    },
  ];

  return (
    <div className="bg-neutral-900" id="reelOrPromo">
      <div className={container}>
        <SectionHeader text={t("reelPromoTitle")} desc={t("reelPromoDesc")} />

        <div className="flex justify-center  items-center gap-2 lg:gap-10 w-full">
          {cards.map(({ to, image, title }) => (
            <Link
              key={to}
              to={to}
              className="relative group border-[5px] border-main-color rounded-3xl w-full overflow-hidden shadow-lg hover:shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={image}
                alt={title}
                className="w-full h-44 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
              />
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent " />

              {/* Title */}
              <div className="absolute bottom-4 w-full text-center text-white font-bold text-2xl lg:text-5xl z-20">
                {title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelOrPromo;
