import { Link } from '@tanstack/react-router';

import { rooms } from '../../model/rooms';

export function RoomNavigation() {
  return (
    <nav aria-label="Portfolio rooms">
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={room.path}>{room.navLabel}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
