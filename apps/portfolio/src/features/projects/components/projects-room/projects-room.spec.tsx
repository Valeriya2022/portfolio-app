import { render, within } from '@testing-library/react';

import { ProjectsRoom } from './projects-room';

describe('ProjectsRoom', () => {
  it('renders professional experience, supplied media, and technical skills', () => {
    const { getByAltText, getByLabelText, getByRole, getByText, getAllByText } =
      render(<ProjectsRoom />);

    expect(
      getByRole('heading', { name: 'Professional Experience' }),
    ).toBeTruthy();
    expect(getAllByText(/LLP ABR Tech/).length).toBeGreaterThan(0);
    expect(getAllByText(/NXT LVL PZA/).length).toBeGreaterThan(0);
    expect(getAllByText(/LLP Bass Technology/).length).toBeGreaterThan(0);
    expect(getByLabelText('LLP ABR Tech project recordings')).toBeTruthy();
    const firstRecording = getByLabelText('LLP ABR Tech project recording 1');
    expect(firstRecording).toBeTruthy();
    expect(firstRecording.hasAttribute('controls')).toBe(false);
    expect(firstRecording.hasAttribute('loop')).toBe(true);
    expect(getByLabelText('LLP ABR Tech project recording 2')).toBeTruthy();
    expect(getByLabelText('LLP ABR Tech project recording 3')).toBeTruthy();
    expect(
      getByAltText('NXT LVL PZA loyalty application screens'),
    ).toBeTruthy();
    expect(
      getByAltText('NXT LVL PZA mobile ordering application screens'),
    ).toBeTruthy();

    expect(getByText('~10')).toBeTruthy();
    expect(getByText('~80%')).toBeTruthy();

    const bassTechnologies = getByRole('list', {
      name: 'LLP Bass Technology technologies',
    });
    expect(within(bassTechnologies).getAllByRole('listitem')).toHaveLength(4);
    expect(getByRole('heading', { name: 'Technical Skills' })).toBeTruthy();
    expect(getByRole('heading', { name: 'Backend & Data' })).toBeTruthy();
    expect(
      within(getByRole('list', { name: 'Backend & Data skills' })).getAllByRole(
        'listitem',
      ),
    ).toHaveLength(5);
  });
});
