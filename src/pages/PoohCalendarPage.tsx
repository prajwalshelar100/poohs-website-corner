
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PoohGreeting from '@/components/PoohGreeting';
import PoohCalendar from '@/components/PoohCalendar';

const PoohCalendarPage = () => {
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
              Pooh's Adventure Calendar
            </motion.h1>
            <motion.p 
              className="text-amber-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Track your daily adventures with Pooh and his friends
            </motion.p>
          </div>
        </section>

        <section className="mb-8">
          <PoohGreeting message="Every day is a new adventure in the Hundred Acre Wood! What kind and wonderful things did you do today?" />
        </section>
        
        <section className="mb-12">
          <PoohCalendar />
        </section>
        
        <section className="mb-12 max-w-2xl mx-auto bg-pooh-tan p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-amber-800 mb-4 font-storybook">How to Use Pooh's Calendar:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span className="text-amber-900">
                <strong>For Children:</strong> Write about your day and the kind things you did. Pooh will share what he did too!
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span className="text-amber-900">
                <strong>For Parents:</strong> Use the Parent Mode to review your child's entries and provide encouraging feedback.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span className="text-amber-900">
                Pooh will respond to your parent's feedback with kind and helpful words.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span className="text-amber-900">
                Look back on previous days by clicking on the calendar dates to see all your adventures!
              </span>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default PoohCalendarPage;
