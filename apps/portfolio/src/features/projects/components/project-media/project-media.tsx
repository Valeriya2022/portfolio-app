import { useState } from 'react';

type ProjectMediaProps = {
  label: string;
  src: string;
} & (
  | {
      height: string;
      type: 'image';
      width: string;
    }
  | {
      type: 'video';
    }
);

export function ProjectMedia(props: ProjectMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const media =
    props.type === 'image' ? (
      <img
        alt={props.label}
        className="h-auto w-full object-contain"
        height={props.height}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        src={props.src}
        width={props.width}
      />
    ) : (
      <video
        aria-label={props.label}
        autoPlay
        className="h-auto w-full"
        loop
        muted
        onCanPlay={() => setIsLoaded(true)}
        playsInline
        preload="metadata"
        src={props.src}
      >
        Your browser does not support embedded videos.
      </video>
    );

  return (
    <figure>
      <div className="relative overflow-hidden rounded-panel bg-house-surface shadow-[var(--shadow-panel)]">
        {media}
        {!isLoaded ? (
          <div
            aria-label={`${props.label} loading`}
            className="absolute inset-0 animate-pulse bg-house-surface"
            role="status"
          />
        ) : null}
      </div>
    </figure>
  );
}
