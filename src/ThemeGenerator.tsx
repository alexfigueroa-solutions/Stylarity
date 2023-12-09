import * as tokens from './design-tokens';

// Define the structure of your theme config
interface ThemeConfig {
    colors: {
        [key: string]: string; // Replace with a more specific type if needed
    };
    mode: string; // Replace with a more specific type if needed
    // Add other properties of themeConfig here
}

export const generateTheme = (themeConfig: ThemeConfig) => {
    const common = {
        typography: tokens.typography,
        transitions: tokens.transitions,
        spacing: tokens.spacing,
        zIndex: tokens.zIndex,
        breakpoints: tokens.breakpoints,
        borderRadius: tokens.borderRadius,
        boxShadow: tokens.boxShadow,
    };

    return {
        ...common,
        colors: themeConfig.colors,
        mode: themeConfig.mode,
        // ... add other theme properties if needed
    };
};
