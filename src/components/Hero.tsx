import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary/20 text-primary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Grow Your Business with 
            <span className="text-secondary block mt-2">Wofai Advertisement Agency</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            We help businesses reach their target audience through strategic Facebook and Instagram advertising campaigns that drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Work
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Facebook className="h-6 w-6" />
              <span>Facebook Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="h-6 w-6" />
              <span>Instagram Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-6 w-6" />
              <span>Targeted Marketing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;