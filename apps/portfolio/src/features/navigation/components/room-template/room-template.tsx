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
      className="relative isolate grid min-h-svh overflow-hidden bg-transparent px-room-inline pt-48 pb-room-block md:pt-[clamp(8rem,16vh,10rem)]"
      data-room={name}
      data-room-number={formattedNumber}
      id="room-entrance"
    >
      <div className="relative mx-auto grid w-full max-w-[90rem] content-between gap-16">
        <header className="max-w-5xl">
          <div className="mb-7 flex items-center gap-4 font-mono text-[0.6875rem] tracking-[0.16em] text-ink-muted uppercase">
            <p>
              Room {formattedNumber} / {name}
            </p>
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-[var(--room-accent)]"
            />
          </div>

          <h1
            className="max-w-4xl text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.96] font-semibold tracking-[-0.04em] text-balance text-ink-primary"
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

        <div
          className="relative max-w-3xl scroll-mt-32 text-ink-secondary"
          id="room-detail"
        >
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
    </section>
  );
}
