import { render } from '@testing-library/react';

import { AboutRoom } from './about-room';

describe('AboutRoom', () => {
  it('renders the developer role and current toolkit', () => {
    const { getAllByRole, getByRole, getByText } = render(<AboutRoom />);

    expect(getByText('Full-Stack Developer')).toBeTruthy();
    expect(getByRole('heading', { name: 'Current toolkit' })).toBeTruthy();
    expect(getByRole('list', { name: 'Current toolkit' })).toBeTruthy();
    expect(getAllByRole('listitem')).toHaveLength(6);
  });
});
