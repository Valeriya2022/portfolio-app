import { publishedRooms, rooms } from './rooms';

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

  it('publishes only About Me and Portfolio for the first release', () => {
    expect(
      publishedRooms.map(({ navLabel, number }) => ({ navLabel, number })),
    ).toEqual([
      { navLabel: 'About Me', number: 1 },
      { navLabel: 'Portfolio', number: 2 },
    ]);
  });
});
