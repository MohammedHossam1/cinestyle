import { motion } from "framer-motion";
import {
    Camera,
    Film,
    Music,
    Palette,
    Scissors,
    VideoIcon
} from "lucide-react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../components/ServiceCard";
import photography from "../assets/services/photography.jpg";
import writing from "../assets/services/writing.jpg";
import promo from "../assets/services/promo.jpg";
import wedding from "../assets/services/wedding.jpg";
import social from "../assets/services/social.jpg";
import edit from "../assets/services/edit.jpg";
import event from "../assets/services/event.jpg";
import podcast from "../assets/services/podcast.jpg";
export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: "services.productsPhotography",
      icon: Film,
      iconBgColor: "bg-primary-500/10",
      bgImage: photography
    },
    {
      title: "services.writingContent", 
      icon: VideoIcon,
      iconBgColor: "bg-secondary-500/10",
      bgImage: writing
    },
    {
      title: "services.promoVedios",
      icon: Camera,
      iconBgColor: "bg-accent-500/10",
      bgImage: promo
    },
    {
      title: "services.weddingVedios",
      icon: Scissors,
      iconBgColor: "bg-success-500/10",
      bgImage: wedding
    },
    {
      title: "services.socialMedia",
      icon: Music,
      iconBgColor: "bg-warning-500/10",
      bgImage: social
    },
    {
      title: "services.editing",
      icon: Palette,
      iconBgColor: "bg-error-500/10",
      bgImage: edit
    },
    {
      title: "services.eventCoverAge",
      icon: Palette,
      iconBgColor: "bg-error-500/10",
      bgImage: event
    },
    {
      title: "services.podcast",
      icon: Palette,
      iconBgColor: "bg-error-500/10",
        bgImage: podcast
    },
  ];

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
          {services.map((service, index) => (
            <motion.div key={index}>
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
