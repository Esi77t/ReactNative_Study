import { View } from "react-native"
import styled from "styled-components"
import Button from "./Button"
import { useState } from "react"

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`

const Counter = () => {

    const [count, setCount] = useState(0);

    return(
        <View>
            <StyledText>
                Counter : { count }
            </StyledText>
            <Button title="+" onPress={ () => {
                setCount(count + 1)
                setCount(count + 1)
            }} />
        </View>
    )
}

export default Counter;