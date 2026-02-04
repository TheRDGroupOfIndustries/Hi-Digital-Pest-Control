import { Bug, Rat, Zap, Home, Leaf, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bug,
      name: "Cockroach Control",
      description: "Complete elimination of cockroach infestations with safe, long-lasting treatments.",
      color: "orange",
    },
    {
      icon: Home,
      name: "Termite Treatment",
      description: "Protect your property from destructive termites with our advanced solutions.",
      color: "green",
    },
    {
      icon: Zap,
      name: "Mosquito Control",
      description: "Effective mosquito management for a safer, bite-free environment.",
      color: "orange",
    },
    {
      icon: Rat,
      name: "Rodent Control",
      description: "Humane and effective solutions to eliminate rats and mice from your space.",
      color: "green",
    },
    {
      icon: Leaf,
      name: "Bed Bug Treatment",
      description: "Thorough bed bug extermination for peaceful, restful sleep.",
      color: "orange",
    },
    {
      icon: Shield,
      name: "Ant Control",
      description: "Stop ant invasions at the source with our targeted treatments.",
      color: "green",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Pest Control Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From common household pests to complex infestations, we have the expertise
            to handle all your pest control needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`${service.color === "orange" ? "icon-circle-orange" : "icon-circle"
                  } mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
