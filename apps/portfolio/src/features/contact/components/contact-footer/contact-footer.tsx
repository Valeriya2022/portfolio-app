import { useRef } from 'react';

const contactLinks = [
  { href: 'mailto:nikavella2022@gmail.com', label: 'nikavella2022@gmail.com' },
  {
    href: 'https://linkedin.com/in/valeriya-nikiforova',
    label: 'linkedin.com/in/valeriya-nikiforova',
  },
  {
    href: 'https://github.com/Valeriya2022',
    label: 'github.com/Valeriya2022',
  },
] as const;

export function ContactFooter() {
  const contactsRef = useRef<HTMLElement>(null);

  function scrollToContacts() {
    const contacts = contactsRef.current;
    if (!contacts) return;

    contacts.focus({ preventScroll: true });
    contacts.scrollIntoView({
      behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'start',
    });
  }

  return (
    <>
      <footer className="px-room-inline pb-[max(7rem,env(safe-area-inset-bottom))]">
        <section
          aria-labelledby="connect-title"
          className="mx-auto w-full max-w-6xl scroll-mt-24 border-t border-line-subtle pt-12"
          id="contacts"
          ref={contactsRef}
          tabIndex={-1}
        >
          <h2
            className="text-3xl font-semibold tracking-[-0.03em] text-ink-primary sm:text-4xl"
            id="connect-title"
          >
            Let’s connect
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-ink-secondary sm:text-lg sm:leading-8">
            <p>
              <strong className="font-semibold text-ink-primary">
                Occitanie, France | Remote
              </strong>
              .
            </p>
            <p>
              I speak{' '}
              <strong className="font-semibold text-ink-primary">
                English — C1; French — B2 (working toward C1); Kazakh — Native;
                Russian — Native/Fluent
              </strong>
              .
            </p>
          </div>
          <nav aria-label="Contact links" className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a
                className="glass-control inline-flex min-h-11 max-w-full items-center break-all px-4 text-sm font-medium"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </section>
      </footer>
      <button
        aria-label="Jump to contacts"
        className="glass-control fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 inline-flex min-h-12 items-center gap-2 px-5 text-sm font-semibold sm:right-6"
        type="button"
        aria-controls="contacts"
        onClick={scrollToContacts}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        Let’s connect
      </button>
    </>
  );
}
