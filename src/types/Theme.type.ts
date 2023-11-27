import { Breakpoints } from "./Breakpoints.type";
import { Spacing } from "./Spacing.type";
import { ThemeColors } from "./ThemeColors.type";
import { Typography } from "./Typography.type";

export interface Theme {
    mode: 'light' | 'dark';
    colors: ThemeColors;
    typography: Typography;
    spacing: Spacing;
    breakpoints: Breakpoints;
    borderRadius: string; // e.g., '4px'
    boxShadow: string; // e.g., '0px 4px 8px rgba(0,0,0,0.1)'

    // Additional global style properties
    transition: string; // e.g., 'all 0.3s ease'
    globalBackground: string; // e.g., '#F5F5F5', could be a color or gradient
    linkColor: string; // e.g., '#1A0DAB'

    // Layout-related properties
    containerMaxWidth: string; // e.g., '1140px'
    sidebarWidth: string; // e.g., '250px'

    // Animation related properties
    animationDuration: string; // e.g., '0.3s'
    animationTimingFunction: string; // e.g., 'ease-in-out'

    // Additional specific theming elements
    headerHeight: string; // e.g., '60px'
    footerHeight: string; // e.g., '80px'

    // Utility function for theming
    applyTheme: (component: keyof Theme) => string;
}
