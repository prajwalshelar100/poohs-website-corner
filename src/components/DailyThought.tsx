
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const thoughts = [
  "A little consideration, a little thought for others, makes all the difference.",
  "You're braver than you believe, stronger than you seem, and smarter than you think.",
  "Sometimes the smallest things take up the most room in your heart.",
  "A hug is always the right size.",
  "The nicest thing about rain is that it always stops. Eventually.",
  "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
  "It is more fun to talk with someone who doesn't use long, difficult words but rather short, easy words like 'What about lunch?'",
  "People say nothing is impossible, but I do nothing every day.",
  "A day without a friend is like a pot without a single drop of honey left inside.",
  "If the person you are talking to doesn't appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear."
];

const DailyThought = () => {
  const [thought, setThought] = useState('');
  
  useEffect(() => {
    // Get the current hour to change the quote at specific intervals during the day
    const now = new Date();
    const currentHour = now.getHours();
    
    // Use the hour as part of the seed to change the quote throughout the day
    const today = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const seed = today + currentHour;
    const index = seed % thoughts.length;
    
    setThought(thoughts[index]);
    
    // Set up an interval to check for hour changes
    const intervalId = setInterval(() => {
      const newDate = new Date();
      const newHour = newDate.getHours();
      
      // If the hour has changed, update the thought
      if (newHour !== currentHour) {
        const newSeed = today + newHour;
        const newIndex = newSeed % thoughts.length;
        setThought(thoughts[newIndex]);
      }
    }, 60000); // Check every minute
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div 
      className="bg-pooh-tan rounded-xl p-6 shadow-md max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-amber-800 mb-4 font-storybook text-center">Pooh's Thought of the Day</h2>
      <div className="bg-white/70 p-5 rounded-lg shadow-inner">
        <blockquote className="italic text-amber-900 font-handwritten text-lg text-center">
          "{thought}"
        </blockquote>
        <p className="text-right mt-2 text-amber-700 font-semibold">— Winnie the Pooh</p>
      </div>
    </motion.div>
  );
};

export default DailyThought;
