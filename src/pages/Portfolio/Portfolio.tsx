import { Link } from "react-router-dom"; // If using React Router. Use `next/link` for Next.js
import Image from "../../components/shared/Image";
import reelImage from "../../assets/reel.jpg";
import promoImage from "../../assets/promo.jpg";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-900 min-h-screen py-32">
      <div className="container mx-auto px-4">
        <div className="flex justify-center max-lg:flex-wrap items-center gap-10 w-full">
          {/* Reel Card */}
          <Link
            to="/portfolio/reel"
            className="rounded-2xl w-full overflow-hidden shadow-lg bg-main-color hover:shadow-xl transition transform hover:scale-[1.02] duration-200"
          >
            <Image
              src={reelImage} // Replace with actual path
              alt="Reel"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="p-4 text-white text-center font-semibold text-2xl">
              {t("reel")}
            </div>
          </Link>

          {/* Promo Card */}
          <Link
            to="/portfolio/promo"
            className="rounded-2xl w-full overflow-hidden shadow-lg bg-main-color hover:shadow-xl transition transform hover:scale-[1.02] duration-200"
          >
            <Image
              src={promoImage}// Replace with actual path
              alt="Promo"
              className="w-full h-64 lg:h-80 object-cover"
            />
            <div className="p-4 text-white text-center font-semibold text-2xl">
            {t("promo")}

            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
