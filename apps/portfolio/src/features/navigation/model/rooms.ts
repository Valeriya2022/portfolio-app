export type RoomDefinition = {
  id: string;
  name: string;
  navLabel: string;
  number: number;
  path: string;
  summary: string;
  title: string;
};

export const rooms = [
  {
    id: 'about',
    name: 'Spawn',
    navLabel: 'About Me',
    number: 1,
    path: '/',
    summary: 'Who I am and how I work.',
    title: 'About Me',
  },
  {
    id: 'frontend',
    name: 'Frontend Lab',
    navLabel: 'Frontend',
    number: 2,
    path: '/frontend',
    summary: 'Accessible React interfaces.',
    title: 'React Engineering',
  },
  {
    id: 'backend',
    name: 'Backend',
    navLabel: 'C#',
    number: 3,
    path: '/backend',
    summary: 'Reliable .NET systems.',
    title: 'C# / .NET Engineering',
  },
  {
    id: 'ai',
    name: 'AI Engineering',
    navLabel: 'AI',
    number: 4,
    path: '/ai',
    summary: 'AI-assisted engineering workflow.',
    title: 'AI-Assisted Engineering',
  },
  {
    id: 'projects',
    name: 'Achievements',
    navLabel: 'Portfolio',
    number: 5,
    path: '/portfolio',
    summary: 'Achievements, screenshots, and outcomes.',
    title: 'Portfolio',
  },
  {
    id: 'architecture',
    name: 'Architecture',
    navLabel: 'Architecture',
    number: 6,
    path: '/architecture',
    summary: 'Structure behind this portfolio.',
    title: 'How This Portfolio Is Built',
  },
  {
    id: 'experience',
    name: 'Experience Timeline',
    navLabel: 'Experience',
    number: 7,
    path: '/experience',
    summary: 'Roles, growth, and impact.',
    title: 'Career Progression',
  },
  {
    id: 'contact',
    name: 'Exit Portal',
    navLabel: 'Contact',
    number: 8,
    path: '/contact',
    summary: 'Start a conversation.',
    title: 'Contact',
  },
  {
    id: 'engineering',
    name: 'Engineering',
    navLabel: 'Engineering',
    number: 9,
    path: '/engineering',
    summary: 'Principles, quality, and delivery.',
    title: 'Engineering Practice',
  },
] as const satisfies readonly RoomDefinition[];

export const publishedRooms = [
  rooms[0],
  { ...rooms[4], number: 2 },
] as const satisfies readonly RoomDefinition[];

export type Room = (typeof rooms)[number];
export type RoomId = Room['id'];
export type RoomPath = Room['path'];
