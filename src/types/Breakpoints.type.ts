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
