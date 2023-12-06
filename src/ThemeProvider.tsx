import { useEffect, useState } from "react";
import { ThemeContext, ThemeToggleContext } from "../contexts/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Theme, createTheme, darkTheme, lightTheme } from "./theme";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"

export interface ThemeProviderProps {
    children: React.ReactNode;
}


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useLocalStorage('themeName', 'theme1'); // default to 'theme1'
    const [colorMode, setColorMode] = useLocalStorage('colorMode', 'light'); // default to 'light'
    const [dynamicBackground, setDynamicBackground] = useState('');

    useEffect(() => {
        setTheme(createTheme(themeName, colorMode, dynamicBackground));
    }, [themeName, colorMode, dynamicBackground]);

    const contextValue = {
        theme,
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
