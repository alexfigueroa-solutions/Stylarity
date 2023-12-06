// theme-generator.js
import * as tokens from './design-tokens';

export const generateTheme = (themeConfig) => {
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
