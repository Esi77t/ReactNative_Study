// UserProvider컴포넌트의 value로 전달되는 함수를 이용해 입력되는 값으로 Context의 값을 변경해보자
import { useContext, useState } from "react"
import UserContext, { UserConsumer } from "../contexts/User";
import styled from "styled-components";

const StyledInput = styled.TextInput`
    border: 1px solid #606060;
    width: 250px;
    padding: 10px 15px;
    margin: 10px;
    font-size: 24px;
`

const Input = () => {
    const [name, setName] = useState('');
    const { dispatch } = useContext(UserContext);
    return(
        <StyledInput
            value={ name }
            onChangeText={ text => setName(text) }
            onSubmitEditing={ () => {
                dispatch(name);
                setName('');
            }}
            placeholder="Enter a Name"
            autoCapitalize="none"
            autoCorrect={ false }
            returnKeyType="done"
        />
    )
}

export default Input;