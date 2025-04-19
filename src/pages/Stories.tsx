
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import StoryCard from '@/components/StoryCard';
import PoohGreeting from '@/components/PoohGreeting';

const stories = [
  {
    id: 'honey-adventure',
    title: 'The Great Honey Adventure',
    description: 'Join Pooh on his quest to find the perfect honey pot while learning about sharing.',
    imageSrc: 'https://images.unsplash.com/photo-1587049352851-8d4b89133611?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'rainy-day',
    title: 'Rainy Day Friends',
    description: 'When rain keeps everyone inside, Pooh and his friends find creative ways to have fun.',
    imageSrc: 'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lost-piglet',
    title: 'Piglet Gets Lost',
    description: 'Help Pooh find his friend Piglet who has wandered too far from home.',
    imageSrc: 'https://images.unsplash.com/photo-1516942164581-47f3b95233a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'birthday-surprise',
    title: "Eeyore's Birthday Surprise",
    description: 'Everyone in the Hundred Acre Wood is planning something special for Eeyore.',
    imageSrc: 'https://images.unsplash.com/photo-1490849393151-81bd3223e2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const Stories = () => {
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
              Pooh's Adventure Stories
            </motion.h1>
            <motion.p 
              className="text-amber-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Pooh and his friends on interactive adventures that teach valuable lessons about kindness and friendship
            </motion.p>
          </div>
        </section>

        <section className="mb-8">
          <PoohGreeting message="These stories are like pots of honey - sweet and full of goodness! Which one would you like to read today?" />
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story, index) => (
              <StoryCard 
                key={story.id}
                id={story.id}
                title={story.title}
                description={story.description}
                imageSrc={story.imageSrc}
                delay={index}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Stories;
