import modernMedical from "@/assets/modern-medical.jpg";
import ayurveda from "@/assets/ayurveda.jpg";
import { Heart, Sparkles, Baby, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Treatments = () => {
  const treatments = [
    {
      icon: Heart,
      title: "Cardiac Care",
      description: "Advanced heart surgeries, bypass procedures, and valve replacements performed by world-class cardiologists.",
      image: modernMedical,
      specialties: ["Bypass Surgery", "Valve Replacement", "Angioplasty", "Heart Transplant"],
    },
    {
      icon: Sparkles,
      title: "Cosmetic Surgery",
      description: "State-of-the-art aesthetic procedures for facial rejuvenation, body contouring, and reconstructive surgery.",
      image: modernMedical,
      specialties: ["Rhinoplasty", "Breast Surgery", "Liposuction", "Facelift"],
    },
    {
      icon: Baby,
      title: "Fertility Treatments",
      description: "Comprehensive fertility solutions including IVF, IUI, and advanced reproductive technologies.",
      image: modernMedical,
      specialties: ["IVF", "IUI", "Egg Freezing", "Surrogacy"],
    },
    {
      icon: Leaf,
      title: "Ayurvedic Rejuvenation",
      description: "Traditional Panchakarma therapies, herbal treatments, and holistic wellness programs for complete healing.",
      image: ayurveda,
      specialties: ["Panchakarma", "Herbal Medicine", "Yoga Therapy", "Wellness Retreats"],
    },
  ];

  return (
    <section id="treatments" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            World-Class Treatments
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter">
            From modern medical interventions to ancient Ayurvedic wisdom, 
            we offer comprehensive healthcare solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 animate-scale-in border-border group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <treatment.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-3">
                  {treatment.title}
                </h3>
                <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {treatment.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-inter"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
