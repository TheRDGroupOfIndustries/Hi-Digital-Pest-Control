import { Phone, Calendar, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const benefits = [
    "100% Safe Treatments",
    "Same Day Service",
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
              Trusted by 1000+ Families in Varanasi
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Your Trusted{" "}
              <span className="gradient-text">Pest Control</span>{" "}
              Specialists
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Safe, effective, and professional pest control services for homes
              & businesses. Get rid of pests with our eco-friendly solutions.
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
                Book Free Inspection
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
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-float">
                      <svg
                        className="w-16 h-16 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      100% Pest Free
                    </h3>
                    <p className="text-muted-foreground">
                      Guaranteed Protection
                    </p>
                  </div>
                </div>
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
                    <p className="text-2xl font-bold text-foreground">1000+</p>
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
