import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import LaunchFilms from "./pages/LaunchFilms";
import ProductEducation from "./pages/ProductEducation";
import AdCampaigns from "./pages/AdCampaigns";
import Process from "./pages/Process";
import FundingAnnouncement from "./pages/FundingAnnouncement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const Cases = lazy(() => import("./pages/Cases"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/launch-films" element={<LaunchFilms />} />
          <Route path="/product-education" element={<ProductEducation />} />
          <Route path="/ad-campaigns" element={<AdCampaigns />} />
          <Route path="/process" element={<Process />} />
          <Route path="/funding-announcement" element={<FundingAnnouncement />} />
          <Route path="/cases" element={<Suspense fallback={<div className="min-h-screen bg-white" />}><Cases /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
