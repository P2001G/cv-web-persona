
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-brand-lightgray">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 animate-fade-in">
            Prashant Ghimire
          </h1>
          <h2 className="text-2xl sm:text-3xl mb-6 text-brand-gray font-semibold animate-fade-in animate-delay-100">
            Digital Marketer & Business Development Professional
          </h2>
          <p className="text-lg mb-8 text-gray-700 animate-fade-in animate-delay-200">
            With five years of experience specializing in organic growth, content creation, and building authentic connections with audiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in animate-delay-300">
            <Button size="lg" className="bg-brand-navy hover:bg-brand-navy/90">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/10">
              <a href="#experience">View Experience</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
