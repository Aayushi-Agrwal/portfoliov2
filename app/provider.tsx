'use client';

import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from './lib/theme';
import createEmotionCache from './lib/emotionCache';
import { ThemeModeProvider, useThemeMode } from './components/ThemeContext';

const clientSideEmotionCache = createEmotionCache();

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeMode();
  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeModeProvider>
      <ThemeWrapper>
        {children}
      </ThemeWrapper>
    </ThemeModeProvider>
  );
}
