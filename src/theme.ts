import { Theme, ThemeColors, Typography, Spacing, Breakpoints } from "./Theme.types";
import * as tokens from "./design-tokens";
import themeConfigurations from './themes.json';

// Assuming 'common' is defined somewhere to include common theme properties.
const common = {
    typography: tokens.typography as Typography,
    spacing: tokens.spacing as Spacing,
    breakpoints: tokens.breakpoints as Breakpoints,
    borderRadius: tokens.borderRadius,
    boxShadow: tokens.boxShadow,
    transition: tokens.transition
};

export const createTheme = (themeName: keyof typeof themeConfigurations, colorMode: 'light' | 'dark', dynamicBackground?: string): Theme => {
    const colorScheme: ThemeColors = themeConfigurations[themeName].colors;

    return {
        ...common,
        colors: {
            ...colorScheme,
            text: colorMode === 'dark' ? colorScheme.textDark : colorScheme.textLight,
            background: dynamicBackground || (colorMode === 'dark' ? colorScheme.backgroundDark : colorScheme.backgroundLight),
        },
        mode: colorMode,
    };
};
