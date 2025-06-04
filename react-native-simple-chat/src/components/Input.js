import { useState, forwardRef } from "react";
import styled from "styled-components";

// 기본적으로 ref는 직접 DOM요소에만 사용할 수 있다
// 컴포넌트로 한 번 감싸버리면 ref가 전달이 안된다

const Container = styled.View`
    flex-direction: column;
    width: 90%;
    margin: 4px 0;
`

const Label = styled.Text`
    font-size : 14px;
    font-weight : 600;
    margin-bottom : 6px;
    color : ${({theme,isFocused}) => (isFocused ? theme.text : theme.label)};
`

const StyledTextInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.inputPlaceholder,
}))`
    background-color: ${({ theme }) => theme.background };
    color: ${({ theme }) => theme.text };
    padding: 20px 10px;
    font-size: 16px;
    border: 1px solid
        ${({ theme, isFocused }) => (isFocused ? theme.txt : theme.inputPlaceholder)};
    border-radius: 4px;
`

const Input = forwardRef(
    (
        {
            label,
            value,
            onChangeText,
            onSubmitEditing,
            onBlur = () => {},  // onBlur를 전달하지 않았을 때 기본 값 설정
            placeholder,
            isPassword,
            returnKeyType,
            maxLength 
        },
        ref
    ) => {
    const [isFocused, setIsFocused] = useState(false);

    return(
        <Container>
            <Label isFocused={ isFocused }>{ label }</Label>
            <StyledTextInput
                ref={ ref }
                isFocused={ isFocused }
                value={ value }     // input에 적히는 값
                onChangeText={ onChangeText }   // 사용자가 텍스트를 입력할 때마다 호출되는 함수
                onSubmitEditing={ onSubmitEditing }     // 키보드에서 '완료', 'Enter'를 눌렀을 때 호출되는 함수
                onFocus={() => setIsFocused(true)}  // TextInput에 포커스가 맞춰질 때 호출되는 함수
                onBlur={() => {     // TextInput의 포커스가 해제될 때 호출되는 함수
                    setIsFocused(false);
                    onBlur();
                }}
                placeholder={ placeholder } // 아무것도 입력하지 않았을 때 힌트 텍스트
                secureTextEntry={ isPassword }  // true로 설정하면 글자가 ooo으로 나온다
                returnKeyType={ returnKeyType } // 키보드에서 return의 모양을 결정
                maxLength={ maxLength }     // 사용자가 입력할 수 있는 최대 글자 수
                autoCapitalize="none"   // 자동 대문자 변환 끔
                autoCorrect={ false }   // 자동 맞춤법 수정기능 끔
                textContentType="none"  // ios 전용속성. 입력 데이터에 자동완성, 자동 채움 같은 제안을 컨트롤 할 수 있다
                underlineColorAndroid="transparent" // android 전용 옵션, 기본적으로 TextInput에 밑줄이 생기는데, 이걸 투명하게 해주는 옵션
            />
        </Container>
    )
});

export default Input;