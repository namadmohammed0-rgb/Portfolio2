import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/Portfolio2/" component={Home} />
      <Route path="/Portfolio2" component={Home} />

      <Route path="/" component={Home} />

      <Route
        path="/Namad-Mohammed-BA-Portfolio/"
        component={Home}
      />

      <Route
        path="/Namad-Mohammed-BA-Portfolio"
        component={Home}
      />

      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
