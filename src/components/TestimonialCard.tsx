import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  company: string;
  rating?: number;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  position,
  company,
  rating = 5,
  imageUrl,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 md:p-8 h-full flex flex-col justify-between" >
      {/* Stars */}
      {rating > 0 && (
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-300'
              }`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <blockquote className="text-neutral-700 dark:text-neutral-300 mb-6 relative">
        <span className="absolute -top-6 -left-2 text-5xl text-primary-300 opacity-30">"</span>
        <p className="relative z-10 text-base leading-relaxed">{content}</p>
      </blockquote>

      {/* Author */}
      <div className="flex items-centder self-end gap-2 x w-full">
        {imageUrl && (
          <div className=" flex-shrink-0">
            <img
              src={imageUrl}
              alt={author}
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        )}
        <div >
          <div className="font-medium text-neutral-900 dark:text-white">
            {author}
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {position}{company && `, ${company}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;