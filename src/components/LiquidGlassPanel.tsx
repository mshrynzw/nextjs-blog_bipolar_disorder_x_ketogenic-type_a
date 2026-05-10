import type { ReactNode } from "react";

export type LiquidGlassPanelProps = {
  children: ReactNode;
  className?: string;
  /** 記事カードのようにホバーで pointer にしない（デフォルト false） */
  interactive?: boolean;
};

export function LiquidGlassPanel({
  children,
  className = "",
  interactive = false,
}: LiquidGlassPanelProps) {
  return (
    <div
      className={`liquid-glass-card backdrop-blur-lg rounded-2xl overflow-hidden ${interactive ? "" : "cursor-default"} ${className}`.trim()}
    >
      <div className="relative z-1">{children}</div>
    </div>
  );
}
