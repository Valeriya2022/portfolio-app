import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { fireEvent, render } from '@testing-library/react';

import { rooms } from '../features/navigation';
import { createPortfolioRouter } from './router';

describe('App', () => {
  it('renders the About room and navigation', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findAllByRole, findByRole } = render(
      <RouterProvider router={router} />,
    );

    expect(await findByRole('region', { name: 'Portfolio' })).toBeTruthy();
    expect(await findAllByRole('link')).toHaveLength(rooms.length);
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
});
