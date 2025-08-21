
import { Brain, ChevronDown, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute top-0 right-0 w-full h-full -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neuro-blue/10 rounded-full blur-3xl dark:bg-neuro-lightblue/10"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-neuro-blue/5 rounded-full blur-2xl dark:bg-neuro-lightblue/5"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="md:max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-neuro-blue to-neuro-darkblue p-3 rounded-xl shadow-lg">
                <Brain className="h-8 w-8 text-white animate-pulse-subtle" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neuro-blue to-neuro-darkblue text-transparent bg-clip-text">
                NeuroArm BCI
              </h1>
            </div>
            <p className="text-neuro-gray-600 text-lg md:text-xl leading-relaxed dark:text-neuro-gray-300">
              Brain-Computer Interface Signal Classifier — Analyze EEG data to translate brain signals into robotic arm movements using advanced machine learning algorithms.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                onClick={() => scrollToSection('upload')} 
                className="bg-neuro-blue hover:bg-neuro-darkblue text-white px-6 py-2 text-base"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => scrollToSection('about')} 
                variant="outline"
                className="border-neuro-blue text-neuro-blue hover:bg-neuro-blue/10 px-6 py-2 text-base dark:border-neuro-lightblue dark:text-neuro-lightblue dark:hover:bg-neuro-lightblue/20"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0 animate-float">
            <div className="absolute -z-10 w-64 h-64 bg-neuro-blue/10 rounded-full blur-3xl dark:bg-neuro-lightblue/10"></div>
            <div className="border border-neuro-gray-200 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 dark:border-neuro-gray-700 dark:bg-neuro-gray-900/90 dark:backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-neuro-blue/20 to-neuro-blue/5 rounded-full flex items-center justify-center dark:from-neuro-lightblue/20 dark:to-neuro-lightblue/5">
                  <Brain className="h-10 w-10 text-neuro-blue dark:text-neuro-lightblue" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2.5 w-32 bg-gradient-to-r from-neuro-blue/30 to-neuro-gray-200 rounded-full mx-auto dark:from-neuro-lightblue/30 dark:to-neuro-gray-700"></div>
                <div className="h-2.5 w-40 bg-gradient-to-r from-neuro-blue/20 to-neuro-gray-200 rounded-full mx-auto dark:from-neuro-lightblue/20 dark:to-neuro-gray-700"></div>
                <div className="h-2.5 w-36 bg-gradient-to-r from-neuro-blue/10 to-neuro-gray-200 rounded-full mx-auto dark:from-neuro-lightblue/10 dark:to-neuro-gray-700"></div>
              </div>
              <div className="mt-6 pt-4 border-t border-neuro-gray-200 dark:border-neuro-gray-700">
                <div className="flex items-center justify-center">
                  <div className="p-2 bg-neuro-blue/5 rounded-full dark:bg-neuro-lightblue/5">
                    <ArrowDown className="h-5 w-5 text-neuro-blue animate-bounce dark:text-neuro-lightblue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-12 justify-center md:justify-start">
          <span className="px-4 py-1.5 bg-neuro-gray-100 hover:bg-neuro-gray-200 transition-colors rounded-full text-sm font-medium dark:bg-neuro-gray-800 dark:hover:bg-neuro-gray-700 dark:text-neuro-gray-200">EEG Processing</span>
          <span className="px-4 py-1.5 bg-neuro-gray-100 hover:bg-neuro-gray-200 transition-colors rounded-full text-sm font-medium dark:bg-neuro-gray-800 dark:hover:bg-neuro-gray-700 dark:text-neuro-gray-200">Machine Learning</span>
          <span className="px-4 py-1.5 bg-neuro-gray-100 hover:bg-neuro-gray-200 transition-colors rounded-full text-sm font-medium dark:bg-neuro-gray-800 dark:hover:bg-neuro-gray-700 dark:text-neuro-gray-200">Neural Interfaces</span>
          <span className="px-4 py-1.5 bg-neuro-gray-100 hover:bg-neuro-gray-200 transition-colors rounded-full text-sm font-medium dark:bg-neuro-gray-800 dark:hover:bg-neuro-gray-700 dark:text-neuro-gray-200">Brain-Computer Interface</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neuro-blue/30 to-transparent dark:via-neuro-lightblue/30"></div>
    </header>
  );
}
