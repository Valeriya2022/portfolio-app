import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { cleanup, fireEvent, render, within } from '@testing-library/react';

import { createPortfolioRouter } from '../../app/router';
import { detectLanguage } from './index';

function renderPage(path = '/') {
  return render(
    <RouterProvider
      router={createPortfolioRouter(
        createMemoryHistory({ initialEntries: [path] }),
      )}
    />,
  );
}

describe('website language', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US');
  });
  afterEach(() => {
    cleanup();
    localStorage.clear();
    vi.restoreAllMocks();
    document.documentElement.lang = 'en';
  });

  it.each(['fr', 'fr-FR', 'fr-BE', 'fr-CA'])(
    'defaults to French for %s',
    (locale) => {
      vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale);
      expect(detectLanguage()).toBe('fr');
    },
  );

  it.each(['en-US', 'de-DE', 'nl-BE', ''])(
    'defaults to English for %s',
    (locale) => {
      vi.spyOn(navigator, 'language', 'get').mockReturnValue(locale);
      expect(detectLanguage()).toBe('en');
    },
  );

  it('ignores invalid saved values and handles unavailable storage', () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('fr-FR');
    localStorage.setItem('portfolio-language', 'de');
    expect(detectLanguage()).toBe('fr');
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(detectLanguage()).toBe('fr');
  });

  it('translates both pages, navigation, contacts, and media; persists an override', async () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('fr-BE');
    const page = renderPage();
    expect(
      await page.findByRole('heading', { name: 'Bonjour, je suis Valeriya.' }),
    ).toBeTruthy();
    expect(document.documentElement.lang).toBe('fr');
    expect(
      page.getAllByRole('button', { name: 'jour' }).length,
    ).toBeGreaterThan(0);
    expect(page.getByRole('heading', { name: 'Formation' })).toBeTruthy();
    expect(
      page.getByRole('button', { name: 'Accéder aux coordonnées' }),
    ).toBeTruthy();
    fireEvent.click(page.getByRole('link', { name: 'Portfolio' }));
    expect(
      await page.findByRole('heading', { name: 'Expérience professionnelle' }),
    ).toBeTruthy();
    expect(
      page.getByRole('heading', { name: 'Sélection de projets' }),
    ).toBeTruthy();
    expect(
      page.getByAltText('Écrans de l’application de fidélité NXT LVL PZA'),
    ).toBeTruthy();
    fireEvent.click(page.getByRole('button', { name: 'English' }));
    expect(
      page.getByRole('heading', { name: 'Professional Experience' }),
    ).toBeTruthy();
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem('portfolio-language')).toBe('en');
    page.unmount();
    const reloaded = renderPage();
    expect(
      await reloaded.findByRole('heading', { name: 'Hi, I’m Valeriya.' }),
    ).toBeTruthy();
  });

  it('allows switching from the mobile menu even if saving is blocked', async () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const page = renderPage();
    fireEvent.click(await page.findByRole('button', { name: 'Menu' }));
    const sidebar = page.getByRole('complementary', {
      name: 'Portfolio sidebar',
    });
    fireEvent.click(within(sidebar).getByRole('button', { name: 'Français' }));
    expect(
      page.getByRole('heading', { name: 'Bonjour, je suis Valeriya.' }),
    ).toBeTruthy();
    expect(
      within(sidebar).getByRole('link', { name: 'À propos' }),
    ).toBeTruthy();
    expect(document.documentElement.lang).toBe('fr');
    expect(
      page.getAllByRole('button', { name: 'jour' }).length,
    ).toBeGreaterThan(0);
  });
});
