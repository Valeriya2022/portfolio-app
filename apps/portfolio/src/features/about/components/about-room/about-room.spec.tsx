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
    expect(getByText('Senior Software Engineer | Full-Stack')).toBeTruthy();
    expect(getByText('5+ years of experience')).toBeTruthy();
    expect(getByAltText('Valeriya Nikiforova')).toBeTruthy();
    expect(getByAltText('KU Leuven logo')).toBeTruthy();
    expect(getByAltText('IAE Montpellier logo')).toBeTruthy();
    expect(getByAltText('University of Central Asia logo')).toBeTruthy();
    expect(
      getByText(
        'Financial Accounting, International Finance and Exchange Markets,',
      ),
    ).toBeTruthy();
    expect(getByText('Rank 4/41')).toBeTruthy();
    expect(getByText('Magna cum laude')).toBeTruthy();
    expect(getByText('Sep 2025 - Aug 2027')).toBeTruthy();
    expect(getByText('Sep 2018 - Jul 2022')).toBeTruthy();
    expect(
      getByText('ICT Strategy and Architecture, Data Science for Finance'),
    ).toBeTruthy();
    expect(getByText('Best Research Project Award')).toBeTruthy();
    expect(
      getByText(
        'for building a low-cost digital library for remote regions using Raspberry Pi.',
        { exact: false },
      ),
    ).toBeTruthy();
    expect(getByText('Occitanie, France | Remote')).toBeTruthy();
    expect(
      getByText('software engineering opportunities from February 2027'),
    ).toBeTruthy();
    expect(getByText(/CDI · CDD · internship \(stage\)/)).toBeTruthy();

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
    expect(
      within(contacts)
        .getByRole('link', { name: 'nikavella2022@gmail.com' })
        .getAttribute('href'),
    ).toBe('mailto:nikavella2022@gmail.com');
    expect(
      within(contacts)
        .getByRole('link', { name: 'github.com/Valeriya2022' })
        .getAttribute('href'),
    ).toBe('https://github.com/Valeriya2022');
  });
});
