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
