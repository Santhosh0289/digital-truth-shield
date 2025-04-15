
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Video, Mic, Play, FileVideo, AlertCircle, CheckCircle, X } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const DeepfakeDetector = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<null | {
    isDeepfake: boolean;
    confidenceScore: number;
    detectedAreas: string[];
  }>(null);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check if it's a video file
      if (!selectedFile.type.startsWith('video/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload a video file.",
          variant: "destructive"
        });
        return;
      }
      
      setFile(selectedFile);
      setResult(null);
    }
  };

  const simulateAnalysis = () => {
    if (!file && activeTab === "upload") {
      toast({
        title: "No file selected",
        description: "Please upload a video file first.",
        variant: "destructive"
      });
      return;
    }
    
    setIsAnalyzing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          
          // Random result for the demo
          const isDeepfake = Math.random() > 0.5;
          setResult({
            isDeepfake,
            confidenceScore: isDeepfake ? 
              Math.floor(70 + Math.random() * 25) : 
              Math.floor(80 + Math.random() * 15),
            detectedAreas: isDeepfake ? 
              ["Facial expressions", "Eye movements", "Lip sync issues"] : 
              []
          });
          
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <div className="rounded-lg border shadow-sm bg-background p-4 md:p-8">
      <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="upload">
            <Upload className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Upload Video</span>
            <span className="sm:hidden">Upload</span>
          </TabsTrigger>
          <TabsTrigger value="record">
            <Video className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Record Video</span>
            <span className="sm:hidden">Record</span>
          </TabsTrigger>
          <TabsTrigger value="audio">
            <Mic className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Audio Analysis</span>
            <span className="sm:hidden">Audio</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <div className="border-2 border-dashed rounded-lg p-8 text-center bg-muted/40">
            {file ? (
              <div className="space-y-4">
                <FileVideo className="h-12 w-12 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setFile(null)}
                >
                  <X className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            ) : (
              <>
                <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Upload a video file</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Drag and drop or click to select a video file for deepfake detection
                </p>
                <label className="mt-4 inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="video/*"
                    onChange={handleFileChange}
                  />
                  <Button variant="outline" size="sm" className="mt-2" asChild>
                    <span>Select Video</span>
                  </Button>
                </label>
              </>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="record" className="space-y-4">
          <div className="border-2 border-dashed rounded-lg p-8 text-center bg-muted/40 flex flex-col items-center justify-center aspect-video">
            <Video className="h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">Record a video</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This feature will allow you to record video directly for analysis
            </p>
            <Button variant="outline" size="sm" className="mt-4" disabled>
              Start Recording (Coming Soon)
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="audio" className="space-y-4">
          <div className="border-2 border-dashed rounded-lg p-8 text-center bg-muted/40 flex flex-col items-center justify-center aspect-video">
            <Mic className="h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">Analyze Audio</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This feature will allow you to analyze audio for synthetic speech detection
            </p>
            <Button variant="outline" size="sm" className="mt-4" disabled>
              Start Audio Analysis (Coming Soon)
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 space-y-6">
        <Button 
          className="w-full"
          onClick={simulateAnalysis}
          disabled={isAnalyzing || (activeTab === "upload" && !file)}
        >
          {isAnalyzing ? (
            <>Analyzing...</>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Start Detection
            </>
          )}
        </Button>
        
        {isAnalyzing && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Analyzing video...</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}
        
        {result && (
          <div className={`mt-6 p-6 rounded-lg border ${
            result.isDeepfake 
              ? "bg-deepfake-50 border-deepfake-200" 
              : "bg-green-50 border-green-200"
          }`}>
            <div className="flex items-center gap-3">
              {result.isDeepfake ? (
                <AlertCircle className="h-8 w-8 text-deepfake-500" />
              ) : (
                <CheckCircle className="h-8 w-8 text-green-500" />
              )}
              
              <div>
                <h3 className="text-lg font-bold">
                  {result.isDeepfake 
                    ? "Potential Deepfake Detected" 
                    : "Content Appears Authentic"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Confidence Score: {result.confidenceScore}%
                </p>
              </div>
            </div>
            
            {result.isDeepfake && result.detectedAreas.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Suspicious elements detected:</h4>
                <ul className="text-sm space-y-1">
                  {result.detectedAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-deepfake-500"></span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-4 text-sm text-muted-foreground">
              <p>
                {result.isDeepfake 
                  ? "This analysis suggests the content may have been manipulated or generated using AI tools. Please verify with additional sources before sharing." 
                  : "Based on our analysis, this content doesn't show common signs of manipulation. However, no detection system is perfect."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeepfakeDetector;
