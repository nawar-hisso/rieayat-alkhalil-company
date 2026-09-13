export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "start",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-champagne-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-charcoal sm:text-4xl">
        {heading}
      </h2>
      {body && <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>}
    </div>
  );
}
