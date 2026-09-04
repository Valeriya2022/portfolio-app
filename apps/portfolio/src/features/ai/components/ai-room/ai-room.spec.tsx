import { render } from '@testing-library/react';
import { AiRoom } from './ai-room';

describe('AiRoom', () => {
  it('renders the AI-assisted engineering workflow', () => {
    const { getByRole, getAllByRole } = render(<AiRoom />);
    expect(
      getByRole('heading', { name: 'AI-Assisted Engineering' }),
    ).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(6);
  });
});
