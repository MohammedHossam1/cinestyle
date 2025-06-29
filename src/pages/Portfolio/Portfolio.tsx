import { Link } from "react-router-dom";
import Image from "../../components/shared/Image";
import reelImage from "../../assets/reel.jpg";
import promoImage from "../../assets/promo.jpg";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const cards = [
    {
      to: "/portfolio/reel",
      image: reelImage,
      title: t("reel"),
    },
    {
      to: "/portfolio/promo",
      image: promoImage,
      title: t("promo"),
    },
  ];

  return (
    <div className="bg-neutral-900 min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-center max-lg:flex-wrap items-center gap-10 w-full">
          {cards.map(({ to, image, title }) => (
            <Link
              key={to}
              to={to}
              className="relative group rounded-2xl w-full overflow-hidden shadow-lg bg-main-color hover:shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={image}
                alt={title}
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
              />
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent z-10" />

              {/* Title */}
              <div className="absolute bottom-4 w-full text-center text-white font-bold text-5xl z-20">
                {title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
