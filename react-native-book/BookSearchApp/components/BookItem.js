import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const BookItem = ({ item, onPress }) => {
    return(
        <Pressable style={ styles.container } onPress={ onPress }>
            <Image
                style={ styles.image }
                source={{ uri: item.image }}
                resizeMode="cover"
            />
            <View style={ styles.info }>
                <Text style={ styles.infoTitle } >{ item.title }</Text>
                <Text style={ styles.infoAuthor }>{ item.author }</Text>
            </View>
        </Pressable>
    )
}

export default BookItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#2f2f2f',
        alignItems: 'center',
        justifyContent: 'center',
    },  

    image: {
        width: 80,
        height: 120,
        marginRight: 10,
    },

    info: {
        flex: 1,
        justifyContent: 'center',
    },

    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    
    infoAuthor: {
        fontSize: 12,
    }
})