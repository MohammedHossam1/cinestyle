import React from "react";

interface ServiceCardProps {
  title: string;
  Icon?: React.ElementType;
  iconBgColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ServiceCard({
  title,
  className,
  style,
}: ServiceCardProps) {
  return (
    <div
      className={`group border-[3px]  border-main-color relative overflow-hidden bg-white text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-24 lg:h-32 xl:h-44 flex items-center justify-center  ${className}`}
      style={style}
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/30 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content with hover effects */}
      <h3 className="text-xs sm:text-sm  lg:text-2xl text-center font-bold mb-4 transition-colors duration-300">
        {title}
      </h3>
      {/* <p className="text-base leading-relaxed flex-grow">{description}</p> */}

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 lg:rounded-full -translate-y-16 translate-x-16 group-hover:translate-y-[-4rem] group-hover:translate-x-[4rem] transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-500/5 lg:rounded-full translate-y-12 -translate-x-12 group-hover:translate-y-[3rem] group-hover:-translate-x-[3rem] transition-transform duration-500" />
    </div>
  );
}
