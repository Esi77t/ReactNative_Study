import { useEffect, useState } from "react";
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const SignupScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        const isValidEmail = validateEmail(email);
        const isValidPassword = password.length >= 6;
        const isValidName = name.trim() !== '';
        setIsCorrect(isValidEmail && isValidPassword && isValidName);
    }, [email, password, name]);

    const handleSignup = () => {
        if(isCorrect) {
            Alert.alert("**회원가입 완료**");
        }
    }

    return(
        <SafeAreaView style={ styles.safeArea }>
            <View style={ styles.container }>
                <Text style={ styles.signupText }>회원가입</Text>
                <TextInput
                    style={ styles.input }
                    placeholder="이메일"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={ email }
                    onChangeText={ setEmail }
                />
                <TextInput
                    style={ styles.input }
                    placeholder="비밀번호 (6자 이상)"
                    secureTextEntry
                    value={ password }
                    onChangeText={ setPassword }
                />
                <TextInput
                    style={ styles.input }
                    placeholder="이름"
                    value={ name }
                    onChangeText={ setName }
                />
                <Pressable
                    style={({ pressed }) => 
                        [styles.button, pressed && styles.buttonActive, !isCorrect && styles.buttonDisable]
                    }
                    disabled={ !isCorrect }
                    hitSlop={{ top: 30, bottom: 30, left: 50, right: 50 }}
                    onPress={ handleSignup }>
                    <Text style={ styles.buttonIcon }>가입하기</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    signupText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    input: {
        width:'85%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        marginBottom: 10,
    },

    button: {
        width: '85%',
        height: 50,
        borderRadius: 6,
        marginTop: 10,
        backgroundColor: '#97abc2',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonDisable: {
        backgroundColor: '#d3d3d3'
    },

    buttonActive: {
        backgroundColor: '#697787'
    },

    buttonIcon: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default SignupScreen;