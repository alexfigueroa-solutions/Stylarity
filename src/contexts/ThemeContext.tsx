import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { Theme } from '../Theme.types';

export type ThemeContextType = {
    theme: Theme;
    setDynamicBackground: (color: string) => void;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>({ theme: {}, setDynamicBackground: () => { }, setTheme: () => { } });
export const ThemeToggleContext = createContext<((mode: 'light' | 'dark') => void) | undefined>(undefined);
