
import React from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-truth-600 to-truth-700 text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join the Fight Against Synthetic Media Deception
          </h2>
          
          <p className="text-lg text-truth-100">
            Whether you're building content moderation tools or striving to ensure fair democratic discourse,
            our technology is here to support your mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/demo">
                Try The Demo <MoveRight className="ml-2" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/technology">
                Explore Technology
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
