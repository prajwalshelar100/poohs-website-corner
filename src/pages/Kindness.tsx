
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PoohGreeting from '@/components/PoohGreeting';
import KindnessTask from '@/components/KindnessTask';
import { Calendar, Award, Heart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import PoohCalendar from '@/components/PoohCalendar';
import PoohTracker from '@/components/PoohTracker';

const dailyWisdom = [
  { text: "Do your work with your whole heart, and you will succeed - there's so little competition.", source: "Bhagavad Gita" },
  { text: "The wise work for the welfare of the world, without thought for themselves.", source: "Bhagavad Gita" },
  { text: "Be kind whenever possible. It is always possible.", source: "Dalai Lama" },
  { text: "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.", source: "Amelia Earhart" },
  { text: "Happiness is when what you think, what you say, and what you do are in harmony.", source: "Mahatma Gandhi" },
  { text: "Peace begins with a smile.", source: "Mother Teresa" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", source: "Helen Keller" },
  { text: "In the middle of difficulty lies opportunity.", source: "Albert Einstein" },
  { text: "Do not let what you cannot do interfere with what you can do.", source: "John Wooden" },
  { text: "The future depends on what we do in the present.", source: "Mahatma Gandhi" }
];

const Kindness = () => {
  const { toast } = useToast();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="text-center mb-6">
            <motion.h1 
              className="text-3xl md:text-4xl font-handwritten text-amber-800 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pooh's Kindness Tasks
            </motion.h1>
            <motion.p 
              className="text-amber-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Simple, fun activities that spread joy and kindness to those around you
            </motion.p>
          </div>
        </section>

        <section className="mb-8">
          <PoohGreeting message="Being kind is like giving away a little pot of honey - it makes others happy, and that makes you happy too!" />
        </section>
        
        <section className="mb-12">
          <KindnessTask />
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-pooh-tan rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-red-600" size={24} />
                </div>
                <h2 className="text-xl font-semibold text-amber-800 font-storybook">Daily Wisdom</h2>
              </div>
              
              <ul className="space-y-3">
                {dailyWisdom.map((wisdom, index) => (
                  <motion.li 
                    key={index}
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span className="text-amber-900 font-handwritten">{wisdom.text}</span>
                    </div>
                    <span className="text-amber-700 text-sm italic ml-6">— {wisdom.source}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <div className="space-y-6">
              <motion.div 
                className="bg-pooh-green rounded-xl p-6 shadow-md cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => window.location.href = '/pooh-calendar'}
              >
                <div className="flex items-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Calendar className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-green-800 font-storybook">Pooh's Calendar</h2>
                    <p className="text-green-700">Track your daily adventures with Pooh</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-pooh-blue rounded-xl p-6 shadow-md cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => window.location.href = '/pooh-tracker'}
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Award className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-blue-800 font-storybook">Pooh's Tracker</h2>
                    <p className="text-blue-700">Watch Pooh solve puzzles and learn with him</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kindness;
