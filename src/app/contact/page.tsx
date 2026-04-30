import { AtSign, Mail, MapPin, Phone } from "lucide-react";

import { SectionPage } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactItems = [
  {
    icon: MapPin,
    label: "Service area",
    value: "Redlands, Orange County, Palm Desert",
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
];

export default function ContactPage() {
  return (
    <SectionPage
      eyebrow="Booking"
      title="Ready for your elevated beauty experience?"
      description="Book a consultation or send an inquiry to begin a private, polished experience designed around comfort, results, and ease."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="space-y-4">
            {contactItems.map((item) => {
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
                <Input placeholder="Your name" className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90" />
                <Input placeholder="Your email" type="email" className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Phone number" className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90" />
                <Input placeholder="Service of interest" className="h-12 rounded-2xl border-[#e6dfdb] bg-white/90" />
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
    </SectionPage>
  );
}
