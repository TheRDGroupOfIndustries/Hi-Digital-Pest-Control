import { Shield, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-foreground">
                  Hi Digital
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Pest Control
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted pest control specialists in Varanasi. Safe, effective,
              and professional services.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/hidigitalpestcontrolservice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                title="Facebook"
              >
                <i className="ri-facebook-line text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/hi_digital_pest_control"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                title="Instagram"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+918707751161"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 8707751161
              </a>
              <a
                href="tel:+916393531161"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary" />
                +91 6393531161
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">
              Our Location
            </h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
              <address className="not-italic">
                Near Ramlila Maidan, Lanka, Ramnagar<br />
                Varanasi, Uttar Pradesh – 221008
              </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hi Digital Pest Control. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
