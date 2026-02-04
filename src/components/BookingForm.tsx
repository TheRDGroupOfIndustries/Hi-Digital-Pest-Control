import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid phone number" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[0-9+\-\s]+$/, { message: "Please enter a valid phone number" }),
  address: z
    .string()
    .trim()
    .min(10, { message: "Please provide a complete address" })
    .max(300, { message: "Address must be less than 300 characters" }),
  pestType: z.string().min(1, { message: "Please select a pest type" }),
  message: z
    .string()
    .trim()
    .max(500, { message: "Message must be less than 500 characters" })
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

const pestTypes = [
  { value: "cockroaches", label: "Cockroaches" },
  { value: "termites", label: "Termites" },
  { value: "mosquitoes", label: "Mosquitoes" },
  { value: "rodents", label: "Rodents (Rats/Mice)" },
  { value: "bedbugs", label: "Bed Bugs" },
  { value: "ants", label: "Ants" },
  { value: "general", label: "General Pest Control" },
  { value: "other", label: "Other" },
];

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      pestType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Build WhatsApp message with validated & encoded data
    const whatsappMessage = encodeURIComponent(
      `Hello! I'd like to book a pest control inspection.\n\n` +
        `Name: ${data.name}\n` +
        `Phone: ${data.phone}\n` +
        `Address: ${data.address}\n` +
        `Pest Type: ${pestTypes.find((p) => p.value === data.pestType)?.label}\n` +
        `${data.message ? `Additional Info: ${data.message}` : ""}`
    );

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your inspection.",
    });

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/918707751161?text=${whatsappMessage}`, "_blank");

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  };

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4">
              Book Now
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Schedule Your{" "}
              <span className="gradient-text">Free Inspection</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form and our team will contact you within 24 hours to
              schedule a convenient time for your free inspection.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "Free property inspection",
                "No obligation quote",
                "Same-day response",
                "Expert recommendations",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Request Submitted!
                </h3>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Full Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="h-12 bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+91 XXXXX XXXXX"
                            className="h-12 bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Property Address *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your complete address"
                            className="min-h-[80px] bg-background resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pestType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Pest Type *
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-background">
                              <SelectValue placeholder="Select pest type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {pestTypes.map((pest) => (
                              <SelectItem key={pest.value} value={pest.value}>
                                {pest.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-medium">
                          Additional Details (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your pest problem..."
                            className="min-h-[80px] bg-background resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Book Free Inspection
                      </>
                    )}
                  </button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
