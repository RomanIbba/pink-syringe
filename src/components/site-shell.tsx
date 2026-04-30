import type { ReactNode } from "react";

import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export const siteNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Results", href: "/results" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

type SectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionPage({ eyebrow, title, description, children }: SectionPageProps) {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(248,232,239,0.26),transparent_24%),radial-gradient(circle_at_top_right,rgba(246,226,234,0.16),transparent_22%),linear-gradient(180deg,#ffffff_0%,#fefbfd_38%,#fffcfd_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(255,250,252,0.62),transparent)]" />

      <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(255,248,251,0.68)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#221c20] text-white shadow-[0_12px_30px_rgba(31,23,22,0.18)]">
              <Sparkles className="size-4" />
            </div>
            <div>
              <p className="font-heading text-lg leading-none text-[#221c20]">
                Pink Syringe
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-[#8b7167]">
                At-home beauty concierge
              </p>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#705a68] lg:gap-6">
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#1f1716]">
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="rounded-full bg-[#221c20] px-5 text-white shadow-[0_16px_30px_rgba(31,23,22,0.16)] hover:bg-[#31282d]">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-12 pt-12 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="rounded-[2rem] border border-white/70 bg-white/84 p-8 shadow-[0_20px_60px_rgba(31,23,22,0.06)] backdrop-blur-xl lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8e8688]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-none text-[#221c20] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#655650] sm:text-lg">
            {description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">{children}</div>

      <footer className="border-t border-black/5 bg-white/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-heading text-2xl text-[#221c20]">Pink Syringe</p>
            <p className="mt-2 text-sm text-[#6c5a55]">
              Luxury at-home Botox, microneedling, and eyelash conditioning.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6c5a55]">
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#221c20]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
