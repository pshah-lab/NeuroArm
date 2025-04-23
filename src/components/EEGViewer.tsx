
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
        <h2 className="text-2xl font-bold mb-4">EEG Waveform Viewer</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-neuro-blue" />
              Raw EEG Visualization
            </CardTitle>
            <CardDescription>
              View raw EEG waveforms per channel and trial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Channel</label>
                <Select defaultValue={selectedChannel} onValueChange={setSelectedChannel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select channel" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockChannels.map((channel, index) => (
                      <SelectItem key={index} value={index === 0 ? "all" : channel}>
                        {channel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Trial</label>
                <Select defaultValue={selectedTrial} onValueChange={setSelectedTrial}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trial" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockTrials.map((trial) => (
                      <SelectItem key={trial} value={trial}>
                        Trial {trial}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Time Range (s)</label>
                <Select defaultValue="full">
                  <SelectTrigger>
                    <SelectValue placeholder="Time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Range</SelectItem>
                    <SelectItem value="0-2">0 - 2s</SelectItem>
                    <SelectItem value="0-5">0 - 5s</SelectItem>
                    <SelectItem value="custom">Custom...</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Display</label>
                <Select defaultValue="line">
                  <SelectTrigger>
                    <SelectValue placeholder="Display type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="line">Line Plot</SelectItem>
                    <SelectItem value="heatmap">Heatmap</SelectItem>
                    <SelectItem value="spectrogram">Spectrogram</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Tabs defaultValue="waveform">
              <TabsList className="mb-4">
                <TabsTrigger value="waveform">Waveform</TabsTrigger>
                <TabsTrigger value="spectrogram">Spectrogram</TabsTrigger>
                <TabsTrigger value="topo">Topographic</TabsTrigger>
              </TabsList>
              
              <TabsContent value="waveform">
                <div className="aspect-video rounded-lg bg-neuro-gray-100 p-4 flex items-center justify-center overflow-hidden">
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
                      <div className="w-full h-px bg-neuro-gray-300"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-neuro-gray-500">
                      <span>0s</span>
                      <span>1s</span>
                      <span>2s</span>
                      <span>3s</span>
                      <span>4s</span>
                      <span>5s</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-neuro-gray-500 mt-2">
                  EEG data visualization - {selectedChannel === "all" ? "All Channels" : `Channel ${selectedChannel}`}, Trial {selectedTrial}
                </p>
              </TabsContent>
              
              <TabsContent value="spectrogram">
                <div className="aspect-video rounded-lg bg-neuro-gray-100 p-4 flex items-center justify-center">
                  <p className="text-neuro-gray-500">Spectrogram will appear here when data is processed</p>
                </div>
              </TabsContent>
              
              <TabsContent value="topo">
                <div className="aspect-video rounded-lg bg-neuro-gray-100 p-4 flex items-center justify-center">
                  <p className="text-neuro-gray-500">Topographic map will appear here when data is processed</p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-neuro-gray-500">
                <span className="font-medium">Sampling rate:</span> 256 Hz
              </div>
              
              <div className="flex items-center gap-2">
                <button className="text-sm flex items-center text-neuro-blue">
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
