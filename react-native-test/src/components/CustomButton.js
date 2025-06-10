import styled from "styled-components";

const Button = styled.Pressable`
    width: 80%;
    padding: 14px;
    background-color: ${ props => props.backgroundColor || '#3498db' };
    margin: 10px 0;
    border-radius: 8px;
    align-items: center;
`

const ButtonText = styled.Text`
    color: white;
    fontSize: 16px;
    fontWeight: bold;
`

const CustomButton = ({ title, onPress, backgroundColor }) => {
    return(
        <Button onPress={ onPress } backgroundColor={ backgroundColor }>
            <ButtonText>{ title }</ButtonText>
        </Button>
    )
}

export default CustomButton;