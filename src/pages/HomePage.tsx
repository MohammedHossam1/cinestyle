import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import About from "../components/About";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Portfolio from "./Portfolio/ReelOrPromo";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden space-y-16 lg:space-y-32">
      {/* Hero Section */}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroSection title={t("hero.title")} subtitle={t("hero.subtitle")} />
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <About />
      </motion.div>
      {/* Featured Projects */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        id="reelOrPromo"
        style={{ scrollMarginTop: "100px" }}
      >
        <Portfolio />
      </motion.div>
      {/* Services Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Services />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default HomePage;
