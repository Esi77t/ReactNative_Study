import { useState } from "react";
import { Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import styled from "styled-components";

const TextHead = styled.Text`
    fontWeight: bold;
    fontSize: 24px;
    margin-bottom: 20px;
`

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _handleSignupButtonPress = () => {
        console.log('회원가입 버튼 클릭');
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <TextHead>회원가입</TextHead>
            <CustomInput
                placeholder="이름"
                value={ name }
                onChangeText={ text => setName(text) }
                secureTextEntry={ false }
            />
            <CustomInput
                placeholder="이메일"
                value={ email }
                onChangeText={ text => setEmail(text) }
                secureTextEntry={ false }
            />
            <CustomInput
                placeholder="비밀번호"
                value={ password }
                onChangeText={ text => setPassword(text) }
                secureTextEntry={ true }
            />
            <CustomButton
                title="회원가입"
                onPress={ _handleSignupButtonPress }
            />
            <CustomButton
                title="로그인"
                onPress={() => navigation.navigate('Login')}
                backgroundColor="#ff8c00"
            />
        </View>
    )
}

export default SignupScreen;