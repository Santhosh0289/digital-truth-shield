
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-background/95 py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">DigitalTruthShield</span>
        </div>
        
        <div className="text-center md:text-left text-sm text-foreground/70">
          Defending truth in the digital age with real-time deepfake detection
        </div>
        
        <div className="flex gap-4">
          {['Privacy', 'Terms', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm text-foreground/70 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="text-sm text-foreground/70">
          © 2025 DigitalTruthShield
        </div>
      </div>
    </footer>
  );
};

export default Footer;
