import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { fireEvent, render, within } from '@testing-library/react';

import { publishedRooms } from '../features/navigation';
import { createPortfolioRouter } from './router';

describe('App', () => {
  it('renders the About room and navigation', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { container, findByRole } = render(
      <RouterProvider router={router} />,
    );

    expect(await findByRole('region', { name: 'About Me' })).toBeTruthy();
    expect(container.querySelector('canvas')).toBeNull();
    const overviewControl = await findByRole('button', {
      name: 'Visualize menu',
    });
    fireEvent.click(overviewControl);
    expect(overviewControl.getAttribute('aria-pressed')).toBe('true');
    expect(
      await findByRole('button', { name: 'Rotate to previous section' }),
    ).toBeTruthy();
    expect(
      await findByRole('button', { name: 'Rotate to next section' }),
    ).toBeTruthy();
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

  it('allows consecutive room rotations without a cooldown', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole } = render(<RouterProvider router={router} />);

    fireEvent.click(await findByRole('button', { name: 'Visualize menu' }));
    const nextRoom = await findByRole('button', {
      name: 'Rotate to next section',
    });

    fireEvent.click(nextRoom);
    expect(await findByRole('region', { name: 'Portfolio' })).toBeTruthy();
    fireEvent.click(nextRoom);
    expect(await findByRole('region', { name: 'About Me' })).toBeTruthy();
  });

  it('uses the visualization as the only mobile room menu', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole, queryByRole } = render(
      <RouterProvider router={router} />,
    );

    expect(await findByRole('button', { name: 'Visualize menu' })).toBeTruthy();
    expect(queryByRole('button', { name: 'Menu' })).toBeNull();
    expect(
      queryByRole('navigation', { name: 'Mobile portfolio sections' }),
    ).toBeNull();
  });
});
