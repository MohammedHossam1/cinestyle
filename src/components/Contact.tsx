import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  Twitter,
  MapPin,
  Phone,
  Youtube
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { container } from "../constants";
import SectionHeader from "./shared/SectionHeader";

const contactCards = [
  {
    Icon: MapPin,
    titleKey: "contact.process.steps.consultation",
    content: <span className="text-neutral-400">Mansoura , galaa street</span>,
    delay: 0.2,
    href: "https://maps.google.com/?q=Mansoura,galaa street",
    external: true,
  },
  {
    Icon: Phone,
    titleKey: "contact.process.steps.concept",
    content: (
      <span className="text-neutral-400" dir="ltr">
        +20 12 00845393
      </span>
    ),
    delay: 0.3,
    href: "tel:+201200845393",
    external: false,
  },
  {
    Icon: Mail,
    titleKey: "contact.process.steps.planning",
    content: (
      <span className="text-neutral-400 line-clamp-1 truncate text-wrap">
        cinestyle.mediaproduction@gmail.com
      </span>
    ),
    delay: 0.4,
    href: "mailto:cinestyle.mediaproduction@gmail.com",
    external: false,
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/cinestylemp/",
    Icon: Instagram,
    label: "cinestyle.mp",
  },
  {
    href: "https://x.com/CineS89369?t=fmp_9iXBP6XQoSldpVzuuQ&s=09",
    Icon: Twitter,
    label: "CineStyle",
  },
  {
    href: "https://www.facebook.com/cinestylemp/",
    Icon: Facebook,
    label: "Cinestyle media production",
  },
  {
    href: "https://www.youtube.com/@cinestylemp",
    Icon: Youtube,
    label: "CINESTYLE MEDIA PRODUCTION",
  },
];

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className=" bg-neutral-900">
      <div className={container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader text={t("contact.title")} desc={t("contact.description")} />
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            {contactCards.map(({ Icon, titleKey, content, href, external }) => (
              <motion.a
                key={titleKey}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-neutral-800 p-4 border-2 border-neutral-800 hover:border-main-color duration-500 transition-all  lg:p-8 lg:rounded-3xl block focus:outline-none focus:ring-2 focus:ring-main-color "
                tabIndex={0}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="size-6 lg:size-12 text-main-color mb-4" />
                  <h3 className="text-xs lg:text-xl font-semibold text-white mb-2">
                    {t(titleKey)}
                  </h3>
                  <span className="text-xs xl:text-lg max-w-full overflow-hidden text-ellipsis whitespace-nowrap" style={{ width: "100%" }}>
                    {content}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 lg:mt-16 bg-neutral-800 p-10 lg:rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              {t("contact.process.title")}
            </h3>
            <div className="flex justify-center gap-8">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-neutral-400 hover:text-main-color transition-colors"
                >
                  <Icon className="h-8 w-8" />
                  <span className="hidden md:block">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
