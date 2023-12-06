import React, { createContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme, Theme } from '../theme';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

export type ThemeContextType = {
    theme: Theme;
    setDynamicBackground: (color: string) => void;
}

const defaultSetDynamicBackground = (color: string) => {
    console.warn("setDynamicBackground function is not yet initialized");
};
export const ThemeContext = createContext<ThemeContextType | undefined>({ theme: lightTheme, setDynamicBackground: () => { } });
export const ThemeToggleContext = createContext<((mode: 'light' | 'dark') => void) | undefined>(undefined);
