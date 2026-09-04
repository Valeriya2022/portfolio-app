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

  it('fills a three-floor house with three rooms per floor', () => {
    for (const floor of [1, 2, 3]) {
      expect(rooms.filter((room) => room.floor === floor)).toHaveLength(3);
    }
  });

  it('finds rooms horizontally on the same floor', () => {
    const projects = rooms.find((room) => room.id === 'projects');

    if (!projects) {
      throw new Error('Projects room is missing');
    }

    expect(getAdjacentRoom(projects, 'right')?.id).toBe('architecture');
    expect(getAdjacentRoom(projects, 'left')?.id).toBe('frontend');
  });
});
