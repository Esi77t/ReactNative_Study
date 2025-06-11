import styled from "styled-components"

const Container = styled.Pressable`
    position: absolute;
    right: 20px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.buttonBackground };
    align-items: center;
    justify-contet: center;
    border-radius: 30px;
    width: 20%;
    padding: 10px;
`;

const Title = styled.Text`
    color: ${({ theme }) => theme.buttonTitle };
    font-size: 24px;
`;

const FloatingButton = ({ onPress }) => {
    return(
        <Container onPress={ onPress } >
            <Title>+</Title>
        </Container>
    );
}

export default FloatingButton;