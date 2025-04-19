
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import PoohGreeting from '@/components/PoohGreeting';
import DiaryEntry from '@/components/DiaryEntry';
import DiaryList from '@/components/DiaryList';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface DiaryEntryType {
  id: string;
  title: string;
  content: string;
  date: string;
}

const Diary = () => {
  const [entries, setEntries] = useState<DiaryEntryType[]>([]);
  const [viewEntry, setViewEntry] = useState<DiaryEntryType | null>(null);
  
  useEffect(() => {
    // Load entries from localStorage
    const savedEntries = localStorage.getItem('poohDiaryEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntry = (entry: { title: string; content: string; date: string }) => {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('poohDiaryEntries', JSON.stringify(updatedEntries));
  };

  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('poohDiaryEntries', JSON.stringify(updatedEntries));
  };

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
              Pooh's Diary Creator
            </motion.h1>
            <motion.p 
              className="text-amber-700 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Write your own stories and keep track of your adventures with Pooh
            </motion.p>
          </div>
        </section>

        <section className="mb-8">
          <PoohGreeting message="Writing in a diary is a wonderful way to remember all the special things that happen. I often forget things, especially when my tummy is rumbly, so writing them down helps a lot!" />
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DiaryEntry onSave={saveEntry} />
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <DiaryList 
                entries={entries}
                onDelete={deleteEntry}
                onView={setViewEntry}
              />
            </div>
          </div>
        </section>
      </div>

      {/* View Entry Dialog */}
      <Dialog open={!!viewEntry} onOpenChange={(open) => !open && setViewEntry(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-storybook text-amber-800">
              {viewEntry?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-500 text-sm">
              {viewEntry?.date && new Date(viewEntry.date).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-pooh-yellow/20 p-4 rounded-lg mt-2">
            <p className="whitespace-pre-wrap font-handwritten text-amber-900">
              {viewEntry?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Diary;
