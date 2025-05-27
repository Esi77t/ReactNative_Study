import { useMemo, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyleText = styled.Text`
    font-size: 24px;
`
const list = [`JavaScript`, 'Expo', 'Expo', 'React Native'];

const getLength = text => {
    console.log(`Target Text : ${text}`)
    return text.length;
}

let index = 0;
const Length = () => {

    const [text, setText] = useState(list[0]);

    const _onPress = () => {
        ++index;
        if(index < list.length) {
            setText(list[index]);
        }
    };

    // [text] -> 배열에 들어있는 문자열이 바뀌면 getLength 실행
    const length = useMemo(() => getLength(text), [text]);

    return(
        // 문자열
        // 해당 문자열의 길이
        // 버튼(버튼을 누를 때마다 배열을 순환하면서 문자열의 길이를 구하는 기능)
        <>
            <StyleText>Text : { text }</StyleText>
            <StyleText>Length : { length }</StyleText>
            <Button title="Get Length" onPress={ _onPress } />
        </>
    )
}

export default Length;