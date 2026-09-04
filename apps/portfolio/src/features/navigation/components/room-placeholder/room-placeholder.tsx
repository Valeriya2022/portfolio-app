import type { Room } from '../../model/rooms';
import { RoomTemplate } from '../room-template';

export type RoomPlaceholderProps = {
  room: Room;
};

export function RoomPlaceholder({ room }: RoomPlaceholderProps) {
  return (
    <RoomTemplate name={room.name} number={room.number} title={room.title}>
      <p>This room is being prepared.</p>
    </RoomTemplate>
  );
}
