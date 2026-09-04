import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[7];

export function ContactRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>Contact details and profile links will be added here.</p>
      <h2>Connect</h2>
      <ul aria-label="Contact channels">
        <li>CV</li>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Email</li>
      </ul>
    </RoomTemplate>
  );
}
