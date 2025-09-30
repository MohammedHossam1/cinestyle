import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ServicesData } from "../data/Index";
import Image from "./shared/Image";
import { container } from "../constants";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white/80 border-t border-white/10 mt-10">
      <div className={container + " py-12"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-start">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Image src={logo} alt="logo" className="w-32 " />
            </div>
            <p className="text-sm leading-relaxed mb-6">{t("footer.about")}</p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
              target="_blank"
                href="https://www.instagram.com/cinestylemp/"
                className="text-white/70 hover:text-main-color transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
              target="_blank"
                href="https://x.com/CineS89369?t=fmp_9iXBP6XQoSldpVzuuQ&s=09"
                className="text-white/70 hover:text-main-color transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
              target="_blank"
                href="https://www.youtube.com/@cinestylemp"
                className="text-white/70 hover:text-main-color transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
              target="_blank"
                href="https://www.facebook.com/cinestylemp/"
                className="text-white/70 hover:text-main-color transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-start">
            <h3 className="text-white font-medium mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {[
                { key: "home", label: t("nav.home") },
                { key: "about", label: t("nav.about") },
                { key: "services", label: t("nav.services") },
                { key: "portfolio", label: t("nav.portfolio") },
                { key: "contact", label: t("nav.contact") },
              ].map((item) => (
                <li key={item.key}>
                  {item.key === "portfolio" ? (
                    <Link
                      to="/portfolio"
                      className="text-sm text-white/70 hover:text-main-color transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.key === "home") {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          scrollToSection(item.key);
                        }
                      }}
                      className="text-sm text-white/70 hover:text-main-color transition-colors cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-start">
            <h3 className="text-white font-medium mb-4">
              {t("services.title")}
            </h3>
            <ul className="space-y-2">
              {ServicesData?.map((service) => (
                <li key={service.title} className="text-sm text-white/70  ">
                  {t(`${service.title}.title`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-start">
            <h3 className="text-white font-medium mb-4">
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-main-color flex-shrink-0 mt-0.5" />
                <span className="text-sm">Mansoura , galaa street</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-main-color flex-shrink-0" />
                <span className="text-sm" dir="ltr">
                  +20 12 00845393
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-main-color flex-shrink-0" />
                <span className="text-sm">
                  cinestyle.mediaproduction@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
