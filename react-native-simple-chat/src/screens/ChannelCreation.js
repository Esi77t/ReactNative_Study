// 채널 화면으로 이동할 수 있는 버튼을 가진 간단한 채널 생성화면
import styled from "styled-components";
import { Alert, Text } from "react-native";
import { Button, Input } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState, useRef, useEffect, useContext } from "react";
import { ProgressContext } from "../contexts";
import { createChannel } from "../utils/firebase";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background };
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`

// 에러 메시지 표시할 텍스트
const ErrorMessage = styled.Text`
    align-items: flex-start;
    width: 100%;
    height: 20px;
    margin-bottom: 30px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText };
    padding: 0 20px;
`

const ChannelCreation = ({ navigation }) => {

    const { spinner } = useContext(ProgressContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const descriptionRef = useRef();

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(!(title && !errorMessage));
    }, [title, description, errorMessage]);

    const _handleTitleChange = (title) => {
        setTitle(title);
        setErrorMessage(title.trim() ? '' : 'Please enter the TITLE!');
    }

    // 제목과 설명(옵션)을 입력하고 생성 버튼을 눌렀을 때 firestore에 채널을 생성하기
    const _handleCreateButtonPress = async () => {
        try {
            spinner.start();
            const id = await createChannel({ title, description });

            // 생성된 채널 화면으로 이동하며, id와 title 정보를 함께 전달
            // replace를 사용해 현재 스택을 교체
            navigation.replace('Channel', { id, title });
        } catch (error) {
            Alert.alert('Creation Error', error.message);
        } finally {
            spinner.stop();
        }
    }

    return(
        <Container>
            {/* 채팅방 제목을 작성할 Input */}
            <Input
                label="title"
                placeholder="Title"
                value={ title }
                onChangeText={ _handleTitleChange }
                returnKeyType="next"
                maxLength={ 20 }
                onSubmitEditing={() => {
                    setTitle(title.trim());
                    descriptionRef.current.focus();
                }}
                onBlur={() => setTitle(title.trim())}
            />
            {/* 채팅방 설명을 작성할 Input */}
            <Input
                label="description"
                placeholder="Description"
                value={ description }
                onChangeText={(text) => setDescription(text)}
                returnKeyType="done"
                ref={ descriptionRef }
                onBlur={() => setDescription(description.trim())}
                onSubmitEditing={() => {
                    setDescription(description.trim());
                    _handleCreateButtonPress();
                }}
                maxLength={ 40 }
            />
            {/* 에러메시지 표시 영역(제목이 입력되지 않으면 Please enter the TITLE!) */}
            <ErrorMessage>{ errorMessage }</ErrorMessage>
            {/* 채널 생성버튼 (비활성화 여부는 disabled state로 제어)
            버튼을 눌렀을 때 콘솔에 제목과 설명을 띄울 것 */}
            <Button
                title="Create"
                onPress={ _handleCreateButtonPress }
                disabled={ disabled }
            />
        </Container>
    )
}

export default ChannelCreation;