
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PoohGreetingProps {
  message?: string;
}

const greetings = [
  "Hello there, friend! I'm so glad you're here.",
  "Welcome to the Hundred Acre Wood!",
  "Oh bother! I mean, oh joy! A visitor!",
  "It's always a good day for a little something sweet.",
  "There's nothing quite like sharing kindness with friends."
];

const PoohGreeting: React.FC<PoohGreetingProps> = ({ message }) => {
  const [greeting, setGreeting] = useState(message || greetings[0]);
  
  useEffect(() => {
    if (!message) {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setGreeting(greetings[randomIndex]);
    }
  }, [message]);

  return (
    <div className="relative">
      <motion.div 
        className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 relative">
          <img 
            src="https://i.imgur.com/tDZVtZJ.png" 
            alt="Winnie the Pooh" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="bg-pooh-yellow p-4 rounded-lg shadow-inner relative">
            <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-r-8 border-b-8 border-transparent border-r-pooh-yellow"></div>
            <p className="font-handwritten text-amber-800 text-lg md:text-xl">
              {greeting}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PoohGreeting;
