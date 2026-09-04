import type { ReactNode } from 'react';

export type RoomTemplateProps = {
  children: ReactNode;
  controls?: ReactNode;
  description?: string;
  name: string;
  number: number;
  title: string;
};

export function RoomTemplate({
  children,
  controls,
  description,
  name,
  number,
  title,
}: RoomTemplateProps) {
  const headingId = `room-${number}-title`;
  const formattedNumber = String(number).padStart(2, '0');

  return (
    <section
      aria-labelledby={headingId}
      className="relative isolate grid min-h-svh overflow-hidden border-y border-line-subtle bg-house-canvas px-room-inline py-room-block"
      data-room={name}
      data-room-number={formattedNumber}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(var(--color-line-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--color-line-subtle)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[38rem] w-[70rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--room-light)] blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-[90rem] content-between gap-16">
        <header className="max-w-5xl">
          <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-[0.2em] text-ink-muted uppercase">
            <p>
              Room {formattedNumber} / {name}
            </p>
            <span aria-hidden="true" className="h-px w-10 bg-line-luminous" />
            <p className="flex items-center gap-2 text-status-success">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-current shadow-glow"
              />
              System online
            </p>
          </div>

          <h1
            className="max-w-5xl text-[clamp(3rem,9vw,8rem)] leading-[0.88] font-semibold tracking-[-0.055em] text-balance text-ink-primary"
            id={headingId}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-secondary md:text-xl">
              {description}
            </p>
          ) : null}
        </header>

        <div className="relative max-w-4xl rounded-panel border border-line-default bg-house-overlay p-panel text-ink-secondary shadow-panel backdrop-blur-xl before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[var(--room-accent)] before:to-transparent before:opacity-70">
          <div className="space-y-cluster leading-relaxed">{children}</div>
        </div>

        {controls ? (
          <footer
            aria-label="Room controls"
            className="border-t border-line-subtle pt-cluster font-mono text-xs tracking-widest text-ink-muted uppercase"
          >
            {controls}
          </footer>
        ) : null}
      </div>

      <span
        aria-hidden="true"
        className="absolute right-room-inline bottom-cluster font-mono text-[0.625rem] tracking-[0.2em] text-ink-muted uppercase"
      >
        Position / {formattedNumber}.00
      </span>
    </section>
  );
}
