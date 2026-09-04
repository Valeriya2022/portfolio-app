import { render } from '@testing-library/react';

import { RoomTemplate } from './room-template';

describe('RoomTemplate', () => {
  it('renders an accessible room structure', () => {
    const { getByRole, getByText } = render(
      <RoomTemplate
        controls={<button type="button">Next room</button>}
        description="Introduction"
        name="Spawn"
        number={1}
        title="About me"
      >
        <p>Room content</p>
      </RoomTemplate>,
    );

    const room = getByRole('region', { name: 'About me' });

    expect(room.getAttribute('data-room')).toBe('Spawn');
    expect(room.getAttribute('data-room-number')).toBe('01');
    expect(getByText('Room content')).toBeTruthy();
    expect(getByRole('contentinfo', { name: 'Room controls' })).toBeTruthy();
  });

  it('omits optional content when it is not provided', () => {
    const { queryByRole, queryByText } = render(
      <RoomTemplate name="Frontend Lab" number={2} title="React">
        <p>Frontend content</p>
      </RoomTemplate>,
    );

    expect(queryByText('Introduction')).toBeNull();
    expect(queryByRole('contentinfo')).toBeNull();
  });
});
