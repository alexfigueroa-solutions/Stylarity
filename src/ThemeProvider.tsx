import { useEffect, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"
import { createTheme } from "./theme";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTheme } from "./hooks/useTheme";
import { ThemeContext } from "./contexts/ThemeContext";
import React from "react";

export interface ThemeProviderProps {
    children: React.ReactNode;
}


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useLocalStorage('themeName', 'theme1'); // default to 'theme1'
    const [colorMode, setColorMode] = useLocalStorage('colorMode', 'light'); // default to 'light'
    const [dynamicBackground, setDynamicBackground] = useState('');
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setTheme(createTheme(themeName, colorMode, dynamicBackground));
    }, [themeName, colorMode, dynamicBackground]);

    const contextValue = {
        theme,
        setTheme,
        setDynamicBackground,
        setThemeName, // Allow changing the theme dynamically
        setColorMode // Allow toggling light/dark mode
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
        </ThemeContext.Provider>
    );
};
