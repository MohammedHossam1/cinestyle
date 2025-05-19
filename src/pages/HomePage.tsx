import React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonials from "../components/shared/Testimonials";
import Contact from "../components/Contact";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      {/* Hero Section */}
      <HeroSection title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* Services Section */}
      <Services />
      {/* Featured Projects */}
      <Projects />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage;
