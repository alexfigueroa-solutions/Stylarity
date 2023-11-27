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
