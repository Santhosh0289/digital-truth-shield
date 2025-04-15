
import React from 'react';
import { Newspaper, Globe, Scale, Building, User } from 'lucide-react';
import SectionHeading from '../ui/section-heading';

const applications = [
  {
    icon: <Newspaper className="h-12 w-12 text-truth-500" />,
    title: "Media Verification",
    description: "Help journalists and fact-checkers validate the authenticity of user-submitted content before publishing.",
    bgClass: "bg-gradient-to-br from-truth-50 to-truth-100"
  },
  {
    icon: <Globe className="h-12 w-12 text-truth-500" />,
    title: "Social Media Protection",
    description: "Enable automatic filtering or flagging of suspected deepfakes to reduce the spread of misinformation.",
    bgClass: "bg-gradient-to-br from-truth-100 to-truth-200"
  },
  {
    icon: <Scale className="h-12 w-12 text-truth-500" />,
    title: "Legal & Law Enforcement",
    description: "Verify digital evidence or track digital impersonation with forensic-grade analysis tools.",
    bgClass: "bg-gradient-to-br from-truth-50 to-truth-100"
  },
  {
    icon: <Building className="h-12 w-12 text-truth-500" />,
    title: "Enterprise Security",
    description: "Monitor for executive impersonation scams or protect internal communications from manipulation.",
    bgClass: "bg-gradient-to-br from-truth-100 to-truth-200"
  },
  {
    icon: <User className="h-12 w-12 text-truth-500" />,
    title: "Personal Protection",
    description: "Scan content before sharing or engaging with potentially manipulated media on your personal devices.",
    bgClass: "bg-gradient-to-br from-truth-50 to-truth-100"
  }
];

const Applications = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeading
          title="Real-World Applications"
          description="Our detection system opens the door to a variety of impactful applications across different sectors."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className={`rounded-lg p-8 border border-truth-200 shadow-sm flex flex-col items-center text-center ${app.bgClass}`}
            >
              <div className="rounded-full p-4 bg-white shadow-sm border border-truth-200 mb-6">
                {app.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
