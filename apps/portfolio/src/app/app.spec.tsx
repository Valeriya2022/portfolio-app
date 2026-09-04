import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { fireEvent, render, within } from '@testing-library/react';

import { rooms } from '../features/navigation';
import { createPortfolioRouter } from './router';

describe('App', () => {
  it('renders the About room and navigation', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole } = render(<RouterProvider router={router} />);

    expect(await findByRole('region', { name: 'Portfolio' })).toBeTruthy();
    const roomNavigation = await findByRole('navigation', {
      name: 'Portfolio rooms',
    });
    expect(within(roomNavigation).getAllByRole('link')).toHaveLength(
      rooms.length + 1,
    );
    expect(
      await findByRole('img', { name: 'Current position: About' }),
    ).toBeTruthy();
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
    expect(
      await findByRole('link', { name: 'Room below: Frontend' }),
    ).toBeTruthy();
    expect(
      await findByRole('link', { name: 'Room to the right: AI' }),
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
});
