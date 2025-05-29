import { useReducer } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// 로그인 폼을 만들 때 다음과 같은 상태가 필요하다
// email(문자열), password(문자열)
// 틀렸을 때 띄울 errorMessage(문자열)
// isSubmitting(논리형), isLoggedIn(논리형)
// 상태가 많아지게 되면 관리가 복잡해지고, 로직이 흩어지게 된다

const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    isLoggedIn: false,
    errorMessage: '',
}

const loginReducer = (state, action) => {
    switch(action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'LOGIN_START':
            return { ...state, isSubmitting: true, errorMessage: '' };
        case 'LOGIN_SUCCESS':
            return { ...state, isLoggedIn: true, isSubmitting: false };
        case 'LOGIN_FAIL':
            return { ...state, isSubmitting: false, errorMessage: action.payload };
        case 'LOGOUT':
            return { ...state, email: '', isLoggedIn: false, errorMessage: '' };
        default:
            return state;
    }
}

const LoginForm = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const handleCheck = () => {
        dispatch({ type: 'LOGIN_START' });

        console.log('이메일 : ', state.email);
        console.log('패스워드 : ', state.password);

        setTimeout(() => {
            if(state.email === 'test@example.com' && state.password === '1234') {
                dispatch({ type: 'LOGIN_SUCCESS' });
            } else {
                dispatch({ type: 'LOGIN_FAIL', payload: '이메일 또는 비밀번호가 잘못되었습니다.' });
            }
        }, 1000);
        
    }

    return(
        <View style={ styles.container }>
            {/* 아이디 : test@example.com, 비밀번호 : '1234'
            isLoggedIn이 true면 로그인 성공! 문자열 출력하기
            false면 이메일 입력란, 비밀번호 입력란, 에러 메시지, 로그인 버튼 넣기 */}
            { state.isLoggedIn ? (
                <>
                    <Text style={ styles.successText }>로그인 성공!</Text>
                    <Button title="로그아웃" onPress={ () => dispatch({ type: 'LOGOUT' }) } />
                </>
            ) : (
                <>
                    <TextInput 
                        style={ styles.input } 
                        value={ state.email } 
                        placeholder="이메일" 
                        onChangeText={ (text) => dispatch({ type: 'SET_EMAIL', payload: text }) }
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={ styles.input }
                        value={ state.password } 
                        placeholder="비밀번호" 
                        onChangeText={ (text) => dispatch({ type: 'SET_PASSWORD', payload: text }) }
                        secureTextEntry
                    />
                    { state.errorMessage ? (
                        <Text style={ styles.errorText }>{ state.errorMessage }</Text>
                    ) : null }
                    <Button 
                        title={ state.isSubmitting ? '로그인 중...' : '로그인' } 
                        onPress={ handleCheck } 
                        disabled={ state.isSubmitting }
                    />
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 100,
    },

    input: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
    },

    errorText: {
        color: 'red',
        marginBottom: 10,
    },

    successText: {
        fontSize: 18,
        color: 'green',
    }
})

export default LoginForm;