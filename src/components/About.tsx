import { motion } from "framer-motion";
import { Eye, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "./shared/SectionHeader";
import { container } from "../constants";

const About = () => {
  const { t } = useTranslation();
  const info = [
    {
      icon: <Lightbulb className="w-8 xl:w-12 h-8 xl:h-12 text-main-color" />,
      title: t("about.ourWhy"),
      description: t("about.whyDescription"),
      delay: 0.4,
    },
    {
      icon: <Eye className="w-8 xl:w-12 h-8 xl:h-12 text-main-color" />,
      title: t("about.beyondFrame"),
      description: t("about.frameDescription"),
      delay: 0.6,
    }
  ]
  return (
    <section id="about" className=" bg-gradient-to-br text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={container}
      >
        <SectionHeader text={t("about.title")} />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed text-neutral-300"
        >
          {t("about.description")}
        </motion.p>

        <div className="mt-4 lg:mt-10 xl:mt-20 grid grid-cols-2 gap-2 lg:gap-10">
          {info.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: item.delay, duration: 1 }}
              className={`bg-neutral-800 border border-neutral-700 lg:rounded-2xl p-2 py-4 lg:p-8 shadow-lg hover:shadow-xl transitionspace-y-2 lg:space-y-3 `}
            >
              <div className={"flex items-center justify-center"}>
                {item.icon}
              </div>
              <h2 className={"text-base lg:text-3xl font-semibold text-center"}>
                {item.title}
              </h2>
              <p className="text-sm lg:text-lg text-neutral-300 text-center leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
