import Link from "next/link";
import Image from "next/image";
import { NAV, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-navy-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center" aria-label="CrossFit 103 home">
            <Image
              src="/images/logo.svg"
              alt="CrossFit 103"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Get in the best shape of your life with expert coaching, proven
            training, and a Staten Island community that pushes you to keep
            going.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.instagram}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-blue hover:text-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.3-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z" />
              </svg>
            </a>
            <a
              href={SITE.phoneHref}
              aria-label="Call us"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-blue hover:text-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm text-muted">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
            Visit
          </h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>
              <a
                href={SITE.mapUrl}
                className="transition-colors hover:text-blue"
              >
                {SITE.address}
              </a>
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="transition-colors hover:text-blue"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-blue"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} CrossFit 103. All rights reserved.
          </p>
          <p>CrossFit Affiliate since 2016 · HYROX Official Affiliate Partner</p>
        </div>
      </div>
    </footer>
  );
}
