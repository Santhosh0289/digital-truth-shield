
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, Book, Video, ExternalLink, Download, ArrowRight,
  AlertTriangle, Shield, CheckCircle, Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  return (
    <MainLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Educational Resources"
            description="Learn more about deepfake technology, its implications, and how to protect yourself and your organization."
            className="text-foreground"
          />
          
          <Tabs defaultValue="articles" className="mt-12">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8 bg-background border border-primary/20">
              <TabsTrigger value="articles" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <FileText className="h-4 w-4 mr-2" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Book className="h-4 w-4 mr-2" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Video className="h-4 w-4 mr-2" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="research" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ExternalLink className="h-4 w-4 mr-2" />
                Research Papers
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="articles" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "The Deepfake Threat Landscape in 2025",
                    description: "An overview of current deepfake technologies and their potential impacts.",
                    image: "bg-gradient-to-r from-truth-100 to-truth-200",
                    category: "Overview",
                    readTime: "8 min read"
                  },
                  {
                    title: "7 Ways Deepfakes Are Changing Media Consumption",
                    description: "How synthetic media is impacting journalism, entertainment, and public discourse.",
                    image: "bg-gradient-to-r from-truth-200 to-truth-300",
                    category: "Media Impact",
                    readTime: "12 min read"
                  },
                  {
                    title: "Deepfake Detection: Technology vs. Technology",
                    description: "The technological arms race between deepfake creators and detection systems.",
                    image: "bg-gradient-to-r from-truth-100 to-truth-200",
                    category: "Technology",
                    readTime: "10 min read"
                  },
                  {
                    title: "The Legal Framework Surrounding Synthetic Media",
                    description: "Current laws and regulations addressing deepfakes around the world.",
                    image: "bg-gradient-to-r from-truth-200 to-truth-300",
                    category: "Legal",
                    readTime: "15 min read"
                  },
                  {
                    title: "Protecting Public Figures from Deepfake Impersonation",
                    description: "Strategies for celebrities, politicians, and executives to safeguard their digital identity.",
                    image: "bg-gradient-to-r from-truth-100 to-truth-200",
                    category: "Protection",
                    readTime: "9 min read"
                  },
                  {
                    title: "The Psychology of Deepfake Deception",
                    description: "Why people fall for synthetic media and how to improve critical thinking.",
                    image: "bg-gradient-to-r from-truth-200 to-truth-300",
                    category: "Psychology",
                    readTime: "11 min read"
                  }
                ].map((article, index) => (
                  <Card key={index} className="bg-accent text-accent-foreground border-primary/20">
                    <div className={`h-48 ${article.image} opacity-90`}></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/20 text-foreground">
                          {article.category}
                        </span>
                        <span className="text-xs text-foreground/70">
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-foreground">{article.title}</CardTitle>
                      <CardDescription className="text-foreground/80">{article.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="secondary" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                        Read Article <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="guides" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "How to Verify Suspicious Media",
                    description: "A step-by-step guide to authenticating digital content you encounter online.",
                    icon: <CheckCircle className="h-12 w-12 text-green-500" />,
                    steps: [
                      "Check the source's credibility",
                      "Look for inconsistencies in lighting and shadows",
                      "Watch for unnatural facial movements",
                      "Use reverse image search for video frames",
                      "Verify with multiple sources",
                      "Utilize deepfake detection tools"
                    ]
                  },
                  {
                    title: "Protecting Your Digital Identity",
                    description: "Strategies to minimize the risk of becoming a deepfake target.",
                    icon: <Shield className="h-12 w-12 text-truth-500" />,
                    steps: [
                      "Limit public photos and videos of yourself",
                      "Use privacy settings on social media",
                      "Watermark important personal content",
                      "Regularly search for impersonations of yourself",
                      "Register for identity monitoring services",
                      "Report unauthorized use of your likeness"
                    ]
                  },
                  {
                    title: "Implementing Deepfake Detection for Organizations",
                    description: "How businesses and organizations can protect themselves from deepfake threats.",
                    icon: <Building className="h-12 w-12 text-truth-500" />,
                    steps: [
                      "Assess your organization's specific vulnerabilities",
                      "Train employees to recognize synthetic media",
                      "Implement verification protocols for sensitive communications",
                      "Deploy automated deepfake detection solutions",
                      "Develop a response plan for deepfake incidents",
                      "Collaborate with industry partners on threat intelligence"
                    ]
                  },
                  {
                    title: "Responding to a Deepfake Attack",
                    description: "What to do if you or your organization becomes a target of deepfake impersonation.",
                    icon: <AlertTriangle className="h-12 w-12 text-deepfake-500" />,
                    steps: [
                      "Document the fake content and its sources",
                      "Report to the platform where it appears",
                      "Notify relevant stakeholders",
                      "Issue clear public corrections if necessary",
                      "Consult legal counsel about potential actions",
                      "Leverage detection reports to prove manipulation"
                    ]
                  }
                ].map((guide, index) => (
                  <Card key={index} className="bg-accent text-accent-foreground border-primary/20">
                    <CardHeader>
                      <div className="mb-4">{guide.icon}</div>
                      <CardTitle className="text-foreground">{guide.title}</CardTitle>
                      <CardDescription className="text-foreground/80">{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2">
                        {guide.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-foreground text-xs font-medium shrink-0">
                              {stepIndex + 1}
                            </span>
                            <span className="text-foreground/90">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary" className="w-full hover:bg-primary hover:text-primary-foreground">
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Guide (PDF)
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Deepfakes Explained: The Technology Behind Synthetic Media",
                    duration: "18:24",
                    thumbnail: "bg-gradient-to-r from-truth-100 to-truth-200",
                    views: "245K"
                  },
                  {
                    title: "How to Spot a Deepfake: Visual Clues and Red Flags",
                    duration: "12:51",
                    thumbnail: "bg-gradient-to-r from-truth-200 to-truth-300",
                    views: "189K"
                  },
                  {
                    title: "The Ethics of Synthetic Media in Journalism",
                    duration: "24:16",
                    thumbnail: "bg-gradient-to-r from-truth-100 to-truth-200",
                    views: "98K"
                  },
                  {
                    title: "Inside Our Deepfake Detection Laboratory",
                    duration: "15:42",
                    thumbnail: "bg-gradient-to-r from-truth-200 to-truth-300",
                    views: "173K"
                  },
                  {
                    title: "The Future of Media Authentication Technologies",
                    duration: "21:09",
                    thumbnail: "bg-gradient-to-r from-truth-100 to-truth-200",
                    views: "112K"
                  },
                  {
                    title: "Protecting Democracy from Synthetic Media Threats",
                    duration: "28:37",
                    thumbnail: "bg-gradient-to-r from-truth-200 to-truth-300",
                    views: "205K"
                  }
                ].map((video, index) => (
                  <div key={index} className="group">
                    <div className={`aspect-video rounded-lg overflow-hidden relative ${video.thumbnail} bg-accent border border-primary/20`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center transition-transform group-hover:scale-110">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mt-1">
                        {video.views} views • DigitalTruthShield
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8">
                <Button variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
                  View All Videos
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="space-y-8">
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Hybrid Neural Architectures for Real-Time Deepfake Detection",
                    authors: "Chen, J., Patel, S., Rahman, M., et al.",
                    publication: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
                    year: "2024",
                    abstract: "This paper introduces a novel hybrid architecture combining convolutional and recurrent neural networks for real-time deepfake detection across multiple modalities. The proposed model achieves state-of-the-art performance on benchmark datasets while maintaining low computational requirements suitable for deployment on edge devices."
                  },
                  {
                    title: "Temporal Inconsistency Detection in Synthetic Media",
                    authors: "Williams, A., Garcia, L., Johnson, T., et al.",
                    publication: "ACM Transactions on Multimedia Computing, Communications, and Applications",
                    year: "2024",
                    abstract: "We present a new approach for detecting deepfakes by focusing on temporal inconsistencies in facial movements and expressions. Our method leverages long short-term memory networks to model natural human expressions and identify statistically improbable patterns that emerge in synthetic media."
                  },
                  {
                    title: "Spectral Analysis for Synthetic Speech Detection",
                    authors: "Kim, H., Novak, R., Zhu, Y., et al.",
                    publication: "INTERSPEECH",
                    year: "2023",
                    abstract: "This research proposes novel techniques for detecting synthetic speech by analyzing spectral artifacts introduced by text-to-speech and voice conversion systems. Our approach demonstrates exceptional robustness to various audio compression formats and noisy environments."
                  },
                  {
                    title: "Adversarial Training for Robust Deepfake Detection",
                    authors: "Patel, D., Robinson, E., Wang, L., et al.",
                    publication: "International Conference on Machine Learning (ICML)",
                    year: "2023",
                    abstract: "We address the challenge of adversarial attacks on deepfake detection systems through a new training methodology that significantly improves model robustness. Our approach combines adversarial examples with diverse training data to create detection models that resist evasion attempts."
                  },
                  {
                    title: "Multi-modal Fusion Approaches for Deepfake Detection",
                    authors: "Gupta, S., Thompson, J., Chen, Y., et al.",
                    publication: "IEEE Transactions on Information Forensics and Security",
                    year: "2023",
                    abstract: "This paper explores various fusion techniques for combining visual and audio analysis in deepfake detection. We demonstrate that attention-based late fusion strategies significantly outperform traditional methods when dealing with mixed-quality media samples."
                  }
                ].map((paper, index) => (
                  <div key={index} className="bg-accent rounded-lg border border-primary/20 p-6">
                    <h3 className="font-bold text-xl mb-2 text-foreground">{paper.title}</h3>
                    <div className="flex flex-wrap gap-y-2 mb-4">
                      <div className="text-sm text-foreground/80 flex-grow">
                        <span>{paper.authors}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-primary font-medium">{paper.publication}</span>
                        <span className="text-foreground/70 ml-2">{paper.year}</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-4">
                      {paper.abstract}
                    </p>
                    <div className="flex gap-3">
                      <Button variant="secondary" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                        View PDF
                      </Button>
                      <Button variant="outline" size="sm" className="hover:bg-primary/20">
                        Cite
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
