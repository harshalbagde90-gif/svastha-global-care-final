import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Svastha Global</h3>
              <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed">
                Your trusted partner for world-class healthcare in India. 
                Combining modern medicine with ancient healing traditions.
              </p>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 font-inter text-sm text-primary-foreground/80">
                <li>info@svasthaglobal.com</li>
                <li>+91 (800) 123-4567</li>
                <li>Medical Hub, Bangalore</li>
                <li>Karnataka, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/70 font-inter text-sm text-center md:text-left">
                © {currentYear} Svastha Global. All rights reserved.
              </p>
              <p className="text-primary-foreground/70 font-inter text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-secondary" /> for your wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
