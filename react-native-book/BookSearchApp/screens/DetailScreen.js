import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const DetailScreen = ({ route }) => {

    const { book } = route.params;

    return(
        <ScrollView style={ styles.container }>
            <Image
                style={ styles.bookImage }
                source={{ uri: book.image }}
                resizeMode="contain"
            />
            <View style={ styles.info }>
                <Text style={ styles.title }>{ book.title }</Text>
                <Text style={ styles.author }>저자 : { book.author }</Text>
                <Text style={ styles.discount }>가격 : { book.discount }</Text>
                <Text style={ styles.description }>{ book.description }</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bookImage: {
        width: 220,
        height: 290,
        alignSelf: 'center',
        marginTop: 26,
        marginBottom: 14,
    },

    info: {
        padding: 20,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 4,
    },

    author: {
        fontSize: 16,
    },

    discount: {
        fontSize: 16,
        marginBottom: 16,
    }
})


export default DetailScreen;