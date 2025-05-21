import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import ScrollToTopBtn from "./ScrollToTopBtn";
export default function MainLayout() {
  const { i18n } = useTranslation();
  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={i18n.language === "ar" ? "font-['Almarai']" : "font-['Share_Tech']"}
    >
      <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
        <Navbar />
        <Outlet />
        <ScrollToTopBtn />
        <Footer />
      </div>
    </div>
  );
}
