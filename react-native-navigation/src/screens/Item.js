import { useLayoutEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`

// List에서 누른 하나의 item의 정보를 출력
// 전달된 내용은 컴포넌트의 props로 전달되는 route 객체의 params에 들어있다
// const route = { params: {id: item_id, name: item.name } }
const Item = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTintColor: '#fff',
            headerLeft: ({ onPress, tintColor }) => {
                return(
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={ 30 }
                        style={{ marginLeft: 11 }}
                        color={ tintColor }
                        onPress={ onPress }
                    />
                )
            },
            headerRight: ({ tintColor }) => {
                return(
                    <MaterialCommunityIcons
                        name="home-variant"
                        size={ 30 }
                        style={{ marginRight: 11 }}
                        color={ tintColor }
                        onPress={ () => navigation.popToTop() }
            />
            )}
    })})
    return(
        <Container>
            <StyledText>Item</StyledText>
            <StyledText>ID : { route.params.id }</StyledText>
            <StyledText>NAME : { route.params.name }</StyledText>
        </Container>
    )
}

export default Item;