import { useEffect, useState } from 'react';

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

function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        d="M6 2H2v4M10 2h4v4M6 14H2v-4m8 4h4v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function ProjectMedia(props: ProjectMediaProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isExpanded]);

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

      <button
        aria-label={`Expand ${props.label}`}
        className="mt-3 ml-auto flex items-center gap-2 rounded-control border border-line-subtle bg-house-surface px-3 py-2 text-xs font-medium text-ink-secondary transition-colors hover:text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        onClick={() => setIsExpanded(true)}
        type="button"
      >
        <ExpandIcon />
        Expand
      </button>

      {isExpanded ? (
        <div
          aria-label={`${props.label} expanded view`}
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-house-background/95 p-4 sm:p-8"
          role="dialog"
        >
          <div className="flex max-h-full max-w-7xl flex-col items-end gap-3">
            <button
              className="rounded-control border border-line-subtle bg-house-surface px-4 py-2 text-sm font-medium text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              onClick={() => setIsExpanded(false)}
              type="button"
            >
              Close
            </button>
            {props.type === 'image' ? (
              <img
                alt=""
                className="max-h-[82svh] max-w-full rounded-panel object-contain"
                src={props.src}
              />
            ) : (
              <video
                aria-label={`${props.label} expanded`}
                autoPlay
                className="max-h-[82svh] max-w-full rounded-panel object-contain"
                loop
                muted
                playsInline
                src={props.src}
              />
            )}
          </div>
        </div>
      ) : null}
    </figure>
  );
}
