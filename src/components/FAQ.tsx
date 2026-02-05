import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is pest control treatment safe for my family and pets?",
      answer:
        "Yes, absolutely! We use eco-friendly, government-approved products that are safe for humans and pets. Our technicians take extra precautions to ensure the safety of your family. We recommend staying out of treated areas for 2-3 hours after application.",
    },
    {
      question: "How long does a typical pest control treatment take?",
      answer:
        "A standard home treatment usually takes 1-2 hours depending on the size of your property and the severity of the infestation. Commercial properties may take longer. We'll provide an accurate time estimate during our free inspection.",
    },
    {
      question: "Do I need to leave my home during treatment?",
      answer:
        "For most treatments, you can stay home, but we recommend keeping children and pets away from treated areas for 2-3 hours. For fumigation or severe infestations, we may advise temporarily vacating the premises for safety.",
    },
    {
      question: "How often should I get pest control done?",
      answer:
        "For general prevention, we recommend quarterly (every 3 months) treatments. However, if you've had a recent infestation, monthly follow-ups may be necessary initially. We'll create a customized schedule based on your specific needs.",
    },
    {
      question: "What is included in the free inspection?",
      answer:
        "Our free inspection includes a thorough examination of your property for signs of pests, identification of entry points, assessment of infestation severity, and a detailed treatment plan with transparent pricing. There's no obligation to proceed.",
    },
    {
      question: "Do you offer any warranty on your services?",
      answer:
        "Yes! We offer a satisfaction guarantee on all our services. If pests return within the warranty period (varies by treatment type), we'll re-treat your property at no additional cost. Terms and conditions apply.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Varanasi and surrounding areas including Ramnagar, Lanka, and nearby localities. Contact us to confirm if we cover your area – we're continuously expanding our service zones.",
    },
    {
      question: "How do I prepare my home for pest control treatment?",
      answer:
        "Clear areas under sinks and around appliances, store food items in sealed containers, remove pet food bowls, and ensure good access to walls and corners. We'll provide specific preparation instructions based on your treatment type.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
