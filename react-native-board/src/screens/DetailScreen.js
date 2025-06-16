import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = ({ route }) => {
    // id를 통해서 한 건 조회
    const { id } = route.params;

    const [post, setPost] = useState([]);
    const { title, author, description, time, views } = post;

    useEffect(() => {
        axios.get(`http://10.0.2.2:10000/api/posts/${id}`)
            .then((res) => {
            if(res.data && res.data.list && res.data.list.length > 0) {
                setPost(res.data.list[0]);
            }
        })
    }, []);

    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>{ title }</Text>
            <Text style={ styles.meta }>작성자 { author } | { time } | 조회수 { views }</Text>
            <Text style={ styles.description }>{ description }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 16,
        paddingTop: 4,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#676767',
        marginBottom: 4,
        paddingVertical: 8,
    },

    meta: {
        fontSize: 12,
        color: '#aaa',
        marginBottom: 10,
    },  

    description: {
        fontSize: 18,
        color: 'white',
        lineHeight: 24,
    }
})

export default DetailScreen;