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

const defaultTheme = 'defaultThemeName'; // Replace with your default theme name

export const createTheme = (themeName: keyof typeof themeConfigurations = defaultTheme, colorMode: 'light' | 'dark' = 'light', dynamicBackground?: string): Theme => {
    const themeConfig = themeConfigurations[themeName] || themeConfigurations[defaultTheme];
    const colorScheme: ThemeColors = themeConfig.colors;

    return {
        ...tokens.common, // Assuming tokens.common is defined and exported from tokens
        colors: {
            ...colorScheme,
            text: colorMode === 'dark' ? colorScheme.textDark : colorScheme.textLight,
            background: dynamicBackground || (colorMode === 'dark' ? colorScheme.backgroundDark : colorScheme.backgroundLight),
        },
        mode: colorMode,
    };
};
