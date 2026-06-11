"use client";

import { useEffect } from "react";
import { SITE } from "@/lib/content";

/**
 * Embeds the CrossFit 103 GoHighLevel lead form so submissions flow straight
 * into the GHL pipeline. Loads GHL's form_embed.js once for resize handling.
 */
export function GhlForm({ className = "" }: { className?: string }) {
  useEffect(() => {
    const SRC = "https://link.msgsndr.com/js/form_embed.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${SITE.ghlFormId}`}
      title={SITE.ghlFormName}
      id={`inline-${SITE.ghlFormId}`}
      data-form-id={SITE.ghlFormId}
      data-form-name={SITE.ghlFormName}
      data-layout="{'id':'INLINE'}"
      className={`w-full border-0 ${className}`}
    />
  );
}
