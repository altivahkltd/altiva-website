type MarkProps = {
  variant?: "black" | "bone";
  className?: string;
  alt?: string;
};

/**
 * Altiva logo — renders the official chevrons + wordmark PNG.
 * Use `variant="black"` for bone backgrounds, `variant="bone"` for ink.
 * Size is controlled via `className` (default keeps the 705:612 ratio).
 */
export default function Mark({
  variant = "black",
  className = "h-[52px] w-auto block",
  alt = "Altiva",
}: MarkProps) {
  const src =
    variant === "bone" ? "/altiva-logo-bone.png" : "/altiva-logo-black.png";
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}
