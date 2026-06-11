import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  SITE,
  PROBLEMS,
  TRUST,
  PROGRAMS,
  COACHES,
  GALLERY,
  FAQS,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problems />
      <Programs />
      <ClassExperience />
      <Coaches />
      <Memberships />
      <Gallery />
      <FaqPreview />
      <ContactCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {SITE.heroVideoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.png"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src={SITE.heroVideoUrl} type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
        <Reveal>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
            Strength • Community • Grit
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.05] sm:text-6xl">
            Get in the Best Shape of Your Life
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Backed by expert coaching, proven training, and a community that
            pushes you to keep going.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.getStartedUrl}
              className="btn-primary w-full rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide sm:w-auto"
            >
              Get Started
            </a>
            <Link
              href="/programs"
              className="btn-ghost w-full rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide sm:w-auto"
            >
              View Programs
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-line bg-navy-soft">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 lg:grid-cols-6">
        {TRUST.map((t, i) => (
          <Reveal key={t.label} delay={i * 60} className="text-center">
            <div className="text-2xl font-black text-blue">{t.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-muted">
              {t.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-black sm:text-4xl">
          Sound <span className="text-blue">familiar?</span>
        </h2>
        <p className="mt-4 text-muted">
          Most people quit the gym for the same few reasons. Here&apos;s how
          training at CrossFit 103 is different.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="card h-full p-7 text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center">
                <Image
                  src={p.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="border-y border-line bg-navy-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
            Programs
          </p>
          <h2 className="text-3xl font-black sm:text-4xl">
            Find the training that fits your goals
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <div className="card group h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-card to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted line-clamp-4">
                    {p.short}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            href="/programs"
            className="btn-ghost inline-block rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide"
          >
            Explore all programs
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ClassExperience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/gym-3.jpeg"
              alt="CrossFit 103 class in session"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
            The Experience
          </p>
          <h2 className="text-3xl font-black sm:text-4xl">
            60 minutes. Expert coaching. Zero guesswork.
          </h2>
          <p className="mt-5 text-muted">
            Every class is led by a certified coach who scales the workout to
            you—whether it&apos;s your first day or your thousandth. You&apos;ll
            warm up, build strength, get after the conditioning, and leave
            stronger than you walked in.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Coach-led, community-driven group classes",
              "LaunchPad on-ramp for total beginners",
              "Progress tracked in the Wodify app",
              "Scaled options for every fitness level",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue">
                  <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Coaches() {
  return (
    <section className="border-y border-line bg-navy-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
            Meet the Coaches
          </p>
          <h2 className="text-3xl font-black sm:text-4xl">
            Certified, experienced, and in your corner
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="card group h-full overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-card via-navy-card/40 to-transparent p-4">
                    <span className="inline-block rounded-full bg-blue px-3 py-1 text-xs font-semibold">
                      {c.cert}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold">{c.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-blue">
                    {c.role}
                  </p>
                  <p className="mt-3 text-sm text-muted">{c.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            href="/coaches"
            className="btn-ghost inline-block rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide"
          >
            View all coaches
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Memberships() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="card overflow-hidden">
        <div className="grid items-center gap-0 lg:grid-cols-2">
          <div className="p-10 sm:p-14">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
                Memberships
              </p>
              <h2 className="text-3xl font-black sm:text-4xl">
                Fitness should be accessible for everyone
              </h2>
              <p className="mt-5 text-muted">
                That&apos;s why we offer full-access unlimited memberships that
                give you unlimited training and support inside our community.
                Thanks to our partnership with Active &amp; Fit, Staten Island
                residents can take advantage of flexible options that remove
                barriers and make getting started simple.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE.getStartedUrl}
                  className="btn-primary rounded-full px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide"
                >
                  Get Started
                </a>
                <a
                  href={SITE.dropInUrl}
                  className="btn-ghost rounded-full px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide"
                >
                  Drop In
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <Image
              src="/images/gym-8.jpeg"
              alt="Training at CrossFit 103"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="border-y border-line bg-navy-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
            Inside the Box
          </p>
          <h2 className="text-3xl font-black sm:text-4xl">
            Where the work gets done
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((src, i) => (
            <Reveal key={src} delay={i * 60}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt="CrossFit 103 facility"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
          FAQ
        </p>
        <h2 className="text-3xl font-black sm:text-4xl">Questions, answered</h2>
      </Reveal>
      <div className="mt-12">
        <FaqAccordion items={FAQS.slice(0, 6)} />
      </div>
      <Reveal className="mt-10 text-center">
        <Link
          href="/faq"
          className="btn-ghost inline-block rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wide"
        >
          See all FAQs
        </Link>
      </Reveal>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="border-t border-line bg-navy-soft py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue">
            Get Started
          </p>
          <h2 className="text-3xl font-black sm:text-4xl">
            Your first session is on us
          </h2>
          <p className="mt-5 text-muted">
            Book a free No-Sweat Intro—20 minutes, one-on-one with a coach, no
            workout required. We&apos;ll map your goals and your first 90 days.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <iframe
              title="CrossFit 103 location"
              src={SITE.mapEmbed}
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            {SITE.address} ·{" "}
            <a href={SITE.phoneHref} className="text-blue hover:underline">
              {SITE.phone}
            </a>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
