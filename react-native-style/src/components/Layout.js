import { StyleSheet, View, Text } from "react-native";

export const Header = () => {
    return(
        <View style={ [styles.container, styles.header] }>
            <Text style={ styles.text }>Header</Text>
        </View>
    )
}

export const Content = () => {
    return(
        <View style={ [styles.container, styles.contents] }>
            <Text style={ styles.text }>Content</Text>
        </View>
    )
}

export const Footer = () => {
    return(
        <View style={ [styles.container, styles.footer] }>
            <Text style={ styles.text }>Footer</Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#f1c40f',
    },
    contents: {
        flex: 2,
        backgroundColor: '#1abc9c',
    },
    footer: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    text: {
        fontSize: 26,
    }
})