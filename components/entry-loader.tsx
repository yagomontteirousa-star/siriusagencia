"use client";

import { useEffect, useState } from "react";

const MINIMUM_TIME = 780;
const MAXIMUM_TIME = 5000;

export function EntryLoader() {
  const [state, setState] = useState<"visible" | "leaving">("visible");

  useEffect(() => {
    const startedAt = performance.now();
    let hideTimer: number | undefined;
    const maxTimer = window.setTimeout(() => setState("leaving"), MAXIMUM_TIME);

    const closeWhenReady = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(MINIMUM_TIME - elapsed, 0);
      hideTimer = window.setTimeout(() => setState("leaving"), remaining);
    };

    if (document.readyState === "complete") {
      closeWhenReady();
    } else {
      window.addEventListener("load", closeWhenReady, { once: true });
    }

    return () => {
      window.clearTimeout(maxTimer);
      if (hideTimer !== undefined) window.clearTimeout(hideTimer);
      window.removeEventListener("load", closeWhenReady);
    };
  }, []);

  return (
    <div
      className="entry-loader"
      data-state={state}
      aria-hidden={state === "leaving"}
    >
      <div className="entry-loader__inner">
        <span className="entry-loader__star" aria-hidden="true">
          <span />
        </span>
        <p className="entry-loader__brand">SIRIUS</p>
        <p className="entry-loader__label">Agência Digital</p>
        <span className="entry-loader__line" aria-hidden="true" />
      </div>
    </div>
  );
}
