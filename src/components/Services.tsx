import { Bug, Rat, Zap, Home, Leaf, Shield, Star, Users, Award, UserCheck, Wind, Cloud, Trees, Hexagon, Skull, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      name: "TTPO – Termite Treatment",
      subName: "(Post-Construction)",
      description: "Protect your property from termites after construction with advanced, long-lasting chemical barriers.",
      color: "green",
    },
    {
      icon: Home,
      name: "TTPR – Termite Treatment",
      subName: "(Pre-Construction)",
      description: "Prevent termite damage before it starts with preventive soil treatment during construction.",
      color: "green",
    },
    {
      icon: Bug,
      name: "Cockroach Control Service",
      description: "Get rid of cockroaches permanently with safe, odorless treatments and long-lasting protection.",
      color: "orange",
    },
    {
      icon: Rat,
      name: "Rodent Control Service",
      description: "Eliminate rats and mice effectively with humane methods and secure, long-term prevention.",
      color: "orange",
    },
    {
      icon: Bug,
      name: "Ant Control Service",
      description: "Stop ant infestations at the source with targeted treatments and lasting control.",
      color: "green",
    },
    {
      icon: Leaf,
      name: "Bed Bug Control Service",
      description: "Remove bed bugs completely with professional treatment for peaceful, bite-free sleep.",
      color: "orange",
    },
    {
      icon: Zap,
      name: "General Pest Control",
      description: "Comprehensive pest control solutions to keep your home and workplace safe and hygienic.",
      color: "green",
    },
    {
      icon: Search,
      name: "Deep Pest Control",
      description: "Intensive deep pest control to eliminate hidden infestations and ensure complete protection.",
      color: "orange",
    },
    {
      icon: Shield,
      name: "Snake Control Service",
      description: "Safe and expert snake control to protect your family and property without harm.",
      color: "green",
    },
    {
      icon: Cloud,
      name: "Thermal Fogging",
      description: "Advanced thermal fogging to control mosquitoes and flying insects even in hard-to-reach areas.",
      color: "orange",
    },
    {
      icon: Wind,
      name: "Mist Fogging",
      description: "Fine mist fogging treatment for effective control of mosquitoes and airborne pests.",
      color: "green",
    },
    {
      icon: Bug,
      name: "Lizard Control Service",
      description: "Effective lizard control solutions to keep your home clean, safe, and lizard-free.",
      color: "orange",
    },
    {
      icon: Zap,
      name: "Flies Control Service",
      description: "Control flies efficiently to maintain a hygienic, disease-free environment.",
      color: "green",
    },
    {
      icon: Bug,
      name: "Wood Borer Service",
      description: "Protect wooden furniture and structures from damage with specialized wood borer treatment.",
      color: "orange",
    },
    {
      icon: Trees,
      name: "Termite Control in Trees",
      description: "Targeted termite treatment to protect trees and prevent spread to nearby structures.",
      color: "green",
    },
    {
      icon: Hexagon,
      name: "Beehive Removal",
      description: "Safe and professional beehive removal without harming people or surrounding property.",
      color: "orange",
    },
  ];

  const trustFeatures = [
    { icon: Star, text: "4.9/5 Google Rating" },
    { icon: Users, text: "10,000+ Families Served" },
    { icon: Award, text: "Government Approved Chemicals" },
    { icon: UserCheck, text: "Trained & Verified Staff" },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="card-service group h-full flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div>
                <div
                  className={`${service.color === "orange" ? "icon-circle-orange" : "icon-circle"
                    } mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {service.name}
                  {service.subName && (
                    <span className="block text-sm text-secondary mt-1">{service.subName}</span>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Call for Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
