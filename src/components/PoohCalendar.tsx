
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Save, CheckCircle2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { useToast } from "@/hooks/use-toast";
import type { DayContentProps } from "react-day-picker";

interface CalendarEntry {
  date: Date;
  poohActivity: string;
  userActivity: string;
  parentFeedback?: string;
}

const poohActivities = [
  "Pooh shared his honey with Piglet today.",
  "Pooh helped Rabbit organize his garden.",
  "Pooh made a card for Eeyore to cheer him up.",
  "Pooh listened to Owl's stories all afternoon.",
  "Pooh helped Kanga look after little Roo.",
  "Pooh picked flowers to brighten up his home.",
  "Pooh comforted Piglet during a thunderstorm.",
  "Pooh cleaned up litter in the Hundred Acre Wood.",
  "Pooh wrote a thank you note to Christopher Robin.",
  "Pooh visited Eeyore to make sure he wasn't lonely.",
  "Pooh helped build a new home for Rabbit's friends.",
  "Pooh read a bedtime story to Roo.",
  "Pooh made breakfast for all his friends.",
  "Pooh taught Tigger how to be gentle with fragile things.",
  "Pooh gave Piglet a big hug when he was feeling sad."
];

const PoohCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [entries, setEntries] = useState<CalendarEntry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<string>('');
  const [parentFeedback, setParentFeedback] = useState<string>('');
  const [parentMode, setParentMode] = useState<boolean>(false);
  const { toast } = useToast();

  const getEntryForDate = (date: Date): CalendarEntry | undefined => {
    return entries.find(
      (entry) => format(entry.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  const getRandomPoohActivity = (): string => {
    const randomIndex = Math.floor(Math.random() * poohActivities.length);
    return poohActivities[randomIndex];
  };
  
  const currentDateEntry = getEntryForDate(date);
  const poohActivity = currentDateEntry?.poohActivity || getRandomPoohActivity();

  const handleSaveEntry = () => {
    if (!currentEntry.trim()) {
      toast({
        title: "Pooh says:",
        description: "Oh bother! Please tell me about your day first.",
        duration: 3000,
      });
      return;
    }

    const existingEntryIndex = entries.findIndex(
      (entry) => format(entry.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );

    if (existingEntryIndex >= 0) {
      // Update existing entry
      const updatedEntries = [...entries];
      updatedEntries[existingEntryIndex] = {
        ...updatedEntries[existingEntryIndex],
        userActivity: currentEntry,
      };
      setEntries(updatedEntries);
    } else {
      // Create new entry
      setEntries([
        ...entries,
        {
          date: new Date(date),
          poohActivity,
          userActivity: currentEntry,
        },
      ]);
    }

    toast({
      title: "Pooh says:",
      description: "Wonderful! I've saved your adventure for today.",
      duration: 3000,
    });
  };

  const handleParentFeedback = () => {
    if (!parentFeedback.trim()) {
      toast({
        title: "Note:",
        description: "Please provide some feedback first.",
        duration: 3000,
      });
      return;
    }

    const existingEntryIndex = entries.findIndex(
      (entry) => format(entry.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );

    if (existingEntryIndex >= 0) {
      // Update existing entry with parent feedback
      const updatedEntries = [...entries];
      updatedEntries[existingEntryIndex] = {
        ...updatedEntries[existingEntryIndex],
        parentFeedback,
      };
      setEntries(updatedEntries);

      toast({
        title: "Feedback Saved",
        description: "Your feedback has been saved.",
        duration: 3000,
      });
      
      setParentFeedback('');
      setParentMode(false);
    } else {
      toast({
        title: "Note:",
        description: "There's no entry for this date yet.",
        duration: 3000,
      });
    }
  };

  const renderPoohResponse = () => {
    if (!currentDateEntry || !currentDateEntry.parentFeedback) return null;
    
    const feedback = currentDateEntry.parentFeedback.toLowerCase();
    let response = "";
    
    if (feedback.includes("good") || feedback.includes("great") || feedback.includes("wonderful") || feedback.includes("excellent")) {
      response = "That's wonderful! I'm so proud of you. You're as sweet as honey!";
    } else if (feedback.includes("improve") || feedback.includes("try") || feedback.includes("better")) {
      response = "Oh bother! Everyone makes mistakes sometimes. Tomorrow is a new day to try again!";
    } else {
      response = "Thank you for sharing your day with me! Every day is an adventure in the Hundred Acre Wood!";
    }
    
    return (
      <motion.div 
        className="mt-4 bg-amber-100 p-4 rounded-lg border border-amber-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-handwritten text-amber-800">
          <span className="font-bold">Pooh says: </span>
          {response}
        </p>
      </motion.div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-80 bg-white shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-800">
              <CalendarIcon className="mr-2" size={20} />
              Calendar
            </CardTitle>
            <CardDescription>Select a date to view or add entries</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              className="border rounded-md"
              components={{
                DayContent: (props: DayContentProps) => {
                  const dayDate = props.date;
                  const hasEntry = entries.some(
                    (entry) => format(entry.date, 'yyyy-MM-dd') === format(dayDate, 'yyyy-MM-dd')
                  );
                  
                  return (
                    <div className="relative flex h-8 w-8 items-center justify-center">
                      {props.date.getDate()}
                      {hasEntry && (
                        <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500" />
                      )}
                    </div>
                  );
                },
              }}
            />
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setParentMode(!parentMode)}
            >
              {parentMode ? "Child Mode" : "Parent Mode"}
            </Button>
          </CardFooter>
        </Card>

        <div className="flex-1">
          <Card className="bg-pooh-yellow/20 shadow-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    const newDate = new Date(date);
                    newDate.setDate(date.getDate() - 1);
                    setDate(newDate);
                  }}
                >
                  <ChevronLeft size={16} />
                  Previous
                </Button>
                <CardTitle className="text-amber-800">
                  {format(date, 'EEEE, MMMM d, yyyy')}
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    const newDate = new Date(date);
                    newDate.setDate(date.getDate() + 1);
                    setDate(newDate);
                  }}
                >
                  Next
                  <ChevronRight size={16} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <h3 className="font-storybook text-amber-800 mb-2">Pooh's Adventure Today:</h3>
                <p className="font-handwritten text-amber-900">{poohActivity}</p>
              </div>

              {parentMode ? (
                <div className="bg-white p-4 rounded-lg shadow-inner">
                  <h3 className="font-storybook text-amber-800 mb-2">Parent Feedback:</h3>
                  
                  {currentDateEntry?.userActivity ? (
                    <>
                      <div className="mb-4 bg-gray-50 p-3 rounded border border-gray-200">
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Child's Entry:</h4>
                        <p className="text-gray-800">{currentDateEntry.userActivity}</p>
                      </div>
                      
                      <textarea
                        value={parentFeedback}
                        onChange={(e) => setParentFeedback(e.target.value)}
                        placeholder="Share your thoughts about your child's activities today..."
                        className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                      />
                      
                      <div className="mt-3 flex justify-end">
                        <Button onClick={handleParentFeedback} className="bg-green-600 hover:bg-green-700">
                          <Save size={16} className="mr-2" />
                          Save Feedback
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500 italic">No entry from your child for this date yet.</p>
                  )}
                </div>
              ) : (
                <div className="bg-white p-4 rounded-lg shadow-inner">
                  <h3 className="font-storybook text-amber-800 mb-2">Your Adventure Today:</h3>
                  
                  <textarea
                    value={currentEntry}
                    onChange={(e) => setCurrentEntry(e.target.value)}
                    placeholder="Tell Pooh what kind things you did today..."
                    className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                  
                  <div className="mt-3 flex justify-end">
                    <Button onClick={handleSaveEntry} className="bg-amber-600 hover:bg-amber-700">
                      <CheckCircle2 size={16} className="mr-2" />
                      Save My Day
                    </Button>
                  </div>
                  
                  {currentDateEntry?.userActivity && (
                    <div className="mt-4 bg-amber-50 p-3 rounded border border-amber-200">
                      <h4 className="text-sm font-medium text-amber-800 mb-1">Your saved entry:</h4>
                      <p className="text-amber-900 font-handwritten">{currentDateEntry.userActivity}</p>
                    </div>
                  )}
                  
                  {renderPoohResponse()}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PoohCalendar;
