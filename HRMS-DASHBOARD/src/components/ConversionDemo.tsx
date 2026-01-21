import { ArrowRight } from "lucide-react";

const figmaDesign = `
┌─────────────────────────────┐
│  ◉ Button Component         │
├─────────────────────────────┤
│                             │
│   ┌───────────────────┐     │
│   │   Get Started →   │     │
│   └───────────────────┘     │
│                             │
│   Fill: #0EA5E9             │
│   Radius: 12px              │
│   Padding: 16px 32px        │
│                             │
└─────────────────────────────┘
`;

const reactCode = `import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ 
  children, 
  onClick 
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-primary 
        text-white rounded-xl 
        hover:opacity-90 transition"
    >
      {children}
    </button>
  );
};`;

const ConversionDemo = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See it in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Watch how your Figma designs transform into beautiful React components
          </p>
        </div>

        {/* Demo panels */}
        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
          {/* Figma Panel */}
          <div className="gradient-border rounded-2xl overflow-hidden">
            <div className="bg-card p-6">
              {/* Panel header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">figma-design.fig</span>
              </div>
              
              {/* Figma preview */}
              <div className="bg-[hsl(var(--code-bg))] rounded-lg p-4">
                <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                  {figmaDesign}
                </pre>
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-sm bg-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Button Component</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] flex items-center justify-center animate-pulse-glow">
              <ArrowRight className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>

          {/* React Panel */}
          <div className="gradient-border rounded-2xl overflow-hidden">
            <div className="bg-card p-6">
              {/* Panel header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">Button.tsx</span>
              </div>
              
              {/* Code preview */}
              <div className="bg-[hsl(var(--code-bg))] rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono">
                  <code>
                    <span className="text-[hsl(var(--syntax-keyword))]">import</span>
                    <span className="text-foreground"> React </span>
                    <span className="text-[hsl(var(--syntax-keyword))]">from</span>
                    <span className="text-[hsl(var(--syntax-string))]"> 'react'</span>
                    <span className="text-foreground">;</span>
                    {"\n\n"}
                    <span className="text-[hsl(var(--syntax-keyword))]">interface</span>
                    <span className="text-[hsl(var(--syntax-function))]"> ButtonProps</span>
                    <span className="text-foreground"> {"{"}</span>
                    {"\n"}
                    <span className="text-foreground">  children: </span>
                    <span className="text-[hsl(var(--syntax-tag))]">React.ReactNode</span>
                    <span className="text-foreground">;</span>
                    {"\n"}
                    <span className="text-foreground">  onClick?: </span>
                    <span className="text-[hsl(var(--syntax-tag))]">() ={">"} void</span>
                    <span className="text-foreground">;</span>
                    {"\n"}
                    <span className="text-foreground">{"}"}</span>
                    {"\n\n"}
                    <span className="text-[hsl(var(--syntax-keyword))]">export const</span>
                    <span className="text-[hsl(var(--syntax-function))]"> Button</span>
                    <span className="text-foreground"> = ({"{"} ... {"}"}) ={">"} {"{"}</span>
                    {"\n"}
                    <span className="text-[hsl(var(--syntax-keyword))]">  return</span>
                    <span className="text-foreground"> (</span>
                    {"\n"}
                    <span className="text-[hsl(var(--syntax-tag))]">    {"<"}button</span>
                    <span className="text-[hsl(var(--syntax-attr))]"> className</span>
                    <span className="text-foreground">=</span>
                    <span className="text-[hsl(var(--syntax-string))]">"..."</span>
                    <span className="text-[hsl(var(--syntax-tag))]">{">"}</span>
                    {"\n"}
                    <span className="text-foreground">      {"{"}children{"}"}</span>
                    {"\n"}
                    <span className="text-[hsl(var(--syntax-tag))]">    {"<"}/button{">"}</span>
                    {"\n"}
                    <span className="text-foreground">  );</span>
                    {"\n"}
                    <span className="text-foreground">{"}"};</span>
                  </code>
                </pre>
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  TS
                </div>
                <span className="text-sm text-muted-foreground">TypeScript React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionDemo;
