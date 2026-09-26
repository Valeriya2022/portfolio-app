import { publishedRooms, RoomTemplate } from '../../../navigation';

const room = publishedRooms[1];

export function ProjectsRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>A visual record of the work and milestones I am proud of.</p>
      <h2>Achievements</h2>
      <p>Screenshots and short context will be collected here.</p>
    </RoomTemplate>
  );
}
