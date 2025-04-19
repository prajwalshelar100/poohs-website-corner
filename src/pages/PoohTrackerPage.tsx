
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PoohGreeting from '@/components/PoohGreeting';
import PoohTracker from '@/components/PoohTracker';

const PoohTrackerPage = () => {
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
              Pooh's Math Adventure
            </motion.h1>
            <motion.p 
              className="text-amber-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Help Pooh solve puzzles and reach the honey pot!
            </motion.p>
          </div>
        </section>

        <section className="mb-8">
          <PoohGreeting message="Oh hello there! I'm trying to reach my honey pot, but I need to solve some puzzles first. Can you help me?" />
        </section>
        
        <section className="mb-12">
          <PoohTracker />
        </section>
      </div>
    </Layout>
  );
};

export default PoohTrackerPage;
