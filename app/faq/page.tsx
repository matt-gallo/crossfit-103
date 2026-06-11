import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SITE, FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ | CrossFit 103 — Questions Answered",
  description:
    "Everything you need to know about getting started at CrossFit 103: intros, memberships, HYROX, youth training, Active & Fit, and more.",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line bg-navy-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
              Questions Answered
            </p>
            <h1 className="text-4xl font-black sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
              New here? Start with these. Still have a question? Call or text us
              at{" "}
              <a href={SITE.phoneHref} className="text-blue hover:underline">
                {SITE.phone}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <FaqAccordion items={FAQS} />
      </section>

      <section className="border-t border-line bg-navy-soft py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-black sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-muted">
              Book a free No-Sweat Intro—no workout, just a plan for your first
              90 days.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SITE.getStartedUrl}
                className="btn-primary rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide"
              >
                Get Started
              </a>
              <a
                href={SITE.phoneHref}
                className="btn-ghost rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide"
              >
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
