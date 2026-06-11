"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(4,16,32,0.92)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="CrossFit 103 home">
          <Image
            src="/images/logo.svg"
            alt="CrossFit 103"
            width={160}
            height={48}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-ink/90 transition-colors hover:text-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.dropInUrl}
            className="btn-ghost rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide"
          >
            Drop In
          </a>
          <a
            href={SITE.getStartedUrl}
            className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide"
          >
            Get Started
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-navy px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium uppercase tracking-wide text-ink/90 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3">
              <a
                href={SITE.dropInUrl}
                className="btn-ghost flex-1 rounded-full px-5 py-2.5 text-center text-sm font-semibold uppercase"
              >
                Drop In
              </a>
              <a
                href={SITE.getStartedUrl}
                className="btn-primary flex-1 rounded-full px-5 py-2.5 text-center text-sm font-semibold uppercase"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
