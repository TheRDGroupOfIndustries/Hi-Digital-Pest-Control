import { Search, Sparkles, ShieldCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Inspection",
      description: "Our experts thoroughly inspect your property to identify pest problems and entry points.",
    },
    {
      icon: Sparkles,
      step: "02",
      title: "Treatment",
      description: "We apply targeted, eco-friendly treatments to eliminate pests safely and effectively.",
    },
    {
      icon: ShieldCheck,
      step: "03",
      title: "Protection",
      description: "We implement preventive measures to keep your space pest-free for the long term.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting rid of pests has never been easier. Our streamlined process
            ensures quick and effective results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200" />

          {steps.map((item, index) => (
            <div key={item.title} className="relative text-center">
              {/* Step Number Badge */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-card border-4 border-green-200 flex items-center justify-center relative z-10 shadow-lg">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-20">
                  {item.step}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
