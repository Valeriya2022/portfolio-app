import {
  DAY_START_HOUR,
  getTimeTheme,
  NIGHT_START_HOUR,
  resolveTheme,
} from './time-theme';

function atHour(hour: number) {
  const date = new Date(2026, 8, 4, hour);
  return date;
}

describe('time theme', () => {
  it('uses day mode from 07:00 until 18:59', () => {
    expect(getTimeTheme(atHour(DAY_START_HOUR))).toBe('day');
    expect(getTimeTheme(atHour(NIGHT_START_HOUR - 1))).toBe('day');
  });

  it('uses night mode outside daytime hours', () => {
    expect(getTimeTheme(atHour(NIGHT_START_HOUR))).toBe('night');
    expect(getTimeTheme(atHour(DAY_START_HOUR - 1))).toBe('night');
  });

  it('preserves an explicit theme mode', () => {
    expect(resolveTheme('day', atHour(23))).toBe('day');
    expect(resolveTheme('night', atHour(12))).toBe('night');
  });
});
