import React from "react";
import { DivideIcon as LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBgColor?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  className,
  icon: Icon = LucideIcon,
  iconBgColor = "bg-primary-500/10",
}) => {
  return (
    <div className={`group bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full hover:translate-y-[-4px] ${className}`}>
      <div
        className={`${iconBgColor} p-4 rounded-lg inline-flex mb-5 text-primary-500`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed flex-grow">
        {description}
      </p>
      <div className="mt-6">
        <button className="text-primary-500 text-sm font-medium flex items-center hover:text-primary-600 transition-colors">
          Learn more
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
