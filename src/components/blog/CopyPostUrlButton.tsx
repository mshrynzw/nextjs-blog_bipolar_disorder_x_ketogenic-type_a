"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Props = { url: string };

export function CopyPostUrlButton({ url }: Props) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        return;
      }
    }
    setCopied(true);
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      setCopied(false);
      resetTimerRef.current = null;
    }, 2000);
  }, [url]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-xl transition"
      aria-label={copied ? "コピーしました" : "URLをコピー"}
    >
      <svg
        className="w-3.5 h-3.5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      {copied ? "コピーしました" : "URLをコピー"}
    </button>
  );
}
