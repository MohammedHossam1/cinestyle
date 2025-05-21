import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { i18n, t } = useTranslation();

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
      <label htmlFor="language-select" className="sr-only">
        {t('common.selectLanguage')}
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={handleLanguageChange}
        className="bg-transparent text-white/80 hover:text-primary-400 transition-colors focus:outline-none cursor-pointer focus:ring-2 focus:ring-primary-400 rounded"
        aria-label={t('common.selectLanguage')}
      >
        <option 
          value="ar" 
          className="bg-neutral-900 line-height-1 text-white"
          aria-label={t('common.arabic')}
        >
          ع
        </option>
        <option 
          value="en" 
          className="bg-neutral-900 text-white"
          aria-label={t('common.english')}
        >
          En
        </option>
      </select>
    </div>
  );
}
