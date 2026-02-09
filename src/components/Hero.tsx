import { Phone, Calendar, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const benefits = [
    "100% Safe Treatments",
    "Same-Day Service Available",
    "Satisfaction Guaranteed",
  ];

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Trusted by 10,000+ Families & Businesses in Varanasi
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Best{" "}
              <span className="gradient-text">Pest Control</span>{" "}
              Services in Varanasi
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Safe, effective & eco-friendly pest control services for homes and businesses.
              Protect your family and property with guaranteed results.
            </p>
            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary text-base px-8 py-4">
                <Calendar className="w-5 h-5" />
                Schedule Free Home Inspection
              </a>
              <a href="tel:+918707751161" className="btn-secondary text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Clean Home Illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl rotate-3 transform" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-lg -rotate-3 transform overflow-hidden border border-border">
                <img
                  src="/technician.png"
                  alt="Technician Spraying"
                  className="w-full h-full object-cover p-2 rounded-3xl"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-lg border border-border animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="icon-circle-orange">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">24/7</p>
                    <p className="text-sm text-muted-foreground">Support</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-lg border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="icon-circle">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
