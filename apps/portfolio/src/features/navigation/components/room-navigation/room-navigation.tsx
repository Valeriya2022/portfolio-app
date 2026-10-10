import { useLanguage, LanguageControl } from '../../../language';
import { Link } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

import { ThemeControl } from '../../../theme';
import { publishedRooms } from '../../model/rooms';

export function RoomNavigation() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        !headerRef.current?.contains(target) &&
        !sidebarRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="glass-surface fixed inset-x-3 top-3 z-50 max-w-[calc(100vw-1.5rem)] rounded-panel lg:inset-x-5 lg:max-w-none"
        ref={headerRef}
      >
        <div className="mx-auto flex h-12 min-w-0 max-w-[90rem] items-center gap-3 px-4 sm:h-14 sm:gap-5 sm:px-room-inline">
          <Link
            aria-label={t('Valeriya Nikiforova — home')}
            className="shrink-0 text-sm font-semibold text-ink-primary"
            to="/"
          >
            Valeriya Nikiforova
          </Link>

          <nav
            aria-label={t('Portfolio sections')}
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex"
          >
            {publishedRooms.map((room) => (
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ 'aria-current': 'page' }}
                className="rounded-control px-2 py-1.5 text-xs text-ink-muted transition-colors duration-[var(--duration-interaction)] hover:text-ink-primary [&[data-status=active]]:text-ink-primary"
                key={room.id}
                to={room.path}
              >
                {t(room.navLabel)}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-3 md:flex">
            <LanguageControl />
            <ThemeControl />
          </div>

          <button
            aria-controls="portfolio-sidebar"
            aria-expanded={isOpen}
            className="glass-control ml-auto shrink-0 px-2.5 py-1.5 text-xs sm:px-3 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? t('Close') : 'Menu'}
          </button>
        </div>
      </header>

      {isOpen && (
        <aside
          aria-label={t('Portfolio sidebar')}
          className="glass-surface fixed bottom-3 right-3 top-[4.5rem] z-50 w-[min(18rem,calc(100vw-1.5rem))] rounded-panel p-4 md:hidden"
          id="portfolio-sidebar"
          ref={sidebarRef}
        >
          <nav
            aria-label={t('Mobile portfolio sections')}
            className="flex flex-col gap-1"
          >
            {publishedRooms.map((room) => (
              <Link
                activeOptions={{ exact: true }}
                activeProps={{ 'aria-current': 'page' }}
                className="rounded-control px-3 py-3 text-sm text-ink-muted transition-colors duration-[var(--duration-interaction)] hover:text-ink-primary [&[data-status=active]]:text-ink-primary"
                key={room.id}
                onClick={() => setIsOpen(false)}
                to={room.path}
              >
                {t(room.navLabel)}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-border-subtle pt-4">
            <LanguageControl />
            <ThemeControl />
          </div>
        </aside>
      )}
    </>
  );
}
