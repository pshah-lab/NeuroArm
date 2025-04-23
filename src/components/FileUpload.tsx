
import { useState } from "react";
import { FileText, Upload, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const acceptedFormats = ['.mat', '.csv', '.xlsx'];
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const uploadedFile = e.dataTransfer.files[0];
      const fileExt = uploadedFile.name.substring(uploadedFile.name.lastIndexOf('.')).toLowerCase();
      
      if (acceptedFormats.includes(fileExt)) {
        setFile(uploadedFile);
      } else {
        toast({
          title: "Invalid file format",
          description: `Please upload ${acceptedFormats.join(', ')} files only.`,
          variant: "destructive"
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      const fileExt = uploadedFile.name.substring(uploadedFile.name.lastIndexOf('.')).toLowerCase();
      
      if (acceptedFormats.includes(fileExt)) {
        setFile(uploadedFile);
      } else {
        toast({
          title: "Invalid file format",
          description: `Please upload ${acceptedFormats.join(', ')} files only.`,
          variant: "destructive"
        });
      }
    }
  };
  
  const handleProcessFile = () => {
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      toast({
        title: "File processed successfully",
        description: "Your EEG data is ready for analysis.",
        variant: "default"
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section className="neuro-section py-12" id="upload">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Upload EEG Data</h2>
        
        <Card className="border border-neuro-gray-200 shadow-sm overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-neuro-blue/5 to-transparent">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-neuro-blue" />
              EEG Data Upload
            </CardTitle>
            <CardDescription>
              Upload EEG file in .mat, .csv, or .xlsx format (OpenBCI / Physionet compatible)
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
                isDragging ? "border-neuro-blue bg-neuro-blue/5 scale-[1.02]" : "border-neuro-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              <input
                id="fileInput"
                type="file"
                className="hidden"
                accept=".mat,.csv,.xlsx"
                onChange={handleFileChange}
              />
              
              {file ? (
                <div className="space-y-4">
                  <div className="mx-auto bg-neuro-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-neuro-blue" />
                  </div>
                  <p className="text-lg font-medium">{file.name}</p>
                  <div className="flex items-center justify-center gap-3">
                    <p className="text-sm text-neuro-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    <Badge variant="outline" className="text-xs">
                      {file.name.substring(file.name.lastIndexOf('.')+1).toUpperCase()}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                  }}>
                    Change File
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mx-auto bg-neuro-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-neuro-gray-500" />
                  </div>
                  <p className="text-lg font-medium">Drop your EEG file here</p>
                  <p className="text-sm text-neuro-gray-500 mt-1">or click to browse</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {acceptedFormats.map(format => (
                      <Badge key={format} variant="secondary" className="text-xs">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <Alert className="mt-4 bg-neuro-blue/5 border-neuro-blue/20">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-xs text-neuro-gray-600">
                Supported file formats include .mat (MATLAB), .csv (comma-separated values), and .xlsx (Excel). 
                Maximum file size: 50MB. For best results, ensure your data follows standard EEG formatting.
              </AlertDescription>
            </Alert>
            
            <div className="mt-6 flex justify-end">
              <Button 
                disabled={!file || isProcessing} 
                className="bg-neuro-blue hover:bg-neuro-darkblue"
                onClick={handleProcessFile}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Process File
                    <FileText className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
