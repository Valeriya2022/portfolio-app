import { render } from '@testing-library/react';
import { BackendRoom } from './backend-room';

describe('BackendRoom', () => {
  it('renders the backend architecture and capabilities', () => {
    const { getByRole, getByText } = render(<BackendRoom />);
    expect(
      getByRole('heading', { name: 'C# / .NET Engineering' }),
    ).toBeTruthy();
    expect(
      getByText('React Client → REST API → .NET / C# → Database'),
    ).toBeTruthy();
  });
});
