import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8 max-w-md border border-border bg-card rounded-lg">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded hover:brightness-110 transition-all uppercase tracking-wider text-xs"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
