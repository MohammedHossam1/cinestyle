import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  Twitter ,
  MapPin,
  Phone,
  Youtube
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-800 p-8 lg:rounded-3xl"
            >
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 text-main-color  mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("contact.process.steps.consultation")}
                </h3>
                <p className="text-neutral-400">Mansoura , galaa street</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-800 p-8 lg:rounded-3xl"
            >
              <div className="flex flex-col items-center text-center">
                <Phone className="h-12 w-12 text-main-color  mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("contact.process.steps.concept")}
                </h3>
                <p className="text-neutral-400" dir="ltr">+20 12 00845393</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-neutral-800 p-8 lg:rounded-3xl"
            >
              <div className="flex flex-col items-center text-center">
                <Mail className="h-12 w-12 text-main-color  mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t("contact.process.steps.planning")}
                </h3>
                <p className="text-neutral-400">
                  cinestyle.mediaproduction@gmail.com{" "}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-neutral-800 p-10 lg:rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              {t("contact.process.title")}
            </h3>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.instagram.com/cinestylemp/"
                target="_blank"
                className="group flex items-center gap-3 text-neutral-400 hover:text-main-color transition-colors"
              >
                <Instagram className="h-8 w-8" />
                <span className="hidden md:block">cinestyle.mp</span>
              </a>
              <a
                href="https://x.com/CineS89369?t=fmp_9iXBP6XQoSldpVzuuQ&s=09"
                target="_blank"
                className="group flex items-center gap-3 text-neutral-400 hover:text-main-color transition-colors"
              >
                <Twitter className="h-8 w-8" />
                <span className="hidden md:block">CineStyle</span>
              </a>
              <a
                href="https://www.facebook.com/cinestylemp/"
                target="_blank"
                className="group flex items-center gap-3 text-neutral-400 hover:text-main-color transition-colors"
              >
                <Facebook className="h-8 w-8" />
                <span className="hidden md:block">
                  Cinestyle media production
                </span>
              </a>
              <a
                href="https://www.youtube.com/@cinestylemp"
                target="_blank"
                className="group flex items-center gap-3 text-neutral-400 hover:text-main-color transition-colors"
              >
                <Youtube className="h-8 w-8" />
                <span className="hidden md:block">CINESTYLE MEDIA PRODUCTION</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
