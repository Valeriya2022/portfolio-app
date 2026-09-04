export const themeModes = ['auto', 'day', 'night'] as const;

export type ThemeMode = (typeof themeModes)[number];
export type ResolvedTheme = Exclude<ThemeMode, 'auto'>;

export function isThemeMode(value: string | null): value is ThemeMode {
  return themeModes.some((mode) => mode === value);
}
