import { ArrowLeft, Home } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

// Custom hook for animation
const useFloatingAnimation = () => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Simple sine wave animation for floating effect
      const newPosition = Math.sin(elapsed / 1000) * 10;
      setPosition(newPosition);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return position;
};

const NotFound: React.FC = () => {
const { t } = useTranslation();
  const navigate = useNavigate();
  const floatingOffset = useFloatingAnimation();

  useEffect(() => {
    document.title = "Page Not Found | 404 Error";

    return () => {
      document.title = "";
    };
  }, []);

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      {/* 404 Animated Graphic */}
      <div
        className="relative mb-8"
        style={{ transform: `translateY(${floatingOffset}px)` }}
      >
        <div className="flex items-center justify-center">
          <div className="text-[200px] font-bold text-main-color leading-none  select-none">
            4
          </div>
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-main-color to-main-color/80 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-main-color"></div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl w-32 h-32 rounded-full bg-main opacity-30"></div>
          </div>
          <div className="text-[200px] font-bold text-main-color leading-none  select-none">
            4
          </div>
        </div>
      </div>

      <div className="max-w-lg w-full mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
          {t("notFound.title")}
        </h1>
        <p className="text-lg  mb-8">
          {t("notFound.description")}        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            aria-label="Go to home"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-main-color to-main-color/80 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            <span>{t("nav.home")}</span>
          </Link>

          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm hover:border-main-color hover:text-main-color transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>{t("notFound.back")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
