import type { ResolvedTheme, ThemeMode } from './theme';

export const DAY_START_HOUR = 7;
export const NIGHT_START_HOUR = 19;

export function getTimeTheme(date = new Date()): ResolvedTheme {
  const hour = date.getHours();

  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? 'day' : 'night';
}

export function resolveTheme(
  mode: ThemeMode,
  date = new Date(),
): ResolvedTheme {
  return mode === 'auto' ? getTimeTheme(date) : mode;
}
