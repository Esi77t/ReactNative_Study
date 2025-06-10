// placeholder, value, onChangeText를 props로 받아 TextInput을 렌더링
// styled-components로 스타일 작성
// secureTextEntry props를 통해 비밀번호 입력 가능
// 다음의 스타일을 사용하세요
import styled from "styled-components";

const Input = styled.TextInput`
    width: 80%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 8px;
`

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
    return(
        <Input
            placeholder={ placeholder }
            value={ value }
            onChangeText={ onChangeText }
            secureTextEntry={ secureTextEntry }
        />
    )
}

export default CustomInput;