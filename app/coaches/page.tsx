import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { GetStartedButton } from "@/components/Modals";
import { COACHES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Coaches | CrossFit 103 — Staten Island",
  description:
    "Meet the certified coaching team at CrossFit 103. Twelve certified coaches, including CrossFit L2s, ready to guide your training.",
};

export default function CoachesPage() {
  return (
    <>
      <section className="border-b border-line bg-navy-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
              Your Coaches
            </p>
            <h1 className="text-4xl font-black sm:text-5xl">
              Certified, experienced, in your corner
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              Our team of 12 certified coaches—including CrossFit L2s—lead every
              session with energy, precision, and a genuine investment in your
              progress.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {COACHES.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="card flex h-full flex-col overflow-hidden sm:flex-row">
                <div className="relative h-72 w-full shrink-0 sm:h-auto sm:w-56">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-7">
                  <span className="inline-block rounded-full bg-blue px-3 py-1 text-xs font-semibold">
                    {c.cert}
                  </span>
                  <h2 className="mt-3 text-xl font-bold">{c.name}</h2>
                  <p className="text-xs uppercase tracking-wide text-blue">
                    {c.role}
                  </p>
                  <p className="mt-3 text-sm text-muted">{c.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-navy-soft py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-black sm:text-4xl">
              Train with a coach who has your back
            </h2>
            <p className="mt-4 text-muted">
              Book a free No-Sweat Intro and meet the team that will guide your
              journey.
            </p>
            <GetStartedButton className="btn-primary mt-8 inline-block rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
