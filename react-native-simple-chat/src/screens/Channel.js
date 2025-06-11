import styled, { ThemeContext } from "styled-components";
import { FlatList, Text } from "react-native";
import { useState, useEffect, useLayoutEffect, useContext } from "react";
import { createMessage, db, getCurrentUser } from "../utils/firebase";
import { collection, onSnapshot, query, doc, orderBy } from "firebase/firestore";
import { Input } from "../components";
import { MaterialIcons } from "@expo/vector-icons";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background };
`

// SendButton 컴포넌트 : 메시지 전송버튼 커스텀 컴포넌트
const sendButton = props => {
    const theme = useContext(ThemeContext);

    return(
        <Send
            { ...props }
            disabled={ !props.text }
            containerStyle={{
                width: 44,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 4,
            }}
        >
            <MaterialIcons
                name="send"
                size={ 24 }
                color={
                    props.text ? theme.sendButtonActive : theme.sendButtonInactive
                }
            />
        </Send>
    )
}

const Channel = ({ navigation, route }) => {

    const { params } = route;
    const [message, setMessage] = useState([]);
    const [text, setText] = useState('');

    const theme = useContext(ThemeContext);
    const { uid, name, PhotoUrl } = getCurrentUser();

    useEffect(() => {
        // params.id가 없으면 아래 코드를 실행
        if(!params.id) return;

        // 'channels' 컬렉션에서 문서ID를 통해 데이터를 참조
        const docRef = doc(db, 'channels', params.id);
        const collectionQuery = query(
            collection(db, `${ docRef.path }/messages`),
            orderBy('createAt', 'desc')
        );

        const unsubscribe = onSnapshot(collectionQuery, (snapshot) => {
            const list = snapshot.docs.map(
                doc => ({
                    id: doc.id,
                    ...doc.data(),
            }));
            setMessage(list);
        });

        return () => unsubscribe();
    }, [params.id]);    // params.id가 변경될 때마다 실행

    useLayoutEffect(() => {
        navigation.setOptions({ headerTitle: params.title || 'Channel'})
    }, [params.title]);

    return(
        <Container>
            <FlatList
                keyExtractor={ item => item['id']}
                data={ message }
                renderItem={({ item }) => (
                    <Text style={{ fontSize: 24 }}>{ item.text }</Text>
                )}
            />
            <Input
                value={ text }
                onChangeText={ text => setText(text)}
                onSubmitEditing={() => createMessage({
                    channelId: params.id,
                    text,
                })}
            />
        </Container>
    )
}

export default Channel;