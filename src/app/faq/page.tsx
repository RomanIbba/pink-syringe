import { SectionPage } from "@/components/site-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "Service availability in Redlands, Orange County and Palm Desert.",
  },
  {
    question: "Do I need a consultation before booking?",
    answer:
      "A consultation is recommended so each treatment can be tailored to your goals and comfort level before your appointment is confirmed.",
  },
  {
    question: "How do I prepare for my visit?",
    answer:
      "Once your booking is confirmed, you can share any notes or questions and receive a simple preparation guide before your appointment.",
  },
  {
    question: "Is this experience discreet?",
    answer:
      "Yes. The service is designed to feel private, respectful, and calm from the first message to the final follow-up.",
  },
  {
    question: "How do I book?",
    answer:
      "Use the inquiry form on the contact page or connect through your preferred contact method and a booking response can be arranged promptly.",
  },
];

export default function FAQPage() {
  return (
    <SectionPage
      eyebrow="FAQ"
      title="A few quick answers before you book."
      description="Keep these concise, supportive, and easy to scan so clients can move forward with confidence."
    >
      <div className="rounded-[2rem] border border-white/70 bg-white/86 p-2 shadow-[0_16px_50px_rgba(31,23,22,0.06)]">
        <Accordion type="single" collapsible className="px-3 py-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="px-1 py-5 text-left font-medium text-[#221c20] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-1 text-[#6f676b]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionPage>
  );
}
