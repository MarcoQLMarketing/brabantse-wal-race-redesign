import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Styleguide from "./pages/Styleguide";
import NotFound from "./pages/NotFound";
import Praktisch from "./pages/Praktisch";
import RoutesPage from "./pages/Routes";
import Sponsoren from "./pages/Sponsoren";
import Vrijwilligers from "./pages/Vrijwilligers";
import Nieuws from "./pages/Nieuws";
import Afstanden from "./pages/Afstanden";
import Fotos from "./pages/Fotos";
import Contact from "./pages/Contact";
import AanmeldenVrijwilligers from "./pages/AanmeldenVrijwilligers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/praktisch" element={<Praktisch />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/sponsoren" element={<Sponsoren />} />
          <Route path="/vrijwilligers" element={<Vrijwilligers />} />
          <Route path="/nieuws" element={<Nieuws />} />
          <Route path="/afstanden" element={<Afstanden />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aanmelden-vrijwilligers" element={<AanmeldenVrijwilligers />} />
          <Route path="/styleguide" element={<Styleguide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
