import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary cursor-pointer" onClick={() => scrollToSection('hero')}>
            Wofai Agency
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} variant="default">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full mt-4">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;