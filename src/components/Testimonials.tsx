import { Star, Quote, Users, Award, UserCheck } from "lucide-react";


const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Lanka, Varanasi",
      rating: 5,
      text: "Excellent service! The team arrived on time and completely eliminated our termite problem. Highly professional and affordable.",
      service: "Termite Treatment",
    },
    {
      name: "Priya Sharma",
      location: "Ramnagar",
      rating: 5,
      text: "Had a severe cockroach infestation in my kitchen. Hi Digital Pest Control solved it in just one visit. Very satisfied!",
      service: "Cockroach Control",
    },
    {
      name: "Amit Verma",
      location: "Varanasi",
      rating: 5,
      text: "Best pest control service in Varanasi. Eco-friendly products, reasonable prices, and the results last long. Recommended!",
      service: "General Pest Control",
    },
    {
      name: "Sunita Devi",
      location: "Lanka",
      rating: 5,
      text: "Our restaurant was facing rodent issues. They provided quick and discreet service. No more problems since then!",
      service: "Rodent Control",
    },
  ];

   const trustFeatures = [
    { icon: Star, text: "4.9/5 Google Rating" },
    { icon: Users, text: "10,000+ Families Served" },
    { icon: Award, text: "Government Approved Chemicals" },
    { icon: UserCheck, text: "Trained & Verified Staff" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Customer Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their pest control needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-green-200" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        {/* Trust Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {trustFeatures.map((feature) => (
            <div key={feature.text} className="flex flex-col items-center p-4 bg-background rounded-xl border border-border shadow-sm text-center group hover:border-secondary/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-sm font-bold text-foreground leading-tight">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
