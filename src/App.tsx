import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TopicPage from "./pages/TopicPage";
import AirQualityPage from "./pages/AirQualityPage";
import EnergyWaterPage from "./pages/EnergyWaterPage";
import WasteSegregationPage from "./pages/WasteSegregationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/air-quality" element={<AirQualityPage />} />
          <Route path="/energy-water" element={<EnergyWaterPage />} />
          <Route path="/waste" element={<WasteSegregationPage />} />
          <Route path="/topic/:slug" element={<TopicPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
