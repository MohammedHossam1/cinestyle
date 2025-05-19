import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLang);
  };

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Languages className="h-5 w-5 text-white/80" />
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="bg-transparent text-white/80 hover:text-primary-400 transition-colors focus:outline-none cursor-pointer"
      >
        <option value="ar" className="bg-neutral-900 text-white">العربية</option>
        <option value="en" className="bg-neutral-900 text-white">English</option>
      </select>
    </div>
  );
};

export default LanguageSelect;