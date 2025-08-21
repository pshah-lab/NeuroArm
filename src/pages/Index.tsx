
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import FileUpload from "@/components/FileUpload";
import EEGViewer from "@/components/EEGViewer";
import FilterFeatures from "@/components/FilterFeatures";
import ModelTraining from "@/components/ModelTraining";
import Results from "@/components/Results";
import About from "@/components/About";
import { Brain, Github, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-black dark:text-white wave-bg">
      <ScrollArea className="h-screen">
        <Navbar />
        <div className="pb-16 pt-16">
          <Header />
          
          <main>
            <div className="bg-gradient-to-b from-neuro-blue/5 to-transparent dark:from-neuro-darkblue/10">
              <FileUpload />
            </div>
            
            <div id="eeg-viewer">
              <EEGViewer />
            </div>
            
            <div id="filter">
              <FilterFeatures />
            </div>
            
            <div className="bg-gradient-to-b from-neuro-blue/5 to-transparent dark:from-neuro-darkblue/10">
              <ModelTraining />
            </div>
            
            <Results />
            <About />
          </main>
          
          <footer className="mt-16 py-12 border-t bg-neuro-gray-50 dark:bg-black dark:border-neuro-gray-700">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <Brain className="h-6 w-6 text-neuro-blue" />
                  <span className="text-xl font-semibold bg-gradient-to-r from-neuro-blue to-neuro-darkblue text-transparent bg-clip-text">
                    NeuroArm BCI
                  </span>
                </div>
                
                <div className="flex gap-6">
                  <a href="#" className="text-neuro-gray-500 hover:text-neuro-blue transition-colors dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-neuro-gray-500 hover:text-neuro-blue transition-colors dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h4 className="font-medium mb-3">About</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Project</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Team</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Research</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Documentation</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Tutorials</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">API</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Community</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Forum</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Discord</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Events</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Legal</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Privacy Policy</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">Terms of Service</a></li>
                    <li><a href="#" className="text-neuro-gray-500 hover:text-neuro-blue dark:text-neuro-gray-400 dark:hover:text-neuro-lightblue">License</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t pt-8 text-center text-neuro-gray-500 text-sm dark:border-neuro-gray-700 dark:text-neuro-gray-400">
                <p>NeuroArm BCI – Brain-Computer Interface Signal Classifier</p>
                <p className="mt-1 text-xs">© {new Date().getFullYear()} All Rights Reserved</p>
              </div>
            </div>
          </footer>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Index;
