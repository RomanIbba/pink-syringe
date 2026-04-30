import { Sparkles } from "lucide-react";

import { SectionPage } from "@/components/site-shell";

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

export default function ResultsPage() {
  return (
    <SectionPage
      eyebrow="Results"
      title="Fresh, refined, and editorially beautiful."
      description="If you use before-and-after content, keep it tasteful and compliant. The overall mood should be soft, elevated, and believable."
    >
      <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#e6dfdb] bg-[#201715] p-6 text-white shadow-[0_24px_70px_rgba(31,23,22,0.22)]">
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
    </SectionPage>
  );
}
