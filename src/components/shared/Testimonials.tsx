import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TestimonialCard from "../TestimonialCard";

const Testimonials = () => {
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

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
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
  );
};

export default Testimonials;
