import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const WriteScreen = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const navigation = useNavigation();

    const _handleSubmit = useCallback(() => {
        if(!title || !description) {
            alert("제목과 내용을 모두 입력하세요");
            return;
        }

        const newPost = {
            title,
            description,
            author,
        }

        try {
            axios.post("http://10.0.2.2:10000/api/posts", newPost);
            navigation.goBack();
        } catch (error) {
            alert("전송 실패", error.message);
        }
    })

    useLayoutEffect(() => {
        if(navigation) {
            navigation.setOptions({
                headerRight: () => (
                    <Pressable
                        onPress={ _handleSubmit }
                        style={{ marginRight: 12, }}
                    >
                        <View style={{
                            backgroundColor: '#2ecc71',
                            paddingHorizontal: 14,
                            paddingVertical: 6,
                            borderRadius: 6,
                        }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>등록</Text>
                        </View>
                    </Pressable>
                ),
        })}
    }, [title, author, description]);

    return(
        <View style={ styles.container }>
            <TextInput
                placeholder="제목"
                placeholderTextColor="#fff"
                style={ styles.titleInput }
                value={ title }
                onChangeText={ setTitle }
            />
            <TextInput
                placeholder="작성자"
                placeholderTextColor="#fff"
                style={ styles.authorInput }
                value={ author }
                onChangeText={ setAuthor }
            />
            <TextInput
                placeholder="내용을 작성해주세요"
                placeholderTextColor="#fff"
                style={ styles.descriptionInput }
                value={ description }
                onChangeText={ setDescription }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 16,
        paddingTop: 8,
    },

    titleInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        paddingBottom: 2,
    },

    authorInput: {
        fontSize: 14,
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#676767',
        marginBottom: 12,
    },
    
    descriptionInput: {
        flex: 1,
        fontSize: 16,
        color: '#fff',
        textAlignVertical: 'top',
    }

})

export default WriteScreen;