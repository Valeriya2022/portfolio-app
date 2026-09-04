import { rooms, RoomTemplate } from '../../../navigation';

const aboutRoom = rooms[0];

const technologies = [
  'React',
  'TypeScript',
  'JavaScript',
  'C#',
  '.NET',
  'AI-assisted development',
] as const;

export function AboutRoom() {
  return (
    <RoomTemplate
      description="Full-Stack Developer"
      name={aboutRoom.name}
      number={aboutRoom.number}
      title={aboutRoom.title}
    >
      <p>
        I build accessible, maintainable products across the frontend and
        backend, using AI to increase development speed without giving up
        engineering judgment or code ownership.
      </p>

      <h2>Current toolkit</h2>
      <ul aria-label="Current toolkit">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </RoomTemplate>
  );
}
