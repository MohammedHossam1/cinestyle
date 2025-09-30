import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../lib/subaMethods";
import { container } from "../constants";
import SectionHeader from "./shared/SectionHeader";
import { IServices } from "../types/Index";
export default function Services() {
  const { t, i18n } = useTranslation();
  const [servicesData, setServicesData] = useState<IServices[]>([]);
  const isAr = i18n.language === "ar";
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
    <section className=" relative" id="services">
      <div className="absolute inset-0" />
      <div className={`${container} relative`}>
      <SectionHeader text={t("services.title")}  desc={t("services.description")}/>

        <motion.div className="grid grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}>
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
