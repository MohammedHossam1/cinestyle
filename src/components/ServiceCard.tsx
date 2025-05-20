import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon?: React.ElementType;
  iconBgColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ServiceCard({
  title,
  description,
  className,
  Icon ,
  iconBgColor = "bg-primary-500/10",
  style,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-white text-white lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col h-full ${className}`}
      style={style}
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon container with animated background */}
      <div className="relative">
        <div
          className={`${iconBgColor} p-5 lg:rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform duration-500`}
        >
          {Icon && <Icon className="h-8 w-8" />}
        </div>
      </div>

      {/* Content with hover effects */}
      <h3 className="text-2xl font-bold mb-4 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-base leading-relaxed flex-grow">{description}</p>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 lg:rounded-full -translate-y-16 translate-x-16 group-hover:translate-y-[-4rem] group-hover:translate-x-[4rem] transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-500/5 lg:rounded-full translate-y-12 -translate-x-12 group-hover:translate-y-[3rem] group-hover:-translate-x-[3rem] transition-transform duration-500" />
    </div>
  );
}
