
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface DiaryEntryProps {
  onSave: (entry: { title: string; content: string; date: string }) => void;
}

const DiaryEntry: React.FC<DiaryEntryProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { toast } = useToast();

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Oh bother!",
        description: "Please add both a title and some writing to your diary entry.",
        variant: "destructive",
      });
      return;
    }

    const date = new Date().toISOString();
    onSave({ title, content, date });
    
    // Reset form
    setTitle('');
    setContent('');
    
    toast({
      title: "Hooray!",
      description: "Your diary entry has been saved. Pooh is proud of you!",
    });
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
  };

  return (
    <motion.div 
      className="bg-pooh-blue rounded-xl p-6 shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-blue-800 mb-4 font-storybook text-center">Write in Pooh's Diary</h2>
      <div className="bg-white/70 p-5 rounded-lg shadow-inner">
        <div className="mb-4">
          <label htmlFor="diary-title" className="block text-blue-800 mb-1 font-medium">
            Title
          </label>
          <input
            id="diary-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="My Adventure Today"
            className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none font-handwritten"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="diary-content" className="block text-blue-800 mb-1 font-medium">
            Dear Diary...
          </label>
          <textarea
            id="diary-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Today I went on an adventure with my friends..."
            rows={6}
            className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 outline-none font-handwritten"
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={handleClear}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
          >
            <Trash2 size={16} />
            <span>Clear</span>
          </button>
          
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors"
          >
            <Save size={16} />
            <span>Save Entry</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DiaryEntry;
