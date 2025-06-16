import { View, StyleSheet, FlatList, Pressable, Text } from "react-native";
import PostItem from "../components/PostItem";
import FloatingButton from "../components/FloatingButton";
import { useCallback, useState } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const BoardScreen = ({ navigation }) => {

    // fetch나 axios를 통해서 읽어온 데이터들을 state에 담아서 FlatList에 출력
    // 게시글이 없다면 게시글이 없음을 출력
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPost = useCallback(async () => {
            try {
                const response = await axios.get("http://10.0.2.2:10000/api/posts");
                if(response.data.list) {
                    setPosts(response.data.list);
                } else {
                    setPosts([]);
                }
            } catch (error) {
                console.log('서버 요청 실패: ', error.message);
            } finally {
                setLoading(false);
            }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchPost();

        }, [posts])
    )

    if(loading) {
        return <View><Text>불러오는 중</Text></View>
    }

    return(
        <View style={ styles.container }>
            { posts.length == 0 ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>게시물이 없습니다</Text>
                </View>) :
            (<FlatList 
                data={ posts }
                keyExtractor={(item) => item.id.toString() }
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Detail', { id: item.id })}>
                        <PostItem post={ item } />
                    </Pressable>
                )}
            />)}
            <FloatingButton onPress={() => navigation.navigate('Write')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
})

export default BoardScreen;