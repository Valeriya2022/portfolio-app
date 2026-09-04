import { render } from '@testing-library/react';
import { EngineeringRoom } from './engineering-room';

describe('EngineeringRoom', () => {
  it('renders repository engineering practices', () => {
    const { getAllByRole, getByRole } = render(<EngineeringRoom />);
    expect(getByRole('heading', { name: 'Engineering Practice' })).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(6);
  });
});
