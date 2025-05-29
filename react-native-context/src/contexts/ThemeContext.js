import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const toggleTheme = () => setTheme(prev => !prev);

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;