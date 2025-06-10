import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const TextHead = styled.Text`
    fontWeight: bold;
    fontSize: 24px;
    margin-bottom: 20px;
`

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _handleLoginButtonPress = () => {
        console.log('로그인 버튼 클릭');
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <TextHead>로그인</TextHead>
            <CustomInput placeholder="이메일" value={ email } onChangeText={ setEmail } secureTextEntry={ false } />
            <CustomInput placeholder="비밀번호" value={ password } onChangeText={ setPassword } secureTextEntry={ true } />
            <CustomButton title="로그인" onPress={ _handleLoginButtonPress } />
            <CustomButton title="회원가입" onPress={() => navigation.navigate('Signup')} backgroundColor="#3cb371" />
        </View>
    )
}

export default LoginScreen;