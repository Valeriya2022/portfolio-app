export type RoomDefinition = {
  floor: 1 | 2 | 3;
  id: string;
  name: string;
  navLabel: string;
  number: number;
  path: string;
  position: 1 | 2 | 3;
  title: string;
};

export const rooms = [
  {
    floor: 1,
    id: 'about',
    name: 'Spawn',
    navLabel: 'About',
    number: 1,
    path: '/',
    position: 1,
    title: 'Portfolio',
  },
  {
    floor: 2,
    id: 'frontend',
    name: 'Frontend Lab',
    navLabel: 'Frontend',
    number: 2,
    path: '/frontend',
    position: 1,
    title: 'React Engineering',
  },
  {
    floor: 3,
    id: 'backend',
    name: 'Backend Room',
    navLabel: 'C#',
    number: 3,
    path: '/backend',
    position: 1,
    title: 'C# / .NET Engineering',
  },
  {
    floor: 3,
    id: 'ai',
    name: 'AI Engineering Room',
    navLabel: 'AI',
    number: 4,
    path: '/ai',
    position: 2,
    title: 'AI-Assisted Engineering',
  },
  {
    floor: 2,
    id: 'projects',
    name: 'Missions',
    navLabel: 'Projects',
    number: 5,
    path: '/projects',
    position: 2,
    title: 'Selected Projects',
  },
  {
    floor: 2,
    id: 'architecture',
    name: 'Architecture Room',
    navLabel: 'Architecture',
    number: 6,
    path: '/architecture',
    position: 3,
    title: 'How This Portfolio Is Built',
  },
  {
    floor: 1,
    id: 'experience',
    name: 'Experience Timeline',
    navLabel: 'Experience',
    number: 7,
    path: '/experience',
    position: 2,
    title: 'Career Progression',
  },
  {
    floor: 1,
    id: 'contact',
    name: 'Exit Portal',
    navLabel: 'Contact',
    number: 8,
    path: '/contact',
    position: 3,
    title: 'Contact',
  },
  {
    floor: 3,
    id: 'engineering',
    name: 'Engineering Room',
    navLabel: 'Engineering',
    number: 9,
    path: '/engineering',
    position: 3,
    title: 'Engineering Practice',
  },
] as const satisfies readonly RoomDefinition[];

export type Room = (typeof rooms)[number];
export type RoomId = Room['id'];
export type RoomPath = Room['path'];

export type RoomDirection = 'up' | 'right' | 'down' | 'left';

export function getAdjacentRoom(
  room: Room,
  direction: RoomDirection,
): Room | undefined {
  const floorOffset = direction === 'up' ? 1 : direction === 'down' ? -1 : 0;
  const positionOffset =
    direction === 'right' ? 1 : direction === 'left' ? -1 : 0;

  return rooms.find(
    (candidate) =>
      candidate.floor === room.floor + floorOffset &&
      candidate.position === room.position + positionOffset,
  );
}
