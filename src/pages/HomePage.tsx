import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TestimonialCard from "../components/TestimonialCard";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      content: "testimonials.sarah.content",
      author: "testimonials.sarah.author",
      position: "testimonials.sarah.position",
      company: "testimonials.sarah.company",
      imageUrl:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      content: "testimonials.michael.content",
      author: "testimonials.michael.author",
      position: "testimonials.michael.position",
      company: "testimonials.michael.company",
      imageUrl:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      content: "testimonials.emily.content",
      author: "testimonials.emily.author",
      position: "testimonials.emily.position",
      company: "testimonials.emily.company",
      imageUrl:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const processSteps = [
    "Initial Consultation",
    "Concept Development",
    "Production Planning",
    "Execution",
    "Post-Production",
    "Delivery & Support",
  ];

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      {/* Hero Section */}
      <HeroSection title={t("hero.title")} subtitle={t("hero.subtitle")} />

      {/* Services Section */}
      <Services />
      {/* Featured Projects */}
      <Projects />

      {/* Testimonials */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              {t("testimonials.title")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              {t("testimonials.description")}
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index}>
                <TestimonialCard
                  content={t(testimonial.content)}
                  author={t(testimonial.author)}
                  position={t(testimonial.position)}
                  company={t(testimonial.company)}
                  imageUrl={testimonial.imageUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-500/5" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                {t("contact.title")}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
                {t("contact.description")}
              </p>

              <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-xl backdrop-blur-lg mb-6 border border-neutral-200 dark:border-neutral-600">
                <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                  {t("contact.process.title")}
                </h3>
                <ul className="space-y-4">
                  {processSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start group"
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 mr-3 group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-primary-500 transition-colors">
                        {step}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div className="bg-white dark:bg-neutral-700 rounded-xl shadow-xl p-6 md:p-8 backdrop-blur-lg border border-neutral-200 dark:border-neutral-600">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                {t("contact.form.title")}
              </h3>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
