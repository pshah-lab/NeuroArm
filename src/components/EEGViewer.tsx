
import { useState } from "react";
import { Activity, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EEGViewer() {
  const [selectedChannel, setSelectedChannel] = useState("all");
  const [selectedTrial, setSelectedTrial] = useState("1");
  
  // This would be populated from the actual uploaded EEG data
  const mockChannels = ["All Channels", "C3", "C4", "FC1", "FC2", "FC5", "FC6", "CP1", "CP2"];
  const mockTrials = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  return (
    <section className="neuro-section" id="viewer">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">EEG Waveform Viewer</h2>
        
        <Card className="dark:bg-neuro-gray-900 dark:border-neuro-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 dark:text-white">
              <Activity className="h-5 w-5 text-neuro-blue dark:text-neuro-lightblue" />
              Raw EEG Visualization
            </CardTitle>
            <CardDescription className="dark:text-neuro-gray-400">
              View raw EEG waveforms per channel and trial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-neuro-gray-300">Channel</label>
                <Select defaultValue={selectedChannel} onValueChange={setSelectedChannel}>
                  <SelectTrigger className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    <SelectValue placeholder="Select channel" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    {mockChannels.map((channel, index) => (
                      <SelectItem key={index} value={index === 0 ? "all" : channel} className="dark:hover:bg-neuro-gray-700">
                        {channel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-neuro-gray-300">Trial</label>
                <Select defaultValue={selectedTrial} onValueChange={setSelectedTrial}>
                  <SelectTrigger className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    <SelectValue placeholder="Select trial" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    {mockTrials.map((trial) => (
                      <SelectItem key={trial} value={trial} className="dark:hover:bg-neuro-gray-700">
                        Trial {trial}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-neuro-gray-300">Time Range (s)</label>
                <Select defaultValue="full">
                  <SelectTrigger className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    <SelectValue placeholder="Time range" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    <SelectItem value="full" className="dark:hover:bg-neuro-gray-700">Full Range</SelectItem>
                    <SelectItem value="0-2" className="dark:hover:bg-neuro-gray-700">0 - 2s</SelectItem>
                    <SelectItem value="0-5" className="dark:hover:bg-neuro-gray-700">0 - 5s</SelectItem>
                    <SelectItem value="custom" className="dark:hover:bg-neuro-gray-700">Custom...</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-neuro-gray-300">Display</label>
                <Select defaultValue="line">
                  <SelectTrigger className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    <SelectValue placeholder="Display type" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-neuro-gray-800 dark:text-white dark:border-neuro-gray-700">
                    <SelectItem value="line" className="dark:hover:bg-neuro-gray-700">Line Plot</SelectItem>
                    <SelectItem value="heatmap" className="dark:hover:bg-neuro-gray-700">Heatmap</SelectItem>
                    <SelectItem value="spectrogram" className="dark:hover:bg-neuro-gray-700">Spectrogram</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Tabs defaultValue="waveform">
              <TabsList className="mb-4 dark:bg-neuro-gray-800">
                <TabsTrigger value="waveform" className="dark:text-neuro-gray-300 dark:data-[state=active]:bg-neuro-gray-700 dark:data-[state=active]:text-white">Waveform</TabsTrigger>
                <TabsTrigger value="spectrogram" className="dark:text-neuro-gray-300 dark:data-[state=active]:bg-neuro-gray-700 dark:data-[state=active]:text-white">Spectrogram</TabsTrigger>
                <TabsTrigger value="topo" className="dark:text-neuro-gray-300 dark:data-[state=active]:bg-neuro-gray-700 dark:data-[state=active]:text-white">Topographic</TabsTrigger>
              </TabsList>
              
              <TabsContent value="waveform">
                <div className="aspect-video rounded-lg bg-neuro-gray-100 p-4 flex items-center justify-center overflow-hidden dark:bg-neuro-gray-800">
                  <div className="w-full h-full relative">
                    {/* Mock EEG Waveform */}
                    <div className="w-full h-4/5 flex items-center">
                      <svg viewBox="0 0 1000 100" className="w-full">
                        <path 
                          d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,70 T250,20 T300,60 T350,40 T400,50 T450,60 T500,30 T550,70 T600,50 T650,40 T700,60 T750,50 T800,30 T850,70 T900,40 T950,50 T1000,50" 
                          fill="none" 
                          stroke="#0EA5E9" 
                          strokeWidth="1.5"
                          className="animate-brain-wave"
                          strokeDasharray="1000"
                          strokeDashoffset="1000"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/5 flex items-center">
                      <div className="w-full h-px bg-neuro-gray-300 dark:bg-neuro-gray-600"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-neuro-gray-500 dark:text-neuro-gray-400">
                      <span>0s</span>
                      <span>1s</span>
                      <span>2s</span>
                      <span>3s</span>
                      <span>4s</span>
                      <span>5s</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-neuro-gray-500 mt-2 dark:text-neuro-gray-400">
                  EEG data visualization - {selectedChannel === "all" ? "All Channels" : `Channel ${selectedChannel}`}, Trial {selectedTrial}
                </p>
              </TabsContent>
              
              <TabsContent value="spectrogram">
                <div className="aspect-video rounded-lg bg-neuro-gray-100 p-4 flex items-center justify-center dark:bg-neuro-gray-800">
                  <p className="text-neuro-gray-500 dark:text-neuro-gray-400">Spectrogram will appear here when data is processed</p>
                </div>
              </TabsContent>
              
              <TabsContent value="topo">
                <div className="aspect-video rounded-lg bg-neuro-gray-100 p-4 flex items-center justify-center dark:bg-neuro-gray-800">
                  <p className="text-neuro-gray-500 dark:text-neuro-gray-400">Topographic map will appear here when data is processed</p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-neuro-gray-500 dark:text-neuro-gray-400">
                <span className="font-medium">Sampling rate:</span> 256 Hz
              </div>
              
              <div className="flex items-center gap-2">
                <button className="text-sm flex items-center text-neuro-blue dark:text-neuro-lightblue">
                  Show more details
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
