import { Award, Leaf, Clock, IndianRupee, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Certified & Experienced",
      description: "Our technicians are fully certified with years of expertise in pest management.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Treatments",
      description: "Safe for your family, pets, and the environment with our green solutions.",
    },
    {
      icon: Clock,
      title: "Fast Response Time",
      description: "Quick scheduling and prompt service - we understand pest problems can't wait.",
    },
    {
      icon: IndianRupee,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality or effectiveness.",
    },
    {
      icon: Shield,
      title: "Long-Lasting Results",
      description: "Our treatments provide extended protection to keep pests away for good.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Most Trusted Pest Control in{" "}
              <span className="gradient-text">Varanasi</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience serving homes and businesses in Varanasi,
              we've built a reputation for reliable, effective, and safe pest control services.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 icon-circle">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <p className="font-heading text-5xl font-bold text-green-600 mb-2">10+</p>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <p className="font-heading text-5xl font-bold text-orange-500 mb-2">1000+</p>
              <p className="text-muted-foreground font-medium">Happy Customers</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <p className="font-heading text-5xl font-bold text-orange-500 mb-2">100%</p>
              <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <p className="font-heading text-5xl font-bold text-green-600 mb-2">24/7</p>
              <p className="text-muted-foreground font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
