import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelect from './LanguageSelect';
import logo from '../assets/logo.png';
import Image from './shared/Image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/#about' },
    { key: 'services', path: '/#services' },
    { key: 'portfolio', path: '/portfolio' },
    { key: 'contact', path: '/#contact' }
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (location.pathname === '/' && path.startsWith('/#')) {
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-2'
          : 'bg-transparent '
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            aria-label="Go to home"
            className="flex items-center space-x-2 rtl:space-x-reverse text-white "
          >
          
            <Image  src={logo} alt="cinsetyle" className={` max-lg:w-12 ${isScrolled ? 'w-12' : 'w-32 '}`} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.key}
                aria-label={`Go to ${item.key}`}
                to={item.path}
                className="text-lg font-medium text-white/80 hover:text-main-color transition-colors"
                onClick={() => handleNavClick(item.path)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <LanguageSelect />
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-md mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-4 px-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.key}
                aria-label={`Go to ${item.key}`}
                to={item.path}
                className={`text-base font-medium text-white/80 hover:text-main-color transition-colors py-2 transform ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transitionProperty: 'transform, opacity',
                  transitionDuration: '300ms'
                }}
                onClick={() => handleNavClick(item.path)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <div className={`py-2 transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{
              transitionDelay: `${navItems.length * 50}ms`
            }}>
              <LanguageSelect />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;