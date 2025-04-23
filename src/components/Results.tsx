
import { useState } from "react";
import { Check, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function Results() {
  const [simulating, setSimulating] = useState(false);
  const [armDirection, setArmDirection] = useState<string | null>(null);
  
  const handleSimulate = () => {
    if (simulating) return;
    
    setSimulating(true);
    
    // Random arm movement direction
    const directions = ["left", "right", "both", "rest"];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    toast.info("Analyzing EEG signals...");
    
    setTimeout(() => {
      setArmDirection(randomDirection);
      toast.success(`Detected ${randomDirection} movement intention`);
      
      setTimeout(() => {
        setArmDirection(null);
        setSimulating(false);
      }, 2000);
    }, 1000);
  };
  
  return (
    <section className="neuro-section" id="results">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Results & Arm Control</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-neuro-blue" />
                Classification Results
              </CardTitle>
              <CardDescription>
                Performance metrics and prediction visualization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="metrics">
                <TabsList className="mb-4">
                  <TabsTrigger value="metrics">Metrics</TabsTrigger>
                  <TabsTrigger value="confusion">Confusion Matrix</TabsTrigger>
                  <TabsTrigger value="roc">ROC Curve</TabsTrigger>
                </TabsList>
                
                <TabsContent value="metrics">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neuro-gray-100 rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-neuro-blue mb-1">89.4%</div>
                        <div className="text-sm text-neuro-gray-500">Accuracy</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-neuro-gray-100 rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-neuro-blue mb-1">0.88</div>
                        <div className="text-sm text-neuro-gray-500">F1 Score</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-neuro-gray-100 rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-neuro-blue mb-1">0.91</div>
                        <div className="text-sm text-neuro-gray-500">Precision</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-neuro-gray-100 rounded-lg">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-neuro-blue mb-1">0.87</div>
                        <div className="text-sm text-neuro-gray-500">Recall</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <h3 className="text-sm font-medium">Class-wise Performance</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Left Hand Movement</span>
                          <span className="text-sm text-neuro-blue">92.1%</span>
                        </div>
                        <div className="w-full bg-neuro-gray-200 rounded-full h-2">
                          <div className="bg-neuro-blue h-2 rounded-full" style={{ width: "92.1%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Right Hand Movement</span>
                          <span className="text-sm text-neuro-blue">86.7%</span>
                        </div>
                        <div className="w-full bg-neuro-gray-200 rounded-full h-2">
                          <div className="bg-neuro-blue h-2 rounded-full" style={{ width: "86.7%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="confusion">
                  <div className="p-4 bg-neuro-gray-100 rounded-lg">
                    <div className="flex flex-col">
                      <div className="text-xs text-neuro-gray-500 mb-2 text-center">Predicted vs. Actual</div>
                      <div className="flex">
                        {/* Axis Labels */}
                        <div className="w-20 flex flex-col items-end justify-center mr-2">
                          <div className="h-14 flex items-center">
                            <span className="text-xs font-medium">Left</span>
                          </div>
                          <div className="h-14 flex items-center">
                            <span className="text-xs font-medium">Right</span>
                          </div>
                        </div>
                        
                        {/* Matrix */}
                        <div className="flex-1">
                          <div className="grid grid-cols-2 gap-2 mb-2 pl-2">
                            <div className="text-xs font-medium text-center">Left</div>
                            <div className="text-xs font-medium text-center">Right</div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-14 bg-neuro-blue/90 rounded-md flex items-center justify-center text-white font-medium">
                              47
                            </div>
                            <div className="h-14 bg-neuro-gray-300/50 rounded-md flex items-center justify-center text-neuro-gray-700">
                              4
                            </div>
                            <div className="h-14 bg-neuro-gray-300/50 rounded-md flex items-center justify-center text-neuro-gray-700">
                              6
                            </div>
                            <div className="h-14 bg-neuro-blue/80 rounded-md flex items-center justify-center text-white font-medium">
                              43
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-neuro-gray-500 text-center">
                    Confusion matrix shows 47 correctly classified left hand movements and 
                    43 correctly classified right hand movements.
                  </div>
                </TabsContent>
                
                <TabsContent value="roc">
                  <div className="aspect-video bg-neuro-gray-100 rounded-lg p-4 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      {/* ROC Curve Placeholder */}
                      <div className="w-full h-full flex items-center justify-center">
                        <svg width="280" height="180" viewBox="0 0 280 180">
                          {/* Axes */}
                          <line x1="40" y1="150" x2="260" y2="150" stroke="#888" strokeWidth="1" />
                          <line x1="40" y1="150" x2="40" y2="30" stroke="#888" strokeWidth="1" />
                          
                          {/* Axis Labels */}
                          <text x="150" y="175" textAnchor="middle" fontSize="10" fill="#555">False Positive Rate</text>
                          <text x="15" y="90" textAnchor="middle" fontSize="10" transform="rotate(-90, 15, 90)" fill="#555">True Positive Rate</text>
                          
                          {/* ROC Curve */}
                          <path d="M40,150 C70,120 90,80 150,50 C180,40 220,30 260,30" fill="none" stroke="#0EA5E9" strokeWidth="2" />
                          
                          {/* Diagonal */}
                          <line x1="40" y1="150" x2="260" y2="30" stroke="#888" strokeDasharray="4" strokeWidth="1" />
                          
                          {/* AUC Label */}
                          <rect x="100" y="100" width="100" height="20" fill="white" fillOpacity="0.8" rx="4" />
                          <text x="150" y="115" textAnchor="middle" fontSize="12" fill="#333" fontWeight="500">AUC = 0.94</text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-neuro-gray-500 text-center">
                    ROC curve with AUC (Area Under Curve) of 0.94 indicates excellent classifier performance.
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-neuro-blue" />
                Robotic Arm Simulation
              </CardTitle>
              <CardDescription>
                Apply BCI output to control the robotic arm movement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-neuro-gray-100 rounded-lg flex flex-col items-center justify-center text-center min-h-[350px]">
                <div className="relative w-48 h-48 mb-6">
                  {/* Robot arm base */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-neuro-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-neuro-gray-200 rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-neuro-blue rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Left robot arm */}
                  <div 
                    className={`absolute top-1/2 left-1/2 w-24 h-4 bg-neuro-gray-700 rounded-full transform -translate-y-1/2 origin-left transition-all duration-1000 ${
                      armDirection === "left" ? "-rotate-45" : 
                      armDirection === "both" ? "-rotate-30" : "rotate-0"
                    }`}
                    style={{
                      transformOrigin: "20% 50%",
                      display: armDirection === "rest" ? "none" : "block"
                    }}
                  >
                    <div className="absolute right-0 w-5 h-5 bg-neuro-blue rounded-full transform -translate-y-0.5"></div>
                  </div>
                  
                  {/* Right robot arm */}
                  <div 
                    className={`absolute top-1/2 left-1/2 w-24 h-4 bg-neuro-gray-700 rounded-full transform -translate-y-1/2 origin-left transition-all duration-1000 ${
                      armDirection === "right" ? "rotate-45" : 
                      armDirection === "both" ? "rotate-30" : "rotate-0"
                    }`}
                    style={{
                      transformOrigin: "20% 50%",
                      display: armDirection === "rest" ? "none" : "block"
                    }}
                  >
                    <div className="absolute right-0 w-5 h-5 bg-neuro-blue rounded-full transform -translate-y-0.5"></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium mb-1">Movement Direction</div>
                  <div className="text-2xl font-bold text-neuro-blue">
                    {simulating ? (
                      <span className="animate-pulse">Classifying...</span>
                    ) : armDirection ? (
                      <span className="capitalize">{armDirection}</span>
                    ) : (
                      <span className="text-neuro-gray-400">Waiting</span>
                    )}
                  </div>
                </div>
                
                <div className="mt-4">
                  <button 
                    className={`flex items-center gap-2 bg-neuro-blue text-white rounded-md py-2 px-4 hover:bg-neuro-darkblue transition-colors ${
                      simulating ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    onClick={handleSimulate}
                    disabled={simulating}
                  >
                    <Bot className="h-4 w-4" />
                    <span>Simulate Arm Movement</span>
                  </button>
                </div>
                
                <div className="mt-4 text-xs text-neuro-gray-500">
                  Note: This simulation demonstrates the BCI's capability to detect and translate 
                  four mental states: left movement, right movement, both arms, and rest state.
                </div>
              </div>
              
              <div className="mt-4 p-3 border border-neuro-gray-200 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Recent Predictions</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neuro-blue"></div>
                      <span>Right hand movement</span>
                    </div>
                    <span className="text-neuro-gray-500">3s ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neuro-blue"></div>
                      <span>Both hands movement</span>
                    </div>
                    <span className="text-neuro-gray-500">6s ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neuro-blue"></div>
                      <span>Left hand movement</span>
                    </div>
                    <span className="text-neuro-gray-500">8s ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neuro-blue"></div>
                      <span>Rest state</span>
                    </div>
                    <span className="text-neuro-gray-500">15s ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
