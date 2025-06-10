import styled from "styled-components";
import { Image, Input, Button } from '../components';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhiteSpace } from '../utils/common'
import { useRef, useState, useEffect, useContext } from "react";
import { images } from "../utils/images";
import { signup } from "../utils/firebase";
import { Alert } from "react-native";
import { ProgressContext, UserContext } from "../contexts";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background };
    padding: 20px 10px;
`

const ErrorText = styled.Text`
    align-items: flex-start;
    width: 90%;
    height: 20px;
    margin-bottom: 10px;
    line-height: 20px;
    color: ${({ theme }) => theme.errorText }
`

const Signup = () => {

    const { dispatch } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    // 프로필 사진 이미지 URL
    const [photoURL, setPhotoURL] = useState(images.photo);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { spinner } = useContext(ProgressContext);

    useEffect(() => {
        let _errorMessage = "";

        if(!name) {
            _errorMessage = "Please Enter your NAME";
        } else if(!validateEmail(email)) {
            _errorMessage = "Please Verify your EMAIL";
        } else if(password.length < 6) {
            _errorMessage = "The PASSWORD must contain 6 characters at least";
        } else if(password != passwordConfirm) {
            _errorMessage = "PASSWORDS need to match";
        } else {
            _errorMessage = "";
        }

        setErrorMessage(_errorMessage);
    }, [name, email, password, passwordConfirm]);

    useEffect(() => {
        setIsDisabled(!(name && email && password && passwordConfirm && !errorMessage))
    }, [name, email, password, passwordConfirm, errorMessage]);

    const _handleSignupButtonPress = async () => {
        try {
            spinner.start();
            const user = await signup({ email, password, name, photoURL });
            dispatch(user);
            console.log(user);
            Alert.alert('Sign Up Success', user.email);
        } catch (error) {
            Alert.alert('Sign Up Error', error.message);
        } finally {
            spinner.stop();
        }
    }

    return(
        <KeyboardAwareScrollView
            enableOnAndroid={ true }
            extraScrollHeight={ 120 }
        >
            <Container>
                <Image 
                    rounded
                    url={ photoURL }
                    showButton
                    onChangeImage={ url => setPhotoURL(url)}
                />
                <Input
                    label="name"
                    value={ name }
                    onChangeText={ text => setName(text)}
                    onSubmitEditing={() => {
                        setName(name.trim());+
                        emailRef.current.focus();
                    }}
                    onBlur={() => setName(name.trim())}
                    placeholder="Name"
                    returnKeyType="next"
                />
                <Input
                    ref={ emailRef }
                    label="email"
                    value={ email }
                    onChangeText={ text => setEmail(removeWhiteSpace(text))}
                    onSubmitEditing={() => {
                        passwordRef.current.focus();
                    }}
                    placeholder="Email"
                    returnKeyType="next"
                />
                <Input
                    ref={ passwordRef }
                    label="password"
                    value={ password }
                    onChangeText={ text => setPassword(removeWhiteSpace(text))}
                    onSubmitEditing={() => passwordConfirmRef.current.focus()}
                    placeholder="Password"
                    returnKeyType="next"
                    isPassword
                />
                <Input
                    ref={ passwordConfirmRef }
                    label="password confirm"
                    value={ passwordConfirm }
                    onChangeText={ text => setPasswordConfirm(text)}
                    onSubmitEditing={ _handleSignupButtonPress }
                    placeholder="Password Confirm"
                    returnKeyType="done"
                    isPassword
                />
                {/* 에러 메시지 출력 */}
                <ErrorText>{ errorMessage }</ErrorText>
                {/* 회원가입 버튼 */}
                <Button
                    title="Sign Up"
                    onPress={ _handleSignupButtonPress }
                    disabled={ isDisabled }
                />
            </Container>
        </KeyboardAwareScrollView>
    )
}

export default Signup;