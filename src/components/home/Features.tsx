
import React from 'react';
import { 
  Cpu, ShieldCheck, Clock, Zap, Gauge, Radio, 
  Activity, BarChart, LineChart, Microscope 
} from 'lucide-react';
import SectionHeading from '../ui/section-heading';

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-truth-500" />,
    title: "Convolutional Neural Networks",
    description: "Detects spatial artifacts in video frames, including unnatural facial expressions and inconsistent lighting."
  },
  {
    icon: <Clock className="h-8 w-8 text-truth-500" />,
    title: "Recurrent Neural Networks",
    description: "LSTM networks analyze sequences over time to identify temporal inconsistencies between frames."
  },
  {
    icon: <Radio className="h-8 w-8 text-truth-500" />,
    title: "Spectrogram Analysis",
    description: "Transforms audio signals into spectrograms to uncover artifacts introduced by voice synthesis."
  },
  {
    icon: <LineChart className="h-8 w-8 text-truth-500" />,
    title: "Facial Landmark Tracking",
    description: "Monitors subtle shifts in facial geometry with advanced landmark tracking technology."
  },
  {
    icon: <Zap className="h-8 w-8 text-truth-500" />,
    title: "Real-Time Performance",
    description: "Optimized for low-latency inference, suitable for mobile devices and web platforms."
  },
  {
    icon: <Gauge className="h-8 w-8 text-truth-500" />,
    title: "High Accuracy",
    description: "Consistently outperforms state-of-the-art approaches across multiple benchmark datasets."
  },
  {
    icon: <BarChart className="h-8 w-8 text-truth-500" />,
    title: "Strong Generalization",
    description: "Effectively detects unseen manipulation methods through advanced training techniques."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-truth-500" />,
    title: "Robust Security",
    description: "Resistant to adversarial attacks and compression artifacts that might fool simpler systems."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <SectionHeading
          title="Our Hybrid AI Framework"
          description="To overcome the shortcomings of existing methods, we've developed a hybrid deep learning framework that combines the strengths of multiple AI architectures and techniques."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:border-truth-200">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
