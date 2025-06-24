import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../lib/subaMethods";
import { IServices } from "../types/Index";
export default function Services() {
  const { t, i18n } = useTranslation();
  const [servicesData, setServicesData] = useState<IServices[]>([]);
const isAr= i18n.language === "ar";
  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await services();
        setServicesData(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }

    getServices();
  }, []);


  return (
    <section className="py-16 md:py-24 relative" id="services">
      <div className="absolute inset-0" />
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 ">
            {t("services.title")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg">
            {t("services.description")}
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}>
              <ServiceCard
                title={isAr ? service.titleAr : service.titleEn}
                description={ isAr ? service.descAr : service.descEn}
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
