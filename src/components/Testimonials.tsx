import { Star, Quote } from "lucide-react";

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
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted rounded-full">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-foreground font-medium">
              4.9/5 Rating from 500+ Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
