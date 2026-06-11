"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";

const GOALS = [
  "CrossFit Group Classes",
  "HYROX Training",
  "Personal Coaching",
  "Nutrition Coaching",
  "Youth (Stronger with Sam)",
  "Lose Weight / Get Fit",
];

export function LeadForm() {
  const [goals, setGoals] = useState<string[]>([]);

  const toggleGoal = (g: string) =>
    setGoals((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g],
    );

  // The live site posts leads into GoHighLevel. Until that endpoint is wired,
  // submitting routes the visitor to the booking flow with their info.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = SITE.getStartedUrl;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card rounded-3xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold">Book your free No-Sweat Intro</h3>
      <p className="mt-1 text-sm text-muted">
        Tell us your goals and a coach will reach out to map your first 90 days.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="First Name" name="firstName" />
        <Field label="Last Name" name="lastName" />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Email" name="email" type="email" />
      </div>

      <div className="mt-5">
        <span className="mb-2 block text-sm font-medium">
          Interests &amp; Goals
        </span>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((g) => {
            const active = goals.includes(g);
            return (
              <button
                type="button"
                key={g}
                onClick={() => toggleGoal(g)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  active
                    ? "border-blue bg-blue/15 text-ink"
                    : "border-line text-muted hover:border-blue/60"
                }`}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary mt-7 w-full rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
      >
        Get Started
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Or call us at{" "}
        <a href={SITE.phoneHref} className="text-blue hover:underline">
          {SITE.phone}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-lg border border-line bg-white/5 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-blue"
        placeholder={label}
      />
    </label>
  );
}
