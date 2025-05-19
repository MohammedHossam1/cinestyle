import React, { useEffect, useRef } from 'react';
import { PlayCircle, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import vedio from '../assets/hero.mp4';
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  imageUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  videoUrl = vedio,
  imageUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch((error) => {
              if (!error.message.includes('interrupted')) {
                console.error("Video play failed:", error);
              }
            });
          } else if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-neutral-900 z-0">
        {videoUrl && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-60"
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        {!videoUrl && imageUrl && (
          <img 
            src={imageUrl} 
            alt={t('hero.title')} 
            className="w-full h-full object-cover opacity-60" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center">
            <PlayCircle className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
            {t('hero.watchShowreel')}
          </button>
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-md font-medium transition-colors">
            {t('hero.getStarted')}
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors z-10 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;