import styled from "styled-components";
import { useWindowDimensions } from "react-native";

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main,
}))`
    width: ${ ({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${ ({ theme }) => theme.itemBackground };
    font-size: 25px;
    color: ${ ({ theme }) => theme.text };
`

// Dimension.get('window')
// 앱이 실행될 때 화면 크기를 반환
// 이후 회전하거나 화면 크기가 바뀌어도 자동으로 갱신되지 않는다

// useWindowDimensions()
// 화면이 회전하거나 리사이즈 될 때 자동으로 다시 계산한다

// App 컴포넌트에서 Input컴포넌트에 placeholder를 전달하도록 작성
// placeholder의 색은 타이틀과 같은 색으로 설정
// 너무 긴 항목을 입력하지 못하도록 50자로 제한한다
const Input = ({ placeholder, value, onChangeText, onSubmitEditing, onBlur }) => {
    // 화면에 너비 구하기
    // const width = Dimensions.get('window').width;
    const { width } = useWindowDimensions().width;
    return(
        // TextInput 컴포넌트는 기본 값으로 첫 글자가 대문자로 나타나고 오타 입력 시 자동으로 수정하는 기능이 켜져있다
        <StyledInput 
            width={ width } 
            placeholder={ placeholder } 
            maxLength={ 50 } 
            autoCapitalize="none" 
            autoCorrect={ false } 
            returnKeyType="done" 
            keyboardAppearance="dark" 
            value={ value }
            onChangeText={ onChangeText }
            onSubmitEditing={ onSubmitEditing }
            onBlur={ onBlur }
        />
    )
}

export default Input;