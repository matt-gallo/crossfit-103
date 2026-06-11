import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SITE, PROGRAMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs | CrossFit 103 — Staten Island's Best Workout Programs",
  description:
    "CrossFit group training, HYROX prep, personal coaching, youth, and nutrition. Built for busy Staten Islanders who want results that stick.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-line bg-navy-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
              Programs
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-black sm:text-5xl">
              Staten Island&apos;s Best Workout Programs
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              Built for busy Staten Islanders who want results that stick. We
              combine proven programming with coaching that keeps you
              accountable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-20 px-6 py-24">
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.slug}>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black">{p.name}</h2>
                <p className="mt-4 text-muted">{p.short}</p>
                <div className="mt-6 space-y-2">
                  {p.pricing.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl border border-line bg-white/[0.02] px-5 py-3"
                    >
                      <span className="text-sm text-muted">{row.label}</span>
                      <span className="text-sm font-bold text-blue">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={SITE.getStartedUrl}
                  className="btn-primary mt-7 inline-block rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide"
                >
                  Get Started
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-line bg-navy-soft py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-black sm:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-muted">
              Book a free No-Sweat Intro and we&apos;ll match you to the right
              program in 20 minutes.
            </p>
            <a
              href={SITE.getStartedUrl}
              className="btn-primary mt-8 inline-block rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide"
            >
              Book Your Free Intro
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
