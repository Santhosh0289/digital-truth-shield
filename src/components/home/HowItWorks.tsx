
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/section-heading';

const steps = [
  {
    number: "01",
    title: "Media Input",
    description: "Upload or provide a link to the video or audio content you want to analyze for potential manipulation.",
    color: "bg-truth-100 text-truth-600 border-truth-200"
  },
  {
    number: "02",
    title: "Preprocessing",
    description: "Our system extracts frames from videos and transforms audio into spectrograms for deep analysis.",
    color: "bg-truth-100 text-truth-600 border-truth-200"
  },
  {
    number: "03",
    title: "Multi-Modal Analysis",
    description: "The hybrid AI model processes the content using CNNs, RNNs, and specialized audio detection systems.",
    color: "bg-truth-100 text-truth-600 border-truth-200"
  },
  {
    number: "04",
    title: "Results & Verification",
    description: "Receive a comprehensive report with confidence scores and regions of potential manipulation.",
    color: "bg-truth-100 text-truth-600 border-truth-200"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="How It Works"
          description="Our system uses a multi-step process to analyze and verify the authenticity of digital media."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`rounded-lg p-6 border ${step.color} relative z-10`}>
                <div className="text-3xl font-bold mb-4 opacity-50">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(25%*2*${index+1}-8%)] transform -translate-y-1/2 z-0">
                  <ArrowRight className="w-8 h-8 text-truth-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-truth-100 to-truth-50 rounded-lg p-8 border border-truth-200">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Advanced Processing Techniques</h3>
              <p className="text-muted-foreground mb-4">
                Our system goes beyond simple visual analysis by examining temporal inconsistencies, audio-visual synchronization,
                and physical impossibilities that often appear in synthetic media.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                  <span>Physiologically impossible eye movements and blinking patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                  <span>Frequency domain anomalies in synthetic audio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                  <span>Unnatural lighting effects and shadow inconsistencies</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-white border border-truth-300 shadow-md p-4">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                  <div className="bg-truth-50 rounded p-2 flex flex-col">
                    <div className="text-xs text-truth-600 font-medium mb-1">Eye Tracking</div>
                    <div className="flex-1 bg-black/5 rounded"></div>
                  </div>
                  <div className="bg-truth-50 rounded p-2 flex flex-col">
                    <div className="text-xs text-truth-600 font-medium mb-1">Facial Mapping</div>
                    <div className="flex-1 bg-black/5 rounded"></div>
                  </div>
                  <div className="bg-truth-50 rounded p-2 flex flex-col">
                    <div className="text-xs text-truth-600 font-medium mb-1">Audio Analysis</div>
                    <div className="flex-1 bg-black/5 rounded"></div>
                  </div>
                  <div className="bg-truth-50 rounded p-2 flex flex-col">
                    <div className="text-xs text-truth-600 font-medium mb-1">Confidence Score</div>
                    <div className="flex-1 bg-black/5 rounded flex items-center justify-center">
                      <div className="text-xl font-bold text-truth-600">96.7%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
