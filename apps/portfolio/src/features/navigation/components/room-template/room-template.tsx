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
      className="min-h-screen"
      data-room={name}
      data-room-number={formattedNumber}
    >
      <header>
        <p>
          Room {formattedNumber} / {name}
        </p>
        <h1 id={headingId}>{title}</h1>
        {description ? <p>{description}</p> : null}
      </header>

      <div>{children}</div>

      {controls ? <footer aria-label="Room controls">{controls}</footer> : null}
    </section>
  );
}
