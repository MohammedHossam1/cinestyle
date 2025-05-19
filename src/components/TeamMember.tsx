import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  bio,
  imageUrl,
  socialLinks,
}) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Social Media Overlay */}
        {socialLinks && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              {socialLinks.instagram && (
                <a 
                  href={socialLinks.instagram} 
                  className="text-white hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  className="text-white hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  className="text-white hover:text-primary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Info */}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-primary-500 text-sm font-medium mb-3">
        {position}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {bio}
      </p>
    </div>
  );
};

export default TeamMember;