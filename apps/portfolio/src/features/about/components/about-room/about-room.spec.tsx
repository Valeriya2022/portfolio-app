import { createMemoryHistory, RouterProvider } from '@tanstack/react-router';
import { render, within } from '@testing-library/react';

import { createPortfolioRouter } from '../../../../app/router';

describe('AboutRoom', () => {
  it('renders the supplied profile, education, CV, and contact content', async () => {
    const router = createPortfolioRouter(
      createMemoryHistory({ initialEntries: ['/'] }),
    );
    const { findByRole, getByAltText, getByRole, getByText } = render(
      <RouterProvider router={router} />,
    );

    expect(
      await findByRole('heading', { name: 'Hi, I’m Valeriya.' }),
    ).toBeTruthy();
    expect(getByText('5+ years of experience')).toBeTruthy();
    expect(getByAltText('Valeriya Nikiforova')).toBeTruthy();
    expect(getByAltText('KU Leuven logo')).toBeTruthy();
    expect(getByAltText('IAE Montpellier logo')).toBeTruthy();
    expect(getByAltText('University of Central Asia logo')).toBeTruthy();
    expect(getByText('Ranked 4th out of 41 students.')).toBeTruthy();

    expect(
      getByRole('link', {
        name: 'Explore my experience & projects →',
      }).getAttribute('href'),
    ).toBe('/portfolio');
    expect(
      getByRole('link', { name: 'Download CV' }).getAttribute('download'),
    ).not.toBeNull();

    const contacts = getByRole('navigation', { name: 'Contact links' });
    expect(within(contacts).getAllByRole('link')).toHaveLength(3);
  });
});
