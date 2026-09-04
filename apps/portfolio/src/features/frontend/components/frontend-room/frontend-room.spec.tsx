import { render } from '@testing-library/react';
import { FrontendRoom } from './frontend-room';

describe('FrontendRoom', () => {
  it('renders frontend capabilities', () => {
    const { getByRole, getAllByRole } = render(<FrontendRoom />);
    expect(getByRole('heading', { name: 'React Engineering' })).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(6);
  });
});
