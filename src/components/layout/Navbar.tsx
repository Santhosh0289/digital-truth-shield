
import React from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-foreground">Digital</span>
            <span className="text-xl font-bold text-gradient-dark ml-1">Truth</span>
            <span className="text-xl font-bold text-foreground">Shield</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {['Home', 'Demo', 'Technology', 'Resources'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex dark-glass hover:bg-accent/50"
          >
            Learn More
          </Button>
          <Button 
            size="sm" 
            className="hidden md:flex glow-effect"
          >
            Try It Now <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-foreground hover:bg-accent/50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
