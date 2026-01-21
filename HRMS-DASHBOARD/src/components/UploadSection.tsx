import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Link, FileCode, Sparkles } from "lucide-react";

const UploadSection = () => {
  const [figmaUrl, setFigmaUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="gradient-text">Convert</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Paste your Figma URL or upload a file to get started
          </p>
        </div>

        {/* Upload area */}
        <div className="space-y-6">
          {/* URL Input */}
          <div className="gradient-border rounded-2xl p-1">
            <div className="flex items-center gap-3 bg-card rounded-xl p-2">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <Link className="w-5 h-5 text-primary" />
              </div>
              <input
                type="text"
                placeholder="Paste your Figma file URL here..."
                value={figmaUrl}
                onChange={(e) => setFigmaUrl(e.target.value)}
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
              />
              <Button variant="hero" size="lg" className="flex-shrink-0">
                <Sparkles className="w-5 h-5" />
                Convert
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-sm">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Drag & Drop Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              relative rounded-2xl border-2 border-dashed p-12 text-center transition-all duration-300 cursor-pointer
              ${isDragging 
                ? 'border-primary bg-primary/5 scale-[1.02]' 
                : 'border-border hover:border-primary/50 hover:bg-secondary/30'
              }
            `}
          >
            <div className="flex flex-col items-center">
              <div className={`
                w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                ${isDragging 
                  ? 'bg-primary/20 scale-110' 
                  : 'bg-secondary'
                }
              `}>
                <Upload className={`w-8 h-8 transition-colors ${isDragging ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">
                Drag & Drop your Figma file
              </h3>
              <p className="text-muted-foreground mb-6">
                or click to browse from your computer
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4" />
                  <span>.fig files supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>Max 50MB</span>
                </div>
              </div>
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              accept=".fig"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
