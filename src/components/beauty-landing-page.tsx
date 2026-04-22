"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Droplets,
  Eye,
  Home,
  AtSign,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import headshot from '../photos/headshot.png'; // Import headshot

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Sparkles,
    title: "Botox",
    description:
      "A refined treatment designed to soften the appearance of fine lines and help you look rested, polished, and naturally refreshed.",
    accent: "from-rose-200/75 to-pink-100/75",
  },
  {
    icon: Droplets,
    title: "Microneedling",
    description:
      "A skin-focused service created to support a smoother, more radiant-looking complexion with a luxurious in-home experience.",
    accent: "from-pink-100/75 to-rose-100/75",
  },
  {
    icon: Eye,
    title: "Eyelash Conditioning",
    description:
      "A graceful lash care treatment intended to condition and support the look of healthier, beautifully defined lashes.",
    accent: "from-rose-100/75 to-pink-100/75",
  },
];

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

const testimonials = [
  {
    quote:
      "The entire experience felt luxurious and calm. I loved being able to receive such attentive care in my own home.",
    name: "Sophia R.",
  },
  {
    quote:
      "She made me feel completely at ease and the results were exactly what I wanted — natural, fresh, and polished.",
    name: "Maya T.",
  },
  {
    quote:
      "Everything felt so intentional and elevated. I would recommend this to anyone who wants convenience without compromising quality.",
    name: "Lauren C.",
  },
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "Service availability in Redlands, Orange County and Palm Desert.",
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
      "Use the inquiry form below or connect through your preferred contact method and a booking response can be arranged promptly.",
  },
];

const results = [
  {
    title: "Freshened features",
    description: "A cleaner, more rested look with a polished finish.",
  },
  {
    title: "Refined skin texture",
    description: "A glow-forward complexion experience with a premium touch.",
  },
  {
    title: "Conditioned lashes",
    description: "A more defined, naturally beautiful lash presentation.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8e8688]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl leading-none text-[#221c20] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#6f676b] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const listStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function BeautyLandingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,214,228,0.42),transparent_24%),radial-gradient(circle_at_top_right,rgba(239,192,214,0.32),transparent_22%),linear-gradient(180deg,#fff9fc_0%,#fbeff4_38%,#fff7fa_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[linear-gradient(180deg,rgba(255,247,250,0.82),transparent)]" />

      <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(255,242,247,0.78)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="#top" className="group flex items-center gap-3">
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

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#705a68] transition hover:text-[#1f1716]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="rounded-full bg-[#221c20] px-5 text-white shadow-[0_16px_30px_rgba(31,23,22,0.16)] hover:bg-[#31282d]">
            <Link href="#contact">Book Now</Link>
          </Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            variants={listStagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#e6dfdb] bg-white/86 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#8e8688] shadow-[0_12px_40px_rgba(31,23,22,0.06)]"
            >
              <Star className="size-3.5" />
              Luxury at-home beauty treatments
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-heading text-5xl leading-[0.95] tracking-tight text-[#221c20] sm:text-6xl lg:text-7xl"
            >
              Luxury beauty, delivered to your door.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-[#6f676b] sm:text-xl"
            >
              Private at-home Botox, microneedling, and eyelash conditioning for
              women who want a refined result, a calmer experience, and a page
              that feels as elevated as the service itself.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-full bg-[#221c20] px-7 text-white shadow-[0_18px_40px_rgba(31,23,22,0.18)] hover:bg-[#31282d]"
              >
                <Link href="#contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-[#e9c4d4] bg-white/84 px-7 text-[#221c20] hover:bg-white"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {[
                {
                  label: "Private",
                  value: "At-home appointments",
                  icon: Home,
                },
                {
                  label: "Tailored",
                  value: "Personalized care",
                  icon: ShieldCheck,
                },
                {
                  label: "Polished",
                  value: "Natural-looking finish",
                  icon: Sparkles,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/70 bg-white/86 p-4 shadow-[0_16px_50px_rgba(31,23,22,0.06)] backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-2xl bg-[#f2efee] text-[#7a7073]">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8e8688]">
                          {item.label}
                        </p>
                        <p className="font-medium text-[#221c20]">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 translate-x-8 translate-y-8 rounded-[2.5rem] bg-[#e7bfd0]/35 blur-3xl" />
            {/* <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/78 p-6 shadow-[0_30px_90px_rgba(31,23,22,0.1)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8e8688]">
                    Signature experience
                  </p>
                  <h2 className="mt-2 font-heading text-3xl leading-none text-[#221c20]">
                    Calm, curated, and quietly luxurious.
                  </h2>
                </div>
                <div className="rounded-full border border-[#e6dfdb] bg-[#f6f5f4] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8e8688]">
                  Appointment only
                </div>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-[0.96fr_1.04fr]">
                <div className="rounded-[2rem] bg-[linear-gradient(180deg,rgba(31,23,22,0.98),rgba(71,54,49,0.9))] p-6 text-white shadow-[0_24px_60px_rgba(31,23,22,0.18)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                    Designed around you
                  </p>
                  <p className="mt-3 text-2xl font-medium leading-tight">
                    An in-home beauty ritual made to feel effortless.
                  </p>
                  <ul className="mt-6 space-y-4 text-sm text-white/80">
                    {[
                      "Private scheduling and thoughtful communication",
                      "Natural-looking enhancement with an editorial finish",
                      "A calm, polished experience from consultation to follow-up",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#f2cdbd]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[2rem] border border-[#e6dfdb] bg-white/90 p-5 shadow-[0_16px_40px_rgba(31,23,22,0.05)]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#8e8688]">
                          Today’s focus
                        </p>
                        <p className="mt-2 font-heading text-2xl text-[#221c20]">
                          Elevated care, without the rush.
                        </p>
                      </div>
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f2efee] text-[#7a7073]">
                        <CalendarDays className="size-5" />
                      </div>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        "Botox",
                        "Microneedling",
                        "Lash conditioning",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-[#e6dfdb] bg-[#faf9f8] px-3 py-4 text-center text-sm font-medium text-[#2f2b2d]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-[#e6dfdb] bg-[#faf9f8] p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8e8688]">
                      Experience highlights
                    </p>
                    <div className="mt-4 space-y-4">
                      {[
                        "Private one-on-one attention",
                        "Warm, elegant communication",
                        "A premium atmosphere that feels personal",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-[#6f676b]">
                          <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#9a8b92] shadow-sm">
                            <CheckCircle2 className="size-4" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}
            
          <img 
            src={headshot.src} 
            alt="Provider Headshot" 
            className="rounded-lg w-full h-auto object-cover" 
          />
          </motion.div>
        </div>
      </section> 

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/86 p-4 shadow-[0_20px_60px_rgba(31,23,22,0.06)] backdrop-blur sm:grid-cols-3 sm:p-6">
          {[
            {
              value: "Luxury feel",
              label: "Editorial, feminine, elevated",
            },
            {
              value: "Trust first",
              label: "Clear, calm, and reassuring",
            },
            {
              value: "Conversion ready",
              label: "Built to turn interest into bookings",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl bg-[#faf9f8] p-5 text-center">
              <p className="font-heading text-2xl text-[#221c20]">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-[#775f6f]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8e8688]">
              Meet your beauty specialist
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-none text-[#221c20] sm:text-5xl">
              A polished beauty experience, designed to feel personal.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#655650] sm:text-lg">
              The brand should feel like a private beauty concierge: calm,
              discreet, attentive, and deeply considered. From the first inquiry
              to the final follow-up, each step is tailored to feel premium and
              reassuring.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "One-on-one attention in your own space",
                "A refined approach to natural-looking results",
                "Warm communication with a high-touch experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#e6dfdb] bg-white/70 px-4 py-3 text-[#2f2b2d] shadow-[0_12px_30px_rgba(31,23,22,0.04)]">
                  <CheckCircle2 className="size-4 shrink-0 text-[#8e8688]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-white/70 bg-white/86 shadow-[0_16px_40px_rgba(31,23,22,0.05)]">
              <CardHeader>
                <CardDescription className="uppercase tracking-[0.24em] text-[#8e8688]">
                  Service promise
                </CardDescription>
                <CardTitle className="font-heading text-2xl text-[#221c20]">
                  Private, elegant, and designed around your goals.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-[#6f676b]">
                  A refined experience should feel seamless at every stage — from
                  your inquiry and consultation to the moment you relax into your
                  appointment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e6dfdb] bg-[#fff5f8] shadow-[0_16px_40px_rgba(31,23,22,0.05)] sm:translate-y-6">
              <CardHeader>
                <CardDescription className="uppercase tracking-[0.24em] text-[#8e8688]">
                  Appointment style
                </CardDescription>
                <CardTitle className="font-heading text-2xl text-[#221c20]">
                  Quiet luxury with a modern touch.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-[#6f676b]">
                  Think soft neutrals, clean lines, premium spacing, and a visual
                  experience that feels beautiful before a client even books.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Signature services"
          title="The treatments, elevated."
          description="Every service is presented with the same luxury-first approach: polished, elegant, and designed to inspire confidence from the first glance."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-white/80 bg-white/86 shadow-[0_16px_50px_rgba(31,23,22,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,23,22,0.1)]"
              >
                <CardHeader>
                  <div className={`flex size-14 items-center justify-center rounded-3xl bg-gradient-to-br ${service.accent} text-[#7a7073]`}>
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
                    <Link href="#contact">
                      Reserve this treatment
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Why clients choose it"
          title="A premium service, without the typical medspa feel."
          description="This experience is built around privacy, comfort, and confidence — the details that make a luxury appointment actually feel luxurious."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
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
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Results gallery"
              title="Fresh, refined, and editorially beautiful."
              description="If you use before-and-after content, keep it tasteful and compliant. The overall mood should be soft, elevated, and believable."
            />

            <div className="mt-8 rounded-[2rem] border border-[#e6dfdb] bg-[#201715] p-6 text-white shadow-[0_24px_70px_rgba(31,23,22,0.22)]">
              <p className="text-xs uppercase tracking-[0.24em] text-white/65">
                Signature impression
              </p>
              <p className="mt-4 font-heading text-3xl leading-tight">
                Quiet transformation with a polished finish.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
                The goal is not to look overdone. The goal is to look rested,
                refined, and beautifully put together — like the best version of
                yourself.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {results.map((result, index) => (
              <div
                key={result.title}
                className={`rounded-[2rem] border border-white/80 p-5 shadow-[0_16px_40px_rgba(31,23,22,0.05)] ${
                  index === 1 ? "bg-[#faf9f8] sm:translate-y-6" : "bg-white/86"
                }`}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f5ebe6] text-[#c97f9b]">
                  <Sparkles className="size-5" />
                </div>
                <p className="mt-5 font-heading text-2xl text-[#221c20]">
                  {result.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6f676b]">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Client love"
          title="Testimonials that build trust fast."
          description="Short, polished testimonials work best here — they should sound human, believable, and aligned with the luxury tone of the site."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-white/80 bg-white/86 shadow-[0_16px_50px_rgba(31,23,22,0.06)]"
            >
              <CardHeader>
                <div className="flex items-center gap-1 text-[#9a8b92]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-current" />
                  ))}
                </div>
                <CardDescription className="mt-4 text-base leading-8 text-[#6f676b]">
                  “{testimonial.quote}”
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-[#221c20]">{testimonial.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#8e8688]">
                  Verified client
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="A few quick answers before you book."
          description="Keep these concise, supportive, and easy to scan so clients can move forward with confidence."
        />

        <div className="mt-12 rounded-[2rem] border border-white/70 bg-white/86 p-2 shadow-[0_16px_50px_rgba(31,23,22,0.06)]">
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
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8e8688]">
              Booking
            </p>
            <h2 className="mt-4 font-heading text-4xl leading-none text-[#221c20] sm:text-5xl">
              Ready for your elevated beauty experience?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#655650] sm:text-lg">
              Book a consultation or send an inquiry to begin a private,
              polished experience designed around comfort, results, and ease.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: MapPin,
                  label: "Service area",
                  value: "Redlans, Orange County, Palm Desert",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "760-636-3498",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "natashaputter@gmail.com",
                },
                {
                  icon: AtSign,
                  label: "Instagram",
                  value: "@thepinksyringepa",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-3xl border border-[#e6dfdb] bg-white/86 px-5 py-4 shadow-[0_12px_30px_rgba(31,23,22,0.04)]"
                  >
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f2efee] text-[#7a7073]">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8e8688]">
                        {item.label}
                      </p>
                      <p className="font-medium text-[#221c20]">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="border-white/80 bg-white/86 shadow-[0_20px_70px_rgba(31,23,22,0.08)]">
            <CardHeader>
              <CardDescription className="uppercase tracking-[0.24em] text-[#8e8688]">
                Inquiry form
              </CardDescription>
              <CardTitle className="font-heading text-3xl text-[#221c20]">
                Send a booking request.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Your name"
                    className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90"
                  />
                  <Input
                    placeholder="Your email"
                    type="email"
                    className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Phone number"
                    className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90"
                  />
                  <Input
                    placeholder="Service of interest"
                    className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90"
                  />
                </div>
                <Textarea
                  placeholder="Tell us a little about your goals and preferred timing."
                  className="min-h-40 rounded-[1.4rem] border-[#e6dfdb] bg-white/90"
                />
                <Button
                  type="button"
                  className="h-12 w-full rounded-full bg-[#221c20] text-white shadow-[0_18px_40px_rgba(31,23,22,0.18)] hover:bg-[#31282d]"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white/55">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-heading text-2xl text-[#221c20]">Pink Syringe</p>
            <p className="mt-2 text-sm text-[#6c5a55]">
              Luxury at-home Botox, microneedling, and eyelash conditioning.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6c5a55]">
            {navItems.map((item) => (
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

