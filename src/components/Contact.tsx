import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get Rid of Pests Today
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Don't let pests take over your home or business. Call us now for a
            free consultation and inspection!
          </p>

          {/* Phone Numbers */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <a
              href="tel:+918707751161"
              className="flex items-center justify-center gap-4 bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-primary transition-colors group"
            >
              <div className="icon-circle-orange group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Call us at</p>
                <p className="font-heading text-xl font-bold text-foreground">
                  +91 8707751161
                </p>
              </div>
            </a>

            <a
              href="tel:+916393531161"
              className="flex items-center justify-center gap-4 bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-secondary transition-colors group"
            >
              <div className="icon-circle group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-1">Or call</p>
                <p className="font-heading text-xl font-bold text-foreground">
                  +91 6393531161
                </p>
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918707751161" className="btn-primary text-lg px-10 py-5">
              <Phone className="w-5 h-5" />
              Call Us On
            </a>
            <a
              href="https://wa.me/918707751161"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-10 py-5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
