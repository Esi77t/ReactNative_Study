import { useContext } from "react"
import { Button, StyleSheet, Text, View } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

const ThemeComponent = () => {
    // Provider가 제공하는 value를 useContext를 통해 받아서 사용할 수 있다
    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <View style={ theme ? styles.darkMode : styles.lightMode }>
            <Text style={ theme ? styles.darkText : styles.lightText }>
                { theme ? 'Dark Mode' : 'Light Mode'}
            </Text>
            <Button title="테마색 변경" onPress={ toggleTheme } />
        </View>
    )
}

const styles = StyleSheet.create({
    darkMode: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },

    lightMode: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    darkText: {
        color: '#fff'
    },

    lightText: {
        color: '#333'
    }
})

export default ThemeComponent;