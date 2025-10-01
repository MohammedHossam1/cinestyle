import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import { container } from "../constants";
import SectionHeader from "./shared/SectionHeader";
import { useServices } from "../hooks/fetch-methods";

export default function Services() {
  const { t, i18n } = useTranslation();
  const { data: servicesData = [], isLoading, error } = useServices();
  const isAr = i18n.language === "ar";

  // Handle loading state
  if (isLoading) {
    return (
      <section className="relative" id="services">
        <div className="absolute inset-0" />
        <div className={`${container} relative`}>
          <SectionHeader text={t("services.title")} desc={t("services.description")} />
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-32 bg-gray-300 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Handle error state
  if (error) {
    return (
      <section className="relative" id="services">
        <div className="absolute inset-0" />
        <div className={`${container} relative`}>
          <SectionHeader text={t("services.title")} desc={t("services.description")} />
          <div className="text-center py-8">
            <p className="text-red-500">Error loading services. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative" id="services">
      <div className="absolute inset-0" />
      <div className={`${container} relative`}>
        <SectionHeader text={t("services.title")} desc={t("services.description")} />

        <motion.div className="grid grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={service.id || index}>
              <ServiceCard
                title={isAr ? service.titleAr : service.titleEn}
                className="hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${service.image_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
