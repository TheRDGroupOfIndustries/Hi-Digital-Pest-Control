import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Associations from "@/components/Associations";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import LocalTrust from "@/components/LocalTrust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Associations />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <LocalTrust />
        <Contact />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;

