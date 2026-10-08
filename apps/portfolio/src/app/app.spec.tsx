import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { fireEvent, render, within } from '@testing-library/react';

import { publishedRooms } from '../features/navigation';
import { createPortfolioRouter } from './router';

describe('App', () => {
  it.each(['/', '/portfolio'])(
    'scrolls to shared contacts on every button click on %s',
    async (path) => {
      const router = createPortfolioRouter(
        createMemoryHistory({ initialEntries: [path] }),
      );
      const { findByRole, getAllByRole } = render(
        <RouterProvider router={router} />,
      );
      const contacts = await findByRole('region', { name: 'Let’s connect' });
      expect(contacts.id).toBe('contacts');
      expect(getAllByRole('heading', { name: 'Let’s connect' })).toHaveLength(
        1,
      );
      expect(
        within(contacts).getByRole('navigation', { name: 'Contact links' }),
      ).toBeTruthy();
      const scrollIntoView = vi.fn();
      contacts.scrollIntoView = scrollIntoView;
      const shortcut = await findByRole('button', { name: 'Jump to contacts' });
      expect(shortcut.getAttribute('aria-controls')).toBe(contacts.id);
      fireEvent.click(shortcut);
      expect(document.activeElement).toBe(contacts);
      expect(scrollIntoView).toHaveBeenLastCalledWith({
        behavior: 'smooth',
        block: 'start',
      });
      fireEvent.click(shortcut);
      expect(scrollIntoView).toHaveBeenCalledTimes(2);
    },
  );

  it('scrolls without animation when reduced motion is requested', async () => {
    vi.stubGlobal('matchMedia', () => ({ matches: true }));
    try {
      const router = createPortfolioRouter(
        createMemoryHistory({ initialEntries: ['/portfolio'] }),
      );
      const { findByRole } = render(<RouterProvider router={router} />);
      const contacts = await findByRole('region', { name: 'Let’s connect' });
      const scrollIntoView = vi.fn();
      contacts.scrollIntoView = scrollIntoView;
      fireEvent.click(await findByRole('button', { name: 'Jump to contacts' }));
      expect(scrollIntoView).toHaveBeenCalledWith({
        behavior: 'instant',
        block: 'start',
      });
    } finally {
      vi.unstubAllGlobals();
    }
  });

  it('renders the About room and navigation', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole, queryByRole } = render(
      <RouterProvider router={router} />,
    );

    expect(await findByRole('region', { name: 'About Me' })).toBeTruthy();
    expect(queryByRole('button', { name: 'Visualize menu' })).toBeNull();
    const roomNavigation = await findByRole('navigation', {
      name: 'Portfolio sections',
    });
    expect(within(roomNavigation).getAllByRole('link')).toHaveLength(
      publishedRooms.length,
    );
    expect(
      (await findByRole('link', { name: 'About Me' })).getAttribute(
        'aria-current',
      ),
    ).toBe('page');
  });

  it('renders a registered room path', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/portfolio'] }),
    );
    const { findByRole } = render(<RouterProvider router={router} />);

    expect(await findByRole('region', { name: 'Portfolio' })).toBeTruthy();
  });

  it('navigates between rooms', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole } = render(<RouterProvider router={router} />);

    fireEvent.click(await findByRole('link', { name: 'Portfolio' }));

    expect(await findByRole('region', { name: 'Portfolio' })).toBeTruthy();
  });

  it('navigates from the mobile sidebar and closes it', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole, queryByRole } = render(
      <RouterProvider router={router} />,
    );

    fireEvent.click(await findByRole('button', { name: 'Menu' }));
    const sidebar = await findByRole('complementary', {
      name: 'Portfolio sidebar',
    });
    fireEvent.click(within(sidebar).getByRole('link', { name: 'Portfolio' }));

    expect(await findByRole('region', { name: 'Portfolio' })).toBeTruthy();
    expect(
      queryByRole('complementary', { name: 'Portfolio sidebar' }),
    ).toBeNull();
  });

  it('opens and closes the mobile sidebar', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole, queryByRole } = render(
      <RouterProvider router={router} />,
    );

    fireEvent.click(await findByRole('button', { name: 'Menu' }));
    expect(
      await findByRole('navigation', { name: 'Mobile portfolio sections' }),
    ).toBeTruthy();

    fireEvent.click(await findByRole('button', { name: 'Close' }));
    expect(
      queryByRole('navigation', { name: 'Mobile portfolio sections' }),
    ).toBeNull();
  });
});
