import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // You can install lucide-react or use FontAwesome

const BackBtn = ({ slug = "" }: { slug?: string }) => {
  const { t } = useTranslation();

  return (
    <Link
      to={`/portfolio/${slug}`}
      className="group inline-flex items-center gap-2 px-6 py-3 mb-6 rounded-full bg-main-color text-white font-semibold shadow-md hover:bg-main-color/90 transition-all duration-300"
    >
      <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
      <span>{t("back")}</span>
    </Link>
  );
};

export default BackBtn;
