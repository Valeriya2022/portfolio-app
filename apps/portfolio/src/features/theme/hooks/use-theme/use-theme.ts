import { useCallback, useEffect, useState } from 'react';

import { isThemeMode, type ThemeMode } from '../../model/theme';
import { resolveTheme } from '../../model/time-theme';

const STORAGE_KEY = 'portfolio-theme';
const CLOCK_REFRESH_INTERVAL = 60_000;

function readStoredMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'auto';
  }

  const storedMode = window.localStorage.getItem(STORAGE_KEY);
  return isThemeMode(storedMode) ? storedMode : 'auto';
}

export function useTheme() {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode);
  const [now, setNow] = useState(() => new Date());
  const resolvedTheme = resolveTheme(mode, now);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = resolvedTheme;
    root.style.colorScheme = resolvedTheme === 'day' ? 'light' : 'dark';
  }, [resolvedTheme]);

  useEffect(() => {
    if (mode !== 'auto') {
      return;
    }

    const interval = window.setInterval(
      () => setNow(new Date()),
      CLOCK_REFRESH_INTERVAL,
    );

    return () => window.clearInterval(interval);
  }, [mode]);

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);
  }, []);

  return { mode, resolvedTheme, setMode } as const;
}
