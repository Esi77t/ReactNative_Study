import styled from "styled-components";
import IconButton from "./IconButton";
import { images } from "../image";
import { useState } from "react";
import Input from "./Input";

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${ ({ theme }) => theme.itemBackground };
    border-radius: 10px;
    padding: 5px;
    margin: 3px 0;
`;

const Content = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${ ({ theme, completed }) => (completed ? theme.done : theme.text) };
    text-decoration-line: ${ ({ completed }) => completed ? 'line-through' : 'none' };
`;

const Task = ({ item, deleteTask, toggleTask, editTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    const _handleEditButtonPress = () => {
        setIsEditing(true);
    }

    const _onSubmitEditing = () => {
        if(isEditing) {
            const editedTask = Object.assign({}, item, { text });
            setIsEditing(false);
            editTask(editedTask)
        }
    }

    const _onBlur = () => {
        if(isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    }

    return isEditing ? (
        <Input value={ text } onChangeText={ text => setText(text) } onSubmitEditing={ _onSubmitEditing } onBlur={ _onBlur } />) : (
        <Container>
            {/* 넘어온 item의 completed여부에 따라 체크된 체크박스 또는 체크가 안된 체크박스 보여주기 */}
            <IconButton type={ item.completed ? images.complete : images.uncomplete } id={ item.id } onPressOut={ toggleTask } completed={ item.completed } />
            <Content completed={ item.completed } >{ item.text }</Content>
            {/* 완료상태면 아이콘이 안보이게 수정하기 */}
            {/* 수정기능
            수정 버튼을 클릭하며 해당 항목이 Input 컴포넌트로 변경되면서 내용을 수정할 수 있도록 구현해보자 */}
            { item.completed || (<IconButton type={ images.edit } onPressOut={ _handleEditButtonPress } />) }
            <IconButton type={ images.delete } id={ item.id } onPressOut={ deleteTask } completed={ item.completed } />
        </Container>
    )
}

export default Task;