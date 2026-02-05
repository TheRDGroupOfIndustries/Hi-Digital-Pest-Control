import { Phone } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="sticky-cta">
      <a
        href="tel:+916393541161"
        className="btn-primary w-full text-base py-4 justify-center"
      >
        <Phone className="w-5 h-5" />
        Call for Free Inspection
      </a>
    </div>
  );
};

export default StickyCTA;
