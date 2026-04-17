type MarkProps = {
  className?: string;
  alt?: string;
};

/**
 * Altiva logo — renders the original PNG asset verbatim.
 * Place file at /public/altiva-logo.png.
 * Set height via className (e.g. `h-8 w-auto`); width follows aspect ratio.
 */
export default function Mark({ className = "h-8 w-auto", alt = "Altiva" }: MarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/altiva-logo.png" alt={alt} className={className} />
  );
}
