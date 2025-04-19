import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Check, Plus, Minus, Divide, X, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import PoohGreeting from '@/components/PoohGreeting';

type Operation = '+' | '-' | '×' | '÷';

interface MathProblem {
  num1: number;
  num2: number;
  operation: Operation;
  answer: number;
}

const PoohTracker = () => {
  const [position, setPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [problemSolved, setProblemSolved] = useState(false);
  const [currentProblem, setCurrentProblem] = useState<MathProblem | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const [showCongrats, setShowCongrats] = useState(false);
  const { toast } = useToast();

  // Generate a new math problem based on the current level
  const generateProblem = () => {
    const operations: Operation[] = ['+', '-', '×', '÷'];
    const availableOperations = level === 1 ? ['+', '-'] : operations;
    const operation = availableOperations[Math.floor(Math.random() * availableOperations.length)] as Operation;
    
    let num1, num2, answer;
    
    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * (level * 5)) + 1;
        num2 = Math.floor(Math.random() * (level * 5)) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num2 = Math.floor(Math.random() * (level * 3)) + 1;
        num1 = num2 + Math.floor(Math.random() * (level * 3)) + 1; // Ensure positive result
        answer = num1 - num2;
        break;
      case '×':
        num1 = Math.floor(Math.random() * (level * 2)) + 1;
        num2 = Math.floor(Math.random() * (level * 2)) + 1;
        answer = num1 * num2;
        break;
      case '÷':
        num2 = Math.floor(Math.random() * (level * 2)) + 1;
        answer = Math.floor(Math.random() * (level * 2)) + 1;
        num1 = num2 * answer; // Ensure clean division
        break;
      default:
        num1 = 1;
        num2 = 1;
        answer = 2;
    }
    
    setCurrentProblem({ num1, num2, operation, answer });
    setUserAnswer('');
    setIsCorrect(null);
    setProblemSolved(false);
  };

  // Start Pooh's movement
  useEffect(() => {
    if (!problemSolved) {
      const interval = setInterval(() => {
        setIsMoving(true);
        setPosition(prev => {
          if (prev >= 80 && direction === 'right') {
            setDirection('left');
            return 79;
          } else if (prev <= 0 && direction === 'left') {
            setDirection('right');
            return 1;
          }
          
          return direction === 'right' ? prev + 1 : prev - 1;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [problemSolved, direction]);

  // Generate initial problem
  useEffect(() => {
    generateProblem();
  }, [level]);

  const handleSubmit = () => {
    const userNum = parseFloat(userAnswer);
    
    if (isNaN(userNum)) {
      toast({
        title: "Pooh says:",
        description: "Oh bother! Please enter a number.",
        duration: 3000,
      });
      return;
    }
    
    const correct = userNum === currentProblem?.answer;
    setIsCorrect(correct);
    setProblemSolved(true);
    
    if (correct) {
      setScore(prev => prev + 10 * level);
      setStreak(prev => prev + 1);
      
      // Level up after 5 correct answers in a row
      if ((streak + 1) % 5 === 0) {
        if (level < 3) {
          setLevel(prev => prev + 1);
          setShowCongrats(true);
          
          setTimeout(() => {
            setShowCongrats(false);
          }, 3000);
          
          toast({
            title: "Level Up!",
            description: `Pooh is impressed! You're now at level ${level + 1}!`,
            duration: 5000,
          });
        } else {
          toast({
            title: "Amazing!",
            description: "You've mastered all levels! Pooh is so proud of you!",
            duration: 5000,
          });
        }
      }
      
      toast({
        title: "Correct!",
        description: "Great job! Pooh is very happy!",
        duration: 1500,
      });
    } else {
      setStreak(0);
      toast({
        title: "Not quite right",
        description: `The correct answer was ${currentProblem?.answer}. Try again!`,
        duration: 3000,
      });
    }
    
    // Generate new problem after 2 seconds
    setTimeout(() => {
      generateProblem();
    }, 2000);
  };

  const renderOperationIcon = (operation: Operation) => {
    switch (operation) {
      case '+': return <Plus size={20} />;
      case '-': return <Minus size={20} />;
      case '×': return <X size={20} />;
      case '÷': return <Divide size={20} />;
      default: return <Plus size={20} />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-pooh-tan rounded-xl p-6 shadow-md mb-8">
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-amber-800 font-storybook mb-1">Score: {score}</h3>
            <div className="flex items-center">
              <span className="text-amber-700 mr-2">Level {level}</span>
              <Progress value={(streak % 5) * 20} className="w-32 h-2" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-amber-800 font-bold mr-2">Streak: {streak}</span>
            <Award className={`text-amber-500 ${streak > 0 ? 'animate-pulse' : ''}`} />
          </div>
        </div>
        
        {showCongrats && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white p-6 rounded-lg shadow-lg text-center z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2">Level Up!</h2>
            <p>You've reached Level {level}!</p>
            <p className="text-sm mt-2">The math problems will get a bit harder now.</p>
          </motion.div>
        )}

        <div className="relative bg-green-100 h-24 rounded-lg overflow-hidden mb-6 border-2 border-green-200">
          <div className="absolute w-full h-4 bg-green-200 bottom-0"></div>
          
          {/* Pooh character - animated */}
          <motion.div 
            className="absolute bottom-4"
            style={{ left: `${position}%` }}
            animate={{ 
              y: isMoving ? [0, -5, 0] : 0,
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 0.5 },
            }}
          >
            <img 
              src="https://i.imgur.com/tDZVtZJ.png" 
              alt="Winnie the Pooh" 
              className="h-20 w-20 object-contain"
              style={{ transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)' }}
            />
          </motion.div>
          
          {/* Honey pot at the end */}
          <div className="absolute right-4 bottom-4">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/5325/5325900.png" 
              alt="Honey Pot" 
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>
        
        {currentProblem && (
          <div className="bg-white p-6 rounded-lg shadow-inner">
            <div className="text-center mb-4">
              <h3 className="text-amber-800 font-storybook mb-2">Help Pooh solve this problem:</h3>
              <div className="flex items-center justify-center text-2xl font-bold text-amber-900">
                <span>{currentProblem.num1}</span>
                <span className="mx-2 flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full">
                  {renderOperationIcon(currentProblem.operation)}
                </span>
                <span>{currentProblem.num2}</span>
                <span className="mx-2">=</span>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  className={`w-16 h-10 border-2 text-center rounded-md ${
                    isCorrect === true ? 'border-green-500 bg-green-50' : 
                    isCorrect === false ? 'border-red-500 bg-red-50' : 
                    'border-amber-300'
                  }`}
                  disabled={isCorrect !== null}
                />
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={handleSubmit}
                disabled={isCorrect !== null}
                className="bg-amber-600 hover:bg-amber-700"
              >
                <Check size={16} className="mr-2" />
                Check Answer
              </Button>
              
              <Button 
                onClick={generateProblem} 
                variant="outline"
                className="border-amber-600 text-amber-600"
              >
                <RefreshCw size={16} className="mr-2" />
                New Problem
              </Button>
            </div>
            
            {isCorrect !== null && (
              <motion.div 
                className={`mt-4 p-3 rounded-lg text-center ${
                  isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-handwritten">
                  {isCorrect 
                    ? `Wonderful! ${currentProblem.num1} ${currentProblem.operation} ${currentProblem.num2} = ${currentProblem.answer} is correct!` 
                    : `Oh bother! That's not quite right. Let's try again!`}
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <PoohGreeting message="Math can be as sweet as honey when we do it together! Each correct answer helps me get closer to my honey pot!" />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-amber-800 font-storybook mb-3">How to Play:</h3>
        <ul className="space-y-2 text-amber-900">
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Solve the math problem to help Pooh reach his honey pot!</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Type your answer in the box and click "Check Answer".</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Get 5 correct answers in a row to level up.</span>
          </li>
          <li className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>Each level has harder problems but gives more points!</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PoohTracker;
