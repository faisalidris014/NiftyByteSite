import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Resources from "@/pages/Resources";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/industries" component={Industries} />
      <Route path="/resources" component={Resources} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionProvider>
          <div className="min-h-screen bg-nb-bg text-nb-text">
            <NavBar />
            <Router />
            <Footer />
          </div>
          <Toaster />
        </MotionProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
