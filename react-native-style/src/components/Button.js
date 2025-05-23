import styled from 'styled-components';
import { Pressable, Text, } from 'react-native';


// 백틱(``)안에서 props에 접근할 수 있다는 장점을 이용해
// props의 값에 따라 스타일을 변경할 수 있다
const ButtonContainer = styled.Pressable`
    background-color: ${ props => props.title === 'Hanbit' ? props.theme.blue : props.theme.purple };
    padding: 14px 24px;
    border-radius: 8px;
    align-items: center;
    margin: 10px;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

const MyButton = (props) => {
    return(
        <ButtonContainer title={ props.title }>
            <Title>{ props.title }</Title>
        </ButtonContainer>
    )
}

export default MyButton;