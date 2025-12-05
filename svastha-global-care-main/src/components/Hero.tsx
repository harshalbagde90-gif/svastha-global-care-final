import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/ConsultationForm";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-primary-foreground mb-6 leading-tight">
            Your Journey to Wellness Begins in India
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 font-inter font-light max-w-3xl mx-auto">
            Experience world-class healthcare combined with ancient healing traditions. 
            Svastha Global connects you with India's finest hospitals and Ayurvedic centers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ConsultationForm />
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("treatments")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto backdrop-blur-sm"
            >
              Explore Treatments
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
