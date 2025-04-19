
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Kindness from "./pages/Kindness";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import ForGrownups from "./pages/ForGrownups";
import PoohCalendarPage from "./pages/PoohCalendarPage";
import PoohTrackerPage from "./pages/PoohTrackerPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<StoryDetail />} />
          <Route path="/kindness" element={<Kindness />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/for-grownups" element={<ForGrownups />} />
          <Route path="/pooh-calendar" element={<PoohCalendarPage />} />
          <Route path="/pooh-tracker" element={<PoohTrackerPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
