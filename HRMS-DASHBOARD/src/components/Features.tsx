import { Zap, Code2, Layers, Palette, RefreshCw, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Convert complex Figma designs to React in under 5 seconds with our optimized AI engine.",
  },
  {
    icon: Code2,
    title: "Clean Code Output",
    description: "Generate production-ready, well-structured TypeScript React components with proper typing.",
  },
  {
    icon: Layers,
    title: "Component Detection",
    description: "Automatically identifies and extracts reusable components from your design system.",
  },
  {
    icon: Palette,
    title: "Style Preservation",
    description: "Maintains exact colors, spacing, typography, and responsive breakpoints from your design.",
  },
  {
    icon: RefreshCw,
    title: "Live Sync",
    description: "Keep your code updated with real-time sync as your Figma designs evolve.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your designs are encrypted and never stored. Enterprise-grade security guaranteed.",
  },
];

const Features = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Figma2React</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Built for modern development workflows with features that matter
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
