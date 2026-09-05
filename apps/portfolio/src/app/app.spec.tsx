import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { fireEvent, render, within } from '@testing-library/react';

import { rooms } from '../features/navigation';
import { createPortfolioRouter } from './router';

describe('App', () => {
  it('renders the About room and navigation', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { container, findByRole } = render(
      <RouterProvider router={router} />,
    );

    expect(await findByRole('region', { name: 'Portfolio' })).toBeTruthy();
    expect(container.querySelector('canvas')).toBeNull();
    const overviewControl = await findByRole('button', {
      name: 'Visualize menu',
    });
    fireEvent.click(overviewControl);
    expect(overviewControl.getAttribute('aria-pressed')).toBe('true');
    expect(
      await findByRole('button', { name: 'Rotate to previous room' }),
    ).toBeTruthy();
    expect(
      await findByRole('button', { name: 'Rotate to next room' }),
    ).toBeTruthy();
    const roomNavigation = await findByRole('navigation', {
      name: 'Portfolio rooms',
    });
    expect(within(roomNavigation).getAllByRole('link')).toHaveLength(
      rooms.length,
    );
    expect(
      (await findByRole('link', { name: 'About' })).getAttribute(
        'aria-current',
      ),
    ).toBe('page');
  });

  it('renders a registered room path', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/backend'] }),
    );
    const { findByRole } = render(<RouterProvider router={router} />);

    expect(
      await findByRole('region', { name: 'C# / .NET Engineering' }),
    ).toBeTruthy();
  });

  it('navigates between rooms', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole } = render(<RouterProvider router={router} />);

    fireEvent.click(await findByRole('link', { name: 'Projects' }));

    expect(
      await findByRole('region', { name: 'Selected Projects' }),
    ).toBeTruthy();
  });

  it('closes the mobile navigation when clicking outside the header', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole, queryByRole } = render(
      <RouterProvider router={router} />,
    );

    fireEvent.click(await findByRole('button', { name: 'Menu' }));
    expect(
      await findByRole('navigation', { name: 'Mobile portfolio rooms' }),
    ).toBeTruthy();

    fireEvent.pointerDown(await findByRole('region', { name: 'Portfolio' }));

    expect(
      queryByRole('navigation', { name: 'Mobile portfolio rooms' }),
    ).toBeNull();
  });
});
