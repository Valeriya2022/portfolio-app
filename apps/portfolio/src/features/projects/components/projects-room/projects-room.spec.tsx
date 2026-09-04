import { render } from '@testing-library/react';
import { ProjectsRoom } from './projects-room';

describe('ProjectsRoom', () => {
  it('renders the project mission structure', () => {
    const { getByRole, getAllByRole } = render(<ProjectsRoom />);
    expect(getByRole('heading', { name: 'Selected Projects' })).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(7);
  });
});
