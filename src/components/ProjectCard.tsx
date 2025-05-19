import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  videoUrl: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  videoUrl,
  featured = false,
}) => {
  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={`group relative overflow-hidden rounded-lg ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Video iframe */}
      <div className="aspect-video h-full w-full">
        <iframe
          src={getEmbedUrl(videoUrl)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-90" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-xs font-medium text-primary-400 uppercase tracking-wider mb-2">
            {category}
          </div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
            {title}
          </h3>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
          >
            Watch on YouTube
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
