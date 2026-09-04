import { useTheme } from '../../hooks/use-theme';
import { themeModes } from '../../model/theme';

export function ThemeControl() {
  const { mode, resolvedTheme, setMode } = useTheme();

  return (
    <div
      aria-label={`Appearance: ${mode}, currently ${resolvedTheme}`}
      className="flex items-center gap-0.5 rounded-control border border-line-subtle bg-house-canvas/50 p-0.5"
      role="group"
    >
      {themeModes.map((themeMode) => (
        <button
          aria-pressed={mode === themeMode}
          className="rounded-[0.3rem] px-2 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-ink-muted transition-colors duration-[var(--duration-interaction)] hover:text-ink-primary aria-pressed:bg-house-elevated aria-pressed:text-accent-primary"
          key={themeMode}
          onClick={() => setMode(themeMode)}
          type="button"
        >
          {themeMode}
        </button>
      ))}
    </div>
  );
}
