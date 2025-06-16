import { Pressable, StyleSheet, Text } from "react-native";

const FloatingButton = ({ onPress }) => {
    return(
        <Pressable onPress={ onPress } style={ styles.button }>
            <Text style={ styles.plus }>+</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        right: 30,
        bottom: 120,
        backgroundColor: '#2ecc71',
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },

    plus: {
        color: 'white',
        fontSize: 30,
        lineHeight: 34,
    }
})

export default FloatingButton;