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
    const closeAfterLeavingFullscreen = () => {
      if (!document.fullscreenElement) setIsExpanded(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('fullscreenchange', closeAfterLeavingFullscreen);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener(
        'fullscreenchange',
        closeAfterLeavingFullscreen,
      );
    };
  }, [isExpanded]);

  const expandMedia = () => {
    setIsExpanded(true);
    void document.documentElement.requestFullscreen?.().catch(() => undefined);
  };

  const closeExpandedMedia = () => {
    setIsExpanded(false);
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => undefined);
    }
  };

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
        onClick={expandMedia}
        type="button"
      >
        <ExpandIcon />
        Expand
      </button>

      {isExpanded ? (
        <div
          aria-label={`${props.label} expanded view`}
          aria-modal="true"
          className="fixed inset-0 z-[100] flex h-svh w-screen flex-col bg-house-background"
          role="dialog"
        >
          <div className="flex shrink-0 justify-end p-3 sm:p-4">
            <button
              className="rounded-control border border-line-subtle bg-house-surface px-4 py-2 text-sm font-medium text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              onClick={closeExpandedMedia}
              type="button"
            >
              Close
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center p-3 pt-0 sm:p-4 sm:pt-0">
            {props.type === 'image' ? (
              <img
                alt=""
                className="max-h-full max-w-full object-contain"
                src={props.src}
              />
            ) : (
              <video
                aria-label={`${props.label} expanded`}
                autoPlay
                className="max-h-full max-w-full object-contain"
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
