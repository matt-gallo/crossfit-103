"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SITE } from "@/lib/content";
import { GhlForm } from "@/components/GhlForm";

type ModalKind = "dropIn" | "getStarted" | null;

const ModalContext = createContext<{
  openDropIn: () => void;
  openGetStarted: () => void;
}>({ openDropIn: () => {}, openGetStarted: () => {} });

export function useModals() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<ModalKind>(null);

  const openDropIn = useCallback(() => {
    // Phones: the Wodify page misrenders inside an iframe at narrow widths
    // (iOS Safari), so send small screens straight to the sales page.
    if (window.matchMedia("(max-width: 767px)").matches) {
      window.open(SITE.wodifyDropInUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setActive("dropIn");
  }, []);
  const openGetStarted = useCallback(() => setActive("getStarted"), []);
  const close = useCallback(() => setActive(null), []);

  // Close on Escape and lock body scroll while a modal is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close]);

  return (
    <ModalContext.Provider value={{ openDropIn, openGetStarted }}>
      {children}

      {/* Drop In — Wodify Online Sales Page embedded in a popup */}
      {active === "dropIn" && (
        <ModalShell label="Drop-In — Book a Class" onClose={close} size="wide">
          <iframe
            src={SITE.wodifyDropInUrl}
            title="CrossFit 103 Drop-In (Wodify)"
            className="h-full w-full flex-1 border-0 bg-white"
          />
        </ModalShell>
      )}

      {/* Get Started — real GoHighLevel lead form embedded in a modal */}
      {active === "getStarted" && (
        <ModalShell onClose={close} size="form" bare>
          <div className="flex flex-col overflow-hidden">
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-navy/80 text-ink/80 backdrop-blur transition-colors hover:text-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z" />
              </svg>
            </button>
            <GhlForm className="h-[70vh] max-h-[640px] bg-white" />
          </div>
        </ModalShell>
      )}
    </ModalContext.Provider>
  );
}

function ModalShell({
  children,
  label,
  onClose,
  size,
  bare = false,
}: {
  children: React.ReactNode;
  label?: string;
  onClose: () => void;
  size: "wide" | "form";
  bare?: boolean;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={label ?? "Dialog"}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div
        className={`relative z-10 flex max-h-[88vh] w-full flex-col overflow-hidden rounded-2xl border border-line bg-navy shadow-2xl ${
          size === "wide" ? "h-[85vh] max-w-4xl" : "max-w-md"
        }`}
      >
        {!bare && (
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <span className="text-sm font-bold uppercase tracking-wide">
              {label}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/80 transition-colors hover:border-blue hover:text-blue"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z" />
              </svg>
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

/** Button that opens the Wodify drop-in modal. */
export function DropInButton({ className }: { className?: string }) {
  const { openDropIn } = useModals();
  return (
    <button type="button" onClick={openDropIn} className={className}>
      Drop In
    </button>
  );
}

/** Button that opens the Get Started lead-form modal. */
export function GetStartedButton({
  className,
  label = "Get Started",
}: {
  className?: string;
  label?: string;
}) {
  const { openGetStarted } = useModals();
  return (
    <button type="button" onClick={openGetStarted} className={className}>
      {label}
    </button>
  );
}
