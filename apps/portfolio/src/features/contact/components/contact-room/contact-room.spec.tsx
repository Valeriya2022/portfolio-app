import { render } from '@testing-library/react';
import { ContactRoom } from './contact-room';

describe('ContactRoom', () => {
  it('renders the planned contact channels', () => {
    const { getByRole, getAllByRole } = render(<ContactRoom />);
    expect(getByRole('heading', { name: 'Contact' })).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(4);
  });
});
