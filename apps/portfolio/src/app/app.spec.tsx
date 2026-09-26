import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { fireEvent, render, within } from '@testing-library/react';

import { publishedRooms } from '../features/navigation';
import { createPortfolioRouter } from './router';

describe('App', () => {
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
