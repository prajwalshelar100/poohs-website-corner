
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PoohGreeting from '@/components/PoohGreeting';
import DailyThought from '@/components/DailyThought';
import KindnessTask from '@/components/KindnessTask';
import { Book, Heart, PenTool } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center mb-8">
            <motion.h1 
              className="text-4xl md:text-5xl font-handwritten text-amber-800 mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to Hundred Acre Woods Adventures
            </motion.h1>
            <motion.p 
              className="text-amber-700 text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A warm and fuzzy place where we celebrate friendship, kindness, and adventures
            </motion.p>
          </div>
          
          <PoohGreeting />
        </section>
        
        <section className="mb-12">
          <DailyThought />
        </section>
        
        <section className="mb-12">
          <KindnessTask />
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-storybook text-amber-800 text-center mb-8">Explore Pooh's World</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-pooh-yellow rounded-xl p-6 shadow-md text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-amber-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Adventure Stories</h3>
              <p className="text-amber-700 mb-4">Join Pooh and friends on interactive adventures that teach valuable lessons.</p>
              <Link 
                to="/stories" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Read Stories
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-pooh-green rounded-xl p-6 shadow-md text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Kindness Tasks</h3>
              <p className="text-green-700 mb-4">Simple, fun activities that spread joy and kindness to those around you.</p>
              <Link 
                to="/kindness" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Daily Tasks
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-pooh-blue rounded-xl p-6 shadow-md text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Pooh's Diary</h3>
              <p className="text-blue-700 mb-4">Create your own stories and keep track of your adventures with Pooh.</p>
              <Link 
                to="/diary" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Write a Story
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
