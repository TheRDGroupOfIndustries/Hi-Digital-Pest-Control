import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get Rid of Pests Today
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Don't let pests take over your home or business. Call us now for a
            free consultation and inspection!
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <a
              href="tel:+916393541161"
              className="group relative flex items-center justify-center gap-6 bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-border/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="icon-circle-orange w-16 h-16 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-orange-100 shadow-lg">
                <Phone className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">Direct Line</p>
                <p className="font-heading text-2xl font-bold text-foreground">
                  +91 6393541161
                </p>
              </div>
            </a>

            <a
              href="tel:+916393531161"
              className="group relative flex items-center justify-center gap-6 bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-border/50 hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="icon-circle w-16 h-16 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-emerald-100 shadow-lg">
                <Phone className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">Support Line</p>
                <p className="font-heading text-2xl font-bold text-foreground">
                  +91 6393531161
                </p>
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+918707751161" className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-xl shadow-orange-200/50 hover:shadow-2xl hover:shadow-orange-300/60 transition-all">
              <Phone className="w-6 h-6" />
              Call Us Now
            </a>
            <a
              href="https://wa.me/918707751161"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xl px-12 py-6 rounded-2xl shadow-xl shadow-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-200/60 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
