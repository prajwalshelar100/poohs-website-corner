
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface DiaryListProps {
  entries: DiaryEntry[];
  onDelete: (id: string) => void;
  onView: (entry: DiaryEntry) => void;
}

const DiaryList: React.FC<DiaryListProps> = ({ entries, onDelete, onView }) => {
  if (entries.length === 0) {
    return (
      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <p className="text-gray-500 font-handwritten text-lg">No diary entries yet. Start writing!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-blue-800 font-storybook">Your Diary Entries</h3>
      
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          className="bg-white p-4 rounded-lg shadow border border-blue-100 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-blue-900">{entry.title}</h4>
              <p className="text-sm text-gray-500">
                {format(new Date(entry.date), 'MMMM d, yyyy')}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-2 font-handwritten">
                {entry.content}
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => onView(entry)}
                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                title="View entry"
              >
                <Book size={18} />
              </button>
              
              <button
                onClick={() => onDelete(entry.id)}
                className="p-1 text-red-600 hover:text-red-800 transition-colors"
                title="Delete entry"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DiaryList;
