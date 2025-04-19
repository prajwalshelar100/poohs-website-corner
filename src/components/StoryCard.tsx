
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface StoryCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  delay?: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ id, title, description, imageSrc, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-amber-800 mb-2 font-storybook">{title}</h3>
        <p className="text-amber-700 mb-4 text-sm">{description}</p>
        <Link 
          to={`/stories/${id}`} 
          className="bg-pooh-yellow hover:bg-amber-300 text-amber-800 font-medium py-2 px-4 rounded-full inline-flex items-center transition-colors"
        >
          <BookOpen size={16} className="mr-2" />
          Read Story
        </Link>
      </div>
    </motion.div>
  );
};

export default StoryCard;
