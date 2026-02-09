import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center bg-transparent">
                <img src="/logo.png" alt="Hi Digital Pest Control Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Hi Digital<br />Pest Control
              </span>
            </a>
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
                href="tel:+916393541161"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 6393541161
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

          {/* Working Hours */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-4">
              Business Hours
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon – Sun: 9 am – 5 pm</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                *Open all 7 days for your convenience
              </p>
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
    </footer >
  );
};

export default Footer;
