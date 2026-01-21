import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConversionDemo from "@/components/ConversionDemo";
import Features from "@/components/Features";
import UploadSection from "@/components/UploadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ConversionDemo />
        <Features />
        <UploadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
