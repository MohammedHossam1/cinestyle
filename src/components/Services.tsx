import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import { ServicesData } from "../data/Index";
export default function Services() {
  const { t } = useTranslation();



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
          {ServicesData.map((service, index) => (
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index}>
              <ServiceCard
                title={t(`${service.title}.title`)}
                description={t(`${service.title}.description`)}
                iconBgColor={service.iconBgColor}
                className="hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${service.bgImage})`,
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
