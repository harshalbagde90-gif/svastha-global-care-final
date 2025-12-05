import { Award, DollarSign, UserCheck, MapPin, Clock, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "World-Class Quality",
      description: "JCI-accredited hospitals with internationally trained doctors and cutting-edge technology.",
    },
    {
      icon: DollarSign,
      title: "Affordable Excellence",
      description: "Save up to 70% compared to Western countries without compromising on quality of care.",
    },
    {
      icon: UserCheck,
      title: "Personalized Care",
      description: "Dedicated medical coordinators guide you through every step, from consultation to recovery.",
    },
    {
      icon: MapPin,
      title: "Healing Destination",
      description: "Combine treatment with India's rich culture, serene landscapes, and warm hospitality.",
    },
    {
      icon: Clock,
      title: "No Waiting Times",
      description: "Skip long waiting lists and access immediate treatment from leading specialists.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance in your language for medical queries and travel support.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Why Choose Svastha Global?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter">
            We combine medical excellence, affordability, and personalized care to make 
            your healing journey comfortable and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-[var(--shadow-soft)] border border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-[var(--shadow-soft)]">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-medium)] border border-border">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-foreground mb-4">
              Join Thousands of Satisfied Patients
            </h3>
            <p className="text-lg text-muted-foreground font-inter mb-6">
              Patients from over 50 countries have trusted us with their healthcare journey. 
              Experience the difference of truly personalized medical tourism.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground font-inter">Patients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-inter">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-inter">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
