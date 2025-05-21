import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute(
      "dir",
      newLang === "ar" ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute("lang", newLang);
  };
  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="bg-transparent text-white/80 hover:text-primary-400 transition-colors focus:outline-none cursor-pointer"
      >
        <option value="ar" className="bg-neutral-900 line-height-1 text-white">
          ع
        </option>
        <option value="en" className="bg-neutral-900 text-white">
          En
        </option>
      </select>
    </div>
  );
}
