import { render, within } from '@testing-library/react';

import { ProjectsRoom } from './projects-room';

describe('ProjectsRoom', () => {
  it('renders professional experience, supplied media, and technical skills', () => {
    const { getByAltText, getByRole, getByText } = render(<ProjectsRoom />);

    expect(
      getByRole('heading', { name: 'Professional Experience' }),
    ).toBeTruthy();
    expect(getByText('LLP ABR Tech')).toBeTruthy();
    expect(getByText('NXT LVL PZA')).toBeTruthy();
    expect(getByText('LLP Bass Technology')).toBeTruthy();
    expect(getByText('Project photos and video coming soon')).toBeTruthy();
    expect(
      getByAltText('NXT LVL PZA loyalty application screens'),
    ).toBeTruthy();
    expect(
      getByAltText('NXT LVL PZA mobile ordering application screens'),
    ).toBeTruthy();

    const bassAchievements = getByRole('list', {
      name: 'LLP Bass Technology achievements',
    });
    expect(within(bassAchievements).getAllByRole('listitem')).toHaveLength(3);
    expect(getByRole('heading', { name: 'Technical Skills' })).toBeTruthy();
    expect(getByRole('heading', { name: 'Backend & Data' })).toBeTruthy();
  });
});
