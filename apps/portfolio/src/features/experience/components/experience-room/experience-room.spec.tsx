import { render } from '@testing-library/react';
import { ExperienceRoom } from './experience-room';

describe('ExperienceRoom', () => {
  it('renders career progression', () => {
    const { getByRole, getAllByRole } = render(<ExperienceRoom />);
    expect(getByRole('heading', { name: 'Career Progression' })).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(4);
  });
});
