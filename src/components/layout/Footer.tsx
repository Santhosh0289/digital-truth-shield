
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-truth-500" />
          <span className="text-lg font-bold">DigitalTruthShield</span>
        </div>
        
        <div className="text-center md:text-left text-sm text-muted-foreground">
          Defending truth in the digital age with real-time deepfake detection
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © 2025 DigitalTruthShield
        </div>
      </div>
    </footer>
  );
};

export default Footer;
