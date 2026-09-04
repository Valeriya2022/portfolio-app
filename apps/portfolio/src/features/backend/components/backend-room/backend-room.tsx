import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[2];
const capabilities = [
  'C# and .NET',
  'REST APIs',
  'Authentication and authorization with OpenIddict',
  'Entity Framework Core',
  'SQL and databases',
  'Frontend and backend integration',
] as const;

export function BackendRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>React Client → REST API → .NET / C# → Database</p>
      <h2>Backend capabilities</h2>
      <ul aria-label="Backend capabilities">
        {capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </RoomTemplate>
  );
}
