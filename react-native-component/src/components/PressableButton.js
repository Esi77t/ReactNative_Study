import { View, Text, Pressable } from "react-native";

const P_Button = (props) => {
    return(
        <Pressable
            style={{ padding: 10, backgroundColor: '#1abc9c' }}
            onPressIn={ () => console.log('Press IN') }
            onPressOut={ () => console.log('Press Out') }
            onPress={ () => console.log('Press') }
            onLongPress={ () => console.log('Long Press') }
            delayLongPress={ 3000 }
            pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
            hitSlop={ 50 }
        >
            <Text style={{ padding: 10, fontSize: 30 }}>{ props.title }</Text>
        </Pressable>
    )
}

export default P_Button;