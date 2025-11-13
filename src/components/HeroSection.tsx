import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import vedio from "../assets/hero.mp4";
import poster from "../assets/vedio-pre.webp";
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
              if (!error.message.includes("interrupted")) {
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
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-[70vh] lg:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-neutral-900 z-0">
        {videoUrl && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-60"
            loop
            muted
            playsInline
            preload="auto" 
            poster={poster} 
          >
            <source src={vedio} type="video/mp4" />
            {t("hero.title")}
          </video>
        )}
        {!videoUrl && imageUrl && (
          <img
            src={imageUrl}
            alt={t("hero.title")}
            className="w-full h-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight uppercase"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
        >
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/#reelOrPromo"
            onClick={() => {
              const contactSection = document.getElementById("reelOrPromo");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-main-color backdrop-blur-sm hover:bg-main-color/80 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            {t("hero.showProjects")}
            </Link>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        id="scroll-down"
        aria-label="Scroll down"
        className="absolute bottom-8  transform  text-white/80 hover:text-white transition-colors z-10 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;
