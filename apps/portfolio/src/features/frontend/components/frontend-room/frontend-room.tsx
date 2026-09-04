import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[1];
const capabilities = [
  'React',
  'TypeScript and JavaScript',
  'State management',
  'Routing and API integration',
  'Responsive and accessible UI',
  'Performance, testing, and animation',
] as const;

export function FrontendRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>This interface is part of the frontend demonstration.</p>
      <h2>Capabilities</h2>
      <ul aria-label="Frontend capabilities">
        {capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </RoomTemplate>
  );
}
