import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Lightbulb, Eye } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen py-24 bg-gradient-to-br text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 md:px-12"
      >
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center tracking-tight mb-10"
        >
          {t("about.title")}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed text-neutral-300"
        >
          {t("about.description")}
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Why Us Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="bg-neutral-800 border border-neutral-700 lg:rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-12 h-12 text-main-color" />
            </div>
            <h2 className="text-3xl font-semibold text-center mb-4">
              {t("about.ourWhy")}
            </h2>
            <p className="text-lg text-neutral-300 text-center leading-relaxed">
              {t("about.whyDescription")}
            </p>
          </motion.div>

          {/* Beyond Frame Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="bg-neutral-800 border border-neutral-700 lg:rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-12 h-12 text-main-color" />
            </div>
            <h2 className="text-3xl font-semibold text-center mb-4">
              {t("about.beyondFrame")}
            </h2>
            <p className="text-lg text-neutral-300 text-center leading-relaxed">
              {t("about.frameDescription")}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
