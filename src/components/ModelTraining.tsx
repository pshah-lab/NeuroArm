import { useState } from "react";
import { Activity, Brain, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function ModelTraining() {
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedModel, setSelectedModel] = useState("svm");
  
  const models = [
    { id: "svm", name: "SVM", description: "Support Vector Machine classifier for binary decisions", accuracy: "85-92%" },
    { id: "lda", name: "LDA", description: "Linear Discriminant Analysis for dimension reduction", accuracy: "80-87%" },
    { id: "knn", name: "KNN", description: "K-Nearest Neighbors for pattern classification", accuracy: "75-85%" },
    { id: "rf", name: "Random Forest", description: "Ensemble learning method using decision trees", accuracy: "82-90%" },
    { id: "cnn", name: "CNN", description: "Convolutional Neural Network for spatial features", accuracy: "88-95%" }
  ];

  const handleModelSelect = (id: string) => {
    setSelectedModel(id);
  };

  const handleTrain = () => {
    setIsTraining(true);
    setProgress(0);
    
    // Mock training progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };
  
  return (
    <section className="neuro-section" id="model">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Model Training & Prediction</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-neuro-blue" />
              Machine Learning Model
            </CardTitle>
            <CardDescription>
              Train a model to classify EEG signals and predict user intent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="model">
              <TabsList className="mb-6 w-full">
                <TabsTrigger value="model" className="flex-1">Model Selection</TabsTrigger>
                <TabsTrigger value="params" className="flex-1">Parameters</TabsTrigger>
                <TabsTrigger value="training" className="flex-1">Training</TabsTrigger>
              </TabsList>
              
              <TabsContent value="model">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {models.map((model) => (
                    <div 
                      key={model.id}
                      className={`p-5 border rounded-lg cursor-pointer transition-all ${
                        selectedModel === model.id ? "ring-2 ring-neuro-blue/50 bg-neuro-blue/5" : "hover:bg-neuro-gray-50"
                      }`}
                      onClick={() => handleModelSelect(model.id)}
                    >
                      <h3 className="font-medium mb-1 flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${selectedModel === model.id ? "bg-neuro-blue" : "bg-neuro-gray-400"}`}></div>
                        {model.name}
                      </h3>
                      <p className="text-xs text-neuro-gray-500 mb-2">
                        {model.description}
                      </p>
                      <div className="flex justify-between text-xs">
                        <span className="text-neuro-gray-500">Accuracy:</span>
                        <span className={`font-medium ${selectedModel === model.id ? "text-neuro-blue" : "text-neuro-gray-500"}`}>
                          {model.accuracy}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  <div className="p-5 border border-dashed rounded-lg cursor-pointer transition-all flex items-center justify-center hover:bg-neuro-gray-50">
                    <span className="text-neuro-gray-500 text-sm">+ Custom Model</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Model Description</h3>
                  <div className="bg-neuro-gray-100 rounded-lg p-4">
                    {selectedModel === "svm" && (
                      <p className="text-sm text-neuro-gray-700">
                        <strong>Support Vector Machine (SVM)</strong> is a supervised learning method that finds the optimal hyperplane 
                        to separate classes in high-dimensional space. It works well for binary classification problems like determining 
                        left vs. right hand movement from EEG signals. SVMs are particularly effective when the number of features exceeds 
                        the number of samples, making them suitable for EEG data classification.
                      </p>
                    )}
                    {selectedModel === "lda" && (
                      <p className="text-sm text-neuro-gray-700">
                        <strong>Linear Discriminant Analysis (LDA)</strong> is a dimensionality reduction technique that also works as a classifier.
                        It projects features onto a lower-dimensional space while maximizing class separability. LDA is computationally efficient
                        and works well for EEG data when the assumptions of normal distribution and equal covariance matrices are met.
                      </p>
                    )}
                    {selectedModel === "knn" && (
                      <p className="text-sm text-neuro-gray-700">
                        <strong>K-Nearest Neighbors (KNN)</strong> is a non-parametric method that classifies data points based on the majority
                        class among their k-nearest neighbors. It's simple to implement and understand, but can be computationally expensive for large datasets.
                        KNN is useful when decision boundaries are irregular and can provide good results for EEG classification with proper feature extraction.
                      </p>
                    )}
                    {selectedModel === "rf" && (
                      <p className="text-sm text-neuro-gray-700">
                        <strong>Random Forest</strong> is an ensemble learning method that constructs multiple decision trees during training.
                        It's resistant to overfitting and can handle high-dimensional data well. For EEG classification, Random Forest can capture complex
                        relationships in the data and provide robust predictions even with noisy signals.
                      </p>
                    )}
                    {selectedModel === "cnn" && (
                      <p className="text-sm text-neuro-gray-700">
                        <strong>Convolutional Neural Network (CNN)</strong> is a deep learning architecture designed to process data with grid-like topology.
                        For EEG data, CNNs can automatically learn spatial filters and extract relevant features across channels and time.
                        They're particularly effective for capturing spatio-temporal patterns in brain activity signals.
                      </p>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="params">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Kernel</label>
                        <Select defaultValue="rbf">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select kernel" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="linear">Linear</SelectItem>
                            <SelectItem value="rbf">Radial Basis Function (RBF)</SelectItem>
                            <SelectItem value="poly">Polynomial</SelectItem>
                            <SelectItem value="sigmoid">Sigmoid</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-neuro-gray-500">
                          RBF kernel works well for non-linear EEG data classification
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">Regularization (C)</label>
                          <span className="text-sm text-neuro-blue">1.0</span>
                        </div>
                        <Slider 
                          defaultValue={[1]} 
                          min={0.01} 
                          max={10} 
                          step={0.01}
                          className="py-4"
                        />
                        <div className="flex justify-between text-xs text-neuro-gray-500">
                          <span>0.01</span>
                          <span>1.0</span>
                          <span>10.0</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">Gamma</label>
                          <span className="text-sm text-neuro-blue">0.1</span>
                        </div>
                        <Slider 
                          defaultValue={[0.1]} 
                          min={0.001} 
                          max={1} 
                          step={0.001}
                          className="py-4"
                        />
                        <div className="flex justify-between text-xs text-neuro-gray-500">
                          <span>0.001</span>
                          <span>0.1</span>
                          <span>1.0</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Cross-validation</label>
                        <Select defaultValue="kfold">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select validation method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kfold">K-Fold (k=5)</SelectItem>
                            <SelectItem value="loocv">Leave-One-Out CV</SelectItem>
                            <SelectItem value="holdout">Holdout (80/20)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Class Weights</label>
                        <Select defaultValue="balanced">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select weighting" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="balanced">Balanced</SelectItem>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-neuro-gray-500">
                          Adjust for imbalanced data between movement types
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-4">
                        <Checkbox id="probability" defaultChecked />
                        <label htmlFor="probability" className="text-sm font-medium leading-none">
                          Enable probability estimates
                        </label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="standardize" defaultChecked />
                        <label htmlFor="standardize" className="text-sm font-medium leading-none">
                          Standardize features
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium mb-3">Advanced Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-neuro-gray-100 rounded-lg p-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cache" defaultChecked />
                          <label htmlFor="cache" className="text-sm leading-none">
                            Enable cache (500MB)
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="shrinking" defaultChecked />
                          <label htmlFor="shrinking" className="text-sm leading-none">
                            Use shrinking heuristic
                          </label>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="verbose" />
                          <label htmlFor="verbose" className="text-sm leading-none">
                            Verbose output
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="decision-function" />
                          <label htmlFor="decision-function" className="text-sm leading-none">
                            Show decision function
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="training">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-medium">Dataset Split</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-neuro-gray-100 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Training Set</span>
                          <span className="text-sm text-neuro-blue">70%</span>
                        </div>
                        <div className="w-full bg-neuro-gray-200 rounded-full h-2">
                          <div className="bg-neuro-blue h-2 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-neuro-gray-100 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Validation Set</span>
                          <span className="text-sm text-neuro-blue">15%</span>
                        </div>
                        <div className="w-full bg-neuro-gray-200 rounded-full h-2">
                          <div className="bg-neuro-blue h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-neuro-gray-100 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Test Set</span>
                          <span className="text-sm text-neuro-blue">15%</span>
                        </div>
                        <div className="w-full bg-neuro-gray-200 rounded-full h-2">
                          <div className="bg-neuro-blue h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Training Progress</h3>
                      {isTraining && <span className="text-xs text-neuro-blue animate-pulse">Training in progress...</span>}
                    </div>
                    
                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Overall Progress</span>
                          <span className="text-sm text-neuro-blue">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between text-xs">
                            <span>Epochs</span>
                            <span>{isTraining ? Math.floor(progress / 10) : 10}/10</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between text-xs">
                            <span>Current Loss</span>
                            <span>{isTraining ? (1 - progress / 100).toFixed(3) : "0.135"}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-[120px] bg-neuro-gray-100 rounded-md p-2 overflow-y-auto font-mono text-xs text-neuro-gray-600">
                        {"> "}Starting SVM training with RBF kernel...<br />
                        {isTraining && progress > 20 && <>{"> "}Fold 1/5: Accuracy 89.2%<br /></>}
                        {isTraining && progress > 40 && <>{"> "}Fold 2/5: Accuracy 87.5%<br /></>}
                        {isTraining && progress > 60 && <>{"> "}Fold 3/5: Accuracy 91.1%<br /></>}
                        {isTraining && progress > 80 && <>{"> "}Fold 4/5: Accuracy 88.9%<br /></>}
                        {progress === 100 && <>{"> "}Fold 5/5: Accuracy 90.2%<br />{"> "}Training complete. Mean accuracy: 89.38%<br /></>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3">
                    <button 
                      className="py-2 px-4 rounded-md border border-neuro-gray-300 text-neuro-gray-600 hover:bg-neuro-gray-100 transition-colors"
                      disabled={isTraining}
                    >
                      Reset
                    </button>
                    <button 
                      className={`flex items-center gap-2 bg-neuro-blue text-white rounded-md py-2 px-4 hover:bg-neuro-darkblue transition-colors ${
                        isTraining ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      onClick={handleTrain}
                      disabled={isTraining}
                    >
                      {isTraining ? (
                        <>
                          <Activity className="h-4 w-4 animate-pulse" />
                          <span>Training...</span>
                        </>
                      ) : (
                        <>
                          <Settings className="h-4 w-4" />
                          <span>Train Model</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
