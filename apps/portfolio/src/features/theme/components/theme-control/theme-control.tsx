import { useLanguage } from '../../../language';
import { useTheme } from '../../hooks/use-theme';
import { themeModes } from '../../model/theme';

export function ThemeControl() {
  const { t, language } = useLanguage();
  const { mode, resolvedTheme, setMode } = useTheme();

  return (
    <div
      aria-label={
        language === 'fr'
          ? `Apparence : ${t(mode)}, actuellement ${t(resolvedTheme)}`
          : `Appearance: ${mode}, currently ${resolvedTheme}`
      }
      className="glass-surface flex items-center gap-0.5 p-0.5"
      role="group"
    >
      {themeModes.map((themeMode) => (
        <button
          aria-pressed={mode === themeMode}
          className="glass-control border-0 px-2 py-1 font-mono text-[0.625rem] tracking-[0.08em] text-ink-muted shadow-none hover:text-ink-primary aria-pressed:bg-house-elevated aria-pressed:text-accent-primary"
          key={themeMode}
          onClick={() => setMode(themeMode)}
          type="button"
        >
          {t(themeMode)}
        </button>
      ))}
    </div>
  );
}
