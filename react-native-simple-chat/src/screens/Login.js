import styled from "styled-components";
import { Image, Input, Button } from "../components/index";
import { images } from "../utils/images";
import { useState, useRef, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { removeWhiteSpace, validateEmail } from "../utils/common";
import { login } from "../utils/firebase";
import { Alert } from "react-native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background };
`

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 90%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText };
`

const Login = ({ navigation }) => {

    // 이메일 상태 관리
    const [email, setEmail] = useState('');
    // 비밀번호 상태 관리
    const [password, setPassword] = useState('');
    // 에러 메시지 상태 관리
    const [errorMessage, setErrorMessage] = useState('');

    // 버튼의 활성화 상태를 관리하는 state
    const [disabled, setIsDisabled] = useState(true);
    const passwordRef = useRef();

    // email, password, errorMessage의 state 값이 변할 때마다
    // 조건에 맞게 disabled의 state에 값을 세팅한다
    useEffect(() => {
        // 로그인 버튼은 이메일과 비밀번호가 입력되어있어야 하고
        // 오류메시지가 없어야 활성화된다
        setIsDisabled(!(email && password && !errorMessage));
    }, [email, password, errorMessage]);

    const _handleEmailChange = (email) => {
        // 입력된 이메일에 공백이 있다면 먼저 지운다
        const changedEmail = removeWhiteSpace(email);

        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verifay your email'
        );
    }

    const _handlePasswordChange = (password) => {
        setPassword(removeWhiteSpace(password));
    }

    // 이메일과 비밀번호를 입력하고 로그인 버튼을 눌렀을 때 팝업창 띄우기
    const _handleLoginButtonPress = async () => {
        try {
            const user = await login({ email, password });
            Alert.alert('Login Success', user.email);
        } catch (error) {
            Alert.alert('Login Error', error.message);
        }
    }

    return(
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1, }}
            enableOnAndroid={ true }
            extraScrollHeight={ 80 }
        >
            <Container>
                <Image url={ images.logo } imageStyle={{ borderRadius: 40 }} />
                <Input
                    label="Email"
                    value={ email }
                    onChangeText={ _handleEmailChange }
                    onSubmitEditing={() => passwordRef.current.focus()}
                    placeholder={ "Email" }
                    returnKeyType="next"
                />
                <Input
                    label="Password"
                    value={ password }
                    onChangeText={ _handlePasswordChange }
                    ref={ passwordRef }
                    onSubmitEditing={() => {}}
                    placeholder={ "Password" }
                    returnKeyType="done"
                    isPassword
                />
                <ErrorText>{ errorMessage }</ErrorText>
                <Button title="Login" onPress={ _handleLoginButtonPress } disabled={ disabled } />
                <Button
                    title="Sign Up with Email"
                    onPress={() => navigation.navigate('Signup')}
                    isFilled={ false }
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Login;