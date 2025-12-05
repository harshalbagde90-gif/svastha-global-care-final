import { Heart, Shield, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We understand that seeking medical treatment abroad is a significant decision. Our team provides personalized support every step of the way.",
    },
    {
      icon: Shield,
      title: "Trusted Partners",
      description: "We work only with JCI-accredited hospitals and certified Ayurvedic centers, ensuring the highest standards of care and safety.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced medical coordinators help you navigate treatment options, travel arrangements, and post-treatment care seamlessly.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving patients from over 50 countries, we bridge cultures and connect you with India's rich heritage of healing.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            About Svastha Global
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed">
            <span className="font-semibold text-foreground">Svastha</span> means "health" in Sanskrit. 
            We are a premier medical tourism organization dedicated to connecting international patients 
            with India's world-renowned healthcare system — from cutting-edge hospitals to time-honored 
            Ayurvedic wellness centers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-medium)] border border-border">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-4">
              To provide accessible, affordable, and exceptional healthcare by seamlessly connecting 
              patients worldwide with India's best medical facilities and traditional healing practices.
            </p>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              Whether you seek advanced cardiac surgery, cosmetic procedures, fertility treatments, or 
              holistic Ayurvedic rejuvenation, we ensure your journey is smooth, safe, and successful.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-[var(--shadow-soft)] border border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground font-inter leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
