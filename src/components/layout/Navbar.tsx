
import React from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-truth-500" />
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Digital</span>
            <span className="gradient-text text-xl font-bold">Truth</span>
            <span className="text-xl font-bold">Shield</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/demo" className="text-sm font-medium transition-colors hover:text-primary">
            Demo
          </Link>
          <Link to="/technology" className="text-sm font-medium transition-colors hover:text-primary">
            Technology
          </Link>
          <Link to="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Learn More
          </Button>
          <Button size="sm" className="hidden md:flex">
            Try It Now <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
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
