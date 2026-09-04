import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[8];
const practices = [
  'Clean Git history',
  'Strict TypeScript',
  'Linting and formatting',
  'Unit and end-to-end tests',
  'CI/CD and deployment',
  'Documentation and code quality',
] as const;

export function EngineeringRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>The repository and delivery process are part of the portfolio.</p>
      <h2>Project status</h2>
      <ul aria-label="Engineering practices">
        {practices.map((practice) => (
          <li key={practice}>{practice}</li>
        ))}
      </ul>
    </RoomTemplate>
  );
}
