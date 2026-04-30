import { CheckCircle2, Home, ShieldCheck, Clock3 } from "lucide-react";

import { SectionPage } from "@/components/site-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Home,
    title: "Private appointments at home",
    description:
      "Enjoy a calm, discreet experience without the waiting room, traffic, or the rush of a traditional appointment.",
  },
  {
    icon: ShieldCheck,
    title: "Personalized, professional care",
    description:
      "Every visit is tailored to your goals so the experience feels thoughtful, elevated, and reassuring from start to finish.",
  },
  {
    icon: Clock3,
    title: "Beauty that fits your schedule",
    description:
      "Designed for women who want a premium beauty routine that respects both their time and their standards.",
  },
];

export default function ExperiencePage() {
  return (
    <SectionPage
      eyebrow="Experience"
      title="A polished beauty experience designed to feel personal."
      description="From the first inquiry to the final follow-up, each step is tailored to feel premium, discreet, and reassuring."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <Card
              key={benefit.title}
              className="border-white/80 bg-white/86 shadow-[0_16px_50px_rgba(31,23,22,0.06)] transition duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex size-14 items-center justify-center rounded-3xl bg-[#f2efee] text-[#7a7073]">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="mt-4 font-heading text-3xl text-[#221c20]">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-[#6f676b]">{benefit.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {[
          "One-on-one attention in your own space",
          "A refined approach to natural-looking results",
          "Warm communication with a high-touch experience",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-[#e6dfdb] bg-white/70 px-4 py-3 text-[#2f2b2d] shadow-[0_12px_30px_rgba(31,23,22,0.04)]"
          >
            <CheckCircle2 className="size-4 shrink-0 text-[#8e8688]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </SectionPage>
  );
}
