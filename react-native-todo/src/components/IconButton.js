import { Pressable } from "react-native";
import styled from "styled-components";

const Icon = styled.Image`
    tint-color: ${ ({ theme }) => theme.txt };
    width: 30px;
    height: 30px;
    margin: 10px;
`

const IconButton = ({ type, onPressOut, id, completed }) => {

    const _onPressOut = () => {
        onPressOut(id);
    }

    return(
        <Pressable onPressOut={ _onPressOut }>
            <Icon source={ type } completed={ completed } />
        </Pressable>
    )
}

export default IconButton;