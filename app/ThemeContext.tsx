import { createContext, useContext, useEffect, useState } from "react";
import {lightTheme, darkTheme} from "../constants/Theme"
import { Appearance } from "react-native";
const ThemeContext = createContext();

export const ThemesProvider = ({children}) => {
    const [theme,setTheme] = useState(lightTheme);

    useEffect(() => {
        const colorScheme = Appearance.getColorScheme();

        setTheme(colorScheme == 'dark' ? darkTheme : lightTheme);

        const listener = Appearance.addChangeListener(({colorScheme}) => {
            setTheme(colorScheme == 'dark' ? darkTheme : lightTheme)
        });

        return () => listener.remove();
    },[]);

    return(
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemesProvider;
export const useThemes = () => useContext(ThemeContext);