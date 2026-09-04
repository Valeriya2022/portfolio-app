import { render } from '@testing-library/react';
import { ArchitectureRoom } from './architecture-room';

describe('ArchitectureRoom', () => {
  it('renders the workspace boundaries', () => {
    const { getByRole, getAllByRole } = render(<ArchitectureRoom />);
    expect(
      getByRole('heading', { name: 'How This Portfolio Is Built' }),
    ).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(2);
  });
});
