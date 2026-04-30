import Link from "next/link";
import { ArrowRight, Droplets, Eye, Sparkles } from "lucide-react";

import { SectionPage } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Botox",
    description:
      "A refined treatment designed to soften the appearance of fine lines and help you look rested, polished, and naturally refreshed.",
  },
  {
    icon: Droplets,
    title: "Microneedling",
    description:
      "A skin-focused service created to support a smoother, more radiant-looking complexion with a luxurious in-home experience.",
  },
  {
    icon: Eye,
    title: "Eyelash Conditioning",
    description:
      "A graceful lash care treatment intended to condition and support the look of healthier, beautifully defined lashes.",
  },
];

export default function ServicesPage() {
  return (
    <SectionPage
      eyebrow="Signature services"
      title="Choose the treatment that fits your goals."
      description="Each service is presented with a luxury-first approach: polished, elegant, and designed to inspire confidence from the first glance."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className="border-white/80 bg-white/86 shadow-[0_16px_50px_rgba(31,23,22,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,23,22,0.1)]"
            >
              <CardHeader>
                <div className="flex size-14 items-center justify-center rounded-3xl bg-[#f5ebe6] text-[#c97f9b]">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="mt-4 font-heading text-3xl text-[#221c20]">
                  {service.title}
                </CardTitle>
                <CardDescription className="leading-7 text-[#6f676b]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="ghost"
                  className="h-11 justify-start px-0 text-[#1f1716] hover:bg-transparent hover:text-[#7e5f55]"
                >
                  <Link href="/contact">
                    Reserve this treatment
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionPage>
  );
}
