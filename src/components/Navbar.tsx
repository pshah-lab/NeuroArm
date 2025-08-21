
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-neuro-gray-200 z-50 py-3 dark:bg-black/90 dark:border-neuro-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-neuro-blue to-neuro-darkblue p-2 rounded-lg shadow-md">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-neuro-blue to-neuro-darkblue text-transparent bg-clip-text">
            NeuroArm BCI
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('upload')} 
            className="text-neuro-gray-600 hover:text-neuro-blue transition-colors dark:text-neuro-gray-300 dark:hover:text-neuro-lightblue"
          >
            Upload
          </button>
          <button 
            onClick={() => scrollToSection('eeg-viewer')} 
            className="text-neuro-gray-600 hover:text-neuro-blue transition-colors dark:text-neuro-gray-300 dark:hover:text-neuro-lightblue"
          >
            Visualization
          </button>
          <button 
            onClick={() => scrollToSection('filter')} 
            className="text-neuro-gray-600 hover:text-neuro-blue transition-colors dark:text-neuro-gray-300 dark:hover:text-neuro-lightblue"
          >
            Processing
          </button>
          <button 
            onClick={() => scrollToSection('model')} 
            className="text-neuro-gray-600 hover:text-neuro-blue transition-colors dark:text-neuro-gray-300 dark:hover:text-neuro-lightblue"
          >
            Training
          </button>
          <button 
            onClick={() => scrollToSection('results')} 
            className="text-neuro-gray-600 hover:text-neuro-blue transition-colors dark:text-neuro-gray-300 dark:hover:text-neuro-lightblue"
          >
            Results
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-neuro-gray-600 hover:text-neuro-blue transition-colors dark:text-neuro-gray-300 dark:hover:text-neuro-lightblue"
          >
            About
          </button>
          <Button 
            onClick={() => scrollToSection('upload')} 
            className="bg-neuro-blue hover:bg-neuro-darkblue text-white"
          >
            Get Started
          </Button>
          <ModeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neuro-gray-600 dark:text-neuro-gray-300" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-neuro-gray-200 py-4 shadow-md animate-fade-in dark:bg-black dark:border-neuro-gray-700">
          <div className="container mx-auto space-y-3">
            <button 
              onClick={() => scrollToSection('upload')} 
              className="block w-full text-left px-3 py-2 hover:bg-neuro-gray-100 rounded-md dark:hover:bg-neuro-gray-800"
            >
              Upload
            </button>
            <button 
              onClick={() => scrollToSection('eeg-viewer')} 
              className="block w-full text-left px-3 py-2 hover:bg-neuro-gray-100 rounded-md dark:hover:bg-neuro-gray-800"
            >
              Visualization
            </button>
            <button 
              onClick={() => scrollToSection('filter')} 
              className="block w-full text-left px-3 py-2 hover:bg-neuro-gray-100 rounded-md dark:hover:bg-neuro-gray-800"
            >
              Processing
            </button>
            <button 
              onClick={() => scrollToSection('model')} 
              className="block w-full text-left px-3 py-2 hover:bg-neuro-gray-100 rounded-md dark:hover:bg-neuro-gray-800"
            >
              Training
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="block w-full text-left px-3 py-2 hover:bg-neuro-gray-100 rounded-md dark:hover:bg-neuro-gray-800"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left px-3 py-2 hover:bg-neuro-gray-100 rounded-md dark:hover:bg-neuro-gray-800"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection('upload')} 
              className="w-full bg-neuro-blue hover:bg-neuro-darkblue text-white"
            >
              Get Started
            </Button>
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
