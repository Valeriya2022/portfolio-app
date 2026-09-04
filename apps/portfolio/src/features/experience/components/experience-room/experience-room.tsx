import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[6];
const progression = [
  'Frontend Developer',
  'Senior Frontend Developer',
  'Full-Stack Development',
  'React + C# / .NET + AI',
] as const;

export function ExperienceRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>The timeline focuses on learning, ownership, and growing scope.</p>
      <h2>Progression</h2>
      <ol aria-label="Career progression">
        {progression.map((stage) => (
          <li key={stage}>{stage}</li>
        ))}
      </ol>
    </RoomTemplate>
  );
}
