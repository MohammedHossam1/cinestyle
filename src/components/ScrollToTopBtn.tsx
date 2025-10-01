import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // WhatsApp floating button handler
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '201200845393';
    const message = encodeURIComponent('Hello! I would like to know more about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>

      {/* WhatsApp Floating Button */}
      <button
        className="fixed bottom-8 right-8 z-48 p-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 shadow-lg"
        onClick={handleWhatsAppClick}
        aria-label="Chat on WhatsApp"
        style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.15)' }}
      >
        <FaWhatsapp className="h-6 w-6" />
      </button>
      {/* Scroll to Top Button */}
      <button
        className={`fixed bottom-24 right-8 z-48 p-3 rounded-full bg-main-color hover:bg-main-color/80 text-white transition-all duration-300 shadow-lg ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
};

export default ScrollToTopBtn;