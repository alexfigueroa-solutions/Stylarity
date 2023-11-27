export interface ThemeColors {
    // Primary and Secondary Colors
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;

    // Additional Color Palette
    success: string;
    info: string;
    warning: string;
    danger: string;
    neutral: string; // For shades of gray, off-whites, etc.

    // Text Colors
    textPrimary: string;
    textSecondary: string;
    textHint: string;

    // Background Colors
    background: string;
    backgroundAlt: string; // Alternative background (e.g., for sidebars, headers)

    // Border and Divider Colors
    border: string;
    divider: string;

    // Gradients
    gradientPrimary: string; // e.g., 'linear-gradient(to right, #A1C4FD, #C2E9FB)'
    gradientSecondary: string;

    // Shadows and Highlights
    boxShadow: string;
    highlight: string;

    // Special UI Elements
    overlay: string; // For modal backgrounds, etc.
    skeletonLoader: string; // For skeleton loaders

    // Additional Custom Colors
    customColor1: string;
    customColor2: string;
    // ... add more as needed

    // Transparency (Optional)
    opacityLight: string; // e.g., 'rgba(255, 255, 255, 0.7)'
    opacityDark: string;

    // Theming for Specific Components or Areas
    navbarBackground: string;
    footerBackground: string;
    buttonPrimary: string;
    buttonSecondary: string;

    // Additional Styling
    borderRadius: string; // e.g., '4px', '50%'
    transition: string; // e.g., 'all 0.3s ease'
}
