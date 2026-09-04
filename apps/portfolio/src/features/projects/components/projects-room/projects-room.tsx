import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[4];
const missionSections = [
  'Challenge',
  'My responsibility',
  'Architecture',
  'Technologies',
  'Important decisions',
  'Difficult problems',
  'Outcome',
] as const;

export function ProjectsRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>Each project is presented as an engineering mission.</p>
      <h2>Mission structure</h2>
      <ul aria-label="Project mission structure">
        {missionSections.map((section) => (
          <li key={section}>{section}</li>
        ))}
      </ul>
    </RoomTemplate>
  );
}
