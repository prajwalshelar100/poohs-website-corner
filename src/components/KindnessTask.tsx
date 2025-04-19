
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const kindnessTasks = [
  "Give someone a genuine compliment today.",
  "Draw a picture for someone you care about.",
  "Help set the table or clean up after a meal.",
  "Share your toys or books with a friend.",
  "Tell someone three things you love about them.",
  "Pick up litter you see outside (with an adult's help).",
  "Write a thank-you note to someone who helped you.",
  "Ask someone how they're feeling today, and listen carefully.",
  "Make a homemade gift for someone special.",
  "Let someone else go first in a game or activity.",
  "Smile at 5 different people today.",
  "Help someone carry something heavy.",
  "Make a card for someone who might be feeling lonely.",
  "Read a story to a younger sibling or friend.",
  "Water a plant or help take care of an animal."
];

const KindnessTask = () => {
  const [task, setTask] = useState('');
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if there's a saved task for today in localStorage
    const today = new Date().toDateString();
    const savedTask = localStorage.getItem('kindnessTask');
    const savedDate = localStorage.getItem('kindnessTaskDate');
    const taskCompleted = localStorage.getItem('kindnessTaskCompleted') === 'true';
    
    if (savedTask && savedDate === today) {
      setTask(savedTask);
      setCompleted(taskCompleted);
    } else {
      // Generate a new task for today
      const randomIndex = Math.floor(Math.random() * kindnessTasks.length);
      const newTask = kindnessTasks[randomIndex];
      setTask(newTask);
      setCompleted(false);
      
      // Save to localStorage
      localStorage.setItem('kindnessTask', newTask);
      localStorage.setItem('kindnessTaskDate', today);
      localStorage.setItem('kindnessTaskCompleted', 'false');
    }
  }, []);

  const markCompleted = () => {
    setCompleted(true);
    localStorage.setItem('kindnessTaskCompleted', 'true');
    toast({
      title: "Hooray!",
      description: "Pooh is very proud of your kindness today! Great job!",
      duration: 5000,
    });
  };

  const getNewTask = () => {
    const currentIndex = kindnessTasks.indexOf(task);
    let newIndex = currentIndex;
    
    // Make sure we get a different task
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * kindnessTasks.length);
    }
    
    const newTask = kindnessTasks[newIndex];
    setTask(newTask);
    setCompleted(false);
    
    // Save to localStorage
    const today = new Date().toDateString();
    localStorage.setItem('kindnessTask', newTask);
    localStorage.setItem('kindnessTaskDate', today);
    localStorage.setItem('kindnessTaskCompleted', 'false');
    
    toast({
      title: "New Task!",
      description: "Pooh has found a new way for you to spread kindness today!",
      duration: 3000,
    });
  };

  return (
    <motion.div 
      className="bg-pooh-green rounded-xl p-6 shadow-md max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-green-800 mb-4 font-storybook text-center">Today's Kindness Task</h2>
      <div className={`bg-white/70 p-5 rounded-lg shadow-inner ${completed ? 'border-2 border-green-500' : ''}`}>
        <p className="text-green-900 font-handwritten text-lg text-center mb-4">{task}</p>
        
        <div className="flex justify-center space-x-4 mt-4">
          {!completed ? (
            <button
              onClick={markCompleted}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
            >
              <CheckCircle2 size={18} />
              <span>I did this!</span>
            </button>
          ) : (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center space-x-2">
              <CheckCircle2 size={18} />
              <span>Completed! Great job!</span>
            </div>
          )}
          
          <button
            onClick={getNewTask}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
          >
            <RefreshCw size={18} />
            <span>Try another</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default KindnessTask;
