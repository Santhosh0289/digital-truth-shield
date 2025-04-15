
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/section-heading';
import DeepfakeDetector from '@/components/demo/DeepfakeDetector';
import { Shield, AlertTriangle } from 'lucide-react';

const Demo = () => {
  return (
    <MainLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Deepfake Detection Demo"
            description="Experience our technology in action. Upload a video to see how our system analyzes and identifies potential deepfakes."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DeepfakeDetector />
            </div>
            
            <div className="space-y-6">
              <div className="bg-truth-50 rounded-lg border border-truth-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-truth-500" />
                  <h3 className="text-xl font-semibold">How It Works</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  This demo simulates our deepfake detection technology. Here's what happens behind the scenes:
                </p>
                
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">1</span>
                    <span>Your video is analyzed frame-by-frame for visual inconsistencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">2</span>
                    <span>Facial landmarks are tracked to detect unnatural movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">3</span>
                    <span>Audio is analyzed for synthetic speech patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">4</span>
                    <span>Results are compiled into a detailed analysis report</span>
                  </li>
                </ol>
              </div>
              
              <div className="bg-deepfake-50 rounded-lg border border-deepfake-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-deepfake-500" />
                  <h3 className="text-xl font-semibold">Demo Limitations</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Please note that this is a simplified demonstration:
                </p>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-deepfake-500"></span>
                    <span>The results in this demo are simulated and randomized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-deepfake-500"></span>
                    <span>Our production-ready API provides more detailed analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-deepfake-500"></span>
                    <span>For research partnerships, contact our team for access to the full system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Demo;
