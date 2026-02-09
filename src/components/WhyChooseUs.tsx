import { Award, Leaf, Clock, IndianRupee, Shield } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const StatCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000,
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

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
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Most Trusted Pest Control in{" "}
            <span className="gradient-text">Varanasi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            With years of experience serving homes and businesses in Varanasi,
            we've built a reputation for reliable, effective, and safe pest control services.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 px-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all group flex flex-col items-start text-left shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="bg-green-50/50 rounded-2xl p-6 md:p-8 text-left border border-green-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
            <p className="font-heading text-4xl md:text-5xl font-bold text-green-600 mb-2">
              <StatCounter value={10} suffix="+" />
            </p>
            <p className="text-muted-foreground font-semibold text-sm md:text-base uppercase tracking-wide">Years Experience</p>
          </div>
          <div className="bg-orange-50/50 rounded-2xl p-6 md:p-8 text-left border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <p className="font-heading text-4xl md:text-5xl font-bold text-orange-500 mb-2">
              <StatCounter value={1000} suffix="+" />
            </p>
            <p className="text-muted-foreground font-semibold text-sm md:text-base uppercase tracking-wide">Happy Customers</p>
          </div>
          <div className="bg-orange-50/50 rounded-2xl p-6 md:p-8 text-left border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <p className="font-heading text-4xl md:text-5xl font-bold text-orange-500 mb-2">
              <StatCounter value={100} suffix="%" />
            </p>
            <p className="text-muted-foreground font-semibold text-sm md:text-base uppercase tracking-wide">Satisfaction Rate</p>
          </div>
          <div className="bg-green-50/50 rounded-2xl p-6 md:p-8 text-left border border-green-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all">
            <p className="font-heading text-4xl md:text-5xl font-bold text-green-600 mb-2">
              24/7
            </p>
            <p className="text-muted-foreground font-semibold text-sm md:text-base uppercase tracking-wide">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
