
import { Filter, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default function FilterFeatures() {
  return (
    <section className="neuro-section" id="filter">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Signal Processing & Feature Extraction</h2>
        
        <Card className="dark:bg-neuro-gray-900 dark:border-neuro-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-white">
              <Filter className="h-5 w-5 text-neuro-blue dark:text-neuro-lightblue" />
              Filter & Feature Selection
            </CardTitle>
            <CardDescription className="dark:text-neuro-gray-400">
              Apply bandpass filters and extract features from EEG data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="filter">
              <TabsList className="mb-6 w-full dark:bg-neuro-gray-800">
                <TabsTrigger value="filter" className="flex-1 dark:text-neuro-gray-300 dark:data-[state=active]:bg-neuro-gray-700 dark:data-[state=active]:text-white">Bandpass Filter</TabsTrigger>
                <TabsTrigger value="features" className="flex-1 dark:text-neuro-gray-300 dark:data-[state=active]:bg-neuro-gray-700 dark:data-[state=active]:text-white">Feature Extraction</TabsTrigger>
              </TabsList>
              
              <TabsContent value="filter">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium dark:text-white">Bandpass Filter</h3>
                      <Switch id="bandpass-switch" defaultChecked />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium dark:text-neuro-gray-300">Frequency Range (Hz)</label>
                          <span className="text-sm text-neuro-blue dark:text-neuro-lightblue">8 - 30 Hz</span>
                        </div>
                        <Slider 
                          defaultValue={[8, 30]} 
                          min={0} 
                          max={100} 
                          step={1}
                          className="py-4"
                        />
                        <div className="flex justify-between text-xs text-neuro-gray-500 dark:text-neuro-gray-400">
                          <span>0 Hz</span>
                          <span>50 Hz</span>
                          <span>100 Hz</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium dark:text-neuro-gray-300">Filter Type</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="butterworth" defaultChecked />
                            <label htmlFor="butterworth" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              Butterworth
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="chebyshev" />
                            <label htmlFor="chebyshev" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              Chebyshev
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="elliptic" />
                            <label htmlFor="elliptic" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              Elliptic
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium dark:text-neuro-gray-300">Filter Order</label>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="order-2" />
                            <label htmlFor="order-2" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              2nd
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="order-4" defaultChecked />
                            <label htmlFor="order-4" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              4th
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="order-6" />
                            <label htmlFor="order-6" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              6th
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium dark:text-white">Additional Preprocessing</h3>
                      <Switch id="normalization" defaultChecked />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="notch-filter" defaultChecked />
                          <label htmlFor="notch-filter" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                            50/60Hz Notch Filter
                          </label>
                        </div>
                        <span className="text-xs text-neuro-gray-500 dark:text-neuro-gray-400">Removes power line interference</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="baseline" defaultChecked />
                          <label htmlFor="baseline" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                            Baseline Correction
                          </label>
                        </div>
                        <span className="text-xs text-neuro-gray-500 dark:text-neuro-gray-400">Subtracts mean of each channel</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="artifact" />
                          <label htmlFor="artifact" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                            Artifact Rejection
                          </label>
                        </div>
                        <span className="text-xs text-neuro-gray-500 dark:text-neuro-gray-400">Removes noisy segments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium dark:text-white">Feature Extraction Methods</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4 p-4 border rounded-lg dark:border-neuro-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="csp" defaultChecked />
                            <label htmlFor="csp" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              Common Spatial Patterns (CSP)
                            </label>
                          </div>
                        </div>
                        <p className="text-xs text-neuro-gray-500 dark:text-neuro-gray-400">
                          Transforms EEG to maximize variance between classes
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs dark:text-neuro-gray-400">Number of filters:</span>
                          <span className="text-xs text-neuro-blue dark:text-neuro-lightblue font-medium">4</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 p-4 border rounded-lg dark:border-neuro-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="rms" />
                            <label htmlFor="rms" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              Root Mean Square (RMS)
                            </label>
                          </div>
                        </div>
                        <p className="text-xs text-neuro-gray-500 dark:text-neuro-gray-400">
                          Calculates RMS value for each channel
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs dark:text-neuro-gray-400">Window size (ms):</span>
                          <span className="text-xs text-neuro-blue dark:text-neuro-lightblue font-medium">250</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 p-4 border rounded-lg dark:border-neuro-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="wavelet" />
                            <label htmlFor="wavelet" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              Wavelet Transform
                            </label>
                          </div>
                        </div>
                        <p className="text-xs text-neuro-gray-500 dark:text-neuro-gray-400">
                          Extracts time-frequency features
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs dark:text-neuro-gray-400">Wavelet family:</span>
                          <span className="text-xs text-neuro-blue dark:text-neuro-lightblue font-medium">db4</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 p-4 border rounded-lg dark:border-neuro-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="flattening" defaultChecked />
                            <label htmlFor="flattening" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                              Data Flattening
                            </label>
                          </div>
                        </div>
                        <p className="text-xs text-neuro-gray-500 dark:text-neuro-gray-400">
                          Flattens temporal signal into feature vector
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs dark:text-neuro-gray-400">Dimensionality reduction:</span>
                          <span className="text-xs text-neuro-blue dark:text-neuro-lightblue font-medium">PCA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium dark:text-white">Feature Normalization</h3>
                      <Switch id="normalization" defaultChecked />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="z-score" defaultChecked />
                        <label htmlFor="z-score" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                          Z-Score
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="min-max" />
                        <label htmlFor="min-max" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                          Min-Max
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="robust" />
                        <label htmlFor="robust" className="text-sm font-medium leading-none dark:text-neuro-gray-300">
                          Robust
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex items-center justify-end">
              <button className="flex items-center gap-2 bg-neuro-blue text-white rounded-md py-2 px-4 hover:bg-neuro-darkblue transition-colors">
                <Settings className="h-4 w-4" />
                <span>Apply Processing</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
