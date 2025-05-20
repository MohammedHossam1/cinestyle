import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Image from './shared/Image';
import { useTranslation } from 'react-i18next';
export default function Footer () {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <footer className="bg-neutral-900 text-white/80">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Image src={logo} alt="logo" className="w-32 " />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Creating cinematic experiences and visual stories that captivate audiences and elevate brands since 2010.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white/70 hover:text-main-color transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-main-color transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-main-color transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-main-color transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-white/70 hover:text-main-color transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Film Production',
                'Commercial Videos',
                'Animation & Motion Graphics',
                'Photography',
                'Post-Production',
                'Sound Design'
              ].map((service) => (
                <li key={service} className="text-sm text-white/70  ">
                    {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-main-color flex-shrink-0 mt-0.5" />
                <span className="text-sm">Mansoura , galaa street</span>
              </li>
              <li className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-main-color flex-shrink-0" />
                <span className="text-sm">+20 12 00845393</span>
              </li>
              <li className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-main-color flex-shrink-0" />
                <span className="text-sm">cinestyle.mediaproduction@gmail.com</span>
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
};
