import { getAdjacentRoom, rooms } from './rooms';

describe('rooms', () => {
  it('defines unique IDs and paths', () => {
    const ids = rooms.map(({ id }) => id);
    const paths = rooms.map(({ path }) => path);

    expect(new Set(ids).size).toBe(rooms.length);
    expect(new Set(paths).size).toBe(rooms.length);
  });

  it('keeps room numbers sequential', () => {
    expect(rooms.map(({ number }) => number)).toEqual(
      rooms.map((_, index) => index + 1),
    );
  });

  it('uses the About room as the entry route', () => {
    expect(rooms[0]).toMatchObject({ id: 'about', path: '/', number: 1 });
  });

  it('finds adjacent rooms in a circular horizontal sequence', () => {
    const projects = rooms.find((room) => room.id === 'projects');

    if (!projects) {
      throw new Error('Projects room is missing');
    }

    expect(getAdjacentRoom(projects, 'right')?.id).toBe('architecture');
    expect(getAdjacentRoom(projects, 'left')?.id).toBe('ai');
    expect(getAdjacentRoom(rooms[0], 'left')?.id).toBe('engineering');
    expect(getAdjacentRoom(rooms[rooms.length - 1], 'right')?.id).toBe('about');
  });
});
