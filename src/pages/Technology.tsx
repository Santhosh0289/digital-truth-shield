
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import SectionHeading from '@/components/ui/section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, LineChart, BarChart, PieChart, 
  Network, Layers, Brain, Database 
} from 'lucide-react';

const Technology = () => {
  return (
    <MainLayout>
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Technology"
            description="A comprehensive overview of the advanced technologies powering our deepfake detection system."
          />
          
          <Tabs defaultValue="architecture" className="mt-12">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="architecture">
                <Layers className="h-4 w-4 mr-2" />
                System Architecture
              </TabsTrigger>
              <TabsTrigger value="algorithms">
                <Brain className="h-4 w-4 mr-2" />
                AI Algorithms
              </TabsTrigger>
              <TabsTrigger value="performance">
                <BarChart className="h-4 w-4 mr-2" />
                Performance Metrics
              </TabsTrigger>
              <TabsTrigger value="research">
                <Database className="h-4 w-4 mr-2" />
                Research & Data
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="architecture" className="space-y-8">
              <div className="bg-background rounded-lg border shadow-sm p-6">
                <h3 className="text-2xl font-bold mb-4">Hybrid AI Framework</h3>
                <p className="text-muted-foreground mb-6">
                  Our system employs a hybrid approach that combines multiple deep learning architectures to achieve unprecedented accuracy in deepfake detection.
                </p>
                
                <div className="relative p-8 bg-gradient-to-r from-truth-50 to-truth-100 rounded-lg border border-truth-200 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-truth-200">
                      <Cpu className="h-8 w-8 text-truth-500 mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Video Analysis Module</h4>
                      <p className="text-sm text-muted-foreground">
                        Processes video frames using advanced CNNs to detect spatial inconsistencies and visual artifacts that are common in deepfakes.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-truth-200">
                      <LineChart className="h-8 w-8 text-truth-500 mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Temporal Analysis Module</h4>
                      <p className="text-sm text-muted-foreground">
                        Uses LSTM networks to analyze temporal inconsistencies between frames, such as unnatural facial movements and expressions.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-truth-200">
                      <Network className="h-8 w-8 text-truth-500 mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Audio Analysis Module</h4>
                      <p className="text-sm text-muted-foreground">
                        Processes audio spectrograms to identify synthetic speech patterns and artifacts introduced by voice synthesis tools.
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-truth-200/30 to-transparent"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">System Components</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-truth-100 text-truth-600">1</div>
                      <div>
                        <h4 className="font-medium">Input Processing</h4>
                        <p className="text-sm text-muted-foreground">
                          Video/audio extraction, preprocessing, and normalization
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-truth-100 text-truth-600">2</div>
                      <div>
                        <h4 className="font-medium">Feature Extraction</h4>
                        <p className="text-sm text-muted-foreground">
                          Facial landmark tracking, audio feature extraction
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-truth-100 text-truth-600">3</div>
                      <div>
                        <h4 className="font-medium">Neural Processing</h4>
                        <p className="text-sm text-muted-foreground">
                          Multi-modal analysis through specialized neural networks
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-truth-100 text-truth-600">4</div>
                      <div>
                        <h4 className="font-medium">Decision Engine</h4>
                        <p className="text-sm text-muted-foreground">
                          Fusion of multiple detection signals with confidence scoring
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-truth-100 text-truth-600">5</div>
                      <div>
                        <h4 className="font-medium">Results Visualization</h4>
                        <p className="text-sm text-muted-foreground">
                          User-friendly reports highlighting detected inconsistencies
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">Platform Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Our system is designed for seamless integration across multiple platforms:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-truth-50 rounded-lg border border-truth-200">
                      <div className="bg-white p-2 rounded-md border border-truth-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" fill="#00AAFF"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Web API</h4>
                        <p className="text-sm text-muted-foreground">
                          RESTful API service for integration with content management systems
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-truth-50 rounded-lg border border-truth-200">
                      <div className="bg-white p-2 rounded-md border border-truth-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z" fill="#00AAFF"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Mobile SDK</h4>
                        <p className="text-sm text-muted-foreground">
                          iOS and Android development kit for real-time on-device detection
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-truth-50 rounded-lg border border-truth-200">
                      <div className="bg-white p-2 rounded-md border border-truth-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="#00AAFF"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Browser Extensions</h4>
                        <p className="text-sm text-muted-foreground">
                          Chrome and Firefox extensions for in-browser content verification
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-truth-50 rounded-lg border border-truth-200">
                      <div className="bg-white p-2 rounded-md border border-truth-200">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#00AAFF"/>
                          <path d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 9H17V17H15V9Z" fill="#00AAFF"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Enterprise Solutions</h4>
                        <p className="text-sm text-muted-foreground">
                          On-premise deployment options for high-security environments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="algorithms" className="space-y-8">
              <div className="bg-background rounded-lg border shadow-sm p-6">
                <h3 className="text-2xl font-bold mb-4">AI Models & Techniques</h3>
                <p className="text-muted-foreground mb-6">
                  Our deepfake detection system leverages multiple AI models and techniques to achieve comprehensive analysis.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-truth-50 rounded-lg p-6 border border-truth-200">
                    <h4 className="text-lg font-semibold mb-4">Visual Analysis</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">EfficientNet-B4</span>
                          <p className="text-sm text-muted-foreground">
                            Fine-tuned for facial inconsistency detection
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">DenseNet-121</span>
                          <p className="text-sm text-muted-foreground">
                            Specialized for texture analysis and abnormalities
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">XceptionNet</span>
                          <p className="text-sm text-muted-foreground">
                            Advanced feature extraction for deepfake artifacts
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-truth-50 rounded-lg p-6 border border-truth-200">
                    <h4 className="text-lg font-semibold mb-4">Temporal Analysis</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">LSTM Networks</span>
                          <p className="text-sm text-muted-foreground">
                            Sequence modeling for temporal inconsistencies
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">3D ConvNets</span>
                          <p className="text-sm text-muted-foreground">
                            Spatiotemporal feature extraction from video sequences
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">Attention Mechanisms</span>
                          <p className="text-sm text-muted-foreground">
                            Focus on critical facial regions for more accurate detection
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-truth-50 rounded-lg p-6 border border-truth-200">
                    <h4 className="text-lg font-semibold mb-4">Audio Analysis</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">Mel-Spectrogram CNNs</span>
                          <p className="text-sm text-muted-foreground">
                            Frequency domain analysis for synthetic speech detection
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">WaveNet Derivatives</span>
                          <p className="text-sm text-muted-foreground">
                            Time-domain analysis for voice synthesis artifacts
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">RawNet2</span>
                          <p className="text-sm text-muted-foreground">
                            End-to-end raw waveform analysis for voice spoofing detection
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-truth-50 rounded-lg p-6 border border-truth-200">
                    <h4 className="text-lg font-semibold mb-4">Multimodal Fusion</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">Late Fusion</span>
                          <p className="text-sm text-muted-foreground">
                            Weighted ensemble of individual modality predictions
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">Attention-based Fusion</span>
                          <p className="text-sm text-muted-foreground">
                            Dynamic weighting based on content characteristics
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-truth-500"></span>
                        <div>
                          <span className="font-medium">Uncertainty-aware Fusion</span>
                          <p className="text-sm text-muted-foreground">
                            Incorporating model confidence in the decision process
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">Accuracy Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">FaceForensics++</span>
                        <span className="text-sm font-medium">97.8%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-truth-500 h-2.5 rounded-full" style={{ width: '97.8%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Celeb-DF</span>
                        <span className="text-sm font-medium">96.3%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-truth-500 h-2.5 rounded-full" style={{ width: '96.3%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">DeepFake Detection Challenge</span>
                        <span className="text-sm font-medium">93.7%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-truth-500 h-2.5 rounded-full" style={{ width: '93.7%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">ASVspoof 2019</span>
                        <span className="text-sm font-medium">95.2%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-truth-500 h-2.5 rounded-full" style={{ width: '95.2%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">Performance Benchmarks</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-truth-50 rounded-lg border border-truth-200">
                      <h4 className="font-medium mb-2">Video Processing Speed</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">24 FPS @ 720p</span>
                        <span className="text-sm font-medium">
                          <span className="text-green-600">●</span> Real-time
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-truth-50 rounded-lg border border-truth-200">
                      <h4 className="font-medium mb-2">Latency</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Average response time</span>
                        <span className="text-sm font-medium">
                          175ms
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-truth-50 rounded-lg border border-truth-200">
                      <h4 className="font-medium mb-2">Resource Usage</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">CPU Load</span>
                          <span className="text-sm font-medium">
                            Low-Medium
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Memory Usage</span>
                          <span className="text-sm font-medium">
                            ~320MB
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">Comparative Analysis</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Our Solution</span>
                        <span className="text-sm font-medium">96.9%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-truth-500 h-2.5 rounded-full" style={{ width: '96.9%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Leading Competitor A</span>
                        <span className="text-sm font-medium">89.2%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-deepfake-400 h-2.5 rounded-full" style={{ width: '89.2%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Leading Competitor B</span>
                        <span className="text-sm font-medium">91.4%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-deepfake-400 h-2.5 rounded-full" style={{ width: '91.4%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Leading Competitor C</span>
                        <span className="text-sm font-medium">87.8%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-deepfake-400 h-2.5 rounded-full" style={{ width: '87.8%' }}></div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground mt-4">
                      <p>* Comparative data based on publicly available benchmarks using the FaceForensics++ dataset.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="space-y-8">
              <div className="bg-background rounded-lg border shadow-sm p-6">
                <h3 className="text-2xl font-bold mb-4">Research & Development</h3>
                <p className="text-muted-foreground mb-6">
                  Our system is built on cutting-edge research and continuously evolves to stay ahead of deepfake technologies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Research Areas</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">1</div>
                        <div>
                          <h5 className="font-medium">Adversarial Resilience</h5>
                          <p className="text-sm text-muted-foreground">
                            Developing techniques to make our models resistant to adversarial attacks that aim to bypass detection.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">2</div>
                        <div>
                          <h5 className="font-medium">Compression Robustness</h5>
                          <p className="text-sm text-muted-foreground">
                            Improving detection accuracy on heavily compressed media as found on social platforms.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">3</div>
                        <div>
                          <h5 className="font-medium">Cross-Domain Generalization</h5>
                          <p className="text-sm text-muted-foreground">
                            Creating models that generalize well across different types of deepfakes and generation methods.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-truth-100 text-truth-600 text-xs font-medium">4</div>
                        <div>
                          <h5 className="font-medium">Explainable AI</h5>
                          <p className="text-sm text-muted-foreground">
                            Developing methods to provide clear explanations for why content is flagged as potentially synthetic.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Dataset Development</h4>
                    <p className="text-muted-foreground mb-4">
                      We maintain several specialized datasets to ensure our models remain effective against emerging deepfake technologies:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-truth-50 rounded-lg border border-truth-200">
                        <h5 className="font-medium mb-1">Diverse Deepfake Collection</h5>
                        <p className="text-sm text-muted-foreground">
                          100,000+ videos created using various deepfake generation methods
                        </p>
                      </div>
                      
                      <div className="p-4 bg-truth-50 rounded-lg border border-truth-200">
                        <h5 className="font-medium mb-1">Multi-compression Dataset</h5>
                        <p className="text-sm text-muted-foreground">
                          Samples processed with different compression algorithms and quality levels
                        </p>
                      </div>
                      
                      <div className="p-4 bg-truth-50 rounded-lg border border-truth-200">
                        <h5 className="font-medium mb-1">Synthetic Audio Library</h5>
                        <p className="text-sm text-muted-foreground">
                          50,000+ audio clips generated by modern voice synthesis tools
                        </p>
                      </div>
                      
                      <div className="p-4 bg-truth-50 rounded-lg border border-truth-200">
                        <h5 className="font-medium mb-1">Multimodal Deepfake Set</h5>
                        <p className="text-sm text-muted-foreground">
                          Combined video and audio deepfakes for comprehensive testing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Technology;
