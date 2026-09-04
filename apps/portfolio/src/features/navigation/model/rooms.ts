export type RoomDefinition = {
  id: string;
  name: string;
  navLabel: string;
  number: number;
  path: string;
  title: string;
};

export const rooms = [
  {
    id: 'about',
    name: 'Spawn',
    navLabel: 'About',
    number: 1,
    path: '/',
    title: 'Portfolio',
  },
  {
    id: 'frontend',
    name: 'Frontend Lab',
    navLabel: 'Frontend',
    number: 2,
    path: '/frontend',
    title: 'React Engineering',
  },
  {
    id: 'backend',
    name: 'Backend Room',
    navLabel: 'C#',
    number: 3,
    path: '/backend',
    title: 'C# / .NET Engineering',
  },
  {
    id: 'ai',
    name: 'AI Engineering Room',
    navLabel: 'AI',
    number: 4,
    path: '/ai',
    title: 'AI-Assisted Engineering',
  },
  {
    id: 'projects',
    name: 'Missions',
    navLabel: 'Projects',
    number: 5,
    path: '/projects',
    title: 'Selected Projects',
  },
  {
    id: 'architecture',
    name: 'Architecture Room',
    navLabel: 'Architecture',
    number: 6,
    path: '/architecture',
    title: 'How This Portfolio Is Built',
  },
  {
    id: 'experience',
    name: 'Experience Timeline',
    navLabel: 'Experience',
    number: 7,
    path: '/experience',
    title: 'Career Progression',
  },
  {
    id: 'contact',
    name: 'Exit Portal',
    navLabel: 'Contact',
    number: 8,
    path: '/contact',
    title: 'Contact',
  },
  {
    id: 'engineering',
    name: 'Engineering Room',
    navLabel: 'Engineering',
    number: 9,
    path: '/engineering',
    title: 'Engineering Practice',
  },
] as const satisfies readonly RoomDefinition[];

export type Room = (typeof rooms)[number];
export type RoomId = Room['id'];
export type RoomPath = Room['path'];

export type RoomDirection = 'right' | 'left';

export function getAdjacentRoom(
  room: Room,
  direction: RoomDirection,
): Room | undefined {
  const currentIndex = rooms.findIndex((candidate) => candidate.id === room.id);
  if (currentIndex === -1) return undefined;

  const offset = direction === 'right' ? 1 : -1;
  const adjacentIndex = (currentIndex + offset + rooms.length) % rooms.length;

  return rooms[adjacentIndex];
}
