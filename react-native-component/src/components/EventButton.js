import { Pressable, Text } from "react-native";

const EventButton = () => {
    const _onPressIn = () => console.log('PressIn !!!\n');
    const _onPressOut = () => console.log('PressOut !!!\n');
    const _onPress = () => console.log('Press !!!\n');
    const _onLongPress = () => console.log('LongPress !!!\n');

    return(
        <Pressable style={{ 
            backgroundColor: '#f1c40f', 
            padding: 16, 
            margin: 10, 
            borderRadius: 8, }} 
            onPressIn={ _onPressIn } 
            onLongPress={ _onLongPress } 
            onPressOut={ _onPressOut } 
            onPress={ _onPress } 
            delayLongPress={ 3000 }>
            <Text>Press</Text>
        </Pressable>
    )

    // 버튼을 클릭하면 onPressIn -> onPress -> onPressOut
    // 버튼을 꾹 누르고 있으면 onPressIn -> onLongPress -> onPressOut
    // 만약 onLongPress가 호출되는 시간을 조절하고 싶다면 delayLongPress 속성을 주면 된다
}

export default EventButton;