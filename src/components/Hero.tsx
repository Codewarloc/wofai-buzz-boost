import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Instagram, Target } from "lucide-react";

const Hero = () => {
  // smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-primary via-primary/90 to-secondary/20 
      dark:from-gray-950 dark:via-gray-900 dark:to-black
      text-primary-foreground relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float dark:hidden"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float dark:hidden"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Dark mode glowing orbs */}
        <div className="hidden dark:block absolute -top-32 -right-32 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="hidden dark:block absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight 
                       dark:text-gray-100 dark:drop-shadow-[0_0_12px_rgba(255,165,0,0.6)]"
          >
            Grow Your Business with
            <span
              className="text-secondary block mt-2 
                         dark:text-orange-400 dark:drop-shadow-[0_0_15px_rgba(255,140,0,0.9)]"
            >
              Wofai Advertisement Agency
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto 
                        text-primary-foreground/90 dark:text-gray-300">
            We help businesses reach their target audience through strategic
            Facebook and Instagram advertising campaigns that drive real
            results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 group"
              onClick={() => scrollToSection("contact")} // 👈 scroll to Contact section
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-orange-400 text-orange-400 
                         hover:bg-orange-400 hover:text-white transition-colors"
              onClick={() => scrollToSection("about")} // 👈 scroll to Portfolio section
            >
              View Our Work
            </Button>
          </div>

          {/* Services Row */}
          <div className="flex justify-center items-center gap-8 
                          text-primary-foreground/70 dark:text-gray-400">
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
        <div className="w-6 h-10 border-2 border-primary-foreground/50 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 dark:bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
