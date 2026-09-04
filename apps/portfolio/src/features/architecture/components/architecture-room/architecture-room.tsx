import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[5];

export function ArchitectureRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>
        Code is grouped by business capability. New libraries are created only
        when a real reusable boundary appears.
      </p>
      <h2>Workspace boundaries</h2>
      <ul aria-label="Workspace boundaries">
        <li>apps/portfolio — portfolio-specific features</li>
        <li>libs/ui — generic reusable UI primitives</li>
      </ul>
    </RoomTemplate>
  );
}
