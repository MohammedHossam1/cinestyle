import React from 'react';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  imageUrl,
  link,
  featured = false,
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Image */}
      <div className="aspect-video h-full w-full">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-xs font-medium text-primary-400 uppercase tracking-wider mb-2">
            {category}
          </div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center justify-between">
          <a 
            href={link} 
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            View Project
          </a>
          <div className="bg-primary-500 rounded-full p-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-600">
            <Play className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;