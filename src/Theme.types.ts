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

export interface Typography {
    fontFamily: string;
    fontFamilyHeading: string; // Different font for headings, if needed
    fontSizeBase: string; // Base font size, e.g., '16px'
    fontSizeSmall: string;
    fontSizeMedium: string; // Medium font size, e.g., '14px'
    fontSizeLarge: string;
    fontSizeExtraLarge: string; // e.g., '20px'

    fontWeightLight: number; // e.g., 300
    fontWeightRegular: number; // e.g., 400
    fontWeightMedium: number; // e.g., 500
    fontWeightBold: number; // e.g., 700
    fontWeightExtraBold: number; // e.g., 800

    lineHeightBase: string; // Base line height, e.g., '1.5'
    lineHeightTight: string; // Tighter line height, e.g., '1.2'
    lineHeightLoose: string; // Looser line height, e.g., '1.8'

    letterSpacingTight: string; // e.g., '-0.05em'
    letterSpacingNormal: string; // e.g., 'normal'
    letterSpacingWide: string; // e.g., '0.05em'

    textTransform: string; // e.g., 'none', 'capitalize', 'uppercase', 'lowercase'

    // Headings Font Sizes
    h1FontSize: string; // e.g., '36px'
    h2FontSize: string; // e.g., '30px'
    h3FontSize: string; // e.g., '24px'
    h4FontSize: string; // e.g., '20px'
    h5FontSize: string; // e.g., '18px'
    h6FontSize: string; // e.g., '16px'

    // Headings Line Heights
    h1LineHeight: string;
    h2LineHeight: string;
    h3LineHeight: string;
    h4LineHeight: string;
    h5LineHeight: string;
    h6LineHeight: string;

    // Headings Letter Spacing
    h1LetterSpacing: string;
    h2LetterSpacing: string;
    h3LetterSpacing: string;
    h4LetterSpacing: string;
    h5LetterSpacing: string;
    h6LetterSpacing: string;

    // Additional typographic properties for specific UI components
    buttonFontSize: string;
    labelFontSize: string;
    inputFontSize: string;

    // Optionally, you can add properties for font styles, e.g., italics
    fontStyleNormal: string; // e.g., 'normal'
    fontStyleItalic: string; // e.g., 'italic'

    // ... Add more as needed
}


export interface Spacing {
    // Defining a range of sizes for flexible spacing
    tiny: string;       // e.g., '4px'
    small: string;      // e.g., '8px'
    medium: string;     // e.g., '16px'
    large: string;      // e.g., '24px'
    extraLarge: string; // e.g., '32px'
    huge: string;       // e.g., '48px'
    massive: string;    // e.g., '64px'

    // Spacing for specific UI elements
    buttonPadding: string;      // e.g., '10px 20px'
    inputPadding: string;       // e.g., '12px 16px'
    cardPadding: string;        // e.g., '20px'
    modalPadding: string;       // e.g., '30px'
    sectionSpacing: string;     // e.g., '40px'
    pagePadding: string;        // e.g., '50px'

    // Responsive Spacing for different screen sizes
    responsiveSmall: string;    // e.g., '15px'
    responsiveMedium: string;   // e.g., '20px'
    responsiveLarge: string;    // e.g., '25px'
    responsiveExtraLarge: string; // e.g., '30px'

    // Gutter Spacing for layouts
    gutter: string;             // e.g., '16px'
    gutterLarge: string;        // e.g., '24px'

    // Margin and Padding utility classes
    // These can be used to apply consistent margin and padding across components
    margin: string;             // e.g., '1rem'
    padding: string;            // e.g., '1rem'

    // Additional custom spacings for specific use-cases
    customSpacing1: string;     // e.g., '10px'
    customSpacing2: string;     // e.g., '18px'
    // ... Add more as needed

    // Optional: Spacing scale based on a base unit (e.g., multiples of 8px)
    scale: (factor: number) => string; // Function to calculate spacing based on a scale factor
}


export interface Breakpoints {
    xs: string; // e.g., '480px'
    sm: string; // e.g., '768px'
    md: string; // e.g., '992px'
    lg: string; // e.g., '1200px'
    xl: string; // e.g., '1400px'
    xxl: string; // e.g., '1600px'

    // Additional breakpoints for finer control or specific use-cases
    customBreakpoint1: string; // e.g., '640px'
    customBreakpoint2: string; // e.g., '1824px'
    // ... Add more custom breakpoints as needed

    // Functions to get media query strings for easy use in styled-components
    up: (size: keyof Breakpoints) => string;
    down: (size: keyof Breakpoints) => string;
    between: (start: keyof Breakpoints, end: keyof Breakpoints) => string;
    only: (size: keyof Breakpoints) => string;
}

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
