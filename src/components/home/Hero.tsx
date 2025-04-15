
import React from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-truth-500 mr-2"></span>
              Defending Truth in the Digital Age
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Real-Time <span className="gradient-text">Deepfake</span> Detection Using Hybrid AI
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Protect yourself and your organization from the dangers of synthetic media with our state-of-the-art deepfake detection technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/demo">
                  Try Demo <MoveRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-truth-500" />
                <span className="text-sm">Real-time detection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-truth-500" />
                <span className="text-sm">99.7% accuracy rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-truth-500" />
                <span className="text-sm">Works across platforms</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full aspect-video bg-gradient-to-br from-truth-100 to-truth-50 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 aspect-video bg-white/80 backdrop-blur-sm rounded border border-truth-200 shadow-sm flex items-center justify-center">
                  <div className="relative w-4/5 aspect-video bg-black/5 rounded overflow-hidden flex items-center justify-center">
                    <div className="text-lg font-medium text-muted-foreground">Deepfake Detection Demo</div>
                    <div className="absolute inset-0">
                      <div className="scanner-line absolute animate-scanning"></div>
                    </div>
                    <Shield className="absolute h-16 w-16 text-truth-400/30" />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-truth-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                  Protected by DigitalTruthShield
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/3 -left-4 w-72 h-72 bg-truth-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/3 -right-4 w-72 h-72 bg-deepfake-300/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
