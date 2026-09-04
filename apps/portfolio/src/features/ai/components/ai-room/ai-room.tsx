import { rooms, RoomTemplate } from '../../../navigation';

const room = rooms[3];
const workflow = [
  'Problem',
  'My architecture and reasoning',
  'AI assistance',
  'Review and modification',
  'Tests',
  'Production code',
] as const;

export function AiRoom() {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>
        I use AI to increase development speed while keeping architectural
        decisions, validation, and code ownership under my control.
      </p>
      <h2>Engineering workflow</h2>
      <ol aria-label="AI-assisted engineering workflow">
        {workflow.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </RoomTemplate>
  );
}
