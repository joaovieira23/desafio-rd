export function Skeleton({ width = "full", height = 40 }) {
  const computedWidth = width === "full" ? "100%" : `${width}px`;
  const computedHeight = height === "full" ? "100%" : `${height}px`;

  return (
    <span
      role="presentation"
      style={{ width: computedWidth, maxWidth: "100%", height: computedHeight }}
      className="block animate-pulse bg-slate-400 rounded-md"
    />
  );
}
