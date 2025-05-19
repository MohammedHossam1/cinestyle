import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Film,
  Music,
  Palette,
  Scissors,
  VideoIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: "services.productsPhotography",
      icon: Film,
      iconBgColor: "bg-primary-500/10",
    },
    {
      title: "services.writingContent",
      icon: VideoIcon,
      iconBgColor: "bg-secondary-500/10",
    },
    {
      title: "services.promoVedios",
      icon: Camera,
      iconBgColor: "bg-accent-500/10",
    },
    {
      title: "services.weddingVedios",
      icon: Scissors,
      iconBgColor: "bg-success-500/10",
    },
    {
      title: "services.socialMedia",
      icon: Music,
      iconBgColor: "bg-warning-500/10",
    },
    {
      title: "services.editing",
      icon: Palette,
      iconBgColor: "bg-error-500/10",
    },
    {
      title: "services.eventCoverAge",
      icon: Palette,
      iconBgColor: "bg-error-500/10",
    },
    {
      title: "services.podcast",
      icon: Palette,
      iconBgColor: "bg-error-500/10",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-100/50 dark:to-neutral-800/50" />
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            {t("services.title")}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            {t("services.description")}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index}>
              <ServiceCard
                title={t(`${service.title}.title`)}
                description={t(`${service.title}.description`)}
                icon={service.icon}
                iconBgColor={service.iconBgColor}
                className="hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            {t("services.exploreAll")}
            <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
