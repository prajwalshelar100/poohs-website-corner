
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, Heart, Calendar, PenTool, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from 'react-day-picker';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-pooh-yellow/30 flex flex-col">
      {/* Header */}
      <header className="bg-pooh-yellow p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="text-3xl font-handwritten text-amber-800 hover:text-amber-700 transition-colors">
              Hundred Acre Woods Adventures
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="px-3 py-2 text-amber-800 hover:text-amber-600 font-semibold rounded-full hover:bg-amber-100 transition-colors">
              Home
            </Link>
            <Link to="/stories" className="px-3 py-2 text-amber-800 hover:text-amber-600 font-semibold rounded-full hover:bg-amber-100 transition-colors">
              Stories
            </Link>
            <Link to="/kindness" className="px-3 py-2 text-amber-800 hover:text-amber-600 font-semibold rounded-full hover:bg-amber-100 transition-colors">
              Kindness Tasks
            </Link>
            <Link to="/diary" className="px-3 py-2 text-amber-800 hover:text-amber-600 font-semibold rounded-full hover:bg-amber-100 transition-colors">
              Pooh's Diary
            </Link>
            <Link 
              to="/for-grownups" 
              className="px-3 py-2 text-amber-800 hover:text-amber-600 font-semibold rounded-full hover:bg-amber-100 transition-colors"
            >
              For Grown-ups
            </Link>


              <Link
                to="https://www.prajwalshelar.online/"
                className="ml-4 px-3 py-2 text-white bg-blue-600 hover:bg-blue-500 font-semibold rounded-full transition-colors"
              >
                👨‍💻 Know the Developer
              </Link>
             
             

          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-pooh-yellow p-2 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around">
          <Link to="/" className="flex flex-col items-center p-2 text-amber-800">
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/stories" className="flex flex-col items-center p-2 text-amber-800">
            <Book size={20} />
            <span className="text-xs mt-1">Stories</span>
          </Link>
          <Link to="/kindness" className="flex flex-col items-center p-2 text-amber-800">
            <Heart size={20} />
            <span className="text-xs mt-1">Kindness</span>
          </Link>
          <Link to="/diary" className="flex flex-col items-center p-2 text-amber-800">
            <PenTool size={20} />
            <span className="text-xs mt-1">Diary</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-800 text-white p-6 md:pb-6 pb-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-handwritten mb-2">Hundred Acre Woods Adventures</h3>
              <p className="text-amber-200">A warm and fuzzy place for everyone</p>
              <button
  type="button"
  className="mt-2 px-2 py-2 bg-amber-400 text-amber-900 rounded-full hover:bg-amber-300 transition-colors"
  onClick={() => {
    window.location.href =
      "mailto:prajwalshelar19@gmail.com?subject=I want to join the adventure!";
  }}
>
  🚧 Under-construction side project — click if you want me to finish it!
</button>




            </div>
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><Link to="/" className="text-amber-200 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/stories" className="text-amber-200 hover:text-white transition-colors">Stories</Link></li>
                <li><Link to="/kindness" className="text-amber-200 hover:text-white transition-colors">Kindness Tasks</Link></li>
                <li><Link to="/diary" className="text-amber-200 hover:text-white transition-colors">Pooh's Diary</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-amber-700 text-center text-sm text-amber-300">
            <p>This is a fan-made website created with love and is not affiliated with Disney</p>
            
          </div>
          
          <div  className="text-center text-sm text-amber-300">
            {/* <p>© 2023 Hundred Acre Woods Adventures. All rights reserved.</p> */}
            <p>Made by Prajwal Shelar</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
