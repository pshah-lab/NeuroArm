
import { Brain, Globe, BookOpen, Code, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="neuro-section pt-16 pb-24" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About This Project</h2>
          <p className="text-neuro-gray-600 max-w-2xl mx-auto">
            Bridging neuroscience and technology to create accessible brain-computer interfaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -z-10 w-48 h-48 bg-neuro-blue/10 rounded-full blur-3xl"></div>
              <div className="w-48 h-48 bg-gradient-to-br from-neuro-blue to-neuro-darkblue rounded-full flex items-center justify-center shadow-xl">
                <Brain className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
            
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neuro-darkblue">NeuroArm BCI</h3>
              <p className="text-neuro-gray-700">
                A brain-computer interface application designed for researchers, students, and hobbyists 
                interested in EEG signal processing and neurotechnology. This tool allows users to analyze brain activity
                patterns and translate them into actionable commands for robotic arm control.
              </p>
              
              <p className="text-neuro-gray-700">
                This project implements industry-standard signal processing techniques and machine learning algorithms
                to classify motor imagery signals (such as imagined left and right hand movements) from EEG recordings.
                The classified signals can then be used to control external devices, such as prosthetic or robotic arms.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <Card className="bg-neuro-gray-50 border-none shadow-sm">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-neuro-blue/10 rounded-full flex items-center justify-center mb-3">
                    <Code className="h-5 w-5 text-neuro-blue" />
                  </div>
                  <h4 className="font-medium mb-1">Open Source</h4>
                  <p className="text-xs text-neuro-gray-500">Built with accessible technologies</p>
                </CardContent>
              </Card>
              
              <Card className="bg-neuro-gray-50 border-none shadow-sm">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-neuro-blue/10 rounded-full flex items-center justify-center mb-3">
                    <GraduationCap className="h-5 w-5 text-neuro-blue" />
                  </div>
                  <h4 className="font-medium mb-1">Educational</h4>
                  <p className="text-xs text-neuro-gray-500">Learn BCI fundamentals</p>
                </CardContent>
              </Card>
              
              <Card className="bg-neuro-gray-50 border-none shadow-sm">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-neuro-blue/10 rounded-full flex items-center justify-center mb-3">
                    <Globe className="h-5 w-5 text-neuro-blue" />
                  </div>
                  <h4 className="font-medium mb-1">Accessible</h4>
                  <p className="text-xs text-neuro-gray-500">Compatible with standard devices</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t">
          <h3 className="font-medium mb-4 text-center">Key Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 bg-neuro-blue/10 text-neuro-blue rounded-full text-sm font-medium">EEG Signal Processing</span>
            <span className="px-4 py-2 bg-neuro-blue/10 text-neuro-blue rounded-full text-sm font-medium">Machine Learning</span>
            <span className="px-4 py-2 bg-neuro-blue/10 text-neuro-blue rounded-full text-sm font-medium">BCI</span>
            <span className="px-4 py-2 bg-neuro-blue/10 text-neuro-blue rounded-full text-sm font-medium">Neural Interfaces</span>
            <span className="px-4 py-2 bg-neuro-blue/10 text-neuro-blue rounded-full text-sm font-medium">Motor Imagery</span>
            <span className="px-4 py-2 bg-neuro-blue/10 text-neuro-blue rounded-full text-sm font-medium">Robotics</span>
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-neuro-blue text-neuro-blue hover:bg-neuro-blue/10">
              <BookOpen className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
