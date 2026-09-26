import { render } from '@testing-library/react';
import { ProjectsRoom } from './projects-room';

describe('ProjectsRoom', () => {
  it('renders the achievement screenshot section', () => {
    const { getByRole, getByText } = render(<ProjectsRoom />);
    expect(getByRole('heading', { name: 'Portfolio' })).toBeTruthy();
    expect(getByRole('heading', { name: 'Achievements' })).toBeTruthy();
    expect(getByText(/Screenshots and short context/)).toBeTruthy();
  });
});
