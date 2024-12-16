import {useThemes} from '../app/ThemeContext'
import { StyleSheet } from "react-native";
export const GlobalStyles = () => {
    const {theme} = useThemes();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            padding: 16,
          },
          text: {
            color: theme.colors.text,
            fontSize: 16,
          },
    });
}