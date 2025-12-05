import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-primary">
              Svastha Global
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("treatments")}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              Why Choose Us
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="hero">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-inter font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-inter font-medium text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("treatments")}
                className="text-foreground hover:text-primary transition-colors font-inter font-medium text-left"
              >
                Treatments
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="text-foreground hover:text-primary transition-colors font-inter font-medium text-left"
              >
                Why Choose Us
              </button>
              <Button onClick={() => scrollToSection("contact")} variant="hero" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
