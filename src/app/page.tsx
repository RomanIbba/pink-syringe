import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Eye, Mail, Sparkles } from "lucide-react";

import { SectionPage } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pages = [
  {
    title: "Services",
    description: "View the treatments offered and start with the one that best matches your goals.",
    href: "/services",
    icon: Sparkles,
  },
  {
    title: "Experience",
    description: "See how the at-home appointment flow is designed to feel calm and personal.",
    href: "/experience",
    icon: CalendarDays,
  },
  {
    title: "Results",
    description: "Preview the type of fresh, polished outcome the brand is meant to communicate.",
    href: "/results",
    icon: Eye,
  },
  {
    title: "FAQ",
    description: "Get quick answers to the most common booking and service questions.",
    href: "/faq",
    icon: CheckCircle2,
  },
  {
    title: "Contact",
    description: "Reach out directly or send a booking request when you are ready.",
    href: "/contact",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <SectionPage
      eyebrow="Welcome"
      title="Explore the site one section at a time."
      description="Instead of one long page, each part of the brand now lives on its own page so visitors can go straight to the section they care about most."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pages.map((page) => {
          const Icon = page.icon;
          return (
            <Card
              key={page.href}
              className="border-white/80 bg-white/86 shadow-[0_16px_50px_rgba(31,23,22,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,23,22,0.1)]"
            >
              <CardHeader>
                <div className="flex size-14 items-center justify-center rounded-3xl bg-[#f2efee] text-[#7a7073]">
                  <Icon className="size-6" />
                </div>
                <CardTitle className="mt-4 font-heading text-3xl text-[#221c20]">
                  {page.title}
                </CardTitle>
                <CardDescription className="leading-7 text-[#6f676b]">
                  {page.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="h-11 justify-start px-0 text-[#1f1716] hover:bg-transparent hover:text-[#7e5f55]">
                  <Link href={page.href}>
                    Open page
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/86 p-6 shadow-[0_20px_60px_rgba(31,23,22,0.06)]">
        <p className="font-heading text-2xl text-[#221c20]">Quick start</p>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-[#6f676b]">
          Use the navigation at the top of the page or open one of the cards above.
          The home page now acts like a simple menu, so visitors do not have to scroll through everything at once.
        </p>
      </div>
    </SectionPage>
  );
}
